import React from 'react';
import Link from 'next/link';

export function LearningPillars() {
  const pillars = [
    {
      title: 'AI Training Programmes',
      description:
        'Structured, cohort-based programmes covering AI fundamentals, prompt engineering, business productivity, workflow automation, and practical AI adoption.',
      href: '/academy/programmes',
      cta: 'Browse Courses →',
    },
    {
      title: 'AI Seminars & Workshops',
      description:
        'Interactive AI awareness seminars, fluency webinars, student bootcamps, and custom corporate AI training sessions for teams and institutions.',
      href: '/academy/events',
      cta: 'View Upcoming Events →',
    },
    {
      title: 'Vibe Coding & AI-Assisted Development',
      description:
        'Learn how to partner with AI coding assistants and agents to prototype web apps, read and verify generated code, debug systematically, and ship working software.',
      href: '/academy/vibe-coding',
      cta: 'Learn Vibe Coding →',
    },
    {
      title: 'AI Educational Resource Library',
      description:
        'Access free downloadable PDF starter guides, prompt engineering checklists, specification templates, and in-depth paid workbooks and toolkits.',
      href: '/academy/resources',
      cta: 'Open Resource Library →',
    },
  ];

  return (
    <section className="bg-brand-white py-16" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-navy">
            Four Educational Pillars
          </p>
          <h2 id="pillars-heading" className="mt-1 text-2xl font-bold text-brand-navy sm:text-3xl">
            How 3A Techvolution Academy Equips You for the AI Era
          </h2>
          <p className="mt-2 text-sm text-brand-dark-gray/80 leading-relaxed">
            Rather than general theoretical coursework, our curriculum focuses on practical AI fluency, responsible AI-assisted software creation, and day-to-day productivity.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-brand-border bg-brand-gray p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-navy text-xs font-extrabold text-brand-yellow">
                  0{idx + 1}
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
