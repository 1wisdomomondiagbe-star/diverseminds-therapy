import React from 'react';
import DMHeroSection from '../components/landing/DMHeroSection';
import DMServicesGrid from '../components/landing/DMServicesGrid';
import DMEmpathySection from '../components/landing/DMEmpathySection';
import DMDeliveryOptions from '../components/landing/DMDeliveryOptions';
import DMValuesSection from '../components/landing/DMValuesSection';
import DMServiceForm from '../components/landing/DMServiceForm';
import DMFAQSection from '../components/landing/DMFAQSection';
import DMFinalCTA from '../components/landing/DMFinalCTA';
import DMFloatingCTA from '../components/landing/DMFloatingCTA';

export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('service-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-blue-50/30">
      <DMHeroSection onCTAClick={scrollToForm} />
      <DMServicesGrid />
      <DMEmpathySection />
      <DMDeliveryOptions />
      <DMValuesSection />
      <DMServiceForm />
      <DMFAQSection />
      <DMFinalCTA onFormClick={scrollToForm} />
      <DMFloatingCTA />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-6 sm:py-8 md:py-10 lg:py-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium px-2 leading-relaxed">
            DIVERSEMINDS SPECIAL EDUCATION NEEDS & CONSULT LTD.
          </p>
          <div className="space-y-2">
            <p className="text-xs sm:text-sm md:text-base text-gray-400 px-2">
              RC. 7325824 • Location is not a barrier — we proudly serve clients worldwide 🌍
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 text-xs sm:text-sm md:text-base text-gray-400 px-2 flex-wrap">
              <a href="tel:+2348168349969" className="hover:text-purple-300 transition-colors">+234 816 834 9969</a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+2348120094884" className="hover:text-purple-300 transition-colors">+234 812 009 4884</a>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:diversemindsfoundation@gmail.com" className="hover:text-purple-300 transition-colors break-all sm:break-normal">diversemindsfoundation@gmail.com</a>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 px-2 leading-relaxed">
            © {new Date().getFullYear()} DiverseMinds. Empowering children with special needs — with compassion and expertise.
          </p>
        </div>
      </footer>
    </div>
  );
}