import React from 'react';
import { Project } from '@/types/content';
import { TechStackBadges } from './TechStackBadges';
import { Badge } from '@/components/ui/Badge';

export function CaseStudySections({ project }: { project: Project }) {
  return (
    <article className="space-y-12">
      {/* Header Info */}
      <div className="border-b border-brand-border pb-8">
        <div className="flex items-center gap-3">
          <Badge status={project.status} />
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
            {project.category.replace(/-/g, ' ')}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-brand-charcoal leading-relaxed">{project.shortSummary}</p>
      </div>

      {/* The Challenge */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-navy">The Challenge</h2>
        <p className="text-base text-brand-charcoal leading-relaxed">{project.theChallenge}</p>
      </section>

      {/* The Engineering Solution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-navy">The Technical Solution</h2>
        <p className="text-base text-brand-charcoal leading-relaxed">{project.theSolution}</p>
      </section>

      {/* Technologies Used */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-brand-navy">Technologies & Tools Deployed</h2>
        <TechStackBadges technologies={project.technologiesUsed} />
      </section>

      {/* External Verified Links */}
      {(project.liveUrl || project.githubUrl) && (
        <section className="flex flex-wrap gap-4 border-t border-brand-border pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-white hover:bg-blue-900"
            >
              Visit Live Production System ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-brand-border bg-brand-white px-5 py-2.5 text-sm font-semibold text-brand-charcoal hover:bg-brand-gray"
            >
              View GitHub Repository ↗
            </a>
          )}
        </section>
      )}
    </article>
  );
}
