import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function BlogCard({ post }) {
  return (
    <Link to={createPageUrl(`BlogPost?id=${post.id}`)} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {post.cover_image ? (
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-[#ede6f8] flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              {post.category || 'General'}
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
          )}
          <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
            {post.author && (
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" /> {post.author}
              </span>
            )}
            {post.published_date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {format(new Date(post.published_date), 'MMM d, yyyy')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
