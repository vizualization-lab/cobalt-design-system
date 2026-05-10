# Custom Icons

This directory contains custom SVG icons that augment the Material Symbols set. Custom icons are namespaced with a `co-` prefix to differentiate them from the Material Symbols collection.

## Directory Structure

```
custom/
  rounded/
    co-example.svg          # unfilled
    co-example-fill.svg     # filled
```

Each icon can have up to 2 variants (unfilled/filled). At minimum, provide the unfilled variant.

## Search Metadata

Add searchable terms for each custom icon in `custom/metadata.json` using the base icon name without a `-fill` suffix:

```json
{
  "co-chart": ["chart", "analytics", "data visualization"]
}
```

These terms are included in the generated `@cobalt/icons` metadata and make custom icons searchable in the docs icon gallery. They are not displayed in the UI.

## Naming Conventions

- File names **must** start with `co-` (e.g., `co-chart.svg`, `co-brand-logo.svg`)
- Use **kebab-case** for multi-word names
- Filled variants append `-fill` before the extension (e.g., `co-chart-fill.svg`)
- Files without the `co-` prefix will be skipped with a warning during build

## SVG Requirements

- `viewBox="0 0 24 24"` — custom icons use the standard 24×24 grid
- Use only `<path>` elements (no `<circle>`, `<rect>`, `<line>`, etc.)
- Use `fill="currentColor"` on paths (or omit fill to inherit)
- No `stroke` attributes — icons are expressed as filled outlines
- No embedded `<style>`, `<defs>`, or `<clipPath>` elements
- Flatten all transforms and merge overlapping paths

## Usage

After adding SVGs, run `pnpm build` in the icons package. Custom icons appear in the registry and can be used like any other icon:

```html
<co-icon name="co-chart"></co-icon> <co-icon name="co-chart" fill></co-icon>
```

See [Designing Custom Icons](../../docs/foundations/iconography.md) for full design specifications.
