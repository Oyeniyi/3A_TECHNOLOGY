import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const isPublic = project.visibility === 'public';
  const isDominionPortal = project.slug === 'dominion-college-portal';

  return (
    <Card hoverEffect className="flex flex-col justify-between overflow-hidden p-0">
      <div>
        {/* Visual Preview / Device Frame */}
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden border-b border-brand-border ${
            isDominionPortal ? 'bg-[#3B073E]' : 'bg-brand-navy/95'
          }`}
        >
          <Image
            src={project.imagePlaceholder}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
            unoptimized={project.imagePlaceholder.endsWith('.svg')}
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge status={project.classification} />
          </div>
          {!isPublic && (
            <div
              className={`absolute bottom-2.5 right-2.5 rounded px-2.5 py-1 text-[11px] font-semibold border ${
                isDominionPortal
                  ? 'bg-[#3B073E]/95 text-[#FBBF24] border-[#FBBF24]/40'
                  : 'bg-brand-navy/90 text-brand-yellow border-white/15'
              }`}
            >
              Project Link Confidential
            </div>
          )}
          {isPublic && project.liveUrl && (
            <div className="absolute bottom-2.5 right-2.5 rounded bg-emerald-900/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-100 border border-emerald-400/30">
              Live Website Available
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          {project.clientOrOrganization && (
            <p className="text-xs font-bold uppercase tracking-wider text-brand-navy/80">
              {project.primaryCollection === 'student-research-projects'
                ? project.clientOrOrganization
                : `Client / Organization: ${project.clientOrOrganization}`}
            </p>
          )}

          <h3 className="mt-1.5 text-xl font-bold text-brand-navy">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">{project.shortSummary}</p>

          {!compact && project.verifiedFeatures.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-brand-border pt-3 text-xs text-brand-charcoal">
              {project.verifiedFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
                    aria-hidden="true"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologiesUsed.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded bg-brand-gray px-2 py-0.5 text-[11px] font-medium text-brand-charcoal border border-brand-border/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions — strictly enforces confidentiality */}
      <div className="border-t border-brand-border bg-brand-gray/40 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-bold text-brand-navy hover:underline"
        >
          Read Case Study &rarr;
        </Link>

        <div className="flex items-center gap-3">
          {isPublic && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded bg-brand-navy px-3 py-1.5 text-xs font-bold text-brand-white hover:bg-brand-blue transition-colors"
            >
              Visit Live Website &nearr;
            </a>
          )}
          {isPublic && !project.liveUrl && project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-600 hover:text-brand-navy"
            >
              GitHub Repository &nearr;
            </a>
          )}
          {!isPublic && (
            <span className="text-[11px] font-medium text-gray-500 italic">
              {project.status}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
