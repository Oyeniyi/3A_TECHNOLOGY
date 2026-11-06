/**
 * @file CoreValuesGrid.tsx
 * @description Displays 3A Technology Solutions' 5 Official Brand Personality Pillars
 * from 3A_Technology_Solutions_Brand_Identity_Standards.pdf (Section 1: Brand Foundation).
 * Strictly enforces ARCH-05 contrast invariants (#0B2B6B navy badge with #F7C800 yellow text).
 */

import React from 'react';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/site';

export const CoreValuesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light-gray/40">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
            Brand Foundation &amp; Personality
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-1">
            Core Values &amp; Operating Standard
          </h2>
          <p className="mt-3 text-sm text-brand-dark-gray/80">
            Five practical principles guide how we build software, speak with clients, and teach our students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteConfig.brand.pillars.map((pillar, i) => (
            <Card key={pillar.title} hoverEffect className="bg-brand-white border border-brand-light-gray/80">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-navy text-brand-yellow font-extrabold text-sm mb-3">
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{pillar.title}</h3>
              <p className="text-sm text-brand-dark-gray/80 leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
