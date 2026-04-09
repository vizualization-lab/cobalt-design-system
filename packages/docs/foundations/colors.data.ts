import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const colorTokensPath = path.resolve(__dirname, '../../tokens/tokens/primitives.color.json');

export interface ColorShade {
  scale: string;
  value: string;
}

export interface ColorPalette {
  name: string;
  shades: ColorShade[];
}

export interface ColorsData {
  corePalettes: ColorPalette[];
  extendedPalettes: ColorPalette[];
}

const CORE_FAMILIES = new Set(['neutral', 'blue', 'red', 'green', 'orange']);
const EXCLUDED_KEYS = new Set(['white', 'black']);

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default {
  watch: ['../../tokens/tokens/primitives.color.json'],
  load(): ColorsData {
    const raw = JSON.parse(fs.readFileSync(colorTokensPath, 'utf-8'));
    const primitives = raw.co.color.primitive;

    const corePalettes: ColorPalette[] = [];
    const extendedPalettes: ColorPalette[] = [];

    for (const [family, shadeMap] of Object.entries(primitives)) {
      if (EXCLUDED_KEYS.has(family)) continue;

      const shades: ColorShade[] = Object.entries(
        shadeMap as Record<string, { $value: string }>,
      ).map(([scale, token]) => ({
        scale,
        value: token.$value,
      }));

      const palette: ColorPalette = { name: capitalize(family), shades };

      if (CORE_FAMILIES.has(family)) {
        corePalettes.push(palette);
      } else {
        extendedPalettes.push(palette);
      }
    }

    // Preserve a stable order matching the original docs
    const coreOrder = ['neutral', 'blue', 'red', 'green', 'orange'];
    corePalettes.sort(
      (a, b) => coreOrder.indexOf(a.name.toLowerCase()) - coreOrder.indexOf(b.name.toLowerCase()),
    );

    return { corePalettes, extendedPalettes };
  },
};
