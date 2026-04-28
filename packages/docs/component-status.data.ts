import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const statusPath = path.resolve(__dirname, 'component-status.json');

export type PhaseStatus = 'pass' | 'fail' | 'pending' | 'na';

export interface PhaseInfo {
  key: string;
  label: string;
  description: string;
  category: string;
}

export interface ComponentPhases {
  figma: PhaseStatus;
  artDirector: PhaseStatus;
  tokens: PhaseStatus;
  unitTests: PhaseStatus;
  a11y: PhaseStatus;
  docs: PhaseStatus;
  react: PhaseStatus;
  vue: PhaseStatus;
  angular: PhaseStatus;
  browsers: PhaseStatus;
}

export interface StatusData {
  phases: PhaseInfo[];
  components: Record<string, ComponentPhases>;
}

const PHASES: PhaseInfo[] = [
  {
    key: 'figma',
    label: 'Figma',
    description: 'Code matches Figma design specs.',
    category: 'Design',
  },
  {
    key: 'artDirector',
    label: 'Art Dir.',
    description: 'Visual review approved by design lead.',
    category: 'Design',
  },
  {
    key: 'tokens',
    label: 'Tokens',
    description: 'Component uses only design tokens, no hardcoded values.',
    category: 'Design',
  },
  {
    key: 'unitTests',
    label: 'Tests',
    description: 'Passing unit tests with adequate coverage.',
    category: 'Development',
  },
  {
    key: 'a11y',
    label: 'A11y',
    description: 'Accessibility tests completed and passing.',
    category: 'Development',
  },
  {
    key: 'docs',
    label: 'Docs',
    description: 'Docs page complete: demo, usage, API, accessibility, best practices.',
    category: 'Development',
  },
  {
    key: 'react',
    label: 'React',
    description: 'React wrapper verified and tested.',
    category: 'Verification',
  },
  {
    key: 'vue',
    label: 'Vue',
    description: 'Vue wrapper verified and tested.',
    category: 'Verification',
  },
  {
    key: 'angular',
    label: 'Angular',
    description: 'Angular wrapper verified and tested.',
    category: 'Verification',
  },
  {
    key: 'browsers',
    label: 'Browsers',
    description: 'Verified across Chrome, Firefox, Safari, Edge.',
    category: 'Verification',
  },
];

export default {
  watch: ['./component-status.json'],
  load(): StatusData {
    const raw = JSON.parse(fs.readFileSync(statusPath, 'utf-8'));
    return {
      phases: PHASES,
      components: raw,
    };
  },
};
