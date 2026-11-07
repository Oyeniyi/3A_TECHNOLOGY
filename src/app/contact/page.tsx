import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact 3A Technology Solutions | Offices in Ilorin, Osogbo & Akure',
  description:
    'Contact 3A Technology Solutions via 3aafricanai@gmail.com or visit our Head Office in Ilorin (Kwara State) and branch offices in Osogbo (Osun State) and Akure (Ondo State). Serving clients across Nigeria and Africa.',
};

export default function ContactPage() {
  const headOffice = siteConfig.contact.offices.find((office) => office.isHeadquarters);
  const branchOffices = siteConfig.contact.offices.filter((office) => !office.isHeadquarters);

  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
                Contact Us
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
                Contact 3A Technology Solutions
              </h1>
              <p className="text-base text-brand-dark-gray/85 leading-relaxed">
                Whether you are a business looking for technology solutions, an organization exploring AI adoption, or an individual seeking professional technology support, our team is ready to hear from you.
              </p>
            </div>

            {/* Official Business Email */}
            <div className="rounded-xl border border-brand-navy/20 bg-brand-navy p-6 text-brand-white shadow-sm">
              <span className="inline-block rounded bg-brand-yellow px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-dark-gray">
                Official Business Email
              </span>
              <p className="mt-3 text-xs text-brand-white/80">
                Primary channel for commercial project enquiries, organizational training, and 3A Techvolution Academy support:
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold text-brand-yellow hover:underline break-all"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Physical Office Locations (Head Office + 2 Branch Offices) */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-extrabold text-brand-navy">
                  Our Office Locations
                </h2>
                <p className="mt-1 text-xs text-gray-600">
                  Physical offices in Kwara, Osun, and Ondo States:
                </p>
              </div>

              {headOffice && (
                <div className="rounded-xl border-2 border-brand-navy bg-brand-light-gray/60 p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-extrabold text-brand-navy">
                      {headOffice.label}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-brand-navy px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-yellow">
                      Official Headquarters
                    </span>
                  </div>
                  <p className="text-sm font-medium text-brand-dark-gray leading-relaxed">
                    {headOffice.address}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {branchOffices.map((branch) => (
                  <div
                    key={branch.id}
                    className="rounded-xl border border-brand-border bg-brand-white p-5 shadow-sm"
                  >
                    <span className="inline-block rounded bg-brand-light-gray px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Branch Office
                    </span>
                    <h3 className="text-sm font-bold text-brand-navy mb-1">
                      {branch.label}
                    </h3>
                    <p className="text-xs text-brand-dark-gray leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Service Coverage Statement */}
            <div className="rounded-xl border border-brand-border bg-brand-light-gray/50 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                Geographic Service Coverage
              </span>
              <h2 className="mt-1 text-base font-extrabold text-brand-navy">
                {siteConfig.contact.serviceCoverage.shortStatement}
              </h2>
              <p className="mt-2 text-xs text-brand-dark-gray/85 leading-relaxed">
                {siteConfig.contact.serviceCoverage.supportingCopy}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.contact.serviceCoverage.regions.map((region) => (
                  <span
                    key={region}
                    className="inline-flex items-center rounded-md border border-brand-border bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-brand-navy"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-brand-white p-6 sm:p-8 rounded-xl border border-brand-light-gray shadow-sm">
            <h2 className="text-xl font-bold text-brand-navy mb-4">Send Us a Message</h2>
            <Suspense fallback={<div className="p-8 text-center text-sm text-brand-dark-gray/60">Loading inquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
