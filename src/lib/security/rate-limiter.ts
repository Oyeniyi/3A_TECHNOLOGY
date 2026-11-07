/**
 * Sliding-Window IP Rate Limiter & Trustworthy Client IP Extraction
 * In accordance with docs/security-specification.md Section 4 (SEC-05) & ARCH-09.
 * Note: In Phase 1 zero-database architecture (ARCH-01), rate limiting operates per
 * server/isolate instance in memory using one-way SHA-256 IP hashes.
 */

import { createHash } from 'crypto';

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour rolling window
const MAX_REQUESTS = 5; // Max 5 submissions per hour per IP
const MAX_TRACKED_KEYS = 5000; // Prevent unbounded memory growth
const RATE_LIMIT_SALT = process.env.RATE_LIMIT_SALT || '3a-ephemeral-rate-limit-salt-v1';

/**
 * Extracts a trustworthy client IP from proxy headers (`x-vercel-forwarded-for`,
 * `cf-connecting-ip`, `x-real-ip`, `x-forwarded-for`), validating IP format.
 */
export function extractClientIp(
  headerGetter: (name: string) => string | null | undefined,
  explicitIp?: string
): string {
  if (explicitIp && explicitIp !== 'unknown-ip' && explicitIp !== 'unknown-client') {
    return explicitIp.trim();
  }

  const trustedHeaders = [
    'x-vercel-forwarded-for',
    'cf-connecting-ip',
    'x-real-ip',
    'x-forwarded-for',
  ];

  for (const headerName of trustedHeaders) {
    const rawValue = headerGetter(headerName);
    if (rawValue) {
      const candidate = rawValue.split(',')[0].trim();
      if (candidate && /^[0-9a-fA-F.:]{3,45}$/.test(candidate)) {
        return candidate;
      }
    }
  }

  return 'unknown-client';
}

/**
 * Generates an anonymized SHA-256 hash of a client IP address so raw IPs
 * are never stored in memory or logs (SEC-05, SEC-08 NDPR data minimization).
 */
export function hashClientIp(ipAddress: string): string {
  return createHash('sha256')
    .update(`${ipAddress}:${RATE_LIMIT_SALT}`)
    .digest('hex')
    .slice(0, 32);
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

export function checkRateLimit(ipAddress = 'unknown-client'): RateLimitResult {
  const now = Date.now();
  const key = hashClientIp(ipAddress);

  // Periodic cleanup if store grows large
  if (rateLimitStore.size > MAX_TRACKED_KEYS) {
    rateLimitStore.forEach((v, k) => {
      const active = v.timestamps.filter((ts: number) => now - ts < WINDOW_MS);
      if (active.length === 0) {
        rateLimitStore.delete(k);
      } else {
        rateLimitStore.set(k, { timestamps: active });
      }
    });
  }

  const record = rateLimitStore.get(key) || { timestamps: [] };

  // Filter timestamps within the active sliding window
  const activeTimestamps = record.timestamps.filter((ts: number) => now - ts < WINDOW_MS);

  if (activeTimestamps.length >= MAX_REQUESTS) {
    const oldestTimestamp = activeTimestamps[0];
    const resetTime = oldestTimestamp + WINDOW_MS;

    return {
      allowed: false,
      remaining: 0,
      resetTime,
    };
  }

  activeTimestamps.push(now);
  rateLimitStore.set(key, { timestamps: activeTimestamps });

  return {
    allowed: true,
    remaining: MAX_REQUESTS - activeTimestamps.length,
    resetTime: now + WINDOW_MS,
  };
}

/**
 * Resets the rate limiter store (primarily used in automated test fixtures).
 */
export function resetRateLimitStore(): void {
  rateLimitStore.clear();
}
