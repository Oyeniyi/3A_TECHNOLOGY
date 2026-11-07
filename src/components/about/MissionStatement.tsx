/**
 * @file MissionStatement.tsx
 * @description Structural hero and mission statement component for the About page.
 * Grounded in 3A_Technology_Solutions_Brand_Identity_Standards.pdf (v1.0) & CAC Certificate (BN 9931488).
 */

import React from 'react';
import { siteConfig } from '@/config/site';

export const MissionStatement: React.FC = () => {
  return (
    <section className="bg-brand-navy text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow mb-4">
            <span>{siteConfig.tagline}</span>
            <span aria-hidden="true">&bull;</span>
            <span>CAC Registered ({siteConfig.legal.rcNumber})</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {siteConfig.brand.essence}
          </h1>
          <p className="text-lg md:text-xl text-brand-white/90 leading-relaxed font-normal mb-4">
            {siteConfig.brand.principle}
          </p>
          <p className="text-sm md:text-base text-brand-white/80 leading-relaxed">
            Registered in Nigeria as <strong>{siteConfig.legal.registeredName}</strong> ({siteConfig.legal.rcNumber}, TIN: {siteConfig.legal.tin}). Headquartered in <strong>Ilorin, Kwara State</strong> ({siteConfig.legal.registeredAddress}), with branch offices in <strong>Osogbo, Osun State</strong> and <strong>Akure, Ondo State</strong>, we deliver technology solutions, software development, AI services, and practical AI education to clients across all states in Nigeria, the Federal Capital Territory, and across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};
