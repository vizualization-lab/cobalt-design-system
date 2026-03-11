# Colors

The Cobalt color system is organized into **primitive palettes** and **semantic tokens**. Primitives define the raw hues and shades; semantic tokens map those primitives to UI roles so that themes and dark mode work automatically.

## Primitive palette

Each primitive scale runs from `50` (lightest) to `950` (darkest).

<ColorSwatch :colors="[
  { scale: '50',  blue: '#eff6ff', gray: '#f9fafb', green: '#f0fdf4', red: '#fef2f2', amber: '#fffbeb' },
  { scale: '100', blue: '#dbeafe', gray: '#f3f4f6', green: '#dcfce7', red: '#fee2e2', amber: '#fef3c7' },
  { scale: '200', blue: '#bfdbfe', gray: '#e5e7eb', green: '#bbf7d0', red: '#fecaca', amber: '#fde68a' },
  { scale: '300', blue: '#93c5fd', gray: '#d1d5db', green: '#86efac', red: '#fca5a5', amber: '#fcd34d' },
  { scale: '400', blue: '#60a5fa', gray: '#9ca3af', green: '#4ade80', red: '#f87171', amber: '#fbbf24' },
  { scale: '500', blue: '#3b82f6', gray: '#6b7280', green: '#22c55e', red: '#ef4444', amber: '#f59e0b' },
  { scale: '600', blue: '#2563eb', gray: '#4b5563', green: '#16a34a', red: '#dc2626', amber: '#d97706' },
  { scale: '700', blue: '#1d4ed8', gray: '#374151', green: '#15803d', red: '#b91c1c', amber: '#b45309' },
  { scale: '800', blue: '#1e40af', gray: '#1f2937', green: '#166534', red: '#991b1b', amber: '#92400e' },
  { scale: '900', blue: '#1e3a8a', gray: '#111827', green: '#14532d', red: '#7f1d1d', amber: '#78350f' },
  { scale: '950', blue: '#172554', gray: '#030712', green: '#052e16', red: '#450a0a', amber: '#451a03' },
]" />

## Semantic tokens

Semantic tokens abstract primitives so your UI adapts to theme changes without touching component code.

| Token                    | Light mode value | Dark mode value | Usage                       |
| ------------------------ | ---------------- | --------------- | --------------------------- |
| `--cb-color-primary-600` | Blue 600         | Blue 400        | Primary actions, links      |
| `--cb-color-neutral-100` | Gray 100         | Gray 800        | Subtle backgrounds          |
| `--cb-color-neutral-900` | Gray 900         | Gray 50         | Body text                   |
| `--cb-color-danger-600`  | Red 600          | Red 400         | Destructive actions, errors |
| `--cb-color-success-600` | Green 600        | Green 400       | Success states              |
| `--cb-color-warning-500` | Amber 500        | Amber 300       | Warning indicators          |

## Usage in CSS

Reference tokens with `var()`:

```css
.cb-button--primary {
  background-color: var(--cb-color-primary-600);
  color: var(--cb-color-neutral-0);
}

.cb-alert--danger {
  background-color: var(--cb-color-danger-50);
  border-left: 4px solid var(--cb-color-danger-600);
  color: var(--cb-color-danger-900);
}
```

## Light and dark mode

Cobalt ships two token layers. The default layer uses light-mode values. When the `[data-theme="dark"]` attribute is set on a parent element (typically `<html>`), the dark layer overrides the semantic tokens.

```css
/* Automatically provided by @cobalt/tokens */
:root {
  --cb-color-primary-600: #2563eb;
  --cb-color-neutral-0: #ffffff;
}

[data-theme='dark'] {
  --cb-color-primary-600: #60a5fa;
  --cb-color-neutral-0: #0a0a0a;
}
```

No component CSS needs to change — the same `var(--cb-color-primary-600)` resolves to the correct value in either mode.

> **Tip:** Always verify that foreground/background pairings meet a minimum contrast ratio of **4.5:1** for normal text and **3:1** for large text, as required by WCAG 2.1 AA.

## Accessibility

- All default semantic pairings satisfy WCAG 2.1 AA contrast requirements.
- Never rely on color alone to communicate meaning — always pair color with text, icons, or patterns.
- Use the `--cb-color-focus-ring` token (`Blue 500` at 50 % opacity) for keyboard-focus outlines.

## Related

- [Accessibility Standards](./accessibility.md)
- [Tokens reference](../tokens/index.md)
