import React from 'react';

export default function DMClosingMessageSection() {
  return (
    <section className="bg-gradient-to-r from-[#845cc5] via-[#0a77e2] to-[#37ae84] py-14 text-white sm:py-18 md:py-22" aria-labelledby="closing-message-heading">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="closing-message-heading" className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          Beyond Therapy. Towards Independence.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
          At DiverseMinds, our goal goes beyond providing therapy. We are committed to equipping every learner with the skills, confidence, and independence needed to participate meaningfully in everyday life.
        </p>
        <p className="mt-7 text-lg font-semibold sm:text-xl">Building Skills, Creating Independence.</p>
      </div>
    </section>
  );
}
