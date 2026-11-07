/**
 * @file layout.tsx
 * @description Root application layout for 3A Technology Solutions platform.
 * Integrates SkipToContent accessibility link, global Header, global Footer,
 * OrganizationSchema JSON-LD, Google Fonts (Inter & Plus Jakarta Sans), and floating WhatsAppButton.
 */

import React from 'react';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { SkipToContent } from '@/components/ui/SkipToContent';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    '3A Technology Solutions',
    '3A Technology Solution Concepts',
    'Web Development Nigeria',
    'Custom Software Engineering Nigeria',
    'Artificial Intelligence & Automation Nigeria',
    'Data Science & Analytics Africa',
    'Technology Consulting Nigeria',
    'Academic Research & Computing Project Support',
    '3A Techvolution Academy',
    'AI Training & Vibe Coding Nigeria',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.legal.registeredName,
  publisher: siteConfig.legal.registeredName,
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/brand/og-default.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/brand/og-default.png'],
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full scroll-smooth`}>
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
