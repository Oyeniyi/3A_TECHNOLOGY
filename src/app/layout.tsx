/**
 * @file layout.tsx
 * @description Root application layout for 3A Technology Solutions platform.
 * Integrates SkipToContent accessibility link, global Header, global Footer,
 * OrganizationSchema JSON-LD, and floating WhatsAppButton.
 */

import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { SkipToContent } from '@/components/ui/SkipToContent';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Enterprise IT Solutions & Academy`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Enterprise Software Engineering',
    'Cloud Migration Nigeria',
    'Cybersecurity Audits Abuja',
    '3A Academy',
    'Tech Training West Africa',
    'IT Solutions Provider Nigeria',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <OrganizationSchema />
      </head>
      <body className="flex flex-col min-h-screen bg-brand-white text-brand-dark-gray font-sans antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
