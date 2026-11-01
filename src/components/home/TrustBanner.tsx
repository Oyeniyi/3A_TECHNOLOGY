import React from 'react';

export function TrustBanner() {
  const stats = [
    { label: 'Core Specializations', value: '5 Capabilities' },
    { label: 'Engineering Focus', value: 'Enterprise Software' },
    { label: 'AI & Data Science', value: 'Practical Automation' },
    { label: 'Educational Arm', value: '3A Techvolution' },
  ];

  return (
    <section className="border-y border-brand-border bg-brand-white py-10" aria-label="Trust and Capability Indicators">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left border-l-2 border-brand-yellow pl-4">
              <div className="text-lg font-extrabold text-brand-navy sm:text-xl">{stat.value}</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
