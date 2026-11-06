import React from 'react';

export function LearningPillars() {
  const pillars = [
    {
      title: 'Real Working Projects',
      description: 'You build and deploy complete web apps, data pipelines, and AI tools from week one.',
    },
    {
      title: 'Direct Code Reviews',
      description: 'Working software engineers review your code every week and help you fix real bugs.',
    },
    {
      title: 'A Portfolio You Can Show',
      description: 'You finish with a clean GitHub profile and live projects you can share with employers or clients.',
    },
  ];

  return (
    <section className="bg-brand-white py-16" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="pillars-heading" className="text-2xl font-bold text-brand-navy sm:text-3xl">
          How You Learn at 3A
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-brand-border bg-brand-gray p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-navy text-xs font-extrabold text-brand-yellow">
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
