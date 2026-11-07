'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { PortfolioCollection } from '@/types/content';

export interface ProjectFilterBarProps {
  activeCategory: 'all' | PortfolioCollection;
  onSelectCategory: (category: 'all' | PortfolioCollection) => void;
}

const filterOptions: { label: string; value: 'all' | PortfolioCollection }[] = [
  { label: 'All Portfolio Collections', value: 'all' },
  { label: 'Business & Client Solutions', value: 'business-client-solutions' },
  { label: 'Websites & Digital Experiences', value: 'websites-digital-experiences' },
  { label: 'Student & Research Projects', value: 'student-research-projects' },
];

export function ProjectFilterBar({ activeCategory, onSelectCategory }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by portfolio collection">
      {filterOptions.map((opt) => {
        const isActive = activeCategory === opt.value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(opt.value)}
            className={cn(
              'rounded-full px-4 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-1',
              isActive
                ? 'bg-brand-navy text-brand-white shadow-sm'
                : 'bg-brand-gray text-brand-charcoal hover:bg-gray-200'
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
