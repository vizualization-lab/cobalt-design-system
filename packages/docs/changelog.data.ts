import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CHANGELOG_PATH,
  compareVersionsDesc,
  groupIntoLines,
  parseChangelog,
} from './scripts/release-notes-lib.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const highlightsPath = path.resolve(__dirname, 'changelog-highlights.json');

export interface ReleaseHighlights {
  summary: string;
  highlights: string[];
}

export interface Release {
  version: string;
  date: string;
  content: string;
  highlights: ReleaseHighlights | null;
}

export interface ReleaseLine {
  /** URL slug, e.g. "v0-1" */
  id: string;
  /** Display label, e.g. "v0.1" */
  label: string;
  latestVersion: string;
  releaseCount: number;
  firstDate: string;
  lastDate: string;
  releases: Release[];
}

export interface ChangelogData {
  /** All releases, newest first. */
  releases: Release[];
  /** Releases grouped by major.minor line, newest line first. */
  lines: ReleaseLine[];
}

export default {
  watch: ['./changelog-highlights.json', '../../CHANGELOG.md'],
  load(): ChangelogData {
    let releases: Release[] = [];

    if (fs.existsSync(CHANGELOG_PATH)) {
      const raw = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
      releases = parseChangelog(raw).map((release) => ({ ...release, highlights: null }));
    }

    // Merge editorial highlights
    let highlights: Record<string, ReleaseHighlights> = {};
    if (fs.existsSync(highlightsPath)) {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, 'utf-8'));
    }

    for (const release of releases) {
      if (highlights[release.version]) {
        release.highlights = highlights[release.version];
      }
    }

    // Highlights-only entries for versions absent from CHANGELOG.md
    for (const [version, hl] of Object.entries(highlights)) {
      if (!releases.some((release) => release.version === version)) {
        releases.push({ version, date: '', content: '', highlights: hl });
      }
    }

    releases.sort((a, b) => compareVersionsDesc(a.version, b.version));

    return { releases, lines: groupIntoLines(releases) as ReleaseLine[] };
  },
};
