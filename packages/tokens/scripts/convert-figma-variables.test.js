import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, sep } from 'node:path';
import { afterEach, describe, it } from 'node:test';
import StyleDictionary from 'style-dictionary';
import { convertFigmaExports, defaultSourceDir } from './convert-figma-variables.js';

let tempDirs = [];

afterEach(() => {
  for (const tempDir of tempDirs) {
    rmSync(tempDir, { force: true, recursive: true });
  }
  tempDirs = [];
});

function createTempDir(prefix = 'cobalt-figma-tokens-') {
  const tempDir = mkdtempSync(join(tmpdir(), prefix));
  tempDirs.push(tempDir);
  return tempDir;
}

function writeJson(filePath, value) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function color(hex, alpha = 1, extensions = undefined) {
  return {
    $type: 'color',
    $value: {
      colorSpace: 'srgb',
      components: [0.1882352941, 0.1882352941, 0.1882352941],
      alpha,
      hex,
    },
    ...(extensions ? { $extensions: extensions } : {}),
  };
}

describe('convertFigmaExports', () => {
  it('normalizes Figma values, restores aliases, and preserves metadata', async () => {
    const fixtureRoot = createTempDir();
    const sourceDir = join(fixtureRoot, 'exports');
    const outputDir = join(sourceDir, 'tokens');
    const warnings = [];

    writeJson(join(sourceDir, 'primitives.tokens.json'), {
      co: {
        color: {
          neutral: {
            '200a': {
              ...color('#303030', 0.25, {
                'com.figma.variableId': 'VariableID:primitive-color',
              }),
              $description: 'Translucent neutral.',
            },
          },
        },
        space: {
          100: { $type: 'number', $value: 4 },
        },
        font: {
          'font-family': {
            global: { $type: 'string', $value: 'Inter' },
          },
          tracking: {
            tight: { $type: 'number', $value: -0.23999999463558197 },
          },
          weight: {
            bold: { $type: 'number', $value: 700 },
          },
          'line-height': {
            body: { $type: 'number', $value: 1.100000023841858 },
          },
        },
        opacity: {
          disabled: { $type: 'number', $value: 0.4000000059604645 },
        },
      },
    });

    writeJson(join(sourceDir, 'semantic.light-mode.tokens.json'), {
      co: {
        space: {
          gap: {
            md: {
              $type: 'number',
              $value: 4,
              $extensions: {
                'com.figma.aliasData': {
                  targetVariableName: 'co/space/100',
                },
              },
            },
          },
        },
        color: {
          missing: {
            ...color('#FFFFFF'),
            $extensions: {
              'com.figma.aliasData': {
                targetVariableName: 'co/color/not-exported',
              },
            },
          },
          visited: {
            pressed: color('#303030'),
            $root: {
              ...color('#303030'),
              $extensions: {
                'com.figma.aliasData': {
                  targetVariableName: 'co/color/neutral/200a',
                },
              },
            },
          },
        },
      },
    });

    mkdirSync(outputDir, { recursive: true });
    writeJson(join(outputDir, 'stale.tokens.json'), { stale: true });
    writeFileSync(join(outputDir, 'README.md'), 'preserve me\n');

    const result = await convertFigmaExports({
      sourceDir,
      outputDir,
      onWarning: (warning) => warnings.push(warning),
    });

    assert.deepEqual(result.files, ['primitives.tokens.json', 'semantic.light-mode.tokens.json']);
    assert.equal(result.warnings.length, 2);
    assert.deepEqual(warnings, result.warnings);
    assert.equal(readFileSync(join(outputDir, 'README.md'), 'utf8'), 'preserve me\n');
    assert.throws(() => readFileSync(join(outputDir, 'stale.tokens.json')));

    const primitives = readJson(join(outputDir, 'primitives.tokens.json'));
    assert.deepEqual(primitives.co.color.neutral['200a'], {
      $type: 'color',
      $value: '#30303040',
      $extensions: {
        'com.figma.variableId': 'VariableID:primitive-color',
      },
      $description: 'Translucent neutral.',
    });
    assert.deepEqual(primitives.co.space['100'], {
      $type: 'dimension',
      $value: '4px',
    });
    assert.deepEqual(primitives.co.font['font-family'].global, {
      $type: 'fontFamily',
      $value: 'Inter',
    });
    assert.deepEqual(primitives.co.font.tracking.tight, {
      $type: 'dimension',
      $value: '-0.24px',
    });
    assert.deepEqual(primitives.co.font.weight.bold, {
      $type: 'fontWeight',
      $value: 700,
    });
    assert.deepEqual(primitives.co.font['line-height'].body, {
      $type: 'number',
      $value: 1.1,
    });
    assert.deepEqual(primitives.co.opacity.disabled, {
      $type: 'number',
      $value: 0.4,
    });

    const semantic = readJson(join(outputDir, 'semantic.light-mode.tokens.json'));
    assert.deepEqual(semantic.co.space.gap.md, {
      $type: 'dimension',
      $value: '{co.space.100}',
      $extensions: {
        'com.figma.aliasData': {
          targetVariableName: 'co/space/100',
        },
      },
    });
    assert.equal(semantic.co.color.missing.$value, '#FFFFFF');
    assert.equal(semantic.co.color.visited.$root.$value, '{co.color.neutral.200a}');

    const firstOutput = readFileSync(join(outputDir, 'primitives.tokens.json'), 'utf8');
    await convertFigmaExports({ sourceDir, outputDir, onWarning: () => {} });
    assert.equal(readFileSync(join(outputDir, 'primitives.tokens.json'), 'utf8'), firstOutput);
  });

  it('validates every file before replacing generated output', async () => {
    const fixtureRoot = createTempDir();
    const sourceDir = join(fixtureRoot, 'exports');
    const outputDir = join(sourceDir, 'tokens');
    const existingOutput = join(outputDir, 'primitives.tokens.json');

    writeJson(join(sourceDir, 'primitives.tokens.json'), {
      co: {
        color: {
          invalid: {
            $type: 'color',
            $value: {
              colorSpace: 'display-p3',
              components: [1, 0, 0],
              alpha: 1,
              hex: '#FF0000',
            },
          },
        },
      },
    });
    writeJson(existingOutput, { existing: true });

    await assert.rejects(
      convertFigmaExports({ sourceDir, outputDir }),
      /unsupported color space "display-p3"/,
    );
    assert.deepEqual(readJson(existingOutput), { existing: true });
  });
});

