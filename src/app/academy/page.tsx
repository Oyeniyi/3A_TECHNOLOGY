import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AcademyHero } from '@/components/academy/AcademyHero';
import { LearningPillars } from '@/components/academy/LearningPillars';
import { FindYourPathSelector } from '@/components/academy/FindYourPathSelector';
import { ProgrammeCard } from '@/components/academy/ProgrammeCard';
import { EventCard } from '@/components/academy/EventCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  getAllProgrammes,
  getAllLearningPathways,
  getAllAcademySupportServices,
  getAllAcademyEvents,
  getAllAcademyResources,
} from '@/lib/content';
import { academyFaqs } from '@/data/programmes';
import { SEMINAR_PROGRAMME_TYPES } from '@/data/events';

export const metadata: Metadata = {
  title: '3A Techvolution Academy — Learn. Build. Advance. | AI Courses, SIWES & Project Support',
  description:
    'Practical technology education, AI skills development, and academic and industrial training support for the next generation of technology professionals.',
};

export default function AcademyPage() {
  const pathways = getAllLearningPathways();
  const programmes = getAllProgrammes();
  const supportServices = getAllAcademySupportServices();
  const siwesService = supportServices.find((s) => s.slug === 'siwes-support');
  const projectService = supportServices.find((s) => s.slug === 'project-support');
  const events = getAllAcademyEvents().slice(0, 3);
  const resources = getAllAcademyResources().slice(0, 3);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: academyFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-brand-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. Academy Hero Section */}
      <AcademyHero />

      {/* 2. Introduction, Value Proposition & 4 Core Pillars */}
      <LearningPillars />

      {/* Interactive "Find Your Learning Path" Discovery Section */}
      <FindYourPathSelector />

      {/* 3. Explore Our Learning Pathways */}
      <section className="py-16 bg-brand-white" aria-labelledby="learning-pathways-heading">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-wider font-bold text-brand-navy">
                A. Audience-Based Learning Pathways
              </p>
              <h2
                id="learning-pathways-heading"
                className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1"
              >
                Explore Our Learning Pathways
              </h2>
              <p className="text-sm text-brand-charcoal mt-2 leading-relaxed">
                Our courses are organized into five clear pathways tailored to your current background—whether you are new to AI, conducting academic research, preparing for NYSC/post-study employment, managing a business, or building applications with AI coding agents.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/academy/pathways">View Full Pathway Breakdown &rarr;</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((pw, idx) => (
              <div
                key={pw.slug}
                className="flex flex-col justify-between rounded-xl border border-brand-border bg-brand-gray/50 p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <span className="inline-flex items-center rounded bg-brand-navy px-2.5 py-0.5 text-xs font-extrabold text-brand-yellow">
                    Pathway 0{idx + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-brand-navy">{pw.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-gray-600">{pw.audienceSummary}</p>
                  <p className="mt-3 text-sm text-brand-charcoal leading-relaxed">
                    {pw.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-brand-border pt-3 text-xs text-brand-charcoal">
                    {pw.focusAreas.slice(0, 4).map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <Link
                    href={pw.ctaHref}
                    className="text-xs font-bold text-brand-navy hover:underline"
                  >
                    {pw.ctaLabel} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Academic & Industrial Training Support (Distinct Service Area) */}
      <section
        className="py-16 bg-brand-navy text-brand-white"
        aria-labelledby="academic-industrial-support-heading"
      >
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              B. Academic &amp; Industrial Training Support
            </span>
            <h2
              id="academic-industrial-support-heading"
              className="mt-3 text-2xl sm:text-4xl font-extrabold text-brand-white"
            >
              Practical Technology Mentorship for University &amp; Polytechnic Students
            </h2>
            <p className="mt-3 text-base text-gray-200 leading-relaxed">
              We provide two separate, ethical mentorship services designed to help students build genuine technical competence during their Industrial Training (IT/SIWES) and academic project journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Service 1: IT/SIWES Training Support */}
            {siwesService && (
              <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <div>
                  <span className="inline-block rounded bg-brand-yellow px-3 py-1 text-xs font-extrabold text-brand-navy">
                    1. Industrial Training Service
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-brand-white">
                    {siwesService.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                    {siwesService.shortSummary}
                  </p>
                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-gray-200 border-t border-white/10 pt-4">
                    {siwesService.areasCovered.slice(0, 6).map((area) => (
                      <li key={area} className="flex items-start gap-2.5">
                        <span className="text-brand-yellow font-bold">✓</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-lg bg-white/10 p-3 text-xs text-gray-200">
                    <strong className="text-brand-yellow">Genuine Skill Guarantee:</strong> Focused on real weekly coding, AI, and data exercises—never fabricated attendance or logbook entries.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap gap-3">
                  <Button variant="accent" size="md" asChild>
                    <Link href="/academy/siwes-support">{siwesService.ctaLabel} &rarr;</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href={siwesService.enquiryHref}>Enquire Directly</Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Service 2: Academic Project Support */}
            {projectService && (
              <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <div>
                  <span className="inline-block rounded bg-brand-yellow px-3 py-1 text-xs font-extrabold text-brand-navy">
                    2. Research &amp; Project Mentorship
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-brand-white">
                    {projectService.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                    {projectService.shortSummary}
                  </p>
                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-gray-200 border-t border-white/10 pt-4">
                    {projectService.areasCovered.slice(0, 6).map((area) => (
                      <li key={area} className="flex items-start gap-2.5">
                        <span className="text-brand-yellow font-bold">✓</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-lg bg-white/10 p-3 text-xs text-gray-200">
                    <strong className="text-brand-yellow">Ethical Mentorship Standard:</strong> Consultation, implementation walkthroughs, and report/defence guidance so you understand and can defend your work.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap gap-3">
                  <Button variant="accent" size="md" asChild>
                    <Link href="/academy/project-support">{projectService.ctaLabel} &rarr;</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href={projectService.enquiryHref}>Book Project Consultation</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Featured Courses and Programmes */}
      <section className="py-16 bg-brand-gray/50" aria-labelledby="academy-courses-heading">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-brand-navy">
                Structured Courses &amp; Cohorts
              </p>
              <h2
                id="academy-courses-heading"
                className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1"
              >
                Featured Courses &amp; Programmes
              </h2>
              <p className="text-sm text-brand-charcoal mt-2 max-w-2xl">
                Each course separates its core curriculum from its current cohort intake status, displaying verified duration and direct enrolment or enquiry actions.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/academy/programmes">View All Courses &amp; Cohorts &rarr;</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Seminars & Workshops */}
      <section className="py-16 bg-brand-white" aria-labelledby="seminars-heading">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-brand-navy">
                C. Seminars, Webinars &amp; Workshops
              </p>
              <h2
                id="seminars-heading"
                className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1"
              >
                Seminars, NYSC Programmes &amp; Practical Workshops
              </h2>
              <p className="text-sm text-brand-charcoal mt-2 max-w-2xl">
                Distinct from our multi-week courses, our seminars and workshops deliver focused sessions for students, NYSC corps members, professionals, and community groups.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/academy/events">View All Seminars &amp; Workshops &rarr;</Link>
            </Button>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {SEMINAR_PROGRAMME_TYPES.map((type) => (
              <span
                key={type}
                className="rounded-full bg-brand-gray px-3.5 py-1 text-xs font-semibold text-brand-charcoal border border-brand-border"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI Learning Resource Hub */}
      <section
        className="py-16 bg-brand-gray border-t border-brand-border"
        aria-labelledby="resources-preview-heading"
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-wider font-bold text-brand-navy">
                D. AI Learning Resource Hub
              </p>
              <h2
                id="resources-preview-heading"
                className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1"
              >
                Practical Guides, Checklists &amp; Educational Materials
              </h2>
              <p className="text-sm text-brand-charcoal mt-2 leading-relaxed">
                A growing collection of learning materials, practical guides, templates and educational resources designed to help you understand and apply artificial intelligence and technology.
              </p>
            </div>
            <Button variant="primary" asChild>
              <Link href="/academy/resources">Open AI Learning Resource Hub &rarr;</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.slug}
                className="flex flex-col justify-between rounded-xl border border-brand-border bg-brand-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                      {resource.category}
                    </span>
                    <Badge
                      variant={
                        resource.availability === 'Available'
                          ? 'emerald'
                          : resource.availability === 'Coming Soon'
                          ? 'yellow'
                          : 'neutral'
                      }
                    >
                      {resource.availability}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{resource.title}</h3>
                  <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <Link
                    href="/academy/resources"
                    className="text-xs font-bold text-brand-navy hover:underline"
                  >
                    {resource.availability === 'Available'
                      ? 'Access Resource in Hub →'
                      : `${resource.availability} — View Details →`}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Customized Training & 9. Community and Engagement Section */}
      <section className="py-16 bg-brand-white border-t border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* 8. Customized Organizational Training */}
            <div className="rounded-2xl border border-brand-border bg-brand-gray/50 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                  For Organizations, Schools &amp; Institutions
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-brand-navy">
                  Customized Technology &amp; AI Training
                </h2>
                <p className="mt-3 text-sm text-brand-charcoal leading-relaxed">
                  We design and deliver tailored training programmes for company teams, university faculties, secondary schools, and professional bodies—focusing on practical workplace AI adoption, workflow productivity, and responsible governance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border flex flex-wrap gap-3">
                <Button variant="primary" size="sm" asChild>
                  <Link href="/academy/corporate-training">
                    Request Customized Training &rarr;
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?type=customized-training&subject=Customized+Organizational+Training">
                    Speak with Our Training Team
                  </Link>
                </Button>
              </div>
            </div>

            {/* 9. Community & Engagement Section */}
            <div className="rounded-2xl border border-brand-border bg-brand-navy p-8 text-brand-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                  Community &amp; Builder Ecosystem
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-brand-white">
                  Vibe Coding, NYSC Sessions &amp; Student Tech Communities
                </h2>
                <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                  Beyond classroom cohorts, 3A Techvolution Academy partners with student associations, NYSC groups, and aspiring builders to host AI literacy orientations and hands-on Vibe Coding build sessions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-3">
                <Button variant="accent" size="sm" asChild>
                  <Link href="/academy/vibe-coding">Explore Vibe Coding &rarr;</Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact?type=seminar-workshop&subject=Community+%2F+NYSC+Seminar+Partnership">
                    Host a Community Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section
        className="py-16 bg-brand-gray border-t border-brand-border"
        aria-labelledby="academy-faq-heading"
      >
        <div className="container-custom max-w-4xl">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Frequently Asked Questions
            </span>
            <h2
              id="academy-faq-heading"
              className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-navy"
            >
              Questions About Our Academy, Courses &amp; Student Support
            </h2>
          </div>

          <div className="space-y-4">
            {academyFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-brand-border bg-brand-white p-6"
              >
                <h3 className="text-base font-bold text-brand-navy">{faq.question}</h3>
                <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-16 bg-brand-navy text-brand-white">
        <div className="container-custom text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
            3A TECHVOLUTION ACADEMY — Learn. Build. Advance.
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-white">
            Take Your Next Step in AI &amp; Technology
          </h2>
          <p className="mt-4 text-base text-gray-200 leading-relaxed">
            Whether you want to enrol in an AI course, get hands-on IT/SIWES training support, discuss your academic project, or organize customized training for your team, we are ready to guide you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link href="/academy/programmes">Explore Courses &amp; Enrol &rarr;</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/academy/siwes-support">Get IT/SIWES Support</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/academy/project-support">Discuss Your Academic Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
