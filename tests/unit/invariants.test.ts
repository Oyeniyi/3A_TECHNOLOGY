import { describe, it, expect } from 'vitest';
import { isHoneypotTriggered } from '@/lib/security/honeypot';
import { sanitizeInput } from '@/lib/security/sanitizer';

describe('Architectural Invariants & Security Guardrails', () => {
  it('detects and flags bot honeypot traps (ARCH-07)', () => {
    expect(isHoneypotTriggered({ hp_field: 'spammer_input' }, 'hp_field')).toBe(true);
    expect(isHoneypotTriggered({ hp_field: '' }, 'hp_field')).toBe(false);
    expect(isHoneypotTriggered({}, 'hp_field')).toBe(false);
  });

  it('strips dangerous HTML tags and script injections', () => {
    const raw = '<script>alert("xss")</script>Hello <b>World</b>';
    const cleaned = sanitizeInput(raw);
    expect(cleaned).not.toContain('<script>');
    expect(cleaned).toContain('Hello');
  });

  it('strictly validates Phase 1 zero-runtime-database invariant (ARCH-01)', () => {
    // Verified: No Prisma, Drizzle, Mongoose, or TypeORM runtime connections exist in package.json
    const packageJson = require('../../package.json');
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };
    expect(allDeps['prisma']).toBeUndefined();
    expect(allDeps['@prisma/client']).toBeUndefined();
    expect(allDeps['drizzle-orm']).toBeUndefined();
    expect(allDeps['mongoose']).toBeUndefined();
  });
});
