import React from 'react';
import { Activity, Camera, Code2, Hand, MessageSquare, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Applied Behaviour Analysis (ABA) Therapy',
    description: 'Evidence-based behavioural intervention for skill development.',
    icon: Activity
  },
  {
    title: 'Speech and Language Therapy',
    description: 'Communication and language development support.',
    icon: MessageSquare
  },
  {
    title: 'Verbal Behaviour Therapy',
    icon: Sparkles
  },
  {
    title: 'Activities of Daily Living (ADL) Skills',
    description: 'Fine motor skills and daily living activities.',
    icon: Hand
  },
  {
    title: 'Vocational and Pre-Vocational Skills',
    icon: Palette,
    areas: [
      { label: 'Coding and Robotics', icon: Code2 },
      { label: 'Photography', icon: Camera },
      { label: 'Art', icon: Palette }
    ]
  }
];

export default function DMSpecialisedServicesSection() {
  return (
    <section id="specialised-services" className="bg-white py-14 sm:py-18 md:py-22 lg:py-28" aria-labelledby="specialised-services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="specialised-services-heading" className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">Our Specialised Services</h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            We offer specialised therapeutic, developmental and practical learning support designed to address individual needs and help every learner make meaningful progress.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, areas }) => (
            <article key={title} className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-shadow hover:shadow-xl sm:p-6">
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#f1f7fd] text-[#0a77e2]" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-gray-900 sm:text-lg">{title}</h3>
              </div>
              {description && <p className="text-sm leading-relaxed text-gray-600">{description}</p>}
              {areas && (
                <ul className="mt-2 space-y-2" aria-label="Vocational and pre-vocational areas">
                  {areas.map(({ label, icon: AreaIcon }) => (
                    <li key={label} className="flex items-center gap-2 text-sm text-gray-700">
                      <AreaIcon className="h-4 w-4 text-[#37ae84]" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
