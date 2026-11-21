import React, { useState, useEffect } from 'react';
import { dataClient } from '@/api/dataClient';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      dataClient.entities.BlogPost.filter({ id }).then((data) => {
        setPost(data[0] || null);
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-3/4" />
        <div className="h-64 bg-gray-200 rounded mb-6" />
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => <div key={i} className="h-4 bg-gray-100 rounded" />)}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-32">
        <p className="text-5xl mb-4">🔍</p>
        <p className="text-gray-500 text-lg">Post not found.</p>
        <Link to={createPageUrl('Blog')} className="text-[#845cc5] hover:underline mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {post.cover_image && (
        <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to={createPageUrl('Blog')} className="inline-flex items-center gap-1 text-[#845cc5] hover:underline mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <Badge className="bg-[#ede6f8] text-[#7049b5] mb-4">{post.category || 'General'}</Badge>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
          {post.author && <span className="flex min-w-0 items-center gap-1 break-words"><User className="w-4 h-4 shrink-0" />{post.author}</span>}
          {post.published_date && (
            <span className="flex items-center gap-1 whitespace-nowrap">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.published_date), 'MMMM d, yyyy')}
            </span>
          )}
        </div>

        <div className="prose prose-purple max-w-none break-words text-gray-700 leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
