import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function DMFinalCTA({ onFormClick }) {
  return (
    <section className="bg-gradient-to-br from-[#845cc5] via-[#0a77e2] to-[#37ae84] py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#7049b5]/35 via-transparent to-[#2b9a73]/25" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2 leading-tight">
            Ready to Support Your Child's Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#f0e9fa] mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            Take the first step today — wherever you are in the world, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              onClick={onFormClick}
              size="lg"
              className="bg-white text-[#7049b5] hover:bg-[#f6f2fb] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-100/0 via-purple-100/50 to-purple-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="truncate relative z-10">Get Started - Free Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0 relative z-10" />
            </Button>
            
            <Button
              onClick={() => window.open('https://wa.me/2348168349969', '_blank')}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-[#7049b5] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-500 w-full sm:w-auto shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="truncate">WhatsApp Us</span>
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm text-white/80"
          >
            +234 816 834 9969 • +234 812 009 4884 • diversemindsfoundation@gmail.com
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}