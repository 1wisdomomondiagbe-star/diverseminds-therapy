const STORAGE_KEYS = {
  blogPosts: 'diversminds_blog_posts',
  inquiries: 'diversminds_service_inquiries',
};

const seedPosts = [
  {
    id: 'welcome-to-diverseminds',
    title: 'Welcome to DiverseMinds',
    slug: 'welcome-to-diverseminds',
    excerpt: 'A compassionate starting point for families looking for practical support and understanding.',
    content: '## You do not have to navigate this alone\n\nDiverseMinds helps families understand their options, build confidence, and find support that fits everyday life. Our approach is collaborative, practical, and rooted in respect for every child’s strengths.',
    author: 'DiverseMinds Team', category: 'General', cover_image: '', published: true,
    published_date: '2026-01-18', tags: ['support', 'families'], created_date: '2026-01-18T12:00:00.000Z',
  },
  {
    id: 'understanding-aba-therapy',
    title: 'Understanding ABA Therapy',
    slug: 'understanding-aba-therapy',
    excerpt: 'What families can expect from an individualized, strengths-based ABA therapy plan.',
    content: '## Support built around real life\n\nABA therapy can help children practice communication, learning, and daily living skills in meaningful contexts. The best plans are individualized, collaborative, and measured by progress that matters to the child and family.',
    author: 'DiverseMinds Team', category: 'ABA Therapy', cover_image: '', published: true,
    published_date: '2026-01-20', tags: ['ABA Therapy', 'parent tips'], created_date: '2026-01-20T12:00:00.000Z',
  },
  {
    id: 'small-steps-big-progress',
    title: 'Small Steps, Big Progress',
    slug: 'small-steps-big-progress',
    excerpt: 'Why celebrating small, consistent wins can build confidence and momentum.',
    content: '## Progress is personal\n\nA new word, a calmer transition, or one more independent step can be meaningful progress. By noticing and celebrating these moments, families create a supportive environment where confidence can grow.',
    author: 'DiverseMinds Team', category: 'Parent Tips', cover_image: '', published: true,
    published_date: '2026-01-22', tags: ['parent tips', 'progress'], created_date: '2026-01-22T12:00:00.000Z',
  },
];

function read(key, fallback = []) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
}

function ensurePosts() {
  const current = read(STORAGE_KEYS.blogPosts, null);
  return current === null ? write(STORAGE_KEYS.blogPosts, seedPosts) : current;
}

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const BlogPost = {
  async list(order = '-created_date') {
    const posts = [...ensurePosts()];
    const field = order.replace(/^-/, '');
    return posts.sort((a, b) => String(b[field] || '').localeCompare(String(a[field] || '')));
  },
  async filter(filters = {}, order = '-published_date') {
    const posts = await this.list(order);
    return posts.filter((post) => Object.entries(filters).every(([key, value]) => post[key] === value));
  },
  async create(payload) {
    const post = { ...payload, id: payload.id || makeId(), created_date: new Date().toISOString() };
    write(STORAGE_KEYS.blogPosts, [post, ...ensurePosts()]);
    return post;
  },
  async update(id, payload) {
    const posts = ensurePosts().map((post) => post.id === id ? { ...post, ...payload, id } : post);
    write(STORAGE_KEYS.blogPosts, posts);
    return posts.find((post) => post.id === id);
  },
  async delete(id) {
    write(STORAGE_KEYS.blogPosts, ensurePosts().filter((post) => post.id !== id));
    return { id };
  },
};

const ServiceInquiry = {
  async create(payload) {
    const inquiry = { ...payload, id: makeId(), created_date: new Date().toISOString(), status: 'new' };
    write(STORAGE_KEYS.inquiries, [inquiry, ...read(STORAGE_KEYS.inquiries, [])]);
    return inquiry;
  },
};

export const dataClient = {
  entities: { BlogPost, ServiceInquiry },
};
