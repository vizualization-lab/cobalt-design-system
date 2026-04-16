# Spacing

Cobalt uses a **4 px base unit** spacing scale. The raw scale lives in `primitives.json`, and a small set of semantic aliases (`gap`, `inset`, `section`, `page`) make common layout decisions easier to reuse.

## Raw scale

| Token           | Value | Typical use                                |
| --------------- | ----- | ------------------------------------------ |
| `--co-space-0`  | 0 px  | Reset                                      |
| `--co-space-1`  | 4 px  | Tight inline spacing                       |
| `--co-space-2`  | 8 px  | Compact control spacing                    |
| `--co-space-3`  | 12 px | Small component padding                    |
| `--co-space-4`  | 16 px | Default component padding                  |
| `--co-space-5`  | 20 px | Form field rhythm                          |
| `--co-space-6`  | 24 px | Standard section internals                 |
| `--co-space-8`  | 32 px | Large card/modal spacing                   |
| `--co-space-10` | 40 px | Spacious layout gaps                       |
| `--co-space-12` | 48 px | Large section spacing                      |
| `--co-space-16` | 64 px | Section-level separation                   |
| `--co-space-20` | 80 px | Hero and landing-page spacing              |
| `--co-space-24` | 96 px | Maximum page-level spacing on wide layouts |

## Semantic spacing aliases

| Token                 | Resolves to     | Typical use                   |
| --------------------- | --------------- | ----------------------------- |
| `--co-space-gap-xs`   | `--co-space-1`  | Tight inline gaps             |
| `--co-space-gap-sm`   | `--co-space-2`  | Standard icon/label gaps      |
| `--co-space-gap-md`   | `--co-space-4`  | Default stack spacing         |
| `--co-space-gap-lg`   | `--co-space-6`  | Larger component separation   |
| `--co-space-gap-xl`   | `--co-space-8`  | Spacious layout gaps          |
| `--co-space-inset-xs` | `--co-space-1`  | Compact padding               |
| `--co-space-inset-sm` | `--co-space-2`  | Small control padding         |
| `--co-space-inset-md` | `--co-space-4`  | Default component padding     |
| `--co-space-inset-lg` | `--co-space-6`  | Comfortable container padding |
| `--co-space-inset-xl` | `--co-space-8`  | Large container padding       |
| `--co-space-section`  | `--co-space-16` | Section spacing               |
| `--co-space-page`     | `--co-space-24` | Page-level spacing            |

## Usage in CSS

Reference spacing tokens with `var()`:

```css
.co-card {
  padding: var(--co-space-inset-md);
  gap: var(--co-space-gap-md);
  display: flex;
  flex-direction: column;
}

.co-stack > * + * {
  margin-top: var(--co-space-gap-md);
}
```

Tokens also work in `calc()` expressions when you need derived values:

```css
.co-sidebar {
  width: calc(var(--co-space-16) * 4); /* 256 px */
  padding: var(--co-space-inset-lg) var(--co-space-inset-md);
}
```

## Choosing the right size

| Context                                    | Recommended tokens                             |
| ------------------------------------------ | ---------------------------------------------- |
| Inline elements (icon + label)             | `--co-space-gap-xs` to `--co-space-gap-sm`     |
| Inside compact controls (badges, chips)    | `--co-space-inset-xs` to `--co-space-inset-sm` |
| Inside standard controls (buttons, inputs) | `--co-space-inset-sm` to `--co-space-inset-md` |
| Component internal padding (cards, alerts) | `--co-space-inset-md` to `--co-space-inset-lg` |
| Between sibling components                 | `--co-space-gap-md` to `--co-space-gap-xl`     |
| Page sections                              | `--co-space-section` to `--co-space-page`      |

## Responsive spacing

Spacing tokens are static values, but you can combine them with breakpoint media queries to scale padding at different viewport sizes:

```css
.co-section {
  padding-block: var(--co-space-8);
}

@media (min-width: 768px) {
  .co-section {
    padding-block: var(--co-space-12);
  }
}

@media (min-width: 1280px) {
  .co-section {
    padding-block: var(--co-space-section);
  }
}
```

## Best practices

1. **Stick to the scale.** Avoid arbitrary values like `13px` or `1.125rem` — they break the 4 px grid.
2. **Use logical properties.** Prefer `padding-inline` and `margin-block` over `padding-left` for better RTL support.
3. **Keep related elements closer.** The Gestalt principle of proximity applies — tighter spacing signals grouping.
4. **Be generous with whitespace at the page level.** `--co-space-section` and `--co-space-page` create a stable page rhythm without inventing one-off values.

## Related

- [Utility Classes](./utilities.md) — `co-p-*`, `co-m-*`, `co-gap-*` shorthand classes for spacing tokens
- [Breakpoints](./breakpoints.md) — responsive viewport tokens
- [Elevation](./elevation.md) — visual depth layers that complement spacing
