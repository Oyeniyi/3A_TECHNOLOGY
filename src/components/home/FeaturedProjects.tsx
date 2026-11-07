import React from 'react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/content';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { siteConfig } from '@/config/site';

export function FeaturedProjects() {
  const featured = getFeaturedProjects(4);

  return (
    <section className="bg-brand-white py-20" aria-labelledby="featured-projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Business Solutions, Websites &amp; Digital Experiences
            </span>
            <h2 id="featured-projects-heading" className="mt-2 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
              Featured Client Work &amp; Business Platforms
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              From conversion-focused business websites and landing pages like <strong>Raph2 Interiors</strong> to institutional platforms like the <strong>Dominion College Portal</strong>, internal AI operations tools like <strong>MarketMind AI for Akinmart Store</strong>, and custom digital event experiences.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-0 shrink-0">
            <Link href="/projects" className="text-sm font-bold text-brand-navy hover:underline">
              Explore Full Portfolio &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Secondary callout for Student & Research Projects */}
        <div className="mt-10 rounded-xl border border-brand-border bg-brand-gray/70 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-brand-charcoal">
            <strong>Academic &amp; Research Support:</strong> We also mentor and support computing, data science, and machine learning research projects.
          </p>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/projects"
              className="text-xs font-bold text-brand-navy hover:underline"
            >
              View Selected Research Projects &rarr;
            </Link>
            <a
              href={siteConfig.studentProjectsGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-charcoal hover:text-brand-navy underline"
            >
              Explore Student Projects on GitHub &nearr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
