import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, RefreshCw, Check } from 'lucide-react';

export default function TherapyOptions() {
  const homeFeatures = [
    'Therapy in a familiar, comfortable environment',
    'Skills taught during real daily routines (play, meals, bedtime)',
    'Easy parent observation and involvement',
    'Less stress for children sensitive to new settings'
  ];

  const clinicFeatures = [
    'A structured, distraction-reduced environment',
    'Consistent routines and learning schedules',
    'Social interaction with peers',
    'Access to specialized materials and programs'
  ];

  return (
    <section className="bg-gradient-to-br from-teal-50/70 via-cream-50/50 to-rose-50/60 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-peach-50/30 via-transparent to-teal-50/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 leading-tight">
            Two Therapy Options — One Child-Centered Approach
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            We offer both home-based and clinic-based ABA therapy so families can choose what fits best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Home-Based Option */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-teal-100/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-[#d9f0e7] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Home-Based ABA Therapy</h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 font-medium">Best for families who want:</p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {homeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#eef8f4] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-inner">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">How it works:</p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                A therapist works one-on-one with your child in your home, using everyday activities to teach 
                communication, independence, and positive behaviors naturally.
              </p>
            </div>
          </motion.div>

          {/* Clinic-Based Option */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-rose-100/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-[#ede6f8] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Clinic-Based ABA Therapy</h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 font-medium">Best for children who benefit from:</p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {clinicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f6f2fb] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-inner">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">How it works:</p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Your child attends sessions at our clinic, where therapists use structured, evidence-based 
                techniques to build skills in a focused setting.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combination Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0a77e2] rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 text-white shadow-2xl border-2 border-white/20"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Combination Option</h3>
          </div>
          <p className="text-base sm:text-lg mb-2 sm:mb-3">
            Some children benefit from a combination of home-based and clinic-based therapy.
          </p>
          <p className="text-sm sm:text-base text-white/90">
            We help you decide — and adjust over time as your child's needs change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}