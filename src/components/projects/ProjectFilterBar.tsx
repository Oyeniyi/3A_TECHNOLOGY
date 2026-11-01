'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ServiceSlug } from '@/types/content';

export interface ProjectFilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const filterOptions: { label: string; value: string }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web & Digital', value: 'web-development' },
  { label: 'Custom Software', value: 'custom-software' },
  { label: 'AI & Automation', value: 'ai-automation' },
  { label: 'Data Science', value: 'data-science-analytics' },
  { label: 'Branding', value: 'brand-digital-media' },
];

export function ProjectFilterBar({ activeCategory, onSelectCategory }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
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
