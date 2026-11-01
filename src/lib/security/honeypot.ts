/**
 * Honeypot Anti-Spam Trap Inspector
 * In accordance with docs/security-specification.md Section 3 & ARCH-09
 */

export function isHoneypotTriggered(hp_field?: string): boolean {
  if (!hp_field) {
    return false;
  }
  return hp_field.trim().length > 0;
}
