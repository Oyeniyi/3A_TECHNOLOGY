import React from 'react';
import { siteConfig } from '@/config/site';

/**
 * Injects valid JSON-LD Organization, WebSite & EducationalOrganization Structured Data Schema
 * Reflecting all 6 commercial services of 3A Technology Solutions and the AI-focused
 * 3A Techvolution Academy.
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
        sameAs: [siteConfig.githubUrl],
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/brand/3a-logo-mark.png`,
        },
        image: `${siteConfig.url}/images/brand/og-default.png`,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        taxID: siteConfig.legal.tin,
        identifier: {
          '@type': 'PropertyValue',
          name: 'Corporate Affairs Commission (CAC) Registration Number',
          value: siteConfig.legal.rcNumber,
        },
        foundingDate: '2026-10-12',
        address: {
          '@type': 'PostalAddress',
          name: 'Head Office — Ilorin, Kwara State',
          streetAddress: 'Agbo Area, Olunlade',
          addressLocality: 'Ilorin',
          addressRegion: 'Kwara State',
          addressCountry: 'NG',
        },
        location: [
          {
            '@type': 'Place',
            name: '3A Technology Solutions — Head Office (Ilorin)',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Agbo Area, Olunlade',
              addressLocality: 'Ilorin',
              addressRegion: 'Kwara State',
              addressCountry: 'NG',
            },
          },
          {
            '@type': 'Place',
            name: '3A Technology Solutions — Branch Office (Osogbo)',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Kola Balogun Area',
              addressLocality: 'Osogbo',
              addressRegion: 'Osun State',
              addressCountry: 'NG',
            },
          },
          {
            '@type': 'Place',
            name: '3A Technology Solutions — Branch Office (Akure)',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Dominion College, Behind Health Centre, Oba-Ile',
              addressLocality: 'Akure',
              addressRegion: 'Ondo State',
              addressCountry: 'NG',
            },
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'Nigeria' },
          { '@type': 'Continent', name: 'Africa' },
        ],
        knowsAbout: [
          'Web & Digital Product Development',
          'Custom Software Engineering',
          'Artificial Intelligence & Workflow Automation',
          'Data Science, Machine Learning & Computer Vision',
          'Technology Consulting & Architecture Advisory',
          'Academic Research & Computing/Mathematics Project Support',
          'Practical AI Education, Prompt Engineering & Vibe Coding',
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
          'The AI-focused educational academy of 3A Technology Solutions, helping students, graduates, professionals, business owners, and organizations master practical AI fluency, prompt engineering, vibe coding, and AI workflow automation.',
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
