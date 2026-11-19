import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Award } from 'lucide-react';

export default function DMValuesSection() {
  const values = [
    {
      icon: Heart,
      text: 'Compassionate, child-centered care in every service'
    },
    {
      icon: Globe,
      text: 'Global accessibility — we serve clients worldwide'
    },
    {
      icon: Users,
      text: 'Diverse, inclusive support for all abilities and backgrounds'
    },
    {
      icon: Award,
      text: 'Certified therapists and educators committed to excellence'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50/60 via-purple-50/50 to-blue-50/60 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/30 via-transparent to-orange-50/30" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Our Commitment to You
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/60"
        >
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center">At DiverseMinds, we believe:</p>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-purple-50/80 via-blue-50/70 to-orange-50/80 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg flex-shrink-0">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">{value.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Every child deserves the opportunity to thrive. We're here to make that possible — no matter where you are.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}