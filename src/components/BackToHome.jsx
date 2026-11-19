import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToHome() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </button>
  );
}
