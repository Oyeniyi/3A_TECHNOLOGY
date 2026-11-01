/**
 * Input & Header Sanitization Utilities
 * In accordance with docs/security-specification.md Section 3 (SEC-01, SEC-02)
 */

/**
 * Strips carriage returns and line feeds to prevent SMTP header injection.
 */
export function sanitizeHeader(input?: string): string {
  if (!input) return '';
  return input.replace(/[\r\n]/g, ' ').trim();
}

/**
 * Strips common dangerous HTML/script injection tags from user text inputs.
 */
export function sanitizeBodyText(input?: string): string {
  if (!input) return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
}
