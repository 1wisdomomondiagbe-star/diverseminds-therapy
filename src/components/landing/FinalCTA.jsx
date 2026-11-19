import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA({ onFormClick }) {
  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-rose-500 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-700/50 via-transparent to-rose-600/50" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2 leading-tight">
            Let's Find the Right Support for Your Child
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-teal-100 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            Start with the free readiness form, or book a consultation to talk through your child's needs.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              onClick={onFormClick}
              size="lg"
              className="bg-white text-teal-700 hover:bg-cream-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-100/0 via-teal-100/50 to-teal-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="truncate relative z-10">Check If ABA Therapy May Help</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0 relative z-10" />
            </Button>
            
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-teal-700 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-500 w-full sm:w-auto shadow-xl hover:shadow-2xl"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="truncate">Book a Free Consultation</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}