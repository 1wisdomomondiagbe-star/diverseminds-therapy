import React from 'react';
import { Brain, MessageCircle, Puzzle, Sparkles, BookOpen, Volume2 } from 'lucide-react';

const conditions = [
  { label: 'Autism Spectrum Disorder (ASD)', icon: Brain },
  { label: 'ADHD', icon: Sparkles },
  { label: 'ADD', icon: Puzzle },
  { label: 'Down Syndrome', icon: MessageCircle },
  { label: 'Dyslexia', icon: BookOpen },
  { label: 'Speech and Language Delays', icon: Volume2 }
];

export default function DMWhoWeSupportSection() {
  return (
    <section className="bg-white py-14 sm:py-18 md:py-22 lg:py-28" aria-labelledby="support-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="support-heading" className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            Specialised Support for Every Learner
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            We provide specialised, individualised support for children and young people with diverse neurodevelopmental conditions, including Autism Spectrum Disorder (ASD), ADHD, ADD, Down Syndrome, Dyslexia, and Speech and Language Delays.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <h3 className="mb-5 text-center text-xl font-semibold text-gray-900 sm:text-2xl">Conditions We Support</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-[#e5daf3]/70 bg-[#f6f2fb]/45 px-4 py-4 shadow-sm">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#845cc5] shadow-sm" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium leading-snug text-gray-800 sm:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
