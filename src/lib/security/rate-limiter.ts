/**
 * Sliding-Window In-Memory IP Rate Limiter
 * In accordance with docs/security-specification.md Section 4 (SEC-04) & ARCH-09
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour rolling window
const MAX_REQUESTS = 5; // Max 5 submissions per hour per IP

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

export function checkRateLimit(ipAddress = 'unknown-client'): RateLimitResult {
  const now = Date.now();
  const record = rateLimitStore.get(ipAddress) || { timestamps: [] };

  // Filter timestamps within the active sliding window
  const activeTimestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);

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
  rateLimitStore.set(ipAddress, { timestamps: activeTimestamps });

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
