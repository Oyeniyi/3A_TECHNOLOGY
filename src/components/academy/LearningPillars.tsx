import React from 'react';

export function LearningPillars() {
  const pillars = [
    {
      title: 'Production-Grade Projects',
      description: 'You build verified, deployed applications from day one—not toy scripts or tutorial clones.',
    },
    {
      title: 'Direct Industry Mentorship',
      description: 'Weekly code reviews and engineering guidance from practicing software architects.',
    },
    {
      title: 'Career & Portfolio Ready',
      description: 'Graduate with a verified GitHub portfolio demonstrating production competence to employers.',
    },
  ];

  return (
    <section className="bg-brand-white py-16" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="pillars-heading" className="text-2xl font-bold text-brand-navy sm:text-3xl">
          The 3A Learning Philosophy
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-brand-border bg-brand-gray p-6">
              <span className="text-xl font-extrabold text-brand-yellow">0{idx + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
