import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAcademyResources } from '@/lib/content';
import { ResourceLibraryCatalog } from '@/components/academy/ResourceLibraryCatalog';

export const metadata: Metadata = {
  title: 'AI Resource Library — Guides, Checklists & Workbooks | 3A Techvolution Academy',
  description:
    'Browse free and paid AI learning guides, prompt engineering checklists, vibe coding templates, and practical AI workbooks from 3A Techvolution Academy.',
};

export default function AcademyResourcesPage() {
  const resources = getAllAcademyResources();

  return (
    <div className="bg-brand-white">
      <section className="bg-brand-navy py-16 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/academy" className="text-xs font-semibold text-brand-yellow hover:underline">
              &larr; Back to 3A Techvolution Academy
            </Link>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-white">
              Academy Resource Library
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              Practical AI learning guides, prompt engineering references, vibe coding templates, and workbooks to help you apply AI clearly and responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <ResourceLibraryCatalog resources={resources} />
        </div>
      </section>
    </div>
  );
}

