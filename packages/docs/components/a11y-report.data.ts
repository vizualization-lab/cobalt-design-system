import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reportsDir = path.resolve(__dirname, '../../components/a11y-reports');

export interface A11yRuleResult {
  id: string;
  tags: string[];
  wcagCriteria: string[];
}

export interface A11yViolationDetail {
  impact: string;
  id: string;
  description: string;
  tags: string[];
  wcagCriteria: string[];
  nodes: string[];
}

export interface WcagLevelCount {
  passed: number;
  failed: number;
}

export interface WcagSummary {
  wcag2a: WcagLevelCount;
  wcag2aa: WcagLevelCount;
  wcag21a: WcagLevelCount;
  wcag21aa: WcagLevelCount;
  bestPractice: WcagLevelCount;
}

export interface ManualTestNote {
  criterion: string;
  title: string;
  description: string;
}

export interface A11yStateResult {
  state: string;
  passes: number;
  violations: number;
  passedRules: A11yRuleResult[];
  violationDetails: A11yViolationDetail[];
  wcagSummary: WcagSummary;
}

export interface A11yReport {
  component: string;
  generatedAt: string;
  wcagConformanceTarget: string;
  states: A11yStateResult[];
  summary: {
    totalPasses: number;
    totalViolations: number;
    wcagCriteriaTested: string[];
    wcagCriteriaCount: number;
  };
  manualTestingNotes: ManualTestNote[];
}

export type A11yReportData = Record<string, A11yReport>;

export default {
  watch: ['../../components/a11y-reports/*.json'],
  load(): A11yReportData {
    const reports: A11yReportData = {};

    if (!fs.existsSync(reportsDir)) {
      return reports;
    }

    const files = fs.readdirSync(reportsDir).filter((f) => f.endsWith('.json'));

    for (const file of files) {
      const content = fs.readFileSync(path.join(reportsDir, file), 'utf-8');
      const report: A11yReport = JSON.parse(content);
      reports[report.component] = report;
    }

    return reports;
  },
};
