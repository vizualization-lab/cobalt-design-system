import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const HEADER = [
  '// Do not edit directly, this file was auto-generated.',
  '// SCSS helpers resolve to CSS custom properties so runtime theming stays aligned with CSS.',
  '',
].join('\n');

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
  const typographyTokens = tokens.filter((token) => token.key.startsWith('typography-'));
  const fontFamilyTokens = tokens.filter((token) => token.key.startsWith('font-family-'));
  const typographyRoles = new Map();

  for (const token of typographyTokens) {
    const match = token.key.match(/^typography-(.+)-(size|weight|tracking|line-height)$/);
    if (!match) continue;

    const [, role, property] = match;
    if (!typographyRoles.has(role)) typographyRoles.set(role, new Map());
    typographyRoles.get(role).set(property, `var(${token.cssName})`);
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
  lines.push(
    mapEntries(
      fontFamilyTokens,
      (token) => token.key.replace(/^font-family-/, ''),
      (token) => `var(${token.cssName})`,
    ),
  );
  lines.push(') !default;');
  lines.push('');

  lines.push('$typography-roles: (');
  for (const [role, properties] of [...typographyRoles.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    lines.push(`  ${sassString(role)}: (`);
    for (const property of ['size', 'weight', 'tracking', 'line-height']) {
      const value = properties.get(property);
      if (!value) {
        throw new Error(`Missing typography ${property} token for role "${role}".`);
      }
      lines.push(`    ${sassString(property)}: ${value},`);
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

  font-size: token('typography-#{$key}-size');
  font-weight: token('typography-#{$key}-weight');
  letter-spacing: token('typography-#{$key}-tracking');
  line-height: token('typography-#{$key}-line-height');

  @if $key == 'eyebrow' {
    text-transform: uppercase;
  }
}

@mixin font-family($family: sans) {
  $key: '#{$family}';

  @if not map.has-key(co-maps.$font-families, $key) {
    @error 'Unknown Cobalt font family "#{$family}".';
  }

  font-family: font('family-#{$key}');
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

  const shimPairs = [];
  const addShim = (cssPath, scssPath) => {
    copyCssShim(cssPath, scssPath);
    shimPairs.push([cssPath, scssPath]);
  };

  addShim(cssTokensPath, join(outDir, 'css.scss'));
  addShim(join(cssDir, 'tokens-dark.css'), join(outDir, 'css', 'dark.scss'));

  const themeIds = [...new Set(discovery.themeTokenSets.map((tokenSet) => tokenSet.themeId))];
  for (const themeId of themeIds) {
    addShim(join(cssDir, 'themes', `${themeId}.css`), join(outDir, 'themes', `${themeId}.scss`));
  }

  for (const themeTokenSet of discovery.themeTokenSets) {
    const { themeId, mode } = themeTokenSet;
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
