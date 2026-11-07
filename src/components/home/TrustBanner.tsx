import React from 'react';

export function TrustBanner() {
  const stats = [
    { label: 'Technology Services', value: '6 Core Disciplines' },
    { label: 'Physical Offices', value: 'Ilorin HQ • Osogbo • Akure' },
    { label: 'Service Coverage', value: 'Across Nigeria & Africa' },
    { label: 'Corporate Registration', value: 'CAC BN 9931488' },
  ];

  return (
    <section className="border-y border-brand-border bg-brand-white py-10" aria-label="Trust and Capability Indicators">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left border-l-2 border-brand-yellow pl-4">
              <div className="text-lg font-extrabold text-brand-navy sm:text-xl">{stat.value}</div>
              <div className="text-xs font-medium text-gray-600 uppercase tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