describe('Style Dictionary compatibility', () => {
  it('builds every exported theme and mode without object values or unresolved aliases', async () => {
    const tempDir = createTempDir('cobalt-figma-style-dictionary-');
    const outputDir = join(tempDir, 'tokens');
    const buildDir = join(tempDir, 'css');
    const result = await convertFigmaExports({
      sourceDir: defaultSourceDir,
      outputDir,
      onWarning: () => {},
    });

    assert.equal(result.warnings.length, 0);

    const themes = result.files.filter((fileName) => fileName.startsWith('theme.'));
    const modes = result.files.filter((fileName) => fileName.startsWith('semantic.'));

    for (const theme of themes) {
      for (const mode of modes) {
        const destination = `${basename(theme, '.tokens.json')}-${basename(mode, '.tokens.json')}.css`;
        const styleDictionary = new StyleDictionary({
          source: [
            join(outputDir, 'primitives.tokens.json'),
            join(outputDir, theme),
            join(outputDir, mode),
          ],
          log: { verbosity: 'silent' },
          platforms: {
            css: {
              transformGroup: 'css',
              buildPath: `${buildDir}${sep}`,
              files: [
                {
                  destination,
                  format: 'css/variables',
                  options: { outputReferences: true },
                },
              ],
            },
          },
        });

        await styleDictionary.buildAllPlatforms();

        const css = readFileSync(join(buildDir, destination), 'utf8');
        assert.doesNotMatch(css, /\[object Object\]/);
        assert.match(css, /--co-space-100: 4px;/);
        assert.match(css, /--co-font-font-family-global: Inter;/);
        assert.match(css, /--co-color-neutral-200a: rgba\(48, 48, 48, 0\.25\);/);
        assert.match(css, /--co-color-background-page: var\(--co-color-neutral-/);
      }
    }

    assert.equal(themes.length * modes.length, 8);
  });
});
