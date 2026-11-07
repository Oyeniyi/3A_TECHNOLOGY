import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function ConversionBanner() {
  return (
    <section className="bg-brand-white py-20 border-t border-brand-border" aria-labelledby="conversion-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Service Coverage & Physical Offices Section */}
        <div className="mb-16 rounded-2xl border border-brand-border bg-brand-light-gray/50 p-6 sm:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Nationwide &amp; Continental Reach
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-navy">
              {siteConfig.contact.serviceCoverage.headline}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-dark-gray/85 leading-relaxed">
              {siteConfig.contact.serviceCoverage.supportingCopy}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {siteConfig.contact.offices.map((office) => (
              <div
                key={office.id}
                className={`rounded-xl p-5 ${
                  office.isHeadquarters
                    ? 'border-2 border-brand-navy bg-brand-white shadow-sm'
                    : 'border border-brand-border bg-brand-white'
                }`}
              >
                <span
                  className={`inline-block rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2 ${
                    office.isHeadquarters
                      ? 'bg-brand-navy text-brand-yellow'
                      : 'bg-brand-light-gray text-brand-navy'
                  }`}
                >
                  {office.isHeadquarters ? 'Head Office' : 'Branch Office'}
                </span>
                <h3 className="text-sm font-extrabold text-brand-navy">{office.city}, {office.state}</h3>
                <p className="mt-1 text-xs text-brand-dark-gray leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 id="conversion-heading" className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Have a project, research topic, or AI training need? Let&rsquo;s talk.
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Tell us what you are building, researching, or learning, and we will put together a clear consultation plan or project quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/request-quote" data-analytics-event="click_request_quote">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Project Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center rounded-md border border-brand-border bg-brand-light-gray/60 px-5 py-3 text-sm font-bold text-brand-navy hover:bg-brand-light-gray transition-colors w-full sm:w-auto"
            >
              Email: {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
