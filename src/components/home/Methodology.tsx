import React from 'react';

export function Methodology() {
  const steps = [
    {
      step: '01',
      title: 'Problem Definition',
      description:
        'We isolate business friction, understand operational bottlenecks, and articulate concrete, measurable targets before writing code.',
    },
    {
      step: '02',
      title: 'Pragmatic Engineering',
      description:
        'We build maintainable software, clean architectures, and disciplined automation pipelines using modern, scalable technologies.',
    },
    {
      step: '03',
      title: 'Verified Impact',
      description:
        'We test rigorously against production metrics to ensure the solution drives productivity, visibility, and commercial return.',
    },
  ];

  return (
    <section className="bg-brand-gray py-20" aria-labelledby="methodology-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">Operating Standard</span>
          <h2 id="methodology-heading" className="mt-2 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
            How 3A Works
          </h2>
          <p className="mt-3 text-base text-gray-600">
            We do not build technology for technology&rsquo;s sake. Every line of code is anchored in real-world human needs and business outcomes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-lg border border-brand-border bg-brand-white p-8">
              <span className="text-3xl font-extrabold text-brand-yellow">{item.step}</span>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
