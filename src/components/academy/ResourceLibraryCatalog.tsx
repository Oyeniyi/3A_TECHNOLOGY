'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AcademyResource, ResourceAvailability } from '@/types/content';
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

const availabilityFilters: ('All' | ResourceAvailability)[] = [
  'All',
  'Available',
  'Coming Soon',
  'In Development',
];

export function ResourceLibraryCatalog({ resources }: ResourceLibraryCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [availabilityFilter, setAvailabilityFilter] = useState<'All' | ResourceAvailability>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesAvailability =
      availabilityFilter === 'All' || res.availability === availabilityFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      res.title.toLowerCase().includes(q) ||
      res.description.toLowerCase().includes(q) ||
      res.category.toLowerCase().includes(q);

    return matchesCategory && matchesAvailability && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Honest Resource Development Disclosure Banner */}
      <div className="rounded-xl border-l-4 border-l-brand-navy bg-brand-gray p-5 text-sm text-brand-charcoal">
        <strong className="text-brand-navy block mb-1">
          Transparent Resource Availability Notice:
        </strong>
        Our AI Learning Resource Hub is an active, growing educational collection. While our introductory reference checklists are <strong>Available</strong> for immediate download, comprehensive workbooks and companion handbooks are currently marked <strong>Coming Soon</strong> or <strong>In Development</strong> and do not display unverified purchase or download links until publication is complete.
      </div>

      {/* Search and Availability Status Controls */}
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
            className="w-full rounded-md border border-brand-border bg-brand-white px-3.5 py-2 text-sm text-brand-charcoal placeholder:text-gray-500 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          />
        </div>

        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter by resource availability status"
        >
          {availabilityFilters.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setAvailabilityFilter(status)}
              className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors ${
                availabilityFilter === status
                  ? 'bg-brand-navy text-brand-white'
                  : 'bg-brand-white text-brand-charcoal border border-brand-border hover:bg-gray-100'
              }`}
            >
              {status === 'All' ? 'All Statuses' : status}
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
          description="Try clearing your search query or switching to All Statuses to browse our full library."
          actionLabel="Reset Filters"
          onAction={() => {
            setSelectedCategory('All');
            setAvailabilityFilter('All');
            setSearchQuery('');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((res) => {
            const isAvailableDownload =
              res.availability === 'Available' &&
              res.accessType === 'Free' &&
              isSafeActionUrl(res.downloadUrl);

            const isAvailablePurchase =
              res.availability === 'Available' &&
              res.accessType === 'Paid' &&
              isSafeActionUrl(res.purchaseUrl);

            const isComingSoon = res.availability === 'Coming Soon';
            const isInDevelopment = res.availability === 'In Development';

            return (
              <Card key={res.slug} hoverEffect className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy">
                      {res.category}
                    </span>
                    <Badge
                      variant={
                        res.availability === 'Available'
                          ? 'emerald'
                          : res.availability === 'Coming Soon'
                          ? 'yellow'
                          : 'neutral'
                      }
                    >
                      {res.availability}
                    </Badge>
                  </div>

                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded bg-brand-gray px-2 py-0.5 text-[11px] font-medium text-brand-charcoal">
                      Format: {res.format}
                    </span>
                    {res.availability === 'Available' && (
                      <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-brand-navy">
                        {res.accessType === 'Free'
                          ? 'Free Access'
                          : res.priceDisplay || 'Paid Resource'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-2">{res.title}</h3>
                  <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
                    {res.description}
                  </p>

                  <div className="rounded-md bg-brand-gray/70 p-3 text-xs text-brand-charcoal border border-brand-border space-y-1.5">
                    <div>
                      <span className="font-semibold text-brand-navy block mb-0.5">
                        Intended Use:
                      </span>
                      {res.intendedUse}
                    </div>
                    {res.statusNote && (
                      <div className="pt-1.5 border-t border-brand-border/60 text-gray-600">
                        <strong className="text-brand-charcoal">Status Note:</strong>{' '}
                        {res.statusNote}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border">
                  {isAvailableDownload ? (
                    <Button variant="primary" size="sm" fullWidth asChild>
                      <a
                        href={res.downloadUrl}
                        download
                        data-analytics-event="download_free_resource"
                      >
                        Download Free Resource ({res.format}) &darr;
                      </a>
                    </Button>
                  ) : isAvailablePurchase ? (
                    <Button variant="accent" size="sm" fullWidth asChild>
                      <Link
                        href={res.purchaseUrl!}
                        data-analytics-event="purchase_paid_resource"
                      >
                        Request Access ({res.priceDisplay || 'Available'}) &rarr;
                      </Link>
                    </Button>
                  ) : isComingSoon ? (
                    <Button variant="outline" size="sm" fullWidth asChild>
                      <Link
                        href={`/contact?type=academy-programme&subject=${encodeURIComponent(`Notify Me When Available: ${res.title}`)}`}
                      >
                        Coming Soon — Register Interest &rarr;
                      </Link>
                    </Button>
                  ) : isInDevelopment ? (
                    <div className="rounded-md border border-brand-border bg-brand-gray px-3 py-2.5 text-center text-xs font-semibold text-gray-600">
                      Currently in Development — Not Yet Available for Download
                    </div>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
