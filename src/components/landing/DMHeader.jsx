import React from 'react';
import { motion } from 'framer-motion';

export default function DMHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-center sm:justify-start">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/assets/diversminds-logo.png"
            alt="DiverseMinds Logo"
            className="h-14 sm:h-20 md:h-24 w-auto drop-shadow-2xl hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300"
          />
        </div>
      </div>
    </motion.header>
  );
}