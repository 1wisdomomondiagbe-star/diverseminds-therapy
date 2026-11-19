import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles } from 'lucide-react';

export default function EthicsSection() {
  const beliefs = [
    {
      icon: Heart,
      text: 'Every child deserves dignity and kindness'
    },
    {
      icon: Shield,
      text: 'Therapy should never feel forced or overwhelming'
    },
    {
      icon: Sparkles,
      text: 'Progress should support independence and confidence'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-rose-50/60 via-peach-50/50 to-amber-50/60 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-teal-50/30 via-transparent to-rose-50/30" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Respectful Therapy. Always.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/60"
        >
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center">We believe:</p>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-rose-50/80 via-peach-50/70 to-pink-50/80 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-white to-rose-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg flex-shrink-0">
                  <belief.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">{belief.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Our approach is ethical, compassionate, and child-centered, whether therapy happens at home or in our clinic.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}