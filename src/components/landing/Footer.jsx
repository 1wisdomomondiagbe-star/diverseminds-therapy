import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-slate-500 mb-4">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>
              Supporting children. Empowering families. Respecting individuality — at home and in clinic.
            </span>
          </p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Compassionate ABA Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}