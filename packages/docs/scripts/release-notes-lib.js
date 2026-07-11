/**
 * Shared release-notes parsing for the docs site.
 *
 * Reads the aggregated root CHANGELOG.md (written by
 * scripts/aggregate-changelog.js) and groups releases into "lines" by
 * major.minor — each line collects a minor/major release plus all of its
 * patches, and becomes its own sub-page under /release-notes/.
 *
 * Plain ESM JavaScript so it can be consumed by VitePress data loaders,
 * dynamic-route paths files, and node prebuild scripts alike.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const CHANGELOG_PATH = path.resolve(__dirname, '../../../CHANGELOG.md');

/**
 * Parse the aggregated CHANGELOG.md into releases.
 * Headings look like `## 1.2.3 (2026-07-10)` (legacy `## 1.2.3 - date`
 * and undated `## 1.2.3` are tolerated).
 */
export function parseChangelog(raw) {
  const releases = [];
  const sections = raw.split(/^## /m).slice(1);

  for (const section of sections) {
    const lines = section.split('\n');
    const heading = lines[0].trim();
    const match = heading.match(
      /^(\d+\.\d+\.\d+(?:-[^\s]+)?)\s*(?:\((\d{4}-\d{2}-\d{2})\)|[-–—]\s*(.+))?$/,
    );
    if (!match) continue;

    releases.push({
      version: match[1],
      date: (match[2] || match[3] || '').trim(),
      content: lines.slice(1).join('\n').trim(),
    });
  }

  return releases;
}

export function compareVersionsDesc(a, b) {
  const ap = a.split(/[.-]/).map((part) => Number(part) || 0);
  const bp = b.split(/[.-]/).map((part) => Number(part) || 0);
  for (let i = 0; i < 3; i++) {
    if ((bp[i] || 0) !== (ap[i] || 0)) return (bp[i] || 0) - (ap[i] || 0);
  }
  return 0;
}

/** "1.2.3" -> { id: "v1-2", label: "v1.2" } */
export function lineFor(version) {
  const [major, minor] = version.split('.');
  return { id: `v${major}-${minor}`, label: `v${major}.${minor}` };
}

/**
 * Group releases (already parsed) into release lines, newest line first,
 * releases within a line newest first.
 */
export function groupIntoLines(releases) {
  const sorted = [...releases].sort((a, b) => compareVersionsDesc(a.version, b.version));
  const lines = new Map();

  for (const release of sorted) {
    const { id, label } = lineFor(release.version);
    if (!lines.has(id)) {
      lines.set(id, { id, label, releases: [] });
    }
    lines.get(id).releases.push(release);
  }

  return [...lines.values()].map((line) => {
    const dates = line.releases.map((release) => release.date).filter(Boolean);
    return {
      ...line,
      latestVersion: line.releases[0].version,
      releaseCount: line.releases.length,
      // releases are newest-first, so the last entry is the line's birth.
      firstDate: dates[dates.length - 1] || '',
      lastDate: dates[0] || '',
    };
  });
}

/** Read + parse + group in one call. */
export function loadReleaseLines(changelogPath = CHANGELOG_PATH) {
  if (!fs.existsSync(changelogPath)) return [];
  return groupIntoLines(parseChangelog(fs.readFileSync(changelogPath, 'utf-8')));
}
