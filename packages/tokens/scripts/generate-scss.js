import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const HEADER = [
  '// Do not edit directly, this file was auto-generated.',
  '// SCSS helpers resolve to CSS custom properties so runtime theming stays aligned with CSS.',
  '',
].join('\n');

const FONT_FAMILIES = {
  sans: "'Inter Variable', 'Noto Sans Variable', system-ui, sans-serif",
  mono: "'JetBrains Mono Variable', 'Fira Code', monospace",
};

function ensureDir(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

function writeGenerated(filePath, content) {
  ensureDir(filePath);
  writeFileSync(filePath, content);
}

function readCss(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing CSS source for SCSS generation: ${filePath}`);
  }

  return readFileSync(filePath, 'utf-8');
}

function extractCssVariables(css) {
  const tokens = [];
  const seen = new Set();
  const re = /--(co-[\w-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = re.exec(css)) !== null) {
    const cssName = `--${match[1]}`;
    if (seen.has(cssName)) continue;

    seen.add(cssName);
    tokens.push({
      cssName,
      key: match[1].replace(/^co-/, ''),
      value: match[2].trim(),
    });
  }

  if (tokens.length === 0) {
    throw new Error('No --co-* CSS variables found while generating SCSS.');
  }

  return tokens;
}

function sassVarName(token) {
  return `$${token.cssName.slice(2)}`;
}

function sassString(value) {
  return `'${value.replaceAll("'", "\\'")}'`;
}

function mapEntries(entries, getKey, getValue) {
  return entries.map((entry) => `  ${sassString(getKey(entry))}: ${getValue(entry)},`).join('\n');
}

function generateTokensScss(tokens) {
  const lines = [HEADER.trimEnd(), ''];

  for (const token of tokens) {
    lines.push(`${sassVarName(token)}: var(${token.cssName}) !default;`);
  }

  lines.push('');
  return lines.join('\n');
}

function generateMapsScss(tokens) {
  const breakpointTokens = tokens.filter((token) => token.key.startsWith('breakpoint-'));
  const tokensByKey = new Map(tokens.map((token) => [token.key, token]));
  const typographyRoles = new Map();

  const tokenReference = (key) => {
    const token = tokensByKey.get(key);
    if (!token) throw new Error(`Missing required typography token: ${key}.`);
    return `var(${token.cssName})`;
  };

  for (const token of tokens) {
    const roleMatch = token.key.match(/^font-size-(heading|body)-(.+)$/);
    const role =
      token.key === 'font-size-code'
        ? 'code'
        : roleMatch
          ? `${roleMatch[1]}.${roleMatch[2]}`
          : null;

    if (!role) continue;

    const isHeading = role.startsWith('heading.');
    const properties = new Map([
      ['size', `var(${token.cssName})`],
      ['weight', tokenReference('font-weight-regular')],
      ['tracking', tokenReference(isHeading ? 'font-tracking-tight' : 'font-tracking-normal')],
      [
        'line-height',
        tokenReference(
          role === 'heading.2xl'
            ? 'font-line-height-100'
            : isHeading
              ? 'font-line-height-200'
              : 'font-line-height-300',
        ),
      ],
    ]);

    if (role === 'code') properties.set('family', sassString('mono'));
    typographyRoles.set(role, properties);
  }

  const lines = [HEADER.trimEnd(), ''];

  lines.push('$tokens: (');
  lines.push(
    mapEntries(
      tokens,
      (token) => token.key,
      (token) => `var(${token.cssName})`,
    ),
  );
  lines.push(') !default;');
  lines.push('');

  lines.push('$breakpoints: (');
  lines.push(
    mapEntries(
      breakpointTokens,
      (token) => token.key.replace(/^breakpoint-/, ''),
      (token) => token.value,
    ),
  );
  lines.push(') !default;');
  lines.push('');

  lines.push('$font-families: (');
  for (const [name, value] of Object.entries(FONT_FAMILIES)) {
    lines.push(`  ${sassString(name)}: (${value}),`);
  }
  lines.push(') !default;');
  lines.push('');

  lines.push('$typography-roles: (');
  for (const [role, properties] of [...typographyRoles.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    lines.push(`  ${sassString(role)}: (`);
    for (const property of ['size', 'weight', 'tracking', 'line-height', 'family']) {
      const value = properties.get(property);
      if (!value && property !== 'family') {
        throw new Error(`Missing typography ${property} token for role "${role}".`);
      }
      if (value) lines.push(`    ${sassString(property)}: ${value},`);
    }
    lines.push('  ),');
  }
  lines.push(') !default;');
  lines.push('');

  return lines.join('\n');
}

function generateFunctionsScss() {
  return `${HEADER}@use 'sass:map';
@use 'sass:string';
@use 'maps' as co-maps;

@function _replace($value, $search, $replacement) {
  $text: '#{$value}';
  $index: string.index($text, $search);

  @while $index {
    $before: '';
    @if $index > 1 {
      $before: string.slice($text, 1, $index - 1);
    }

    $after-start: $index + string.length($search);
    $after: '';
    @if $after-start <= string.length($text) {
      $after: string.slice($text, $after-start);
    }

    $text: $before + $replacement + $after;
    $index: string.index($text, $search);
  }

  @return $text;
}

@function _strip-prefix($value, $prefix) {
  $text: '#{$value}';

  @if string.index($text, $prefix) == 1 {
    @return string.slice($text, string.length($prefix) + 1);
  }

  @return $text;
}

@function _normalize-token-name($name) {
  $key: _replace($name, '.', '-');
  $key: _strip-prefix($key, '--co-');
  $key: _strip-prefix($key, 'co-');

  @return $key;
}

@function token($name) {
  $key: _normalize-token-name($name);

  @if not map.has-key(co-maps.$tokens, $key) {
    @error 'Unknown Cobalt token "#{$name}".';
  }

  @return map.get(co-maps.$tokens, $key);
}

@function space($name) {
  @return token('space-#{_replace($name, '.', '-')}');
}

@function color($name) {
  @return token('color-#{_replace($name, '.', '-')}');
}

@function font($name) {
  @return token('font-#{_replace($name, '.', '-')}');
}

@function radius($name) {
  @return token('radius-#{_replace($name, '.', '-')}');
}

@function breakpoint($name) {
  $key: _replace($name, '.', '-');

  @if not map.has-key(co-maps.$breakpoints, $key) {
    @error 'Unknown Cobalt breakpoint "#{$name}".';
  }

  @return map.get(co-maps.$breakpoints, $key);
}
`;
}

function generateMixinsScss() {
  return `${HEADER}@use 'sass:map';
@use 'maps' as co-maps;
@use 'functions' as *;

@mixin type($role) {
  $key: '#{$role}';

  @if not map.has-key(co-maps.$typography-roles, $key) {
    @error 'Unknown Cobalt typography role "#{$role}".';
  }

  $properties: map.get(co-maps.$typography-roles, $key);

  font-size: map.get($properties, 'size');
  font-weight: map.get($properties, 'weight');
  letter-spacing: map.get($properties, 'tracking');
  line-height: map.get($properties, 'line-height');

  @if map.has-key($properties, 'family') {
    font-family: map.get(co-maps.$font-families, map.get($properties, 'family'));
  }
}

@mixin font-family($family: sans) {
  $key: '#{$family}';

  @if not map.has-key(co-maps.$font-families, $key) {
    @error 'Unknown Cobalt font family "#{$family}".';
  }

  font-family: map.get(co-maps.$font-families, $key);
}

@mixin media-up($breakpoint) {
  @media (min-width: breakpoint($breakpoint)) {
    @content;
  }
}
`;
}

function generateIndexScss() {
  return `${HEADER}@forward 'tokens';
@forward 'functions';
@forward 'mixins';
`;
}

function generateStylesScss() {
  return `${HEADER}@forward 'index';
@use 'css/fonts';
@use 'css';
@use 'css/base';
@use 'themes/default';
`;
}

function copyCssShim(cssPath, scssPath) {
  const css = readCss(cssPath);
  writeGenerated(scssPath, css);
  return css;
}

function validateScssOutput(outDir, tokens, shimPairs) {
  const tokensScss = readFileSync(join(outDir, 'tokens.scss'), 'utf-8');
  const mapsScss = readFileSync(join(outDir, 'maps.scss'), 'utf-8');

  for (const token of tokens) {
    const variable = `${sassVarName(token)}: var(${token.cssName})`;
    const mapKey = `${sassString(token.key)}: var(${token.cssName})`;

    if (!tokensScss.includes(variable)) {
      throw new Error(`SCSS token variable drift detected for ${token.cssName}.`);
    }

    if (!mapsScss.includes(mapKey)) {
      throw new Error(`SCSS token map drift detected for ${token.cssName}.`);
    }
  }

  for (const [cssPath, scssPath] of shimPairs) {
    const css = readCss(cssPath);
    const scss = readFileSync(scssPath, 'utf-8');

    if (css !== scss) {
      throw new Error(`SCSS style shim drift detected: ${scssPath} differs from ${cssPath}.`);
    }
  }
}

export function generateScss(packageDir, discovery) {
  const outDir = join(packageDir, 'dist', 'scss');
  const cssDir = join(packageDir, 'dist', 'css');
  const cssTokensPath = join(cssDir, 'tokens.css');
  const tokens = extractCssVariables(readCss(cssTokensPath));

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  writeGenerated(join(outDir, 'index.scss'), generateIndexScss());
  writeGenerated(join(outDir, 'tokens.scss'), generateTokensScss(tokens));
  writeGenerated(join(outDir, 'maps.scss'), generateMapsScss(tokens));
  writeGenerated(join(outDir, 'functions.scss'), generateFunctionsScss());
  writeGenerated(join(outDir, 'mixins.scss'), generateMixinsScss());
  writeGenerated(join(outDir, 'styles.scss'), generateStylesScss());

  const shimPairs = [];
  const addShim = (cssPath, scssPath) => {
    copyCssShim(cssPath, scssPath);
    shimPairs.push([cssPath, scssPath]);
  };

  addShim(cssTokensPath, join(outDir, 'css.scss'));
  addShim(join(packageDir, 'src', 'base.css'), join(outDir, 'css', 'base.scss'));
  addShim(join(cssDir, 'tokens-dark.css'), join(outDir, 'css', 'dark.scss'));
  addShim(
    join(packageDir, 'src', 'fonts-international.css'),
    join(outDir, 'css', 'fonts-international.scss'),
  );

  const themeIds = [...new Set(discovery.themeBuilds.map((themeBuild) => themeBuild.themeId))];
  for (const themeId of themeIds) {
    addShim(join(cssDir, 'themes', `${themeId}.css`), join(outDir, 'themes', `${themeId}.scss`));
  }

  for (const themeBuild of discovery.themeBuilds) {
    const { themeId, mode } = themeBuild;
    const cssPath =
      themeId === 'default' && mode === 'light'
        ? cssTokensPath
        : themeId === 'default' && mode === 'dark'
          ? join(cssDir, 'tokens-dark.css')
          : join(cssDir, 'themes', `tokens-${themeId}-${mode}.css`);

    addShim(cssPath, join(outDir, 'css', 'themes', `${themeId}-${mode}.scss`));
  }

  validateScssOutput(outDir, tokens, shimPairs);

  console.log(`  -> dist/scss/index.scss`);
  console.log(`  -> dist/scss/css.scss`);
  console.log(`  -> dist/scss/themes/*.scss`);
}
