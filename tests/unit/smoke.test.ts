import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/site';
import {
  getAllServices,
  getAllProjects,
  getAllProgrammes,
  getAllAcademyEvents,
  getAllAcademyResources,
} from '@/lib/content';
import { isSafeActionUrl } from '@/lib/security/sanitizer';

describe('Scaffold Smoke & Strategic Content Integrity Tests', () => {
  it('loads site configuration, GitHub repository link, and official CAC registration metadata correctly', () => {
    expect(siteConfig.name).toBe('3A Technology Solutions');
    expect(siteConfig.tagline).toBe('Ideas • Technology • Impact');
    expect(siteConfig.url).toContain('https://');
    expect(siteConfig.githubUrl).toBe('https://github.com/Oyeniyi/3A_TECHNOLOGY');
    expect(siteConfig.contact.email).toBe('contact@3atechnology.com.ng');
    expect(siteConfig.legal.registeredName).toBe('3A TECHNOLOGY SOLUTION CONCEPTS');
    expect(siteConfig.legal.rcNumber).toBe('BN 9931488');
    expect(siteConfig.legal.tin).toBe('2622397219188');
    expect(siteConfig.brand.pillars).toHaveLength(5);
    expect(siteConfig.brand.pillars.map((p) => p.title)).toEqual([
      'Smart',
      'Simple',
      'Professional',
      'Human',
      'Future-Ready',
    ]);
  });

  it('loads static services datastore with all 6 commercial services and strictly excludes Branding & Digital Media', () => {
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

    const consulting = services.find((s) => s.slug === 'technology-consulting');
    const academic = services.find((s) => s.slug === 'academic-research-support');
    expect(consulting?.title).toBe('Technology Consulting');
    expect(academic?.title).toBe('Academic Research & Project Support');
    expect(academic?.ethicalNote).toContain('research consultation, technical mentorship');
  });

  it('classifies MarketMind AI as the only 3A Prototype and other projects as Student Project', () => {
    const projects = getAllProjects();
    expect(projects).toHaveLength(5);

    const prototypes = projects.filter((p) => p.classification === '3A Prototype');
    const studentProjects = projects.filter((p) => p.classification === 'Student Project');

    expect(prototypes).toHaveLength(1);
    expect(prototypes[0].slug).toBe('marketmind-ai');
    expect(studentProjects).toHaveLength(4);

    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.theChallenge).toBeTruthy();
      expect(p.theSolution).toBeTruthy();
      expect(p.technologiesUsed.length).toBeGreaterThan(0);
      expect(p.githubUrl).toBe('https://github.com/Oyeniyi/3A_TECHNOLOGY');
    });
  });

  it('loads AI-focused Academy course catalogue with course-specific enrolment URLs and valid statuses', () => {
    const programmes = getAllProgrammes();
    expect(programmes.length).toBeGreaterThanOrEqual(4);

    const openCourses = programmes.filter((p) => p.status === 'Open for Enrolment');
    expect(openCourses.length).toBeGreaterThan(0);

    const urls = openCourses.map((c) => c.enrollmentUrl);
    expect(new Set(urls).size).toBe(openCourses.length);
    urls.forEach((url) => {
      expect(isSafeActionUrl(url)).toBe(true);
    });

    programmes.forEach((prog) => {
      expect(prog.learningOutcomes.length).toBeGreaterThan(0);
      expect(prog.curriculumModules.length).toBeGreaterThan(0);
      expect(prog.targetAudience.length).toBeGreaterThan(0);
    });
  });

  it('loads Academy seminars/workshops and distinguishes free vs paid learning resources safely', () => {
    const events = getAllAcademyEvents();
    expect(events.length).toBeGreaterThan(0);
    events.forEach((ev) => {
      expect(ev.title).toBeTruthy();
      expect(ev.dateDisplay).toBeTruthy();
    });

    const resources = getAllAcademyResources();
    expect(resources.length).toBeGreaterThan(0);
    const freeResources = resources.filter((r) => r.accessType === 'Free');
    const paidResources = resources.filter((r) => r.accessType === 'Paid');

    expect(freeResources.length).toBeGreaterThan(0);
    expect(paidResources.length).toBeGreaterThan(0);

    freeResources.forEach((r) => {
      expect(r.downloadUrl).toMatch(/^\/resources\/.*\.pdf$/);
    });

    paidResources.forEach((r) => {
      expect(r.downloadUrl).toBeUndefined();
      expect(r.priceDisplay).toBeTruthy();
      expect(isSafeActionUrl(r.purchaseUrl)).toBe(true);
    });
  });
});
