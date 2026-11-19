import React from 'react';
import DMServiceForm from '@/components/landing/DMServiceForm';
import BackToHome from '@/components/BackToHome';

export default function GetSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f6f2fb]/45 to-[#f1f7fd]/55">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <BackToHome />
      </div>
      <DMServiceForm />
    </div>
  );
}
