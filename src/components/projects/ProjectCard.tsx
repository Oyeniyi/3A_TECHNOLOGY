import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card hoverEffect className="flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {project.category.replace(/-/g, ' ')}
          </span>
          <Badge status={project.status} />
        </div>

        <h3 className="mt-4 text-xl font-bold text-brand-navy">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.shortSummary}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologiesUsed.map((tech) => (
            <span key={tech} className="rounded bg-brand-gray px-2 py-0.5 text-[11px] font-medium text-brand-charcoal">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-brand-border pt-4 flex items-center justify-between">
        <Link href={`/projects/${project.slug}`} className="text-xs font-bold text-brand-navy hover:underline">
          View Case Study &rarr;
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-brand-navy"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </Card>
  );
}
