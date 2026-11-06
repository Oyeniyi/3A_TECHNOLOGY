import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-charcoal text-brand-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <BrandLogo variant="dark" subtitle="" />
            <p className="text-sm font-semibold tracking-wide text-brand-yellow">{siteConfig.tagline}</p>
            <p className="text-xs text-gray-300 leading-relaxed">{siteConfig.brand.essence}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{siteConfig.description}</p>
          </div>

          {/* Column 2: Commercial Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">Commercial Solutions</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.footer.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 transition-colors hover:text-brand-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Techvolution Academy */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">Techvolution Academy</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.footer.academy.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 transition-colors hover:text-brand-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={siteConfig.academy.enrollmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs font-semibold text-brand-yellow hover:underline"
              >
                External Cohort Enrollment &rarr;
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">Verified Channels</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-300">
              <li>
                <span className="block text-xs font-semibold text-gray-400">Official Email:</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold text-gray-400">Direct WhatsApp / Phone:</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-white"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold text-gray-400">Office Hubs:</span>
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar, CAC Registration & NDPR Compliance Notice */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-xs text-gray-400 space-y-3">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="mt-4 flex gap-6 sm:mt-0">
              <Link href="/privacy" className="hover:text-brand-white">
                Privacy Policy (NDPR Compliant)
              </Link>
              <Link href="/terms" className="hover:text-brand-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-[11px] text-gray-400/90">
            Registered under CAMA 2020 as <strong className="text-gray-300 font-semibold">{siteConfig.legal.registeredName}</strong> &bull; CAC Registration: <strong className="text-gray-300 font-semibold">{siteConfig.legal.rcNumber}</strong> &bull; TIN: <strong className="text-gray-300 font-semibold">{siteConfig.legal.tin}</strong> &bull; Principal Office: {siteConfig.legal.registeredAddress}
          </p>
        </div>
      </div>
    </footer>
  );
}
