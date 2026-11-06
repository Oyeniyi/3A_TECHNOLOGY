/**
 * @file DualEntityExplainer.tsx
 * @description Explains how 3A Technology Solutions (commercial services) and
 * 3A Techvolution Academy work together, plus official CAC registration details.
 */

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export const DualEntityExplainer: React.FC = () => {
  return (
    <section className="py-16 bg-brand-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
              What We Do
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-1 mb-4">
              Two Wings, One Practical Goal
            </h2>
            <p className="text-brand-dark-gray text-base leading-relaxed mb-4">
              <strong>3A Technology Solutions</strong> runs two connected teams. Our commercial team builds websites, custom business software, AI automations, data analytics pipelines, and brand identity systems for businesses and institutions.
            </p>
            <p className="text-brand-dark-gray text-base leading-relaxed mb-6">
              Our education team runs <strong>3A Techvolution Academy</strong>, where students and career switchers learn software development, applied AI, and data science directly from the engineers building our commercial projects.
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

          <div className="space-y-6">
            <div className="bg-brand-navy p-8 rounded-xl text-brand-white border-l-4 border-brand-yellow shadow-sm">
              <h3 className="text-xl font-bold text-brand-yellow mb-3">
                Why This Matters for Clients &amp; Learners
              </h3>
              <ul className="space-y-3.5 text-sm text-brand-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>Our Academy lessons come straight from real systems we build and maintain for clients.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>We explain technology in plain language and focus on tools that save time and grow revenue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-yellow font-bold">✓</span>
                  <span>Every project and course follows our five standards: Smart, Simple, Professional, Human, and Future-Ready.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-brand-border bg-brand-gray/60 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                Official Corporate Registration (CAC Nigeria)
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-dark-gray">
                <div>
                  <dt className="font-semibold text-gray-500">Registered Business Name</dt>
                  <dd className="font-bold text-brand-navy mt-0.5">{siteConfig.legal.registeredName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">CAC Registration Number</dt>
                  <dd className="font-bold text-brand-navy mt-0.5">{siteConfig.legal.rcNumber}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Tax Identification Number (TIN)</dt>
                  <dd className="font-bold text-brand-navy mt-0.5">{siteConfig.legal.tin}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Principal Place of Business</dt>
                  <dd className="font-semibold text-brand-dark-gray mt-0.5">{siteConfig.legal.registeredAddress}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
