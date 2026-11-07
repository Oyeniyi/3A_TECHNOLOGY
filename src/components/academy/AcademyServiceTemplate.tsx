import React from 'react';
import Link from 'next/link';
import { AcademySupportService } from '@/types/content';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function AcademyServiceTemplate({ service }: { service: AcademySupportService }) {
  const whatsappUrl = generateWhatsAppUrl({
    type: 'academy',
    courseTitle: service.title,
  });

  const isSiwes = service.slug === 'siwes-support';
  const isProject = service.slug === 'project-support';

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-navy py-16 md:py-20 text-brand-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/academy"
              className="text-xs font-semibold text-brand-yellow hover:underline"
            >
              &larr; Back to 3A Techvolution Academy
            </Link>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-brand-yellow">
              {service.badgeLabel}
            </div>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-brand-white">
              {service.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              {service.shortSummary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href={service.enquiryHref}>{service.ctaLabel} &rarr;</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Speak with an Academy Advisor on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distinction Notice for IT/SIWES vs Academic Project Support */}
      {(isSiwes || isProject) && (
        <section className="border-b border-brand-border bg-brand-gray py-4">
          <div className="container-custom flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-brand-charcoal">
            <div>
              <strong className="text-brand-navy">Clear Service Distinction:</strong>{' '}
              {isSiwes
                ? 'This page is specifically for Industrial Training (IT / SIWES) skill development, weekly tasks, and SIWES logbook/report guidance.'
                : 'This page is specifically for undergraduate and postgraduate Academic Project & Research consultation and implementation mentorship.'}
            </div>
            <Link
              href={isSiwes ? '/academy/project-support' : '/academy/siwes-support'}
              className="font-bold text-brand-navy hover:underline shrink-0"
            >
              {isSiwes
                ? 'Need Final-Year Project Support instead? Visit Academic Project Support →'
                : 'Need Industrial Training guidance instead? Visit IT/SIWES Training Support →'}
            </Link>
          </div>
        </section>
      )}

      {/* 1. What the Service Is & Ethical Integrity Policy */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                1. What the Service Is
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Overview of {service.title}
              </h2>
              <p className="text-base text-brand-charcoal leading-relaxed">{service.whatItIs}</p>

              <div className="mt-6 rounded-xl border-l-4 border-l-brand-navy bg-brand-gray p-5 text-sm text-brand-charcoal">
                {service.ethicalNotice}
              </div>
            </div>

            {/* 2. Who It Is For */}
            <div className="lg:col-span-5 rounded-2xl border border-brand-border bg-brand-gray/50 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                2. Who It Is For
              </span>
              <h3 className="mt-1 text-xl font-bold text-brand-navy mb-4">
                Intended Participants
              </h3>
              <ul className="space-y-3 text-sm text-brand-charcoal">
                {service.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-brand-yellow">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You Can Expect & 4. Areas Covered */}
      <section className="py-16 bg-brand-gray border-y border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* 3. What the Visitor Can Expect */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                3. What You Can Expect
              </span>
              <h2 className="mt-1 text-2xl font-bold text-brand-navy mb-6">
                How We Support Your Learning &amp; Progress
              </h2>
              <div className="space-y-4">
                {service.whatToExpect.map((item, idx) => (
                  <Card key={idx} className="p-4 bg-brand-white">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-navy text-xs font-bold text-brand-yellow">
                        0{idx + 1}
                      </span>
                      <p className="text-sm text-brand-charcoal leading-relaxed">{item}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* 4. The Areas Covered */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                4. Areas Covered
              </span>
              <h2 className="mt-1 text-2xl font-bold text-brand-navy mb-6">
                Scope of Support &amp; Guidance
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.areasCovered.map((area, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-brand-border bg-brand-white p-3.5 text-xs sm:text-sm font-medium text-brand-charcoal"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>

              {service.disciplinesSupported && service.disciplinesSupported.length > 0 && (
                <div className="mt-8 rounded-xl border border-brand-border bg-brand-white p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Academic Disciplines Supported
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.disciplinesSupported.map((disc) => (
                      <span
                        key={disc}
                        className="rounded-full bg-brand-gray px-3 py-1 text-xs font-semibold text-brand-charcoal border border-brand-border"
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How the Process Works */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              5. How the Process Works
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-navy">
              From Initial Enquiry to Practical Completion
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step) => (
              <Card key={step.step} className="p-6 bg-brand-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-navy text-xs font-extrabold text-brand-yellow mb-4">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      {service.faqs.length > 0 && (
        <section className="py-16 bg-brand-gray border-t border-brand-border">
          <div className="container-custom max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              6. Frequently Asked Questions
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8">
              Common Questions About {service.title}
            </h2>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
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
      )}

      {/* 7. Final Enquiry CTA */}
      <section className="py-16 bg-brand-navy text-brand-white">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-white">
              Ready to Start with {service.title}?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed">
              Submit your details through our dedicated Academy enquiry form and our mentors will get back to you promptly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button variant="accent" size="lg" asChild>
              <Link href={service.enquiryHref}>{service.ctaLabel} &rarr;</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/academy">Back to Academy Overview</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

