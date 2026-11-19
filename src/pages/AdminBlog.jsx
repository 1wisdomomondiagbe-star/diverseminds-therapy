import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Eye, EyeOff, X } from 'lucide-react';

const EMPTY_FORM = {
  title: '', slug: '', excerpt: '', content: '', author: '',
  category: 'General', cover_image: '', published: false, published_date: '', tags: []
};

const CATEGORIES = ['ABA Therapy', 'Speech Therapy', 'Occupational Therapy', 'Parent Tips', 'Special Education', 'General'];

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // null = list view, 'new' or post object
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const load = () => {
    base44.entities.BlogPost.list('-created_date').then((data) => {
      setPosts(data);
      setLoading(false);
    });
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(EMPTY_FORM); setEditing('new'); };
  const openEdit = (post) => { setForm({ ...EMPTY_FORM, ...post }); setEditing(post); };

  const handleSave = async () => {
    setSaving(true);
    if (editing === 'new') {
      await base44.entities.BlogPost.create(form);
    } else {
      await base44.entities.BlogPost.update(editing.id, form);
    }
    setSaving(false);
    setEditing(null);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this post?')) return;
    await base44.entities.BlogPost.delete(id);
    load();
  };

  const togglePublish = async (post) => {
    await base44.entities.BlogPost.update(post.id, { published: !post.published });
    load();
  };

  if (editing !== null) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{editing === 'new' ? 'New Post' : 'Edit Post'}</h1>
          <button onClick={() => setEditing(null)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 bg-white rounded-2xl shadow p-6">
          <div>
            <Label>Title *</Label>
            <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Post title" className="mt-1" />
          </div>

          <div>
            <Label>Excerpt (short summary)</Label>
            <Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Brief summary shown on the blog list..." className="mt-1" rows={2} />
          </div>

          <div>
            <Label>Content * (Markdown supported)</Label>
            <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Write your post content here. Markdown is supported." className="mt-1 font-mono text-sm" rows={12} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Author</Label>
              <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author name" className="mt-1" />
            </div>
            <div>
              <Label>Category</Label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#845cc5]"
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Cover Image URL</Label>
              <Input value={form.cover_image} onChange={(e) => setForm({ ...form, cover_image: e.target.value })} placeholder="https://..." className="mt-1" />
            </div>
            <div>
              <Label>Published Date</Label>
              <Input type="date" value={form.published_date} onChange={(e) => setForm({ ...form, published_date: e.target.value })} className="mt-1" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
              className="w-4 h-4 accent-[#845cc5]"
            />
            <Label htmlFor="published">Publish (visible on blog)</Label>
          </div>

          <div className="flex gap-3 pt-2">
            <Button onClick={handleSave} disabled={saving || !form.title || !form.content} className="bg-gradient-to-r from-[#845cc5] to-[#0a77e2]">
              {saving ? 'Saving...' : 'Save Post'}
            </Button>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Manager</h1>
          <p className="text-gray-500 text-sm mt-1">Create and manage blog posts</p>
        </div>
        <Button onClick={openNew} className="bg-gradient-to-r from-[#845cc5] to-[#0a77e2]">
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>

      {loading ? (
        <div className="space-y-3">{[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">📝</p>
          <p>No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4">
              {post.cover_image && (
                <img src={post.cover_image} alt={post.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900 truncate">{post.title}</h3>
                  <Badge className={post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}>
                    {post.published ? 'Published' : 'Draft'}
                  </Badge>
                  <Badge className="bg-[#ede6f8] text-[#7049b5]">{post.category}</Badge>
                </div>
                {post.excerpt && <p className="text-sm text-gray-400 truncate mt-0.5">{post.excerpt}</p>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => togglePublish(post)} className="p-2 hover:bg-gray-100 rounded-lg" title={post.published ? 'Unpublish' : 'Publish'}>
                  {post.published ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
                </button>
                <button onClick={() => openEdit(post)} className="p-2 hover:bg-[#f6f2fb] rounded-lg">
                  <Pencil className="w-4 h-4 text-[#845cc5]" />
                </button>
                <button onClick={() => handleDelete(post.id)} className="p-2 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
