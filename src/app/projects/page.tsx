import React from 'react';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import { ProjectsClientCatalog } from '@/components/projects/ProjectsClientCatalog';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Projects, 3A Prototypes & Student Research Systems',
  description:
    'Selected 3A prototypes and student/research projects demonstrating practical application of software development, data science, machine learning, and computational problem-solving.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
            Portfolio &amp; Technical Showcase
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Projects &amp; Prototypes
          </h1>
          <p className="text-base md:text-lg text-brand-dark-gray/80 leading-relaxed">
            Selected 3A prototypes and student/research projects demonstrating practical application of software development, data science, machine learning, and computational problem-solving.
          </p>
        </div>

        {/* Transparent Classification Notice & GitHub CTA */}
        <div className="mb-10 rounded-xl border border-brand-border bg-brand-gray p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
              Transparent Project Classification &amp; Open Source
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-brand-dark-gray/85 leading-relaxed">
              Each entry is labeled by its exact origin: <strong>MarketMind AI</strong> is an internal <strong>3A Prototype</strong>, while our machine learning, geospatial, and software utilities are mentored <strong>Student Projects</strong> and academic research implementations. Explore our code and additional student/research work on GitHub.
            </p>
          </div>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand-navy px-5 py-3 text-xs font-bold text-brand-white shadow-sm transition-colors hover:bg-brand-blue"
          >
            View Repositories on GitHub &rarr;
          </a>
        </div>

        <ProjectsClientCatalog projects={projects} />
      </div>
    </div>
  );
}
