import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function TrustStrip() {
  const features = [
    'Individualized therapy plans',
    'Ethical, child-centered ABA',
    'Family involvement encouraged',
    'Flexible therapy settings'
  ];

  return (
    <section className="bg-gradient-to-r from-cream-50 via-white to-peach-50/30 border-y border-teal-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}