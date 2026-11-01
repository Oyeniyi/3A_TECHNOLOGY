import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Engineering & Admissions | Abuja, Nigeria',
  description:
    'Reach 3A Technology Solutions for enterprise consultations, partnerships, or 3A Academy admissions inquiries.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-20 bg-brand-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">
              Direct Inquiries
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
              Get in Touch with Our Team
            </h1>
            <p className="text-base text-brand-dark-gray/80 mb-8 leading-relaxed">
              Whether you are an enterprise seeking an architectural audit, a business requiring managed cloud infrastructure, or a professional inquiring about Academy admissions, our team is ready to assist.
            </p>

            <div className="space-y-6 bg-brand-light-gray/60 p-6 rounded-xl border border-brand-light-gray/80 mb-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                  Headquarters & Innovation Hub
                </h3>
                <p className="text-sm text-brand-dark-gray">{siteConfig.address}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                  Direct Communications
                </h3>
                <p className="text-sm text-brand-dark-gray">
                  Email:{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-brand-navy font-medium underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="text-sm text-brand-dark-gray">
                  Phone:{' '}
                  <a href={`tel:${siteConfig.phone}`} className="text-brand-navy font-medium">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                  Operating Hours
                </h3>
                <p className="text-sm text-brand-dark-gray">Monday – Friday: 08:00 – 17:00 West Africa Time (WAT)</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-white p-6 sm:p-8 rounded-xl border border-brand-light-gray shadow-sm">
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
