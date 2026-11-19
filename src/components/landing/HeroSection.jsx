import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ onCTAClick }) {
  return (
    <section className="relative bg-gradient-to-br from-teal-50/80 via-amber-50/60 to-rose-50/70 overflow-hidden">
      {/* Decorative background elements with enhanced depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-rose-200 to-peach-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-6 sm:mb-8 max-w-full mx-2"
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
              Compassionate ABA Therapy — At Home or In Our Clinic
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2"
          >
            Personalized ABA Therapy That Fits{' '}
            <span className="text-teal-600">Your Child</span> — At Home or In Our Clinic
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            We provide evidence-based Applied Behavior Analysis (ABA) therapy designed around your child's unique needs, 
            offered in the comfort of your home or in a structured clinic setting — always with care, patience, and respect.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 px-4"
          >
            <Button
              onClick={onCTAClick}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="text-center relative z-10">Check if ABA Therapy May Help My Child</span>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 px-4"
          >
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full" />
              Free
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full" />
              Takes 2–3 minutes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full" />
              No diagnosis required
            </span>
          </motion.div>

          {/* Visual elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto px-4"
          >
            {[
              { icon: Home, label: 'Home-Based' },
              { icon: Building2, label: 'Clinic-Based' },
              { icon: Users, label: 'Family-Centered' },
              { icon: Heart, label: 'Compassionate' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50"
              >
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                <span className="text-xs font-medium text-gray-700 text-center">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
