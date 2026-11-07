import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/site';
import {
  getAllServices,
  getAllProjects,
  getProjectsByCollection,
  getProjectBySlug,
  getServiceBySlug,
  getAllProgrammes,
  getAllLearningPathways,
  getProgrammesByPathway,
  getAllAcademySupportServices,
  getAcademySupportServiceBySlug,
  getAllAcademyEvents,
  getAllAcademyResources,
} from '@/lib/content';
import { isSafeActionUrl } from '@/lib/security/sanitizer';

describe('Scaffold Smoke & Strategic Content Integrity Tests', () => {
  it('loads site configuration, GitHub links, and official CAC registration metadata correctly', () => {
    expect(siteConfig.name).toBe('3A Technology Solutions');
    expect(siteConfig.tagline).toBe('Ideas • Technology • Impact');
    expect(siteConfig.url).toContain('https://');
    expect(siteConfig.githubUrl).toBe('https://github.com/Oyeniyi/3A_TECHNOLOGY');
    expect(siteConfig.studentProjectsGithubUrl).toBe('https://github.com/psalm001');
    expect(siteConfig.contact.email).toBe('3aafricanai@gmail.com');
    expect(siteConfig.contact.offices).toHaveLength(3);
    expect(siteConfig.contact.offices[0].isHeadquarters).toBe(true);
    expect(siteConfig.contact.offices[0].address).toBe(
      'Agbo Area, Olunlade, Ilorin, Kwara State, Nigeria.'
    );
    expect(siteConfig.contact.offices[1].isHeadquarters).toBe(false);
    expect(siteConfig.contact.offices[1].address).toBe(
      'Kola Balogun Area, Osogbo, Osun State, Nigeria.'
    );
    expect(siteConfig.contact.offices[2].isHeadquarters).toBe(false);
    expect(siteConfig.contact.offices[2].address).toBe(
      'Dominion College, Behind Health Centre, Oba-Ile, Akure, Ondo State, Nigeria.'
    );
    expect(siteConfig.contact.serviceCoverage.headline).toContain('Nigeria and Africa');
    expect(siteConfig.legal.registeredName).toBe('3A TECHNOLOGY SOLUTION CONCEPTS');
    expect(siteConfig.legal.rcNumber).toBe('BN 9931488');
    expect(siteConfig.legal.tin).toBe('2622397219188');
    expect(siteConfig.brand.pillars).toHaveLength(5);
  });

  it('loads static services datastore with all 6 commercial services, excludes Branding & Digital Media, and maps portfolio evidence', () => {
    const services = getAllServices();
    expect(services).toHaveLength(6);
    const slugs = services.map((s) => s.slug);
    expect(slugs).toEqual([
      'web-development',
      'custom-software',
      'ai-automation',
      'data-science-analytics',
      'technology-consulting',
      'academic-research-support',
    ]);
    expect(slugs).not.toContain('brand-digital-media');

    const webService = getServiceBySlug('web-development');
    expect(webService?.relatedProjectSlugs).toEqual([
      'raph2-interiors',
      'dominion-college-portal',
      'custom-wedding-invitation-platform',
    ]);

    const softwareService = getServiceBySlug('custom-software');
    expect(softwareService?.relatedProjectSlugs).toEqual([
      'marketmind-ai',
      'dominion-college-portal',
      'custom-wedding-invitation-platform',
    ]);

    const aiService = getServiceBySlug('ai-automation');
    expect(aiService?.relatedProjectSlugs).toEqual(['marketmind-ai']);
  });

  it('organizes portfolio into 3 collections and enforces business context & confidentiality rules', () => {
    const allProjects = getAllProjects();
    expect(allProjects.length).toBeGreaterThanOrEqual(7);

    const businessCollection = getProjectsByCollection('business-client-solutions');
    const websitesCollection = getProjectsByCollection('websites-digital-experiences');
    const studentCollection = getProjectsByCollection('student-research-projects');

    expect(businessCollection.map((p) => p.slug)).toEqual([
      'marketmind-ai',
      'dominion-college-portal',
      'raph2-interiors',
      'custom-wedding-invitation-platform',
    ]);

    expect(websitesCollection.map((p) => p.slug)).toEqual([
      'dominion-college-portal',
      'raph2-interiors',
      'custom-wedding-invitation-platform',
    ]);

    expect(studentCollection.length).toBeGreaterThanOrEqual(2);
    expect(studentCollection.length).toBeLessThanOrEqual(3);

    // 1. MarketMind AI — Akinmart Store
    const marketMind = getProjectBySlug('marketmind-ai');
    expect(marketMind?.clientOrOrganization).toBe('Akinmart Store');
    expect(marketMind?.classification).toBe('AI-Powered Business Operations Tool');
    expect(marketMind?.shortSummary).toContain('Akinmart Store');
    expect(marketMind?.visibility).toBe('confidential');
    expect(marketMind?.liveUrl).toBeUndefined();
    expect(marketMind?.githubUrl).toBeUndefined();

    // 2. Dominion College School Management Portal
    const dominion = getProjectBySlug('dominion-college-portal');
    expect(dominion?.clientOrOrganization).toBe('Dominion College');
    expect(dominion?.classification).toBe('Institutional Platform');
    expect(dominion?.visibility).toBe('confidential');
    expect(dominion?.liveUrl).toBeUndefined();
    expect(dominion?.githubUrl).toBeUndefined();
    expect(dominion?.shortSummary.toLowerCase()).toContain('payment');
    expect(dominion?.shortSummary.toLowerCase()).toContain('result');

    // 3. Raph2 Interiors — Business Website & Landing Page
    const raph2 = getProjectBySlug('raph2-interiors');
    expect(raph2?.classification).toBe('Website & Landing Page');
    expect(raph2?.visibility).toBe('public');
    expect(raph2?.liveUrl).toBe('https://raph2-interior.netlify.app/');

    // 4. Confidential Wedding Invitation Platform
    const wedding = getProjectBySlug('custom-wedding-invitation-platform');
    expect(wedding?.classification).toBe('Custom Digital Experience');
    expect(wedding?.visibility).toBe('confidential');
    expect(wedding?.liveUrl).toBeUndefined();
    expect(wedding?.githubUrl).toBeUndefined();
    expect(JSON.stringify(allProjects)).not.toContain('OLAGUNJU-SAMUEL');

    // 5. Confidential projects must never expose liveUrl or githubUrl
    allProjects
      .filter((p) => p.visibility === 'confidential')
      .forEach((p) => {
        expect(p.liveUrl).toBeUndefined();
        expect(p.githubUrl).toBeUndefined();
        expect(p.confidentialityNotice).toBeTruthy();
      });
  });

  it('loads Academy learning pathways, courses with separated cohort info, and distinct IT/SIWES vs Academic Project Support services', () => {
    const pathways = getAllLearningPathways();
    expect(pathways).toHaveLength(5);
    expect(pathways.map((p) => p.slug)).toEqual([
      'ai-for-beginners',
      'ai-for-students-researchers',
      'ai-for-graduates-nysc',
      'ai-for-professionals-businesses',
      'ai-development-vibe-coding',
    ]);

    pathways.forEach((pw) => {
      const mapped = getProgrammesByPathway(pw.slug);
      expect(mapped.length).toBeGreaterThan(0);
    });

    const programmes = getAllProgrammes();
    expect(programmes.length).toBeGreaterThanOrEqual(4);
    programmes.forEach((p) => {
      expect(p.learningPathways.length).toBeGreaterThan(0);
      expect(p.cohortInfo).toBeDefined();
      expect(isSafeActionUrl(p.enquiryRoute)).toBe(true);
      // Ensure no invented external Google Form links are hardcoded
      expect(p.enrollmentUrl || '').not.toContain('forms.google.com/3a-');
    });

    // Ensure IT/SIWES and Academic Project Support are two distinct Academy services
    const supportServices = getAllAcademySupportServices();
    expect(supportServices.map((s) => s.slug)).toEqual([
      'siwes-support',
      'project-support',
      'corporate-training',
    ]);

    const siwes = getAcademySupportServiceBySlug('siwes-support');
    const projectSupport = getAcademySupportServiceBySlug('project-support');
    expect(siwes?.title).toBe('IT / SIWES Training Support');
    expect(projectSupport?.title).toBe('Academic Project Support');
    expect(siwes?.ctaLabel).toBe('Get IT/SIWES Support');
    expect(projectSupport?.ctaLabel).toBe('Discuss Your Academic Project');
  });

  it('loads Academy seminars/workshops and enforces honest Resource Hub availability (Available, Coming Soon, In Development)', () => {
    const events = getAllAcademyEvents();
    expect(events.length).toBeGreaterThanOrEqual(4);
    events.forEach((ev) => {
      expect(ev.title).toBeTruthy();
      expect(ev.dateDisplay).toBeTruthy();
      expect(ev.venueOrPlatform).toBeTruthy();
      expect(isSafeActionUrl(ev.enquiryHref)).toBe(true);
    });

    const resources = getAllAcademyResources();
    const available = resources.filter((r) => r.availability === 'Available');
    const comingSoon = resources.filter((r) => r.availability === 'Coming Soon');
    const inDev = resources.filter((r) => r.availability === 'In Development');

    expect(available.length).toBeGreaterThan(0);
    expect(comingSoon.length).toBeGreaterThan(0);
    expect(inDev.length).toBeGreaterThan(0);

    // Available free guides have valid local PDF paths
    available.forEach((r) => {
      expect(r.downloadUrl).toMatch(/^\/resources\/.*\.pdf$/);
    });

    // Coming Soon & In Development resources must never expose download URLs or invented prices
    [...comingSoon, ...inDev].forEach((r) => {
      expect(r.downloadUrl).toBeUndefined();
      expect(r.purchaseUrl).toBeUndefined();
      expect(r.priceDisplay).toBeUndefined();
    });
  });
});
