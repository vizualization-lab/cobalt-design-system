#!/usr/bin/env node

/**
 * Verifies that every Cobalt component has a colocated co-<name>.pre-upgrade.css
 * fragment, that the fragment declares the canonical co-<name>:not(:defined)
 * selector with `display` + `visibility: hidden`, and that no stale fragments
 * reference deleted components.
 *
 * Run with `--fix` to scaffold missing fragments. The autofix derives a starter
 * rule from the layout-relevant properties of the component's :host block when
 * one is available; components without a parseable :host get a placeholder with
 * a `TODO` so the developer can hand-tune.
 *
 * The aggregator (scripts/build-pre-upgrade.js) concatenates these fragments
 * into dist/pre-upgrade.css — the public artifact. The check fails the build
 * loudly when a new component is added without its fragment.
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = join(__dirname, '..');
const componentsDir = join(packageDir, 'src', 'components');

const args = process.argv.slice(2);
const isFix = args.includes('--fix');

// Layout-affecting :host properties that should be mirrored when scaffolding a
// new fragment. Anything else (color, padding, font-*) only matters post-upgrade
// and would over-style the un-upgraded host.
const LAYOUT_PROPERTIES = new Set([
  'display',
  'inline-size',
  'block-size',
  'min-inline-size',
  'min-block-size',
  'max-inline-size',
  'max-block-size',
  'vertical-align',
]);

function listComponents() {
  const results = [];
  for (const entry of readdirSync(componentsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const componentFile = join(componentsDir, entry.name, `co-${entry.name}.ts`);
    if (!existsSync(componentFile)) continue;
    const stylesFile = join(componentsDir, entry.name, `co-${entry.name}.styles.css`);
    const fragmentFile = join(componentsDir, entry.name, `co-${entry.name}.pre-upgrade.css`);
    results.push({
      tag: `co-${entry.name}`,
      dir: join(componentsDir, entry.name),
      stylesFile: existsSync(stylesFile) ? stylesFile : null,
      fragmentFile,
    });
  }
  return results;
}

function listFragments() {
  const fragments = new Set();
  for (const entry of readdirSync(componentsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fragmentFile = join(componentsDir, entry.name, `co-${entry.name}.pre-upgrade.css`);
    if (existsSync(fragmentFile)) fragments.add(`co-${entry.name}`);
  }
  return fragments;
}

function extractHostLayout(stylesContent) {
  // Match the bare `:host { ... }` block. Variants like `:host(:focus-within)`
  // are intentionally ignored — they describe state, not the host's resting
  // layout, and pre-upgrade should reserve the resting layout.
  const hostMatch = stylesContent.match(/^:host\s*\{([\s\S]*?)\n\}/m);
  if (!hostMatch) return null;
  const body = hostMatch[1];
  const declarations = [];
  for (const match of body.matchAll(/(?:^|\n)\s*([a-z-]+):\s*([^;]+);/g)) {
    const property = match[1];
    if (LAYOUT_PROPERTIES.has(property)) {
      declarations.push({ property, value: match[2].trim() });
    }
  }
  return declarations;
}

function fragmentTemplate(tag, declarations) {
  const lines = [
    `/* ${tag} pre-upgrade rule — reserves layout and hides slotted content until :defined. */`,
    '',
    `${tag}:not(:defined) {`,
  ];
  if (declarations && declarations.length > 0) {
    for (const { property, value } of declarations) {
      lines.push(`  ${property}: ${value};`);
    }
  } else {
    lines.push('  display: block; /* TODO: confirm the right display for this component */');
  }
  lines.push('  visibility: hidden;');
  lines.push('}');
  lines.push('');
  return lines.join('\n');
}

function describeFragmentExpectations(tag, fragmentContent) {
  const selectorRe = new RegExp(`${escapeRegExp(tag)}:not\\(:defined\\)\\s*\\{([\\s\\S]*?)\\n\\}`);
  const match = fragmentContent.match(selectorRe);
  if (!match) {
    return { hasSelector: false, hasDisplay: false, hasVisibilityHidden: false };
  }
  const body = match[1];
  const hasDisplay = /(?:^|\n)\s*display:\s*[^;]+;/.test(body);
  const hasVisibilityHidden = /(?:^|\n)\s*visibility:\s*hidden\s*;/.test(body);
  return { hasSelector: true, hasDisplay, hasVisibilityHidden };
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function relativePath(absolute) {
  return relative(packageDir, absolute);
}

const components = listComponents();
const fragmentTags = listFragments();
const componentTags = new Set(components.map((c) => c.tag));
const errors = [];
const fixed = [];

for (const { tag, fragmentFile, stylesFile } of components) {
  if (!existsSync(fragmentFile)) {
    const declarations = stylesFile ? extractHostLayout(readFileSync(stylesFile, 'utf-8')) : null;
    const starter = fragmentTemplate(tag, declarations);

    if (isFix) {
      writeFileSync(fragmentFile, starter);
      fixed.push(relativePath(fragmentFile));
      continue;
    }

    errors.push(
      `Missing ${relativePath(fragmentFile)} for component ${tag}.\n\n` +
        `Suggested starter${declarations && declarations.length > 0 ? ' (derived from :host in ' + relativePath(stylesFile) + ')' : ''}:\n\n` +
        starter
          .split('\n')
          .map((l) => '  ' + l)
          .join('\n') +
        `\nRun \`npm run pre-upgrade:check -- --fix\` to scaffold this file automatically.`,
    );
    continue;
  }

  const content = readFileSync(fragmentFile, 'utf-8');
  const expectations = describeFragmentExpectations(tag, content);
  if (!expectations.hasSelector) {
    errors.push(
      `${relativePath(fragmentFile)} is missing the canonical selector \`${tag}:not(:defined)\`.`,
    );
    continue;
  }
  if (!expectations.hasDisplay) {
    errors.push(
      `${relativePath(fragmentFile)} canonical block must declare \`display:\` so the un-upgraded host reserves layout.`,
    );
  }
  if (!expectations.hasVisibilityHidden) {
    errors.push(
      `${relativePath(fragmentFile)} canonical block must declare \`visibility: hidden;\` so slotted content stays hidden until :defined.`,
    );
  }
}

for (const tag of fragmentTags) {
  if (!componentTags.has(tag)) {
    const stale = join(componentsDir, tag.replace(/^co-/, ''), `${tag}.pre-upgrade.css`);
    errors.push(
      `Stale fragment ${relativePath(stale)}: no matching component under src/components/. Delete it.`,
    );
  }
}

if (fixed.length > 0) {
  console.log('Scaffolded:');
  for (const path of fixed) console.log(`  ${path}`);
  console.log(
    `\nReview each scaffolded file and hand-tune if the auto-derived layout properties do not match the upgraded :host.`,
  );
}

if (errors.length > 0) {
  console.error(
    isFix && fixed.length > 0 ? '\nRemaining issues:\n' : 'pre-upgrade check failed:\n',
  );
  for (const error of errors) {
    console.error(`- ${error}\n`);
  }
  process.exit(1);
}

console.log(`pre-upgrade fragments OK: ${components.length} components covered.`);
