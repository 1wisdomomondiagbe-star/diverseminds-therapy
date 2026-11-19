import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Home, RefreshCw, Check, School } from 'lucide-react';

export default function DMDeliveryOptions() {
  const onlineFeatures = [
    'Access services from anywhere in the world',
    'Flexible scheduling across time zones',
    'Interactive virtual sessions with certified therapists',
    'Perfect for speech, ABA, parent training, and more'
  ];

  const homeBasedFeatures = [
    'Therapists come to your home',
    'Comfortable, familiar environment for your child',
    'Hands-on support for daily routines',
    'Ideal for OT, behavioral support, and personalized care'
  ];

  const schoolBasedFeatures = [
    'Shadow teaching support within the school environment',
    'Therapy sessions during specific school hours',
    'Help with classroom routines, learning tasks, and behavior regulation',
    'Consistent support to thrive in mainstream or special school settings'
  ];

  return (
    <section className="bg-gradient-to-br from-[#f6f2fb]/90 via-[#f1f7fd]/70 to-white py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 leading-tight">
            Flexible Service Delivery Options
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Choose online, home-based, school-based, or a combination — whatever works best for your family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Online Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#e5daf3]/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-gradient-to-br from-[#ede6f8] to-[#d9c9ef] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg">
                <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-[#845cc5]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Online Services</h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 font-medium">Perfect for families who need:</p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {onlineFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#845cc5] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-[#f6f2fb] to-[#f1f7fd] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-inner">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">How it works:</p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Connect with our certified therapists via secure video sessions. We provide the same quality care online as we do in person.
              </p>
            </div>
          </motion.div>

          {/* Home-Based Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#dcecfb]/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-gradient-to-br from-[#f1f7fd] to-[#dcecfb] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a77e2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Home-Based Services</h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 font-medium">Perfect for children who need:</p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {homeBasedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a77e2] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-[#eef8f4] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-inner">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">How it works:</p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Our therapists travel to your home to provide personalized, hands-on support in your child's natural environment.
              </p>
            </div>
          </motion.div>

          {/* School-Based Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#dcecfb]/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-gradient-to-br from-[#dcecfb] to-[#bdd9f5] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg">
                <School className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a77e2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">School-Based Services</h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 font-medium">Ideal for children who need:</p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {schoolBasedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a77e2] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-[#f1f7fd] to-[#f6f2fb] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-inner">
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">How it works:</p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Our therapists or shadow teachers work directly with your child in school for agreed hours, collaborating with teachers to provide structured, goal-focused support during the school day.
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
          className="bg-gradient-to-r from-[#845cc5] via-[#0a77e2] to-[#37ae84] rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 text-white shadow-2xl border-2 border-white/20"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Hybrid Approach</h3>
          </div>
          <p className="text-base sm:text-lg mb-2 sm:mb-3">
            Many families benefit from combining online, home-based, and school-based services.
          </p>
          <p className="text-sm sm:text-base text-white/90">
            We'll help you design a flexible plan that adapts to your child's progress, school needs, and your family's schedule.
          </p>
        </motion.div>
      </div>
    </section>
  );
}