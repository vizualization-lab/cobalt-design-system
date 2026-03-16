import fs from 'node:fs';
import path from 'node:path';

const REPORTS_DIR = 'a11y-reports';

/** Tags that indicate WCAG 2.1 AA relevance */
const WCAG_21_AA_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

/** Interactive components that get shared manual checks */
const INTERACTIVE_COMPONENTS = ['co-button'];

const INTERACTIVE_CHECKS = [
  { criterion: '2.1.1', title: 'Keyboard', description: 'All functions operable via keyboard' },
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

const COMPONENT_CHECKS = {
  'co-button': [
    {
      criterion: '2.5.5',
      title: 'Target Size',
      description: 'Touch target is at least 44×44 CSS pixels',
    },
  ],
};

/**
 * Decode WCAG SC numbers from axe-core tags.
 * e.g., 'wcag143' → '1.4.3'
 */
function decodeWcagCriteria(tags) {
  const criteria = [];
  for (const tag of tags) {
    const match = tag.match(/^wcag(\d)(\d)(\d+)$/);
    if (match) {
      criteria.push(`${match[1]}.${match[2]}.${match[3]}`);
    }
  }
  return criteria;
}

/**
 * Compute WCAG summary counts for a set of passed and failed rules.
 */
function computeWcagSummary(passedRules, violationDetails) {
  const summary = {
    wcag2a: { passed: 0, failed: 0 },
    wcag2aa: { passed: 0, failed: 0 },
    wcag21a: { passed: 0, failed: 0 },
    wcag21aa: { passed: 0, failed: 0 },
    bestPractice: { passed: 0, failed: 0 },
  };

  for (const rule of passedRules) {
    const tags = rule.tags || [];
    let categorized = false;
    for (const wcagTag of WCAG_21_AA_TAGS) {
      if (tags.includes(wcagTag)) {
        summary[wcagTag].passed++;
        categorized = true;
      }
    }
    if (tags.includes('best-practice')) {
      summary.bestPractice.passed++;
      categorized = true;
    }
  }

  for (const v of violationDetails) {
    const tags = v.tags || [];
    for (const wcagTag of WCAG_21_AA_TAGS) {
      if (tags.includes(wcagTag)) {
        summary[wcagTag].failed++;
      }
    }
    if (tags.includes('best-practice')) {
      summary.bestPractice.failed++;
    }
  }

  return summary;
}

/**
 * Get manual testing notes for a component.
 */
function getManualTestNotes(component) {
  const notes = [];
  if (INTERACTIVE_COMPONENTS.includes(component)) {
    notes.push(...INTERACTIVE_CHECKS);
  }
  if (COMPONENT_CHECKS[component]) {
    notes.push(...COMPONENT_CHECKS[component]);
  }
  return notes;
}

/**
 * Web Test Runner plugin that collects a11y audit results from browser tests
 * via executeServerCommand and writes per-component JSON reports on stop.
 */
export function a11yReporterPlugin() {
  /** @type {Map<string, Array<{state: string, passes: number, violations: number, incomplete: number, passedRules: Array<{id: string, tags: string[]}>, violationDetails: Array<any>}>>} */
  const resultsByComponent = new Map();

  return {
    name: 'a11y-reporter',

    async executeCommand({ command, payload }) {
      if (command !== 'a11y-result') return undefined;

      const { component, state, passes, violations, incomplete, passedRules, violationDetails } =
        payload;

      if (!resultsByComponent.has(component)) {
        resultsByComponent.set(component, []);
      }

      resultsByComponent.get(component).push({
        state,
        passes,
        violations,
        incomplete,
        passedRules,
        violationDetails,
      });

      return true;
    },

    async serverStop() {
      if (resultsByComponent.size === 0) return;

      const reportsDir = path.resolve(REPORTS_DIR);
      fs.mkdirSync(reportsDir, { recursive: true });

      for (const [component, states] of resultsByComponent) {
        const totalPasses = states.reduce((sum, s) => sum + s.passes, 0);
        const totalViolations = states.reduce((sum, s) => sum + s.violations, 0);

        // Collect all unique WCAG criteria tested across all states
        const allCriteria = new Set();
        for (const s of states) {
          for (const rule of s.passedRules) {
            for (const sc of decodeWcagCriteria(rule.tags || [])) {
              allCriteria.add(sc);
            }
          }
          for (const v of s.violationDetails) {
            for (const sc of decodeWcagCriteria(v.tags || [])) {
              allCriteria.add(sc);
            }
          }
        }

        const report = {
          component,
          generatedAt: new Date().toISOString(),
          wcagConformanceTarget: 'WCAG 2.1 AA',
          states: states.map((s) => ({
            state: s.state,
            passes: s.passes,
            violations: s.violations,
            passedRules: s.passedRules.map((rule) => ({
              id: rule.id,
              tags: rule.tags || [],
              wcagCriteria: decodeWcagCriteria(rule.tags || []),
            })),
            violationDetails: s.violationDetails.map((v) => ({
              ...v,
              wcagCriteria: decodeWcagCriteria(v.tags || []),
            })),
            wcagSummary: computeWcagSummary(s.passedRules, s.violationDetails),
          })),
          summary: {
            totalPasses,
            totalViolations,
            wcagCriteriaTested: Array.from(allCriteria).sort(),
            wcagCriteriaCount: allCriteria.size,
          },
          manualTestingNotes: getManualTestNotes(component),
        };

        const filePath = path.join(reportsDir, `${component}.json`);
        fs.writeFileSync(filePath, JSON.stringify(report, null, 2) + '\n');
      }
    },
  };
}
