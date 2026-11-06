import React from 'react';

export function Methodology() {
  const steps = [
    {
      step: '01',
      title: 'Understand the Problem',
      description:
        'We look at where your current process slows down, talk to the people who use it daily, and agree on clear goals before writing any code.',
    },
    {
      step: '02',
      title: 'Build Clean & Practical',
      description:
        'We write straightforward, well-tested code and set up reliable automations that your team can actually use and maintain.',
    },
    {
      step: '03',
      title: 'Measure the Result',
      description:
        'We test the finished system against real daily work to make sure it saves time, reduces errors, and helps your business grow.',
    },
  ];

  return (
    <section className="bg-brand-gray py-20" aria-labelledby="methodology-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">How We Work</span>
          <h2 id="methodology-heading" className="mt-2 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
            How 3A Works
          </h2>
          <p className="mt-3 text-base text-gray-600">
            We do not sell technology for technology&rsquo;s sake. We build tools that make daily work simpler, faster, and clearer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-lg border border-brand-border bg-brand-white p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-sm font-extrabold text-brand-yellow">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
