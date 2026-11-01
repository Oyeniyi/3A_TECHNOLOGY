/**
 * @file CoreValuesGrid.tsx
 * @description Structural component displaying 3A Technology's four core organizational values.
 */

import React from 'react';
import { Card } from '@/components/ui/Card';

const values = [
  {
    title: 'Architectural Rigour',
    description: 'We build systems designed to withstand high concurrency, enterprise audits, and sovereign regulatory standards.',
  },
  {
    title: 'Engineering Integrity',
    description: 'Clear commercial agreements, transparent scoping, and zero compromise on code quality, testing, or security.',
  },
  {
    title: 'Capacity Building',
    description: 'We do not just deploy systems; we develop local Nigerian and West African engineers into senior software practitioners.',
  },
  {
    title: 'Mission Alignment',
    description: 'Every line of code and training module aligns directly with real economic growth and operational resilience.',
  },
];

export const CoreValuesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light-gray/40">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
            Our Guiding Principles
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-1">
            Core Values & Operating Standard
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Card key={i} className="bg-brand-white border border-brand-light-gray/80">
              <span className="inline-block text-brand-yellow font-extrabold text-2xl mb-2">
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{v.title}</h3>
              <p className="text-sm text-brand-dark-gray/80">{v.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
