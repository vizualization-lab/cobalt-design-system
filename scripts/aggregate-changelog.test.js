const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { afterEach, describe, it } = require('node:test');

const { parseChangelog, cleanSections, aggregate } = require('./aggregate-changelog.js');

let tempDir;

afterEach(() => {
  if (tempDir) {
    fs.rmSync(tempDir, { force: true, recursive: true });
    tempDir = undefined;
  }
});

const LEGACY_COMPONENTS = `# @cobalt/components

## 0.2.0

### Minor Changes

- abc1234: Added co-alert component

### Patch Changes

- def5678: Fixed focus ring clipping
- Updated dependencies [abc1234]
  - @cobalt/tokens@0.2.0

## 0.1.0

### Minor Changes

- 5287fe4: Added baseline navigation rail bar component
- 5fd88a3: - Re-themed the docs site
  - Created workbench package
`;

const LEGACY_TOKENS = `# @cobalt/tokens

## 0.2.0

### Minor Changes

- abc1234: Added co-alert component

## 0.1.0

### Minor Changes

- 5fd88a3: - Re-themed the docs site
  - Created workbench package
`;

function createFixtureRepo() {
  tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cobalt-changelog-'));
  fs.mkdirSync(path.join(tempDir, 'scripts'), { recursive: true });
  fs.mkdirSync(path.join(tempDir, 'packages', 'components'), { recursive: true });
  fs.mkdirSync(path.join(tempDir, 'packages', 'tokens'), { recursive: true });

  fs.writeFileSync(path.join(tempDir, 'packages', 'components', 'CHANGELOG.md'), LEGACY_COMPONENTS);
  fs.writeFileSync(path.join(tempDir, 'packages', 'tokens', 'CHANGELOG.md'), LEGACY_TOKENS);

  return tempDir;
}

describe('parseChangelog', () => {
  it('parses versions, sections, and multi-line entries', () => {
    const { title, releases } = parseChangelog(LEGACY_COMPONENTS);

    assert.equal(title, '@cobalt/components');
    assert.equal(releases.length, 2);
    assert.equal(releases[0].version, '0.2.0');
    assert.deepEqual(Object.keys(releases[1].sections), ['Minor Changes']);
    assert.match(releases[1].sections['Minor Changes'][1], /\n\s+- Created workbench package/);
  });

  it('parses dated headings in both legacy and normalized forms', () => {
    const legacy = parseChangelog('# x\n\n## 1.0.0 - 2026-01-01\n\n### Patch Changes\n\n- a\n');
    const normalized = parseChangelog('# x\n\n## 1.0.0 (2026-01-01)\n\n### Patch Changes\n\n- a\n');

    assert.equal(legacy.releases[0].date, '2026-01-01');
    assert.equal(normalized.releases[0].date, '2026-01-01');
  });
});

describe('cleanSections', () => {
  it('strips SHA prefixes and drops dependency noise and empty sections', () => {
    const cleaned = cleanSections({
      'Minor Changes': ['abc1234: Added co-alert component'],
      'Patch Changes': ['Updated dependencies [abc1234]\n  - @cobalt/tokens@0.2.0'],
    });

    assert.deepEqual(cleaned, { 'Minor Changes': ['Added co-alert component'] });
  });
});

describe('aggregate', () => {
  it('rewrites per-package changelogs without SHAs and with dated headings', () => {
    const dir = createFixtureRepo();
    aggregate({
      rootDir: dir,
      packages: ['packages/components', 'packages/tokens'],
      today: '2026-07-10',
    });

    const components = fs.readFileSync(
      path.join(dir, 'packages', 'components', 'CHANGELOG.md'),
      'utf-8',
    );
    assert.match(components, /^## 0\.2\.0 \(2026-07-10\)$/m);
    assert.match(components, /^- Added co-alert component$/m);
    assert.doesNotMatch(components, /[a-f0-9]{7}: /);
    assert.doesNotMatch(components, /Updated dependencies/);
  });

  it('stamps new versions with today and persists the date registry', () => {
    const dir = createFixtureRepo();
    // Seed 0.1.0 with an earlier date; 0.2.0 is "new".
    fs.writeFileSync(
      path.join(dir, 'scripts', 'release-dates.json'),
      JSON.stringify({ '0.1.0': '2026-05-20' }),
    );

    const { dates } = aggregate({
      rootDir: dir,
      packages: ['packages/components', 'packages/tokens'],
      today: '2026-07-10',
    });

    assert.equal(dates['0.1.0'], '2026-05-20');
    assert.equal(dates['0.2.0'], '2026-07-10');

    const persisted = JSON.parse(
      fs.readFileSync(path.join(dir, 'scripts', 'release-dates.json'), 'utf-8'),
    );
    assert.deepEqual(persisted, dates);
  });

  it('dedupes shared entries and annotates entries with their packages', () => {
    const dir = createFixtureRepo();
    aggregate({
      rootDir: dir,
      packages: ['packages/components', 'packages/tokens'],
      today: '2026-07-10',
    });

    const rootChangelog = fs.readFileSync(path.join(dir, 'CHANGELOG.md'), 'utf-8');

    // Shared entry appears once, unannotated (touches all fixture packages).
    assert.equal(rootChangelog.match(/Added co-alert component/g).length, 1);
    assert.match(rootChangelog, /^- Added co-alert component$/m);
    // Single-package entry is annotated.
    assert.match(rootChangelog, /^- Fixed focus ring clipping _\(components\)_$/m);
    // Dated release headings, newest first.
    assert.match(rootChangelog, /## 0\.2\.0 \(2026-07-10\)[\s\S]*## 0\.1\.0 \(2026-07-10\)/);
  });

  it('is idempotent — a second run produces identical output', () => {
    const dir = createFixtureRepo();
    const options = {
      rootDir: dir,
      packages: ['packages/components', 'packages/tokens'],
      today: '2026-07-10',
    };

    aggregate(options);
    const firstRoot = fs.readFileSync(path.join(dir, 'CHANGELOG.md'), 'utf-8');
    const firstPkg = fs.readFileSync(
      path.join(dir, 'packages', 'components', 'CHANGELOG.md'),
      'utf-8',
    );

    aggregate(options);
    assert.equal(fs.readFileSync(path.join(dir, 'CHANGELOG.md'), 'utf-8'), firstRoot);
    assert.equal(
      fs.readFileSync(path.join(dir, 'packages', 'components', 'CHANGELOG.md'), 'utf-8'),
      firstPkg,
    );
  });
});
