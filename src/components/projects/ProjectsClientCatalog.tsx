'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project, PortfolioCollection } from '@/types/content';
import { ProjectCard } from './ProjectCard';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export interface ProjectsClientCatalogProps {
  projects: Project[];
}

export function ProjectsClientCatalog({ projects }: ProjectsClientCatalogProps) {
  const [selectedCollection, setSelectedCollection] = useState<'all' | PortfolioCollection>('all');

  const businessProjects = projects.filter((p) =>
    p.collections.includes('business-client-solutions')
  );
  const websiteProjects = projects.filter((p) =>
    p.collections.includes('websites-digital-experiences')
  );
  const studentProjects = projects.filter((p) =>
    p.collections.includes('student-research-projects')
  );

  const tabs: { id: 'all' | PortfolioCollection; label: string; count: number }[] = [
    { id: 'all', label: 'All Portfolio Collections', count: projects.length },
    {
      id: 'business-client-solutions',
      label: '1. Business & Client Solutions',
      count: businessProjects.length,
    },
    {
      id: 'websites-digital-experiences',
      label: '2. Websites & Digital Experiences',
      count: websiteProjects.length,
    },
    {
      id: 'student-research-projects',
      label: '3. Student & Research Projects',
      count: studentProjects.length,
    },
  ];

  const showBusiness =
    selectedCollection === 'all' || selectedCollection === 'business-client-solutions';
  const showWebsites =
    selectedCollection === 'all' || selectedCollection === 'websites-digital-experiences';
  const showStudent =
    selectedCollection === 'all' || selectedCollection === 'student-research-projects';

  return (
    <div className="space-y-16">
      {/* Collection Switcher Bar */}
      <div
        className="flex flex-wrap items-center gap-2 border-b border-brand-border pb-6"
        role="tablist"
        aria-label="Portfolio Collections"
      >
        {tabs.map((tab) => {
          const isActive = selectedCollection === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCollection(tab.id)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
                isActive
                  ? 'bg-brand-navy text-brand-white shadow-sm'
                  : 'bg-brand-gray text-brand-charcoal hover:bg-gray-200 border border-brand-border'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          );
        })}
      </div>

      {/* COLLECTION 1: BUSINESS & CLIENT SOLUTIONS */}
      {showBusiness && (
        <section aria-labelledby="collection-business-heading" className="space-y-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 border border-yellow-200">
              Collection 01 • Commercial &amp; Institutional Work
            </span>
            <h2
              id="collection-business-heading"
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-navy"
            >
              Business &amp; Client Solutions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-dark-gray/85 leading-relaxed">
              Practical software systems, internal AI operations tools, institutional portals, and digital platforms delivered for businesses, schools, and private clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {businessProjects.map((project) => (
              <ProjectCard key={`biz-${project.slug}`} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* COLLECTION 2: WEBSITES & DIGITAL EXPERIENCES */}
      {showWebsites && (
        <section
          aria-labelledby="collection-websites-heading"
          className="rounded-2xl border border-brand-border bg-brand-gray/50 p-6 sm:p-10 space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy border border-blue-200">
                Collection 02 • Web Design, Portals &amp; Event Platforms
              </span>
              <h2
                id="collection-websites-heading"
                className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-navy"
              >
                Websites &amp; Digital Experiences
              </h2>
              <p className="mt-2 text-sm sm:text-base text-brand-dark-gray/85 leading-relaxed">
                Website design, conversion-focused landing pages, institutional portals, and bespoke digital event experiences—featuring <strong>Raph2 Interiors</strong> (public live website), the <strong>Dominion College Portal</strong> (private institutional deployment), and our <strong>Custom Digital Wedding Invitation &amp; Gatepass Platform</strong>.
              </p>
            </div>
            <Link
              href="/services/web-development"
              className="text-xs font-bold text-brand-navy hover:underline shrink-0"
            >
              Explore Web &amp; Digital Product Service &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {websiteProjects.map((project) => (
              <ProjectCard key={`web-${project.slug}`} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* COLLECTION 3: SELECTED STUDENT & RESEARCH PROJECTS */}
      {showStudent && (
        <section
          aria-labelledby="collection-student-heading"
          className="border-t border-brand-border pt-12 space-y-8"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900 border border-emerald-200">
              Collection 03 • Academic &amp; Technical Mentorship
            </span>
            <h2
              id="collection-student-heading"
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-navy"
            >
              Student &amp; Research Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brand-dark-gray/85 leading-relaxed">
              Selected academic and research projects demonstrating practical applications of software development, data science, machine learning, computer vision, and computational problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {studentProjects.map((project) => (
              <ProjectCard key={`stu-${project.slug}`} project={project} compact />
            ))}
          </div>

          {/* Explore More Student Projects on GitHub CTA */}
          <div className="rounded-xl border border-brand-border bg-brand-navy p-6 sm:p-8 text-brand-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Wider Academic &amp; Research Repository Collection
              </span>
              <h3 className="mt-1 text-xl font-bold text-brand-white">
                Looking for Additional Student &amp; Research Implementations?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-relaxed">
                To keep our corporate portfolio focused, we feature only a small selection of academic projects above. Explore the wider collection of student and research repositories—covering medical image analysis, handwritten text recognition, NLP translation, and electronic logbooks—on GitHub.
              </p>
            </div>
            <a
              href={siteConfig.studentProjectsGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand-yellow px-5 py-3 text-xs sm:text-sm font-bold text-brand-charcoal shadow-sm transition-colors hover:bg-amber-400"
            >
              Explore More Student Projects on GitHub &nearr;
            </a>
          </div>
        </section>
      )}

      {/* Contact / Start a Project CTA */}
      <section className="rounded-2xl border border-brand-border bg-brand-light-gray p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-navy">
            Ready to build a business website, custom portal, AI tool, or research system?
          </h2>
          <p className="mt-2 text-sm text-brand-dark-gray/85">
            Share your requirements with our team and we will prepare a clear project scope, timeline, and estimate.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Button variant="primary" asChild>
            <Link href="/request-quote">Request a Project Quote</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
