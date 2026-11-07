import React from 'react';
import Link from 'next/link';

export function LearningPillars() {
  const pillars = [
    {
      code: 'Area A',
      title: 'AI & Technology Courses',
      description:
        'Structured, cohort-based learning organized into 5 audience-based pathways—from AI for Beginners and Students to Professionals and Vibe Coding.',
      href: '/academy/pathways',
      cta: 'Explore Pathways & Courses →',
    },
    {
      code: 'Area B',
      title: 'Academic & Industrial Training Support',
      description:
        'Two distinct student development services: hands-on IT/SIWES Training Support and ethical Academic Project Support for university and polytechnic students.',
      href: '/academy/siwes-support',
      cta: 'Explore Student Support →',
    },
    {
      code: 'Area C',
      title: 'Seminars & Workshops',
      description:
        'AI awareness programmes, fluency webinars, NYSC educational sessions, student technology seminars, practical workshops, and corporate training.',
      href: '/academy/events',
      cta: 'View Seminars & Workshops →',
    },
    {
      code: 'Area D',
      title: 'AI Learning Resource Hub',
      description:
        'A growing collection of practical guides, prompt engineering checklists, specification templates, and workbooks with transparent availability tracking.',
      href: '/academy/resources',
      cta: 'Open Resource Hub →',
    },
  ];

  return (
    <section className="bg-brand-white py-16" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-navy">
            Four Core Academy Areas
          </p>
          <h2 id="pillars-heading" className="mt-1 text-2xl font-bold text-brand-navy sm:text-3xl">
            A Complete Technology Education &amp; Student Development Platform
          </h2>
          <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">
            Whether you want to master practical AI skills, build software with AI coding agents, gain genuine IT/SIWES or academic project mentorship, or train an entire organization, our Academy is structured around four clear pillars.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-brand-border bg-brand-gray p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <span className="inline-flex items-center rounded-md bg-brand-navy px-2.5 py-1 text-xs font-extrabold text-brand-yellow">
                  {item.code}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-brand-navy hover:underline"
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
