/**
 * Input, Header & HTML Sanitization Utilities
 * In accordance with docs/security-specification.md Section 3 (SEC-01, SEC-02)
 */

/**
 * Escapes HTML special characters to prevent HTML/XSS injection in email templates
 * and server-rendered markup.
 */
export function escapeHtml(input?: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Strips carriage returns and line feeds to prevent SMTP header injection.
 */
export function sanitizeHeader(input?: string): string {
  if (!input) return '';
  return input
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Strips common dangerous HTML/script injection tags and null bytes from user text inputs.
 */
export function sanitizeBodyText(input?: string): string {
  if (!input) return '';
  return input
    .replace(/\0/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
}

export const sanitizeInput = sanitizeBodyText;

/**
 * Validates that a URL is a safe external HTTPS/HTTP link or internal path
 * and rejects javascript:, data:, or vbscript: URIs.
 */
export function isSafeActionUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (trimmed.startsWith('/')) {
    return !trimmed.startsWith('//') && !trimmed.includes('..');
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}
