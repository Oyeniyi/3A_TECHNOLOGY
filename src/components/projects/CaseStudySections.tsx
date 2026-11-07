import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/content';
import { TechStackBadges } from './TechStackBadges';
import { Badge } from '@/components/ui/Badge';

export function CaseStudySections({ project }: { project: Project }) {
  const isPublic = project.visibility === 'public';
  const isStudentOrResearch = project.primaryCollection === 'student-research-projects';
  const isDominionPortal = project.slug === 'dominion-college-portal';

  return (
    <article className="space-y-12">
      {/* Header Info */}
      <div className="border-b border-brand-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge status={project.classification} />
          <Badge status={project.status} variant="outline" />
          {project.clientOrOrganization && (
            <span className="text-xs uppercase tracking-wider text-brand-navy font-bold">
              {isStudentOrResearch
                ? project.clientOrOrganization
                : `Client / Business: ${project.clientOrOrganization}`}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-brand-charcoal leading-relaxed">{project.shortSummary}</p>

        {/* Confidentiality or Student Project Notice */}
        {!isPublic && project.confidentialityNotice && (
          <div className="mt-5 rounded-lg border-l-4 border-l-brand-navy bg-brand-gray px-4 py-3 text-xs sm:text-sm font-medium text-brand-charcoal">
            <strong>Confidentiality Notice:</strong> {project.confidentialityNotice}
          </div>
        )}

        {isStudentOrResearch && (
          <div className="mt-5 rounded-lg border border-brand-border bg-brand-gray px-4 py-3 text-xs sm:text-sm font-medium text-gray-700">
            <strong>Academic &amp; Research Classification:</strong> This project is a{' '}
            <strong>{project.classification}</strong> demonstrating practical application of software development, machine learning, and computational problem-solving (not a commercial client deployment).
          </div>
        )}
      </div>

      {/* Visual Showcase / Screenshot */}
      <div
        className={`overflow-hidden rounded-2xl border shadow-sm ${
          isDominionPortal
            ? 'border-[#6B1B6E]/40 bg-[#3B073E]'
            : 'border-brand-border bg-brand-navy'
        }`}
      >
        <div
          className={`flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs ${
            isDominionPortal
              ? 'bg-[#3B073E] text-[#F5D0FE]'
              : 'bg-brand-navy text-gray-300'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 font-semibold text-white">{project.title}</span>
          </div>
          <span className={isDominionPortal ? 'text-[#FBBF24] font-semibold' : ''}>
            {isPublic && project.liveUrl
              ? 'Live Public Website Preview'
              : !isPublic
              ? 'Non-Sensitive Architecture & Interface Representation'
              : 'Project Architecture Overview'}
          </span>
        </div>
        <div
          className={`relative aspect-[16/9] w-full ${
            isDominionPortal ? 'bg-[#FAF5FF]' : 'bg-brand-navy'
          }`}
        >
          <Image
            src={project.imagePlaceholder}
            alt={`${project.title} visual preview`}
            fill
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover object-center"
            unoptimized={project.imagePlaceholder.endsWith('.svg')}
          />
        </div>
      </div>

      {/* Context & Solution Grid */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <section className="space-y-3 rounded-xl border border-brand-border bg-brand-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-brand-navy">
            {isStudentOrResearch ? 'Research Context & Problem Statement' : 'Business Context & Problem Addressed'}
          </h2>
          <p className="text-base text-brand-charcoal leading-relaxed">{project.theChallenge}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-brand-border bg-brand-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-brand-navy">
            {isStudentOrResearch ? 'Technical Methodology & Implementation' : 'Solution & Implementation'}
          </h2>
          <p className="text-base text-brand-charcoal leading-relaxed">{project.theSolution}</p>
        </section>
      </div>

      {/* Verified Capabilities & Features */}
      {project.verifiedFeatures.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-navy">Verified Features &amp; Capabilities</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.verifiedFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-brand-border bg-brand-gray/50 p-4 text-sm text-brand-charcoal"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-brand-yellow">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Technologies Used */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-brand-navy">Verified Technology Stack</h2>
        <TechStackBadges technologies={project.technologiesUsed} />
      </section>

      {/* External Verified Links (Strictly omitted when project.visibility === 'confidential') */}
      {isPublic && (project.liveUrl || project.githubUrl) ? (
        <section className="flex flex-wrap gap-4 border-t border-brand-border pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-bold text-brand-white hover:bg-brand-blue transition-colors"
            >
              Visit Live Website ({project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}) &nearr;
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-white px-6 py-3 text-sm font-bold text-brand-charcoal hover:bg-brand-gray transition-colors"
            >
              View Public Repository on GitHub &nearr;
            </a>
          )}
        </section>
      ) : (
        <section className="rounded-xl border border-brand-border bg-brand-gray/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-brand-navy">
              Private / Confidential Deployment
            </h3>
            <p className="text-xs text-brand-dark-gray/80 mt-1">
              {project.confidentialityNotice ||
                'Direct deployment URLs and private source repositories are not publicly accessible.'}{' '}
              Contact our engineering team to discuss a similar implementation for your organization.
            </p>
          </div>
          <Link
            href={`/request-quote?service=${encodeURIComponent(project.category)}`}
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand-navy px-4 py-2.5 text-xs font-bold text-brand-white hover:bg-brand-blue"
          >
            Request a Similar Solution &rarr;
          </Link>
        </section>
      )}
    </article>
  );
}
