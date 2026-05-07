# Element Mapping

Element mapping is the process of progressively applying Cobalt baseline styles to native HTML. It is the same model described in [Typography](/foundations/typography): tokens define semantic roles, and `base.css` maps common elements to those roles inside a `[data-co-base]` scope.

Use this when an existing application is not ready for full component migration but can start aligning type, links, lists, tables, code, and basic document structure.

## What Gets Mapped

When `@cobalt/tokens/css/base` is imported and `[data-co-base]` is present, Cobalt applies baseline styles to elements inside that scope.

| Element family                    | Baseline behavior                                             |
| --------------------------------- | ------------------------------------------------------------- |
| `h1`-`h6`, `p`, `small`, `strong` | Typography roles, line-height, weight, tracking, and spacing. |
| `a`                               | Link color, hover underline, and visible focus outline.       |
| `ul`, `ol`, `li`                  | Tokenized list padding and vertical rhythm.                   |
| `table`, `th`, `td`               | Compact body type, tokenized padding, and borders.            |
| `code`, `pre`                     | Monospace family, tokenized surfaces, padding, and radius.    |
| `blockquote`, `hr`                | Tokenized borders, spacing, and text color.                   |

`display` typography is intentionally not mapped to an element. Use `.co-type-display` or the typography tokens directly for hero moments.

## Progressive Rollout

### 1. Load tokens

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/css/fonts';
```

### 2. Add base styles

```css
@import '@cobalt/tokens/css/base';
```

### 3. Scope the baseline

Start with a small area rather than the whole app.

```html
<section data-co-base>
  <h1>Account settings</h1>
  <p>Manage profile, security, and notification preferences.</p>
</section>
```

### 4. Expand only after review

Move from a component story, to a page region, to a route, and eventually to a larger app shell only after visual and regression checks pass.

## When To Use This

Use element mapping for:

- content-heavy pages
- settings and admin screens
- forms with native headings, paragraphs, hints, and error summaries
- table-like content that does not require a full data-grid component
- legacy pages where component replacement would be too large for the current release

Avoid applying `[data-co-base]` globally at the start. Legacy CSS may depend on old heading margins, list padding, table borders, or inherited form styles.

## Verification

Before expanding the scope, check:

- headings still create the right visual hierarchy
- links have visible hover and focus states
- lists and tables do not break existing layout
- form labels, hints, and errors still align with the app's form system
- dark mode or alternate themes still resolve token values correctly
- screenshots before and after are acceptable to design and product owners

## Related

- [Typography](/foundations/typography)
- [CSS Cascade Layers](/foundations/css-layers)
- [Migrating an Existing Application](/guidance/migration)
