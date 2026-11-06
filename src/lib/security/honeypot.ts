/**
 * Honeypot Anti-Spam Trap Inspector
 * In accordance with docs/security-specification.md Section 3 & ARCH-09
 */

export function isHoneypotTriggered(
  input?: string | Record<string, unknown>,
  fieldName = 'hp_field'
): boolean {
  if (!input) {
    return false;
  }
  if (typeof input === 'string') {
    return input.trim().length > 0;
  }
  const val = input[fieldName];
  return typeof val === 'string' && val.trim().length > 0;
}
