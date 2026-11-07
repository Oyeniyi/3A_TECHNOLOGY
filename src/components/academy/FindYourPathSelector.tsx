'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { findYourPathOptions } from '@/data/programmes';
import { Button } from '@/components/ui/Button';

export function FindYourPathSelector() {
  const [selectedId, setSelectedId] = useState<string>(findYourPathOptions[0].id);

  const activeOption =
    findYourPathOptions.find((opt) => opt.id === selectedId) || findYourPathOptions[0];

  return (
    <section
      className="bg-brand-gray py-16 border-y border-brand-border"
      aria-labelledby="find-your-path-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
            Interactive Pathway Discovery
          </span>
          <h2
            id="find-your-path-heading"
            className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl"
          >
            Find Your Learning Path
          </h2>
          <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">
            Select the statement that best describes you to jump straight to the right learning pathway, course, student support service, or organizational programme.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* 8 Visitor Category Buttons */}
          <div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3"
            role="tablist"
            aria-label="Select your visitor profile"
          >
            {findYourPathOptions.map((option) => {
              const isSelected = option.id === selectedId;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(option.id)}
                  className={`text-left rounded-xl border p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    isSelected
                      ? 'border-brand-navy bg-brand-navy text-brand-white shadow-sm'
                      : 'border-brand-border bg-brand-white text-brand-charcoal hover:border-brand-navy/60'
                  }`}
                >
                  <span
                    className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${
                      isSelected ? 'text-brand-yellow' : 'text-gray-600'
                    }`}
                  >
                    {option.audienceTag}
                  </span>
                  <span className="text-sm font-bold leading-snug block">{option.label}</span>
                </button>
              );
            })}
          </div>

          {/* Recommendation Panel */}
          <div
            role="tabpanel"
            className="lg:col-span-5 rounded-2xl border-2 border-brand-navy bg-brand-white p-6 sm:p-8 shadow-sm"
          >
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand-navy border border-blue-200">
              Recommended for You • {activeOption.audienceTag}
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-brand-navy">
              {activeOption.recommendationTitle}
            </h3>
            <p className="mt-3 text-sm text-brand-charcoal leading-relaxed">
              {activeOption.recommendationSummary}
            </p>
            <div className="mt-6 pt-5 border-t border-brand-border flex flex-wrap gap-3">
              <Button variant="primary" size="sm" asChild>
                <Link href={activeOption.primaryCtaHref}>
                  {activeOption.primaryCtaLabel} &rarr;
                </Link>
              </Button>
              {activeOption.secondaryCtaLabel && activeOption.secondaryCtaHref && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={activeOption.secondaryCtaHref}>{activeOption.secondaryCtaLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

