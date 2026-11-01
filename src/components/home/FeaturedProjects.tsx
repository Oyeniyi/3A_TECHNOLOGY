import React from 'react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="bg-brand-white py-20" aria-labelledby="featured-projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">Proven Impact</span>
            <h2 id="featured-projects-heading" className="mt-2 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
              Featured Case Studies & Systems
            </h2>
          </div>
          <Link href="/projects" className="mt-4 text-sm font-semibold text-brand-navy hover:underline sm:mt-0">
            Explore All Case Studies &rarr;
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.slug} hoverEffect className="flex flex-col justify-between">
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

              <div className="mt-8 border-t border-brand-border pt-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-bold text-brand-navy hover:underline"
                >
                  Read Case Study &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
