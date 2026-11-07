import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAcademyResources } from '@/lib/content';
import { ResourceLibraryCatalog } from '@/components/academy/ResourceLibraryCatalog';

export const metadata: Metadata = {
  title: 'AI Learning Resource Hub — Guides, Templates & Workbooks | 3A Techvolution Academy',
  description:
    'A growing collection of learning materials, practical guides, templates and educational resources designed to help you understand and apply artificial intelligence and technology.',
};

export default function AcademyResourcesPage() {
  const resources = getAllAcademyResources();

  return (
    <div className="bg-brand-white">
      <section className="bg-brand-navy py-16 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/academy"
              className="text-xs font-semibold text-brand-yellow hover:underline"
            >
              &larr; Back to 3A Techvolution Academy
            </Link>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-brand-yellow">
              D. AI Learning Resource Hub
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-white">
              Academy Resource Library
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              A growing collection of learning materials, practical guides, templates and educational resources designed to help you understand and apply artificial intelligence and technology.
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
