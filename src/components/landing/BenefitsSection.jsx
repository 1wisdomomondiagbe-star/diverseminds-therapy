import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Brain, Heart, Smile, BookOpen } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Verbal and non-verbal'
    },
    {
      icon: Users,
      title: 'Social interaction and play',
      description: 'Building meaningful connections'
    },
    {
      icon: Brain,
      title: 'Focus, attention, and learning readiness',
      description: 'Preparing for success'
    },
    {
      icon: Heart,
      title: 'Daily living skills',
      description: 'Toileting, dressing, eating'
    },
    {
      icon: Smile,
      title: 'Emotional regulation',
      description: 'Behavior support and coping'
    },
    {
      icon: BookOpen,
      title: 'School and routine readiness',
      description: 'Smooth transitions'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-cream-50/30 to-teal-50/20 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 leading-tight">
            How ABA Therapy Supports Children and Families
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            ABA therapy helps children build meaningful, everyday skills such as:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-50/80 via-white to-rose-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-teal-100/50 shadow-lg"
            >
              <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-amber-50/80 via-peach-50/60 to-rose-50/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-amber-100/50"
        >
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            Every therapy plan is personalized, realistic, and adjusted as your child grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}