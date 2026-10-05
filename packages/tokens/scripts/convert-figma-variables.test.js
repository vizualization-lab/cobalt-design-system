import assert from 'node:assert/strict';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, sep } from 'node:path';
import { afterEach, describe, it } from 'node:test';
import StyleDictionary from 'style-dictionary';
import { TextReader, Uint8ArrayWriter, ZipWriter } from '@zip.js/zip.js';
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

async function writeZip(filePath, entries, options = {}) {
  const writer = new ZipWriter(new Uint8ArrayWriter(), { useWebWorkers: false, ...options });
  for (const [name, value] of Object.entries(entries)) {
    await writer.add(
      name,
      new TextReader(typeof value === 'string' ? value : JSON.stringify(value)),
    );
  }
  writeFileSync(filePath, await writer.close());
}

function coreEntries() {
  return {
    'Value.tokens.json': { co: { space: { 100: { $type: 'number', $value: 4 } } } },
    'light-mode.tokens.json': { co: { color: { page: color('#FFFFFF') } } },
    'dark-mode.tokens.json': { co: { color: { page: color('#000000') } } },
    'Default.tokens.json': { co: { color: { brand: color('#112233') } } },
  };
}

describe('ZIP exports', () => {
  it('refreshes raw and DTCG files from ZIPs, supports new nested themes, and is repeatable', async () => {
    const sourceDir = createTempDir('figma exports with spaces-');
    const outputDir = join(sourceDir, 'tokens');
    const entries = coreEntries();
    entries['Value.tokens.json'].$extensions = { 'com.figma.modeName': 'Value' };
    await writeZip(join(sourceDir, 'arbitrary export.zip'), entries);
    await writeZip(join(sourceDir, 'more themes.ZIP'), {
      'Nested Folder/New_Theme.tokens.json': { co: { color: { brand: color('#ABCDEF') } } },
      '__MACOSX/._Value.tokens.json': 'not JSON',
      'README.txt': 'ignore me',
    });
    writeJson(join(sourceDir, 'primitives.tokens-figma.json'), { outdated: true });
    writeJson(join(sourceDir, 'theme.removed.tokens-figma.json'), { stale: true });
    writeJson(join(outputDir, 'theme.removed.tokens-dtcg.json'), { stale: true });
    writeFileSync(join(sourceDir, 'README.md'), 'keep raw');
    writeFileSync(join(outputDir, 'README.md'), 'keep output');
    const zipBefore = readFileSync(join(sourceDir, 'arbitrary export.zip'));
    const result = await convertFigmaExports({ sourceDir, outputDir });
    assert.deepEqual(result.files, [
      'primitives.tokens-dtcg.json',
      'semantic.dark-mode.tokens-dtcg.json',
      'semantic.light-mode.tokens-dtcg.json',
      'theme.default.tokens-dtcg.json',
      'theme.new-theme.tokens-dtcg.json',
    ]);
    assert.deepEqual(
      readJson(join(sourceDir, 'primitives.tokens-figma.json')),
      entries['Value.tokens.json'],
    );
    assert.equal(
      readJson(join(outputDir, 'primitives.tokens-dtcg.json')).co.space[100].$value,
      '4px',
    );
    assert.equal(
      readJson(join(outputDir, 'theme.new-theme.tokens-dtcg.json')).co.color.brand.$value,
      '#ABCDEF',
    );
    assert.throws(() => readFileSync(join(sourceDir, 'theme.removed.tokens-figma.json')));
    assert.throws(() => readFileSync(join(outputDir, 'theme.removed.tokens-dtcg.json')));
    assert.equal(readFileSync(join(sourceDir, 'README.md'), 'utf8'), 'keep raw');
    assert.equal(readFileSync(join(outputDir, 'README.md'), 'utf8'), 'keep output');
    assert.deepEqual(readFileSync(join(sourceDir, 'arbitrary export.zip')), zipBefore);
    const before = result.files.map((name) => readFileSync(join(outputDir, name), 'utf8'));
    await convertFigmaExports({ sourceDir, outputDir });
    assert.deepEqual(
      result.files.map((name) => readFileSync(join(outputDir, name), 'utf8')),
      before,
    );
  });

  const failures = [
    [
      'incomplete exports',
      { 'Value.tokens.json': coreEntries()['Value.tokens.json'] },
      /Incomplete.*semantic/,
    ],
    ['malformed JSON', { ...coreEntries(), 'New.tokens.json': '{invalid' }, /New.tokens.json/],
    [
      'invalid tokens',
      { ...coreEntries(), 'New.tokens.json': { co: { color: { invalid: color('#BAD') } } } },
      /New.tokens.json.*six-digit/,
    ],
    [
      'duplicate destinations',
      { ...coreEntries(), 'nested/DEFAULT.tokens.json': {} },
      /Duplicate destination/,
    ],
    [
      'normalized collisions',
      { ...coreEntries(), 'New Theme.tokens.json': {}, 'New_Theme.tokens.json': {} },
      /Duplicate destination/,
    ],
    ['unsafe paths', { ...coreEntries(), '../Escape.tokens.json': {} }, /Unsafe archive entry/],
    [
      'unsafe theme names',
      { ...coreEntries(), 'Bad.Name.tokens.json': {} },
      /Unsupported theme name/,
    ],
    ['non-object JSON', { ...coreEntries(), 'New.tokens.json': [] }, /token JSON object/],
    ['empty token archives', { 'README.txt': 'no tokens' }, /No.*tokens.json/],
  ];
  for (const [label, entries, pattern] of failures) {
    it(`preserves existing exports on ${label}`, async () => {
      const sourceDir = createTempDir();
      const outputDir = join(sourceDir, 'tokens');
      await writeZip(join(sourceDir, 'input.zip'), entries);
      writeJson(join(sourceDir, 'primitives.tokens-figma.json'), { existingRaw: true });
      writeJson(join(sourceDir, 'theme.old.tokens-figma.json'), { existingRaw: true });
      writeJson(join(outputDir, 'primitives.tokens-dtcg.json'), { existingOutput: true });
      writeJson(join(outputDir, 'theme.old.tokens-dtcg.json'), { existingOutput: true });
      const rawBefore = readdirSync(sourceDir);
      const outputBefore = readdirSync(outputDir);
      await assert.rejects(convertFigmaExports({ sourceDir, outputDir }), pattern);
      assert.deepEqual(readdirSync(sourceDir), rawBefore);
      assert.deepEqual(readdirSync(outputDir), outputBefore);
      for (const name of rawBefore.filter((name) => name.endsWith('.json'))) {
        assert.deepEqual(readJson(join(sourceDir, name)), { existingRaw: true });
      }
      for (const name of outputBefore) {
        assert.deepEqual(readJson(join(outputDir, name)), { existingOutput: true });
      }
    });
  }

  it('rejects corrupt ZIPs without falling back to existing JSON', async () => {
    const sourceDir = createTempDir();
    const outputDir = join(sourceDir, 'tokens');
    writeFileSync(join(sourceDir, 'corrupt.zip'), 'not a ZIP');
    writeJson(join(sourceDir, 'primitives.tokens-figma.json'), { existing: true });
    writeJson(join(outputDir, 'primitives.tokens-dtcg.json'), { existing: true });
    await assert.rejects(convertFigmaExports({ sourceDir, outputDir }), /corrupt.zip/);
    assert.deepEqual(readJson(join(sourceDir, 'primitives.tokens-figma.json')), { existing: true });
    assert.deepEqual(readJson(join(outputDir, 'primitives.tokens-dtcg.json')), { existing: true });
  });

  it('rejects duplicate destinations across archives', async () => {
    const sourceDir = createTempDir();
    const outputDir = join(sourceDir, 'tokens');
    await writeZip(join(sourceDir, 'first.zip'), coreEntries());
    await writeZip(join(sourceDir, 'second.zip'), { 'Folder\\VALUE.tokens.json': {} });
    await assert.rejects(
      convertFigmaExports({ sourceDir, outputDir }),
      /second.zip.*Duplicate destination.*first.zip/,
    );
    assert.deepEqual(readdirSync(sourceDir).sort(), ['first.zip', 'second.zip']);
  });

  it('checks entry integrity before replacing files', async () => {
    const sourceDir = createTempDir();
    const outputDir = join(sourceDir, 'tokens');
    const archive = join(sourceDir, 'input.zip');
    await writeZip(archive, coreEntries(), { level: 0 });
    const bytes = readFileSync(archive);
    // A stored entry follows its local header, filename, and extra fields.
    const dataOffset = 30 + bytes.readUInt16LE(26) + bytes.readUInt16LE(28);
    bytes[dataOffset] ^= 1;
    writeFileSync(archive, bytes);
    writeJson(join(sourceDir, 'primitives.tokens-figma.json'), { existing: true });
    writeJson(join(outputDir, 'primitives.tokens-dtcg.json'), { existing: true });
    await assert.rejects(convertFigmaExports({ sourceDir, outputDir }), /input.zip.*signature/i);
    assert.deepEqual(readJson(join(sourceDir, 'primitives.tokens-figma.json')), { existing: true });
    assert.deepEqual(readJson(join(outputDir, 'primitives.tokens-dtcg.json')), { existing: true });
  });
});

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

    writeJson(join(sourceDir, 'primitives.tokens-figma.json'), {
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

    writeJson(join(sourceDir, 'semantic.light-mode.tokens-figma.json'), {
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
    writeJson(join(outputDir, 'stale.tokens-dtcg.json'), { stale: true });
    writeFileSync(join(outputDir, 'README.md'), 'preserve me\n');

    const result = await convertFigmaExports({
      sourceDir,
      outputDir,
      onWarning: (warning) => warnings.push(warning),
    });

    assert.deepEqual(result.files, [
      'primitives.tokens-dtcg.json',
      'semantic.light-mode.tokens-dtcg.json',
    ]);
    assert.equal(result.warnings.length, 2);
    assert.deepEqual(warnings, result.warnings);
    assert.equal(readFileSync(join(outputDir, 'README.md'), 'utf8'), 'preserve me\n');
    assert.throws(() => readFileSync(join(outputDir, 'stale.tokens-dtcg.json')));

    const primitives = readJson(join(outputDir, 'primitives.tokens-dtcg.json'));
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

    const semantic = readJson(join(outputDir, 'semantic.light-mode.tokens-dtcg.json'));
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

    const firstOutput = readFileSync(join(outputDir, 'primitives.tokens-dtcg.json'), 'utf8');
    await convertFigmaExports({ sourceDir, outputDir, onWarning: () => {} });
    assert.equal(readFileSync(join(outputDir, 'primitives.tokens-dtcg.json'), 'utf8'), firstOutput);
  });

  it('validates every file before replacing generated output', async () => {
    const fixtureRoot = createTempDir();
    const sourceDir = join(fixtureRoot, 'exports');
    const outputDir = join(sourceDir, 'tokens');
    const existingOutput = join(outputDir, 'primitives.tokens-dtcg.json');

    writeJson(join(sourceDir, 'primitives.tokens-figma.json'), {
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
    const sourceDir = join(tempDir, 'exports');
    mkdirSync(sourceDir);
    for (const name of readdirSync(defaultSourceDir).filter((name) =>
      name.endsWith('.tokens-figma.json'),
    )) {
      copyFileSync(join(defaultSourceDir, name), join(sourceDir, name));
    }
    const result = await convertFigmaExports({
      sourceDir,
      outputDir,
      onWarning: () => {},
    });

    assert.equal(result.warnings.length, 0);

    const themes = result.files.filter((fileName) => fileName.startsWith('theme.'));
    const modes = result.files.filter((fileName) => fileName.startsWith('semantic.'));

    for (const theme of themes) {
      for (const mode of modes) {
        const destination = `${basename(theme, '.tokens-dtcg.json')}-${basename(mode, '.tokens-dtcg.json')}.css`;
        const styleDictionary = new StyleDictionary({
          source: [
            join(outputDir, 'primitives.tokens-dtcg.json'),
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

    assert.equal(
      themes.length,
      readdirSync(sourceDir).filter((name) => name.startsWith('theme.')).length,
    );
    assert.equal(modes.length, 2);
    assert.equal(readdirSync(buildDir).length, themes.length * modes.length);
  });
});
