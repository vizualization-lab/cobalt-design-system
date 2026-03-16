/**
 * WCAG 2.1 AA tag decoding utilities for axe-core results.
 *
 * axe-core tags every rule with its WCAG criteria (e.g., 'wcag2a', 'wcag143').
 * These utilities extract and decode that information.
 */

/** Tags that indicate a rule contributes to WCAG 2.1 AA conformance */
export const WCAG_21_AA_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] as const;

/** Returns true if any tag indicates WCAG 2.1 AA relevance */
export function isWcag21AA(tags: string[]): boolean {
  return tags.some((tag) => (WCAG_21_AA_TAGS as readonly string[]).includes(tag));
}

/**
 * Extracts WCAG success criteria numbers from axe-core tags.
 * e.g., 'wcag143' → '1.4.3', 'wcag111' → '1.1.1'
 */
export function decodeWcagCriteria(tags: string[]): string[] {
  const criteria: string[] = [];
  for (const tag of tags) {
    const match = tag.match(/^wcag(\d)(\d)(\d+)$/);
    if (match) {
      criteria.push(`${match[1]}.${match[2]}.${match[3]}`);
    }
  }
  return criteria;
}

/** Determines the WCAG conformance level from axe-core tags */
export function getWcagLevel(tags: string[]): 'A' | 'AA' | 'best-practice' | 'other' {
  if (tags.includes('best-practice')) return 'best-practice';
  if (tags.includes('wcag2aa') || tags.includes('wcag21aa')) return 'AA';
  if (tags.includes('wcag2a') || tags.includes('wcag21a')) return 'A';
  return 'other';
}
