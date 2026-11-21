import React from 'react';
import { Check, Lightbulb, Sprout } from 'lucide-react';

const programmes = [
  {
    title: 'Early Intervention',
    age: 'Ages 2–5 Years',
    icon: Sprout,
    description: 'We provide early intervention services designed to build foundational communication, behavioural, cognitive, social, sensory, and developmental skills, helping every child reach their fullest potential.'
  },
  {
    title: 'Specialised Learning & Development',
    age: 'Ages 6–18 Years',
    icon: Lightbulb,
    description: 'Our programmes focus on developing independence, functional communication, academic readiness, social participation, and practical life skills.',
    points: [
      'Independence and functional communication.',
      'Academic readiness.',
      'Social participation.',
      'Practical life skills.'
    ]
  }
];

export default function DMProgrammesSection() {
  return (
    <section className="bg-gradient-to-b from-[#f6f2fb]/55 via-white to-[#f1f7fd]/45 py-14 sm:py-18 md:py-22 lg:py-28" aria-labelledby="programmes-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="programmes-heading" className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">Our Programmes</h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Every learner develops differently. Our programmes are designed around individual needs, developmental stages and learning goals, helping children build the skills they need for greater confidence and independence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {programmes.map(({ title, age, icon: Icon, description, points }) => (
            <article key={title} className="flex h-full flex-col rounded-3xl border border-white/80 bg-white/95 p-6 shadow-xl sm:p-8">
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ede6f8] text-[#845cc5] shadow-sm" aria-hidden="true">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">{title}</h3>
                  <p className="mt-2 inline-flex rounded-full bg-[#f6f2fb] px-3 py-1 text-sm font-semibold text-[#7049b5]">{age}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600">{description}</p>
              {points && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2" aria-label={`${title} supporting areas`}>
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#37ae84]" aria-hidden="true" />
                      <span>{point}</span>
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
