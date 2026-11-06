/**
 * Input & Header Sanitization Utilities
 * In accordance with docs/security-specification.md Section 3 (SEC-01, SEC-02)
 */

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
