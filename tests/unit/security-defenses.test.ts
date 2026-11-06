import { describe, it, expect, beforeEach } from 'vitest';
import { isHoneypotTriggered } from '../../src/lib/security/honeypot';
import { sanitizeHeader, sanitizeBodyText } from '../../src/lib/security/sanitizer';
import { checkRateLimit, resetRateLimitStore, hashClientIp } from '../../src/lib/security/rate-limiter';

describe('Anti-Abuse & Security Defenses (TASK-024 / ARCH-09 / SEC-02..05)', () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  describe('Honeypot Silent Drop (SEC-03)', () => {
    it('returns false when hp_field is empty or whitespace', () => {
      expect(isHoneypotTriggered('')).toBe(false);
      expect(isHoneypotTriggered('   ')).toBe(false);
      expect(isHoneypotTriggered({ hp_field: '' })).toBe(false);
    });

    it('returns true when hp_field is populated by a bot', () => {
      expect(isHoneypotTriggered('http://spambot.ru')).toBe(true);
      expect(isHoneypotTriggered({ hp_field: 'bot-payload' })).toBe(true);
    });
  });

  describe('CRLF Header Sanitizer & Body Sanitizer (SEC-04)', () => {
    it('strips carriage returns and newlines from header strings', () => {
      const malicious = 'John Doe\r\nBcc: attacker@spam.com\nSubject: Injected';
      const sanitized = sanitizeHeader(malicious);
      expect(sanitized).not.toContain('\r');
      expect(sanitized).not.toContain('\n');
      expect(sanitized).toBe('John Doe Bcc: attacker@spam.com Subject: Injected');
    });

    it('removes null bytes and normalizes line breaks in body text', () => {
      const rawBody = 'Line 1\r\nLine 2\0Hidden';
      const sanitized = sanitizeBodyText(rawBody);
      expect(sanitized).toBe('Line 1\nLine 2Hidden');
    });
  });

  describe('Sliding-Window IP Rate Limiter & SHA-256 Anonymization (SEC-05)', () => {
    it('hashes client IPs deterministically without storing raw IP strings', () => {
      const ip = '197.210.52.10';
      const hash = hashClientIp(ip);
      expect(hash).toHaveLength(32);
      expect(hash).not.toContain('197.210');
      expect(hashClientIp(ip)).toBe(hash);
    });

    it('allows up to 5 requests per hour per IP and blocks the 6th request', () => {
      const clientIp = '102.89.33.14';
      for (let i = 1; i <= 5; i++) {
        const res = checkRateLimit(clientIp);
        expect(res.allowed).toBe(true);
        expect(res.remaining).toBe(5 - i);
      }

      const sixthAttempt = checkRateLimit(clientIp);
      expect(sixthAttempt.allowed).toBe(false);
      expect(sixthAttempt.remaining).toBe(0);
    });

    it('isolates rate limits across distinct client IP addresses', () => {
      for (let i = 0; i < 5; i++) {
        checkRateLimit('10.0.0.1');
      }
      expect(checkRateLimit('10.0.0.1').allowed).toBe(false);
      expect(checkRateLimit('10.0.0.2').allowed).toBe(true);
    });
  });
});

