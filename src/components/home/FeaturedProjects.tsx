import React from 'react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/config/site';

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="bg-brand-white py-20" aria-labelledby="featured-projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Selected Prototypes &amp; Student Research
            </span>
            <h2 id="featured-projects-heading" className="mt-2 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
              Prototypes &amp; Student/Research Projects
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Selected 3A prototypes and student/research projects demonstrating practical application of software development, data science, machine learning, and computational problem-solving.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-0">
            <Link href="/projects" className="text-sm font-semibold text-brand-navy hover:underline">
              Explore All Projects &rarr;
            </Link>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold rounded-md border border-brand-border bg-brand-gray px-3 py-1.5 text-brand-navy hover:bg-gray-200 transition-colors"
            >
              View on GitHub &nearr;
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.slug} hoverEffect className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge status={project.classification} />
                  <Badge status={project.status} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-brand-navy">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.shortSummary}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologiesUsed.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-brand-gray px-2 py-0.5 text-[11px] font-medium text-brand-charcoal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-brand-border pt-4 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-bold text-brand-navy hover:underline"
                >
                  View Project Details &rarr;
                </Link>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-500 hover:text-brand-navy"
                  >
                    GitHub &nearr;
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
