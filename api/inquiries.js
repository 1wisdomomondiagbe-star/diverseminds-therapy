export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const payload = req.body && typeof req.body === 'object' ? req.body : {};
  if (!payload.email || !payload.consent_to_contact) {
    return res.status(400).json({ error: 'Email and consent are required.' });
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (process.env.INQUIRY_WEBHOOK_TOKEN) {
        headers.Authorization = `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}`;
      }
      const upstream = await fetch(webhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({ ...payload, received_at: new Date().toISOString() }),
      });
      if (!upstream.ok) {
        return res.status(502).json({ error: 'The inquiry delivery service was unavailable.' });
      }
    } catch {
      return res.status(502).json({ error: 'The inquiry delivery service was unavailable.' });
    }
  }

  return res.status(200).json({ accepted: true, deliveryConfigured: Boolean(webhookUrl) });
}
