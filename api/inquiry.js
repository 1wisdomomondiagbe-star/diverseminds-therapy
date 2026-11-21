const productionOrigin = process.env.PUBLIC_SITE_URL || 'https://diverseminds-therapy.vercel.app';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', productionOrigin);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Vary', 'Origin');
}

function cleanString(value, max = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function cleanArray(value, max = 9) {
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string').map((item) => item.trim()).filter(Boolean).slice(0, max) : [];
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase server configuration is missing.');
    return res.status(500).json({ error: 'The form is temporarily unavailable. Please try again later.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const parentName = cleanString(body.parent_name, 120);
  const phone = cleanString(body.phone, 40);
  const email = cleanString(body.email, 254).toLowerCase();
  const consent = body.consent_to_contact === true;

  if (!parentName || !phone || !isValidEmail(email) || !consent) {
    return res.status(400).json({ error: 'Please complete your name, phone, email, and consent before sending.' });
  }

  const inquiry = {
    child_name: cleanString(body.client_name, 120) || null,
    age_range: cleanString(body.client_age, 30) || null,
    evaluation_status: cleanString(body.diagnosis_status, 40) || null,
    concern_duration: cleanString(body.observation_timeframe, 40) || null,
    challenges: cleanArray(body.current_challenges, 7),
    services: cleanArray(body.services_of_interest, 9),
    delivery: cleanString(body.delivery_preference, 40) || null,
    goal: cleanString(body.main_goal, 2000) || null,
    feeling: cleanString(body.parent_emotion, 40) || null,
    parent_name: parentName,
    phone,
    email,
    location: cleanString(body.location, 160) || null,
    consent_given: true,
  };

  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/inquiries`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(inquiry),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Supabase inquiry insert failed:', response.status, details.slice(0, 500));
      return res.status(502).json({ error: 'We could not save your inquiry. Please try again.' });
    }

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Inquiry endpoint failed:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(500).json({ error: 'We could not complete your request. Please try again.' });
  }
}
