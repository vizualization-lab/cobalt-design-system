import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tokensCssPath = path.resolve(__dirname, '../../tokens/dist/css/tokens.css');

export interface TokenEntry {
  name: string;
  value: string;
  resolvedValue: string | null;
  category: string;
  tier: 'primitive' | 'semantic';
}

export interface TokensData {
  tokens: TokenEntry[];
}

const CATEGORY_MAP: Record<string, string> = {
  space: 'Space',
  color: 'Color',
  font: 'Font',
  typography: 'Typography',
  shape: 'Shape',
  elevation: 'Elevation',
  motion: 'Motion',
  sizing: 'Sizing',
  opacity: 'Opacity',
  breakpoint: 'Breakpoint',
  focus: 'Focus',
  control: 'Control',
  layout: 'Layout',
  component: 'Component',
};

function deriveCategory(name: string): string {
  const withoutPrefix = name.replace(/^--co-/, '');
  const firstSegment = withoutPrefix.split('-')[0];
  return CATEGORY_MAP[firstSegment] ?? firstSegment;
}

function deriveTier(name: string, value: string): 'primitive' | 'semantic' {
  const withoutPrefix = name.replace(/^--co-/, '');
  // Color primitives have "primitive" in the name
  if (withoutPrefix.startsWith('color-primitive-')) return 'primitive';
  // Scale tokens are primitives: --co-space-{N}, --co-font-size-{N}, etc.
  // Semantic tokens reference other tokens via var()
  if (value.startsWith('var(')) return 'semantic';
  return 'primitive';
}

export default {
  watch: ['../../tokens/dist/css/tokens.css'],
  load(): TokensData {
    const css = fs.readFileSync(tokensCssPath, 'utf-8');
    const re = /--(co-[\w-]+)\s*:\s*([^;]+);/g;
    let match;

    // First pass: collect all tokens and build a lookup map
    const rawTokens: { name: string; value: string }[] = [];
    const valueMap: Record<string, string> = {};

    while ((match = re.exec(css)) !== null) {
      const name = `--${match[1]}`;
      const value = match[2].trim();
      rawTokens.push({ name, value });
      valueMap[name] = value;
    }

    // Second pass: resolve var() references to final values
    function resolve(value: string, depth = 0): string | null {
      if (depth > 5) return null;
      const varMatch = value.match(/^var\((--[\w-]+)\)$/);
      if (!varMatch) return null;
      const refName = varMatch[1];
      const refValue = valueMap[refName];
      if (!refValue) return null;
      // If the referenced value is also a var(), keep resolving
      if (refValue.startsWith('var(')) {
        return resolve(refValue, depth + 1);
      }
      return refValue;
    }

    const tokens: TokenEntry[] = rawTokens.map(({ name, value }) => ({
      name,
      value,
      resolvedValue: resolve(value),
      category: deriveCategory(name),
      tier: deriveTier(name, value),
    }));

    return { tokens };
  },
};
