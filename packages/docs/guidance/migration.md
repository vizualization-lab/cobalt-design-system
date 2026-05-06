# Migration Guides

Moving to Cobalt Design System from another framework or custom CSS is a practical, incremental process. This page provides step-by-step strategies for the most common migration paths.

---

## General approach

Regardless of your starting point, follow this phased plan:

1. **Audit** — Inventory your current components and map them to Cobalt equivalents.
2. **Install** — Add Cobalt packages alongside your existing framework.
3. **Replace incrementally** — Swap one component at a time, starting with leaf components (buttons, inputs).
4. **Adopt tokens** — Replace hardcoded colors, spacing, and typography with Cobalt tokens.
5. **Remove legacy** — Once a page is fully migrated, remove the old framework from that bundle.

> **Tip:** Run both systems in parallel during migration. Cobalt web components do not conflict with CSS class-based frameworks because they use Shadow DOM encapsulation.

---

## Migrating from raw HTML/CSS

This is the most straightforward path. Replace hand-written HTML elements with Cobalt components and swap hardcoded style values for tokens.

### Before

```html
<button class="btn btn-blue" style="padding: 8px 16px; border-radius: 4px;">Save</button>
```

### After

```html
<co-button variant="primary">Save</co-button>
```

### Step-by-step

1. Install the required packages: `npm install @cobalt/co-button @cobalt/tokens`.
2. Import `@cobalt/tokens/css/base` in your global stylesheet to apply the global reset.
3. Replace each hand-written element with its Cobalt counterpart.
4. Replace hardcoded values in remaining custom CSS with token references.

| Raw CSS value               | Cobalt token                         |
| --------------------------- | ------------------------------------ |
| `#0066cc`                   | `var(--co-color-state-primary-base)` |
| `14px` font size            | `var(--co-font-size-small)`          |
| `8px` padding               | `var(--co-space-2)`                  |
| `4px` border radius         | `var(--co-shape-radius-sm)`          |
| `0 2px 4px rgba(0,0,0,0.1)` | `var(--co-elevation-shadow-sm)`      |

---

## Migrating from Bootstrap

Bootstrap and Cobalt can coexist because Cobalt components live inside Shadow DOM and will not be affected by Bootstrap's global styles.

### Mapping Bootstrap components to Cobalt

| Bootstrap           | Cobalt                          | Notes                                            |
| ------------------- | ------------------------------- | ------------------------------------------------ |
| `.btn .btn-primary` | `<co-button variant="primary">` | Drop-in replacement.                             |
| `.form-control`     | `<co-input>`                    | Includes built-in label and validation.          |
| `.modal`            | `<co-dialog>`                   | Manages focus trap and backdrop automatically.   |
| `.alert`            | `<co-alert>`                    | Supports `variant` and `dismissible` attributes. |
| `.nav .nav-tabs`    | `<co-tabs>`                     | Keyboard navigation included.                    |
| `.card`             | `<co-card>`                     | Uses slots for header, body, and footer.         |
| `.dropdown`         | `<co-menu>`                     | Accessible menu with keyboard support.           |
| `.tooltip`          | `<co-tooltip>`                  | Positioned via `@floating-ui`.                   |

### Step-by-step

1. Install Cobalt alongside Bootstrap — no configuration conflicts.
2. Replace Bootstrap components one by one, starting with buttons and form controls.
3. After a full page is migrated, remove Bootstrap's JS and CSS from that page's bundle.
4. Replace Bootstrap utility classes (`mt-3`, `p-2`) with Cobalt token-based custom CSS.

```css
/* Before: Bootstrap utility */
.my-section {
  margin-top: 1rem;
} /* or class="mt-3" */

/* After: Cobalt token */
.my-section {
  margin-top: var(--co-space-4);
}
```

---

## Migrating from Material UI

Material UI (MUI) is a React component library, so migration involves replacing React components rather than HTML classes.

### Mapping MUI components to Cobalt

| MUI component | Cobalt component                   | Notes                                                                                                             |
| ------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `<Button>`    | `<CoButton>` (via `@cobalt/react`) | Use `variant` prop for visual style.                                                                              |
| `<TextField>` | `<CoInput>`                        | Use the field `label` prop by default, or pair with `<CoLabel>` when the label must be a separate native element. |
| `<Dialog>`    | `<CoDialog>`                       | Replace `open` state with the `open` attribute.                                                                   |
| `<Snackbar>`  | `<CoToast>`                        | Use `co-toast-service` for imperative API.                                                                        |
| `<Select>`    | `<CoSelect>`                       | Options passed via `<co-option>` children.                                                                        |
| `<DataGrid>`  | `<CoTable>`                        | Supports sorting, pagination, and virtual scroll.                                                                 |

### Step-by-step

1. Install `@cobalt/react` and `@cobalt/tokens`.
2. Replace MUI's `<ThemeProvider>` with Cobalt's CSS token import.
3. Swap components one at a time. Both MUI and Cobalt components can render on the same page.
4. Remove `@mui/*` packages once all references are gone.

```jsx
// Before: MUI
import Button from '@mui/material/Button';
<Button variant="contained" color="primary">
  Save
</Button>;

// After: Cobalt
import { CoButton } from '@cobalt/react';
<CoButton variant="primary">Save</CoButton>;
```

---

## Token mapping reference

Use this table when replacing hardcoded values or framework-specific variables with Cobalt tokens.

| Concept         | Bootstrap variable  | MUI theme key               | Cobalt token                    |
| --------------- | ------------------- | --------------------------- | ------------------------------- |
| Primary color   | `$primary`          | `palette.primary.main`      | `--co-color-state-primary-base` |
| Error color     | `$danger`           | `palette.error.main`        | `--co-color-state-danger-base`  |
| Body font size  | `$font-size-base`   | `typography.body1.fontSize` | `--co-font-size-p`              |
| Small radius    | `$border-radius-sm` | `shape.borderRadius`        | `--co-shape-radius-sm`          |
| Base spacing    | `$spacer`           | `spacing(1)`                | `--co-space-4`                  |
| Shadow (small)  | `$box-shadow-sm`    | `shadows[2]`                | `--co-elevation-shadow-sm`      |
| Shadow (medium) | `$box-shadow`       | `shadows[4]`                | `--co-elevation-shadow-md`      |

---

## Need help?

If you run into issues during migration, visit the [Contact](/resources/contact) page for support channels. When opening a GitHub Discussion, include the `migration` label along with your source framework, target page, and any error messages.
