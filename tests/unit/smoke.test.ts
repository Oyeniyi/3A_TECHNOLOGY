import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/site';
import { getAllServices, getAllProjects, getAllProgrammes } from '@/lib/content';

describe('Scaffold Smoke & Integrity Tests', () => {
  it('loads site configuration and official CAC registration metadata correctly', () => {
    expect(siteConfig.name).toBe('3A Technology Solutions');
    expect(siteConfig.tagline).toBe('Ideas • Technology • Impact');
    expect(siteConfig.url).toContain('https://');
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

  it('loads static services datastore with exactly 5 categories', () => {
    const services = getAllServices();
    expect(services).toHaveLength(5);
    expect(services.map((s) => s.slug)).toEqual([
      'web-development',
      'custom-software',
      'ai-automation',
      'data-science-analytics',
      'brand-digital-media',
    ]);
  });

  it('loads static projects datastore with 5 enterprise case studies', () => {
    const projects = getAllProjects();
    expect(projects).toHaveLength(5);
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.theChallenge).toBeTruthy();
      expect(p.theSolution).toBeTruthy();
      expect(p.technologiesUsed.length).toBeGreaterThan(0);
    });
  });

  it('loads static academy datastore with 3 training tracks', () => {
    const programmes = getAllProgrammes();
    expect(programmes).toHaveLength(3);
    programmes.forEach((prog) => {
      expect(prog.curriculumModules.length).toBeGreaterThan(0);
      expect(prog.targetAudience.length).toBeGreaterThan(0);
    });
  });
});
