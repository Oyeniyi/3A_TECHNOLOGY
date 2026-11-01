import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/site';
import { getAllServices, getAllProjects, getAllProgrammes } from '@/lib/content';

describe('Scaffold Smoke & Integrity Tests', () => {
  it('loads site configuration correctly', () => {
    expect(siteConfig.name).toBe('3A Technology Solutions');
    expect(siteConfig.url).toContain('https://');
    expect(siteConfig.contact.email).toBe('info@3atechnology.com');
  });

  it('loads static services datastore with exactly 5 categories', () => {
    const services = getAllServices();
    expect(services).toHaveLength(5);
    expect(services.map((s) => s.id)).toEqual([
      'custom-software',
      'cloud-solutions',
      'it-infrastructure',
      'cybersecurity',
      'it-consulting',
    ]);
  });

  it('loads static projects datastore with 5 enterprise case studies', () => {
    const projects = getAllProjects();
    expect(projects).toHaveLength(5);
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.challenge).toBeTruthy();
      expect(p.solution).toBeTruthy();
      expect(p.results.length).toBeGreaterThan(0);
    });
  });

  it('loads static academy datastore with 3 training tracks', () => {
    const programmes = getAllProgrammes();
    expect(programmes).toHaveLength(3);
    programmes.forEach((prog) => {
      expect(prog.modules.length).toBeGreaterThan(0);
      expect(prog.targetAudience).toBeTruthy();
    });
  });
});
