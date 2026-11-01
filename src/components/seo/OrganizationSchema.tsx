import React from 'react';
import { siteConfig } from '@/config/site';

/**
 * Injects valid JSON-LD Organization Structured Data Schema
 * In accordance with PRD.md Section 7 (AC-09.4) & docs/api-specification.md
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: '3A Technology',
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/3a-logo.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Abuja',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
