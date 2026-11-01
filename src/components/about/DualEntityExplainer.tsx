/**
 * @file DualEntityExplainer.tsx
 * @description Structural component explaining the relationship and synergy between
 * 3A Technology Commercial Solutions and 3A Academy.
 */

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const DualEntityExplainer: React.FC = () => {
  return (
    <section className="py-16 bg-brand-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Synergistic Ecosystem
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-1 mb-4">
              Two Pillars, One Unified Vision
            </h2>
            <p className="text-brand-dark-gray text-base leading-relaxed mb-4">
              3A Technology Solutions operates as an integrated technological institution. On one wing,
              we design and deliver enterprise software, cloud infrastructure, and cybersecurity architectures
              for multinational corporations and government agencies.
            </p>
            <p className="text-brand-dark-gray text-base leading-relaxed mb-6">
              On the other wing, the <strong>3A Academy</strong> operates as an elite finishing school and training
              ground, transferring practical production engineering principles directly to aspiring architects and
              industry teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" asChild>
                <Link href="/services">Commercial Services</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/academy">Academy Programmes</Link>
              </Button>
            </div>
          </div>

          <div className="bg-brand-navy p-8 rounded-xl text-brand-white border-l-4 border-brand-yellow">
            <h3 className="text-xl font-bold text-brand-yellow mb-3">
              The Engineering Virtuous Cycle
            </h3>
            <ul className="space-y-4 text-sm text-brand-white/80">
              <li className="flex items-start gap-2">
                <span className="text-brand-yellow font-bold">✓</span>
                <span>Production experience from client deployments informs our curriculum directly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-yellow font-bold">✓</span>
                <span>Top graduates of the 3A Academy join client projects under senior mentorship.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-yellow font-bold">✓</span>
                <span>Sovereign Nigerian tech independence reinforced through sustainable knowledge transfer.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
