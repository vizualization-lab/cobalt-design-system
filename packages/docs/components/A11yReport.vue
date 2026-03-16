<script setup lang="ts">
import { computed } from 'vue';
import { data as reports } from './a11y-report.data';
import type { A11yRuleResult } from './a11y-report.data';

const props = defineProps<{
  component: string;
}>();

const report = computed(() => reports[props.component]);

/** Normalize a passedRule entry — handles both old (string) and new (object) formats */
function normalizeRule(rule: A11yRuleResult | string): A11yRuleResult {
  if (typeof rule === 'string') return { id: rule, tags: [], wcagCriteria: [] };
  return { ...rule, tags: rule.tags ?? [], wcagCriteria: rule.wcagCriteria ?? [] };
}

/** All unique passed rules across all states, grouped by WCAG level */
const rulesByLevel = computed(() => {
  if (!report.value) return { A: [], AA: [], 'best-practice': [], other: [] };

  const seen = new Set<string>();
  const groups: Record<string, A11yRuleResult[]> = {
    A: [],
    AA: [],
    'best-practice': [],
    other: [],
  };

  for (const state of report.value.states) {
    for (const raw of state.passedRules) {
      const rule = normalizeRule(raw);
      if (seen.has(rule.id)) continue;
      seen.add(rule.id);

      if (rule.tags.includes('wcag2aa') || rule.tags.includes('wcag21aa')) {
        groups['AA'].push(rule);
      } else if (rule.tags.includes('wcag2a') || rule.tags.includes('wcag21a')) {
        groups['A'].push(rule);
      } else if (rule.tags.includes('best-practice')) {
        groups['best-practice'].push(rule);
      } else {
        groups['other'].push(rule);
      }
    }
  }

  // Sort each group by rule id
  for (const key of Object.keys(groups)) {
    groups[key].sort((a, b) => a.id.localeCompare(b.id));
  }

  return groups;
});

const totalUniqueRules = computed(() => {
  return Object.values(rulesByLevel.value).reduce((sum, rules) => sum + rules.length, 0);
});

/** Per-state count of distinct WCAG criteria tested */
function wcagCriteriaCount(state: {
  passedRules: (A11yRuleResult | string)[];
  violationDetails?: { wcagCriteria?: string[] }[];
}): number {
  const criteria = new Set<string>();
  for (const r of state.passedRules || []) {
    if (typeof r !== 'string') {
      for (const sc of r.wcagCriteria || []) criteria.add(sc);
    }
  }
  for (const v of state.violationDetails || []) {
    for (const sc of v.wcagCriteria || []) criteria.add(sc);
  }
  return criteria.size;
}
</script>

<template>
  <div v-if="report" class="a11y-report">
    <!-- Conformance badge -->
    <div class="a11y-summary">
      <span class="a11y-badge" :class="report.summary.totalViolations === 0 ? 'pass' : 'fail'">
        {{ report.wcagConformanceTarget ?? 'WCAG 2.1 AA' }} &mdash;
        {{ report.summary.wcagCriteriaCount ?? 0 }} criteria tested,
        {{ report.summary.totalViolations }}
        violations
      </span>
    </div>

    <!-- Per-state table -->
    <table class="a11y-table">
      <thead>
        <tr>
          <th>State</th>
          <th>Passed</th>
          <th>Violations</th>
          <th>WCAG Criteria</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="state in report.states" :key="state.state">
          <td>
            <code>{{ state.state }}</code>
          </td>
          <td>{{ state.passes }}</td>
          <td>{{ state.violations }}</td>
          <td>{{ wcagCriteriaCount(state) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- WCAG criteria breakdown -->
    <details class="a11y-rules">
      <summary>WCAG criteria breakdown ({{ totalUniqueRules }} rules)</summary>

      <div v-if="rulesByLevel['A'].length" class="a11y-level-group">
        <h4>Level A</h4>
        <ul>
          <li v-for="rule in rulesByLevel['A']" :key="rule.id">
            <code>{{ rule.id }}</code>
            <span v-if="rule.wcagCriteria.length" class="wcag-sc">
              SC {{ rule.wcagCriteria.join(', ') }}
            </span>
          </li>
        </ul>
      </div>

      <div v-if="rulesByLevel['AA'].length" class="a11y-level-group">
        <h4>Level AA</h4>
        <ul>
          <li v-for="rule in rulesByLevel['AA']" :key="rule.id">
            <code>{{ rule.id }}</code>
            <span v-if="rule.wcagCriteria.length" class="wcag-sc">
              SC {{ rule.wcagCriteria.join(', ') }}
            </span>
          </li>
        </ul>
      </div>

      <div v-if="rulesByLevel['best-practice'].length" class="a11y-level-group">
        <h4>Best Practice</h4>
        <ul>
          <li v-for="rule in rulesByLevel['best-practice']" :key="rule.id">
            <code>{{ rule.id }}</code>
          </li>
        </ul>
      </div>

      <div v-if="rulesByLevel['other'].length" class="a11y-level-group">
        <h4>Other</h4>
        <ul>
          <li v-for="rule in rulesByLevel['other']" :key="rule.id">
            <code>{{ rule.id }}</code>
          </li>
        </ul>
      </div>
    </details>

    <!-- Manual testing checklist -->
    <details
      v-if="report.manualTestingNotes && report.manualTestingNotes.length"
      class="a11y-manual"
    >
      <summary>Manual testing checklist ({{ report.manualTestingNotes.length }} items)</summary>
      <p class="a11y-manual-note">
        axe-core automates ~57% of WCAG criteria. The following require manual verification:
      </p>
      <ul>
        <li v-for="note in report.manualTestingNotes" :key="note.criterion">
          <strong>SC {{ note.criterion }} &mdash; {{ note.title }}:</strong>
          {{ note.description }}
        </li>
      </ul>
    </details>
    <div v-else class="a11y-manual-fallback">
      <p>
        axe-core automates ~57% of WCAG 2.1 AA criteria. Some criteria require manual testing that
        cannot be performed by automated tools.
      </p>
    </div>
  </div>
  <div v-else class="a11y-report a11y-empty">
    <p>
      No accessibility audit data available for <code>{{ component }}</code
      >. Run <code>pnpm test</code> to generate reports.
    </p>
  </div>
</template>

<style scoped>
.a11y-report {
  margin: 16px 0;
}

.a11y-summary {
  margin-bottom: 12px;
}

.a11y-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
}

.a11y-badge.pass {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green-2);
}

.a11y-badge.fail {
  background-color: var(--vp-c-red-soft);
  color: var(--vp-c-red-2);
}

.a11y-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 12px;
}

.a11y-table th,
.a11y-table td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

.a11y-table th {
  font-weight: 600;
  font-size: 14px;
}

.a11y-rules,
.a11y-manual {
  margin-top: 8px;
}

.a11y-rules summary,
.a11y-manual summary {
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.a11y-level-group {
  margin-top: 8px;
}

.a11y-level-group h4 {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
}

.a11y-rules ul,
.a11y-manual ul {
  columns: 2;
  padding-left: 20px;
  margin-top: 4px;
}

.a11y-rules li,
.a11y-manual li {
  font-size: 13px;
  margin-bottom: 4px;
}

.wcag-sc {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-left: 4px;
}

.a11y-manual-note {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 8px 0 4px;
}

.a11y-manual-fallback {
  margin-top: 8px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.a11y-empty {
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
