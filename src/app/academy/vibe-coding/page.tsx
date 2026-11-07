import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Vibe Coding & AI-Assisted Software Development | 3A Techvolution Academy',
  description:
    'Learn how to use AI coding tools and agents to build websites, prototype software ideas, understand generated code, and debug applications responsibly.',
};

const capabilities = [
  {
    title: 'Build Websites & Web Applications',
    description:
      'Use modern AI coding assistants to scaffold, style, and connect responsive websites and web applications without getting stuck on boilerplate.',
  },
  {
    title: 'Prototype Software Ideas Quickly',
    description:
      'Turn business or research ideas into working software prototypes you can test with real users in days instead of months.',
  },
  {
    title: 'Understand & Generate Clean Code',
    description:
      'We teach you how to read the code AI generates, understand how components and data fit together, and avoid blind copy-pasting.',
  },
  {
    title: 'Debug & Improve Applications',
    description:
      'Learn how to diagnose error messages, write verification checks, and guide AI tools to fix bugs without breaking existing features.',
  },
  {
    title: 'Work Effectively with AI Coding Agents',
    description:
      'Write clear specifications, break tasks into manageable steps, and review agent changes just like a disciplined engineering lead.',
  },
  {
    title: 'Responsible & Secure Building',
    description:
      'Keep API keys safe on the server, validate user inputs, and review security fundamentals before putting any prototype online.',
  },
];

export default function VibeCodingPage() {
  return (
    <div className="bg-brand-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/academy" className="text-xs font-semibold text-brand-yellow hover:underline">
              &larr; Back to 3A Techvolution Academy
            </Link>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-white/10 px-3.5 py-1 text-xs font-semibold text-brand-yellow">
              AI-Assisted Software Building
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-white">
              Vibe Coding &amp; AI-Assisted Development
            </h1>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              AI coding tools have changed how software is built. At 3A Techvolution Academy, we teach you how to collaborate with AI coding agents to turn ideas into working software—while understanding and verifying the code you ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/academy/programmes/vibe-coding-ai-software-development">
                  Enrol in the Vibe Coding Course &rarr;
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-white text-brand-white hover:bg-brand-white/10" asChild>
                <Link href="/academy/resources">
                  Download Free Specification Template
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Learners Can Do */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">Practical Building</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-brand-charcoal">
              What You Learn to Do with AI Coding Tools
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              Vibe coding at 3A is not about pressing a button and hoping the code works. It is a structured way to plan, prompt, inspect, test, and refine real software.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <Card key={cap.title} className="bg-brand-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-brand-navy text-xs font-extrabold text-brand-yellow mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{cap.title}</h3>
                <p className="text-sm text-brand-dark-gray/80 leading-relaxed">{cap.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI Building Standard */}
      <section className="py-16 bg-brand-gray border-t border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">The 3A Standard</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-brand-charcoal">
                Build Fast, Understand What You Build
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                Many beginners use AI to generate code they cannot explain or fix when something breaks. Our curriculum focuses on specification-first prompting, reading component structure, checking security boundaries, and testing every feature before deployment.
              </p>
            </div>

            <div className="rounded-xl bg-brand-navy p-8 text-brand-white border-l-4 border-brand-yellow">
              <h3 className="text-lg font-bold text-brand-yellow mb-4">Ready to Build Your First AI-Assisted App?</h3>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                Join our 6-week Vibe Coding &amp; AI-Assisted Software Development cohort or attend our next weekend hands-on workshop.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="accent" size="sm" asChild>
                  <Link href="/academy/programmes/vibe-coding-ai-software-development">
                    View 6-Week Course
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/academy/events">
                    View Upcoming Workshops
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

