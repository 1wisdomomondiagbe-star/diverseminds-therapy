import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

export default function DMFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <Button
                onClick={() => window.open('https://wa.me/2348168349969?text=' + encodeURIComponent('Hello, I\'d like to speak with someone from DiverseMinds Therapy. Reason for reaching out: ____________________ Thank you.'), '_blank')}
                className="bg-gradient-to-r from-[#37ae84] to-[#2b9a73] hover:from-[#2b9a73] hover:to-[#237d5d] text-white shadow-2xl rounded-full px-6 py-6 sm:px-8 sm:py-7 flex items-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                <span className="font-semibold text-base sm:text-lg whitespace-nowrap">
                  WhatsApp Us
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </Button>
            ) : (
              <Button
                onClick={() => setIsExpanded(true)}
                className="bg-gradient-to-r from-[#37ae84] to-[#2b9a73] hover:from-[#2b9a73] hover:to-[#237d5d] text-white shadow-2xl rounded-full p-4 sm:p-5 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className="w-6 h-6 animate-pulse" />
              </Button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}