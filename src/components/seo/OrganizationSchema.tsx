import React from 'react';
import { siteConfig } from '@/config/site';

/**
 * Injects valid JSON-LD Organization, WebSite & EducationalOrganization Structured Data Schema
 * In accordance with PRD.md Section 7 (AC-09.4), docs/api-specification.md,
 * and GEO/SEO Schema skills (.agents/skills/seo-schema & .agents/skills/geo-schema).
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legal.registeredName,
        alternateName: ['3A Technology', '3A Techvolution Academy', '3A Technology Solution Concepts'],
        slogan: siteConfig.tagline,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/brand/3a-logo.svg`,
        },
        image: `${siteConfig.url}/images/brand/og-default.png`,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        taxID: siteConfig.legal.tin,
        identifier: {
          '@type': 'PropertyValue',
          name: 'Corporate Affairs Commission (CAC) Registration Number',
          value: siteConfig.legal.rcNumber,
        },
        foundingDate: '2026-10-12',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '0, Ita Aisa',
          addressLocality: 'Kwara',
          addressRegion: 'Kwara State',
          addressCountry: 'NG',
        },
        areaServed: [
          { '@type': 'Country', name: 'Nigeria' },
          { '@type': 'AdministrativeArea', name: 'Kwara State' },
          { '@type': 'AdministrativeArea', name: 'Abuja (FCT)' },
          { '@type': 'AdministrativeArea', name: 'Lagos' },
        ],
        knowsAbout: [
          'Web & Digital Products Engineering',
          'Custom Software Engineering',
          'Applied AI & Workflow Automation',
          'Data Science, Business Intelligence & Computer Vision',
          'Corporate Branding & Digital Media',
          'Practical Technology Training & Capacity Building',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '3A Technology Solutions Commercial Services',
          itemListElement: siteConfig.nav.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              url: `${siteConfig.url}${service.href}`,
            },
          })),
        },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteConfig.url}/academy#organization`,
        name: '3A Techvolution Academy',
        parentOrganization: {
          '@id': `${siteConfig.url}/#organization`,
        },
        url: `${siteConfig.url}/academy`,
        description:
          'The training and capacity-building arm of 3A Technology Solutions delivering practical, mentor-led engineering cohorts in Web Development, Data Analytics, Applied AI, and Digital Branding.',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        inLanguage: 'en-NG',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
