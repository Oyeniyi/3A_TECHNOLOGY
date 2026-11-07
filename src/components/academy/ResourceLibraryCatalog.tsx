'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AcademyResource } from '@/types/content';
import { isSafeActionUrl } from '@/lib/security/sanitizer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';

export interface ResourceLibraryCatalogProps {
  resources: AcademyResource[];
}

const categories = [
  'All',
  'AI Learning Guides',
  'Prompt Engineering',
  'Vibe Coding & AI Dev',
  'Workbooks & Templates',
  'Course Notes & Toolkits',
] as const;

export function ResourceLibraryCatalog({ resources }: ResourceLibraryCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [accessFilter, setAccessFilter] = useState<'All' | 'Free' | 'Paid'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesAccess = accessFilter === 'All' || res.accessType === accessFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      res.title.toLowerCase().includes(q) ||
      res.description.toLowerCase().includes(q) ||
      res.category.toLowerCase().includes(q);

    return matchesCategory && matchesAccess && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Access Type Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-brand-gray p-4 rounded-xl border border-brand-border">
        <div className="flex-1">
          <label htmlFor="resource-search" className="sr-only">
            Search AI learning resources
          </label>
          <input
            id="resource-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, prompt checklists, workbooks, or vibe coding templates..."
            className="w-full rounded-md border border-brand-border bg-brand-white px-3.5 py-2 text-sm text-brand-charcoal placeholder:text-gray-400 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          />
        </div>

        <div className="flex items-center gap-2" role="group" aria-label="Filter by free or paid access">
          {(['All', 'Free', 'Paid'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setAccessFilter(type)}
              className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors ${
                accessFilter === type
                  ? 'bg-brand-navy text-brand-white'
                  : 'bg-brand-white text-brand-charcoal border border-brand-border hover:bg-gray-100'
              }`}
            >
              {type === 'All' ? 'All Formats' : `${type} Resources`}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter resources by category">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? 'bg-brand-navy text-brand-white shadow-sm'
                  : 'bg-brand-gray text-brand-charcoal hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Resource Cards Grid */}
      {filtered.length === 0 ? (
        <EmptyState
          title="No Learning Resources Match Your Filter"
          description="Try clearing your search query or switching to All Formats to browse our full library."
          actionLabel="Reset Filters"
          onAction={() => {
            setSelectedCategory('All');
            setAccessFilter('All');
            setSearchQuery('');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((res) => {
            const isFreeDownloadable =
              res.accessType === 'Free' &&
              res.availability === 'Available' &&
              isSafeActionUrl(res.downloadUrl);

            const isPaidPurchasable =
              res.accessType === 'Paid' &&
              res.availability === 'Available' &&
              isSafeActionUrl(res.purchaseUrl);

            return (
              <Card key={res.slug} hoverEffect className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy">
                      {res.category}
                    </span>
                    <Badge variant={res.accessType === 'Free' ? 'emerald' : 'yellow'}>
                      {res.accessType === 'Free' ? 'Free Download' : `Paid • ${res.priceDisplay || 'Premium'}`}
                    </Badge>
                  </div>

                  <div className="mb-2 inline-block rounded bg-brand-gray px-2 py-0.5 text-[11px] font-medium text-brand-charcoal">
                    Format: {res.format}
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-2">{res.title}</h3>
                  <p className="text-sm text-brand-dark-gray/80 leading-relaxed mb-4">{res.description}</p>

                  <div className="rounded-md bg-brand-gray/70 p-3 text-xs text-brand-dark-gray border border-brand-border">
                    <span className="font-semibold text-brand-navy block mb-0.5">Intended Use:</span>
                    {res.intendedUse}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border">
                  {isFreeDownloadable ? (
                    <Button variant="primary" size="sm" fullWidth asChild>
                      <a
                        href={res.downloadUrl}
                        download
                        data-analytics-event="download_free_resource"
                      >
                        Download Free Resource ({res.format}) &darr;
                      </a>
                    </Button>
                  ) : isPaidPurchasable ? (
                    <Button variant="accent" size="sm" fullWidth asChild>
                      <a
                        href={res.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-analytics-event="purchase_paid_resource"
                      >
                        Purchase Resource ({res.priceDisplay}) ↗
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" fullWidth asChild>
                      <Link
                        href={`/contact?type=academy&subject=${encodeURIComponent(`Resource Enquiry: ${res.title}`)}`}
                      >
                        {res.availability === 'Coming Soon'
                          ? 'Coming Soon — Request Early Copy'
                          : 'Enquire to Access Resource'}
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

