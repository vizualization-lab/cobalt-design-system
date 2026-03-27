# Typography

Typography in Cobalt is built on a purposeful set of font families, a harmonious type scale, and consistent weight and line-height tokens. These choices ensure readability and visual rhythm across every screen size.

## Font families

| Token            | Stack                                                                       | Usage                          |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------ |
| `--co-font-sans` | `'Inter', 'Noto Sans', ui-sans-serif, system-ui, -apple-system, sans-serif` | Body text, UI labels, headings |
| `--co-font-mono` | `'JetBrains Mono', ui-monospace, 'Cascadia Code', monospace`                | Code blocks, technical values  |

Import the self-hosted fonts from `@cobalt/tokens` — no additional packages needed:

```css
@import '@cobalt/tokens/css/fonts';
```

> **Tip:** Inter is the primary UI font. Noto Sans is included as a fallback for extended character sets (CJK, Cyrillic, Greek, math symbols, etc.). If neither loads, the token stack falls back to the operating system's default sans-serif font.

## Type scale

The scale uses a modular ratio that produces consistent visual hierarchy.

| Token            | Size  | Rem       | Typical use              |
| ---------------- | ----- | --------- | ------------------------ |
| `--co-text-xs`   | 12 px | 0.75 rem  | Captions, badges         |
| `--co-text-sm`   | 14 px | 0.875 rem | Helper text, table cells |
| `--co-text-base` | 16 px | 1 rem     | Body copy                |
| `--co-text-lg`   | 18 px | 1.125 rem | Subtitles, card titles   |
| `--co-text-xl`   | 20 px | 1.25 rem  | Section headings         |
| `--co-text-2xl`  | 24 px | 1.5 rem   | Page sub-headings        |
| `--co-text-3xl`  | 30 px | 1.875 rem | Page titles              |

## Font weights

| Token                | Value | Usage                        |
| -------------------- | ----- | ---------------------------- |
| `--co-font-regular`  | 400   | Body text                    |
| `--co-font-medium`   | 500   | Labels, navigation items     |
| `--co-font-semibold` | 600   | Sub-headings, emphasis       |
| `--co-font-bold`     | 700   | Page titles, strong emphasis |

## Line heights

| Token                  | Value | Pairing                            |
| ---------------------- | ----- | ---------------------------------- |
| `--co-leading-tight`   | 1.25  | Headings (`text-xl` and above)     |
| `--co-leading-normal`  | 1.5   | Body text (`text-base`, `text-sm`) |
| `--co-leading-relaxed` | 1.75  | Long-form reading, help text       |

## Usage examples

### CSS

```css
.co-heading {
  font-family: var(--co-font-sans);
  font-size: var(--co-text-2xl);
  font-weight: var(--co-font-bold);
  line-height: var(--co-leading-tight);
  color: var(--co-color-neutral-900);
}

.co-body {
  font-family: var(--co-font-sans);
  font-size: var(--co-text-base);
  font-weight: var(--co-font-regular);
  line-height: var(--co-leading-normal);
  color: var(--co-color-neutral-700);
}
```

### React / TSX

```tsx
import styles from './Article.module.css';

export function Article({ title, body }: { title: string; body: string }) {
  return (
    <article>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.body}>{body}</p>
    </article>
  );
}
```

## Best practices

- Set `font-size: 100%` on `<html>` so rem values respect user browser settings.
- Avoid absolute units (`px`) for font sizes in component CSS; rely on the token rem values instead.
- Limit the number of sizes on a single screen to three or four to maintain clear hierarchy.
- Pair `--co-leading-tight` with headings and `--co-leading-normal` with body text for optimal readability.

## Related

- [Colors](./colors.md) — text color tokens
- [Accessibility](./accessibility.md) — readable font sizes and contrast
