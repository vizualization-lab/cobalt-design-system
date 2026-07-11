import { loadChangelogData } from './scripts/release-notes-lib.js';

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
  /** All releases (highlights merged), newest first. */
  releases: Release[];
  /** Releases grouped by major.minor line, newest line first. */
  lines: ReleaseLine[];
}

export default {
  watch: ['./changelog-highlights.json', '../../CHANGELOG.md'],
  load(): ChangelogData {
    return loadChangelogData() as ChangelogData;
  },
};
