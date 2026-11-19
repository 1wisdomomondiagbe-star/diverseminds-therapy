import React from 'react';
import { motion } from 'framer-motion';

export default function DMEmpathySection() {
  const concerns = [
    'Struggling to find quality special education services in your area',
    'Overwhelmed by your child\'s developmental or behavioral challenges',
    'Unsure which therapy or support service your child needs most',
    'Looking for professional help that understands diverse needs',
    'Needing flexible options — online, at home, or both'
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50/50 via-purple-50/40 to-orange-50/50 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-blue-50/20" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 leading-tight">
            We Understand the Challenges You Face
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/60"
        >
          <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">If you're here, you may be:</p>
          
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {concerns.map((concern, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-2 sm:gap-3 text-gray-700"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg">{concern}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center space-y-2 sm:space-y-3"
          >
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">You're not alone.</p>
            <p className="text-lg sm:text-xl text-gray-600">We're here to help — wherever you are in the world.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}