import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, it } from 'node:test';
import {
  buildToolingManifest,
  extractUtilityManifestEntries,
} from './tokstd-generate-tooling-manifest.js';

let tempDir;

afterEach(() => {
  if (tempDir) {
    rmSync(tempDir, { force: true, recursive: true });
    tempDir = undefined;
  }
});

function writeJson(filePath, value) {
  writeFileSync(filePath, JSON.stringify(value, null, 2) + '\n');
}

function createFixturePackage() {
  tempDir = mkdtempSync(join(tmpdir(), 'cobalt-tooling-manifest-'));
  const packageDir = join(tempDir, 'tokens-package');
  const tokensDir = join(packageDir, 'tokens');

  mkdirSync(join(packageDir, 'dist', 'css'), { recursive: true });
  mkdirSync(tokensDir, { recursive: true });

  writeJson(join(packageDir, 'package.json'), {
    name: '@cobalt/tokens',
    version: '1.2.3',
  });

  writeFileSync(
    join(packageDir, 'dist', 'css', 'tokens.css'),
    `@layer co.tokens {
      :root {
        --co-color-primitive-blue-500: #154bcc;
        --co-color-text-default: var(--co-color-primitive-blue-500);
        --co-component-nav-rail-width: 64px;
        --co-space-0: 0;
      }
    }
    `,
  );

  writeFileSync(
    join(packageDir, 'dist', 'css', 'tokens-dark.css'),
    `@layer co.theme {
      [data-theme="dark"] {
        --co-color-text-default: var(--co-color-primitive-blue-500);
      }
    }
    `,
  );

  writeFileSync(
    join(packageDir, 'dist', 'css', 'utilities.css'),
    `@layer co.utilities {
      .co-gap-2 { gap: var(--co-space-2); }
      @media (min-width: 640px) {
        .sm\\:co-gap-2 { gap: var(--co-space-2); }
      }
    }
    `,
  );

  writeJson(join(tokensDir, 'primitives.color.json'), {
    co: {
      color: {
        primitive: {
          blue: {
            500: {
              $type: 'color',
              $value: '#154bcc',
              $description: 'Primary blue.',
            },
          },
        },
      },
    },
  });

  writeJson(join(tokensDir, 'primitives.json'), {
    co: {
      space: {
        0: {
          $type: 'dimension',
          $value: '0',
        },
      },
    },
  });

  writeJson(join(tokensDir, 'semantic.shared.json'), {});
  writeJson(join(tokensDir, 'semantic.theme.default.light.json'), {
    co: {
      color: {
        text: {
          default: {
            $type: 'color',
            $value: '{co.color.primitive.blue.500}',
            $description: 'Default text color.',
          },
        },
      },
    },
  });
  writeJson(join(tokensDir, 'semantic.theme.default.dark.json'), {
    co: {
      color: {
        text: {
          default: {
            $type: 'color',
            $value: '{co.color.primitive.blue.500}',
          },
        },
      },
    },
  });
  writeJson(join(tokensDir, 'components.json'), {
    co: {
      component: {
        nav: {
          rail: {
            width: {
              $type: 'dimension',
              $value: '64px',
              $description: 'Navigation rail width.',
            },
          },
        },
      },
    },
  });

  return { packageDir, tokensDir };
}

describe('extractUtilityManifestEntries', () => {
  it('extracts class names, responsive prefixes, and token references', () => {
    const entries = extractUtilityManifestEntries(`
      .co-gap-2 { gap: var(--co-space-2); }
      .md\\:co-gap-4 { gap: var(--co-space-4); }
    `);

    assert.deepEqual(
      entries.map((entry) => entry.className),
      ['co-gap-2', 'md:co-gap-4'],
    );
    assert.deepEqual(entries[0].tokenRefs, ['--co-space-2']);
    assert.equal(entries[1].responsivePrefix, 'md');
  });
});

describe('buildToolingManifest', () => {
  it('builds token and utility metadata from generated CSS and source JSON', () => {
    const { packageDir, tokensDir } = createFixturePackage();
    const manifest = buildToolingManifest(packageDir, tokensDir);

    assert.equal(manifest.schemaVersion, 1);
    assert.equal(manifest.cobaltVersion, '1.2.3');

    const semanticToken = manifest.tokens.find((token) => token.name === '--co-color-text-default');
    assert.equal(semanticToken.tier, 'semantic');
    assert.equal(semanticToken.category, 'Color');
    assert.equal(semanticToken.resolvedValue, '#154bcc');
    assert.equal(semanticToken.description, 'Default text color.');
    assert.deepEqual(semanticToken.themeModes, [
      { theme: 'default', mode: 'light', value: 'var(--co-color-primitive-blue-500)' },
      { theme: 'default', mode: 'dark', value: 'var(--co-color-primitive-blue-500)' },
    ]);

    const componentToken = manifest.tokens.find(
      (token) => token.name === '--co-component-nav-rail-width',
    );
    assert.equal(componentToken.tier, 'component');
    assert.equal(componentToken.description, 'Navigation rail width.');

    assert.deepEqual(
      manifest.utilities.map((utility) => utility.className),
      ['co-gap-2', 'sm:co-gap-2'],
    );
  });
});
