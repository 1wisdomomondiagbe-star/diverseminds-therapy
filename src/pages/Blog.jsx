import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import BlogCard from '../components/blog/BlogCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'ABA Therapy', 'Speech Therapy', 'Occupational Therapy', 'Parent Tips', 'Special Education', 'General'];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    base44.entities.BlogPost.filter({ published: true }, '-published_date').then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const filtered = posts.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title?.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/40 via-white to-blue-50/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">DiverseMinds Blog</h1>
        <p className="text-purple-100 text-lg max-w-xl mx-auto">
          Resources, insights, and guidance for families supporting children with special needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-64 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-lg">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
