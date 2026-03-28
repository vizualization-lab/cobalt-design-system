/**
 * WCAG criteria that axe-core cannot fully automate (~43% of WCAG).
 * These are surfaced in reports as manual testing notes.
 */

export interface ManualTestNote {
  criterion: string;
  title: string;
  description: string;
}

/** Manual checks applicable to all interactive components */
const INTERACTIVE_CHECKS: ManualTestNote[] = [
  {
    criterion: '2.1.1',
    title: 'Keyboard',
    description: 'All functions operable via keyboard',
  },
  {
    criterion: '2.4.7',
    title: 'Focus Visible',
    description: 'Keyboard focus indicator is clearly visible',
  },
  {
    criterion: '3.2.1',
    title: 'On Focus',
    description: 'No unexpected context change on focus',
  },
  {
    criterion: '3.2.2',
    title: 'On Input',
    description: 'No unexpected context change on input',
  },
];

/** Component-specific manual checks */
const COMPONENT_CHECKS: Record<string, ManualTestNote[]> = {
  'co-button': [
    {
      criterion: '2.5.5',
      title: 'Target Size',
      description: 'Touch target is at least 44×44 CSS pixels',
    },
  ],
  'co-icon': [
    {
      criterion: '1.1.1',
      title: 'Non-text Content',
      description:
        'Informative icons must have a label; decorative icons must be hidden from assistive technology',
    },
    {
      criterion: '1.4.11',
      title: 'Non-text Contrast',
      description: 'Icon must have at least 3:1 contrast ratio against its background',
    },
    {
      criterion: '2.5.5',
      title: 'Target Size',
      description:
        'When used as an interactive target (e.g., icon-only button), touch target is at least 44×44 CSS pixels',
    },
    {
      criterion: '4.1.2',
      title: 'Name, Role, Value',
      description:
        'Informative icons expose role="img" and aria-label; decorative icons expose aria-hidden="true"',
    },
  ],
};

/** Interactive components that get the shared interactive checks */
const INTERACTIVE_COMPONENTS = ['co-button'];

/**
 * Returns manual testing notes for a given component.
 * Merges shared interactive checks with component-specific checks.
 */
export function getManualTestNotes(component: string): ManualTestNote[] {
  const notes: ManualTestNote[] = [];

  if (INTERACTIVE_COMPONENTS.includes(component)) {
    notes.push(...INTERACTIVE_CHECKS);
  }

  const componentNotes = COMPONENT_CHECKS[component];
  if (componentNotes) {
    notes.push(...componentNotes);
  }

  return notes;
}
