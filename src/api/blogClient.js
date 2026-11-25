async function requestPosts(query = '') {
  const response = await fetch(`/api/blog${query}`);
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || 'We could not load the blog right now.');
  }

  return Array.isArray(result.posts) ? result.posts : [];
}

export const blogClient = {
  async list() {
    return requestPosts();
  },

  async getById(id) {
    if (!id) return null;
    const posts = await requestPosts(`?id=${encodeURIComponent(id)}`);
    return posts[0] || null;
  },
};
