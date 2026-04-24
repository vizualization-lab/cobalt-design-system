import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const changelogPath = path.resolve(__dirname, '../../CHANGELOG.md');
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

export interface ChangelogData {
  releases: Release[];
}

function parseChangelogMd(raw: string): Release[] {
  const releases: Release[] = [];
  // Split on ## headings like "## 0.1.0" or "## 0.1.0 - 2026-03-10"
  const sections = raw.split(/^## /m).slice(1);

  for (const section of sections) {
    const lines = section.split('\n');
    const heading = lines[0].trim();

    // Parse version and optional date from heading
    const match = heading.match(/^(\d+\.\d+\.\d+(?:-[^\s]+)?)\s*(?:-\s*(.+))?$/);
    if (!match) continue;

    const version = match[1];
    const date = match[2]?.trim() || '';
    const content = lines.slice(1).join('\n').trim();

    releases.push({ version, date, content, highlights: null });
  }

  return releases;
}

export default {
  watch: ['./changelog-highlights.json', '../../CHANGELOG.md'],
  load(): ChangelogData {
    let releases: Release[] = [];

    // Try to read auto-generated CHANGELOG.md from changesets
    if (fs.existsSync(changelogPath)) {
      const raw = fs.readFileSync(changelogPath, 'utf-8');
      releases = parseChangelogMd(raw);
    }

    // Read editorial highlights
    let highlights: Record<string, ReleaseHighlights> = {};
    if (fs.existsSync(highlightsPath)) {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, 'utf-8'));
    }

    // Merge highlights into releases
    for (const release of releases) {
      if (highlights[release.version]) {
        release.highlights = highlights[release.version];
      }
    }

    // Add highlights-only entries for versions not in CHANGELOG.md
    for (const [version, hl] of Object.entries(highlights)) {
      if (!releases.some((r) => r.version === version)) {
        releases.push({
          version,
          date: '',
          content: '',
          highlights: hl,
        });
      }
    }

    // Sort by version descending
    releases.sort((a, b) => {
      const aParts = a.version.split('.').map(Number);
      const bParts = b.version.split('.').map(Number);
      for (let i = 0; i < 3; i++) {
        if ((bParts[i] || 0) !== (aParts[i] || 0)) return (bParts[i] || 0) - (aParts[i] || 0);
      }
      return 0;
    });

    return { releases };
  },
};
