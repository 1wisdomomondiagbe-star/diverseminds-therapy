const productionOrigin = process.env.PUBLIC_SITE_URL || 'https://diverseminds-therapy.vercel.app';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', productionOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Vary', 'Origin');
}

function mapPost(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: post.content || '',
    cover_image: post.cover_image_url || '',
    published: post.status === 'published',
    published_date: post.published_at || post.created_at,
    created_date: post.created_at,
    updated_date: post.updated_at,
  };
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase blog configuration is missing.');
    return res.status(500).json({ error: 'The blog is temporarily unavailable. Please try again later.' });
  }

  const postId = typeof req.query?.id === 'string' ? req.query.id.trim() : '';
  const params = new URLSearchParams({
    select: 'id,title,slug,excerpt,content,cover_image_url,status,published_at,created_at,updated_at',
    status: 'eq.published',
    order: 'published_at.desc.nullslast,created_at.desc',
  });

  if (postId) {
    params.set('id', `eq.${postId}`);
    params.set('limit', '1');
  } else {
    params.set('limit', '50');
  }

  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/posts?${params.toString()}`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Supabase blog query failed:', response.status, details.slice(0, 500));
      return res.status(502).json({ error: 'We could not load the blog right now. Please try again later.' });
    }

    const posts = await response.json();
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ posts: Array.isArray(posts) ? posts.map(mapPost) : [] });
  } catch (error) {
    console.error('Blog endpoint failed:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(500).json({ error: 'We could not load the blog right now. Please try again later.' });
  }
}
