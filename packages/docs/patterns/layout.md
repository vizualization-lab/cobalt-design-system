# Layout Patterns

Layout patterns define how content is structured and arranged on a page. Consistent layout creates visual rhythm, improves scannability, and ensures responsive behavior across screen sizes.

## Page Structure

A standard Cobalt application page consists of a top navigation, an optional sidebar, a main content area, and a footer. Use `co-app-shell` as the root layout container.

```html
<co-app-shell>
  <co-top-nav slot="header"><!-- Global navigation --></co-top-nav>
  <co-side-nav slot="sidebar"><!-- Section navigation --></co-side-nav>

  <co-main slot="content">
    <co-page-header><h1>Dashboard</h1></co-page-header>
    <co-page-body><!-- Page content --></co-page-body>
  </co-main>

  <co-footer slot="footer"><!-- Footer content --></co-footer>
</co-app-shell>
```

## Grid System

Cobalt uses a 12-column fluid grid. Columns are defined with `co-grid` and `co-col`. Gutters default to `--co-space-400` (16px).

```html
<co-grid>
  <co-col span="8">
    <!-- Primary content -->
  </co-col>
  <co-col span="4">
    <!-- Sidebar or supplementary content -->
  </co-col>
</co-grid>
```

### Common Grid Configurations

| Layout            | Columns                 | Use case                |
| ----------------- | ----------------------- | ----------------------- |
| Full width        | `span="12"`             | Articles, focused tasks |
| Content + sidebar | `span="8"` + `span="4"` | Detail pages, settings  |
| Equal halves      | `span="6"` + `span="6"` | Comparison views        |
| Three columns     | `span="4"` x 3          | Card grids, dashboards  |
| Narrow center     | `offset="2" span="8"`   | Forms, onboarding flows |

## Responsive Breakpoints

Cobalt defines four breakpoints. Use responsive column attributes to adjust layouts per breakpoint.

| Token                | Name        | Min width | Typical device |
| -------------------- | ----------- | --------- | -------------- |
| `--co-breakpoint-sm` | Small       | 640px     | Large phones   |
| `--co-breakpoint-md` | Medium      | 768px     | Tablets        |
| `--co-breakpoint-lg` | Large       | 1024px    | Small laptops  |
| `--co-breakpoint-xl` | Extra large | 1280px    | Desktops       |

```html
<co-grid>
  <co-col span="12" md="6" lg="4">
    <co-card>Item 1</co-card>
  </co-col>
  <co-col span="12" md="6" lg="4">
    <co-card>Item 2</co-card>
  </co-col>
  <co-col span="12" md="12" lg="4">
    <co-card>Item 3</co-card>
  </co-col>
</co-grid>
```

> **Tip:** Design for mobile first, then add complexity at larger breakpoints. The `span` attribute sets the mobile default.

## Sidebar Layouts

For pages with persistent side navigation, use the sidebar slot on `co-app-shell`. The sidebar collapses to a drawer on viewports narrower than `--co-breakpoint-md`.

```html
<co-app-shell sidebar-width="260px" sidebar-collapsible>
  <co-side-nav slot="sidebar">
    <co-nav-item href="/settings/general" icon="settings">General</co-nav-item>
    <co-nav-item href="/settings/security" icon="shield">Security</co-nav-item>
  </co-side-nav>
  <co-main slot="content"><!-- Settings page content --></co-main>
</co-app-shell>
```

## Content Areas

Use `co-container` to constrain content width within the main area. This prevents long line lengths on wide displays.

| Variant | Max width | Use case                     |
| ------- | --------- | ---------------------------- |
| `sm`    | 640px     | Focused forms, login pages   |
| `md`    | 960px     | Standard content pages       |
| `lg`    | 1200px    | Dashboards, data-heavy pages |
| `fluid` | 100%      | Full-bleed layouts           |

## Spacing Rhythm

Consistent spacing creates visual hierarchy and grouping. Use spacing tokens rather than arbitrary pixel values.

| Token             | Value | Usage                         |
| ----------------- | ----- | ----------------------------- |
| `--co-space-100`  | 4px   | Tight inline elements         |
| `--co-space-200`  | 8px   | Related items, icon gaps      |
| `--co-space-400`  | 16px  | Grid gutters, form field gaps |
| `--co-space-600`  | 24px  | Section padding               |
| `--co-space-800`  | 32px  | Page section separation       |
| `--co-space-1200` | 48px  | Major content divisions       |

> **Warning:** Avoid mixing spacing tokens with hard-coded values. Inconsistent spacing is one of the most common causes of visual drift across products.

## Stack and Inline Layouts

Use `co-stack` for vertical rhythm and `co-inline` for horizontal arrangements. Both accept a `gap` property tied to spacing tokens.

```html
<co-stack gap="400">
  <co-card>Section one</co-card>
  <co-card>Section two</co-card>
</co-stack>

<co-inline gap="200" align="center">
  <co-badge variant="info">New</co-badge>
  <span>Feature announcement</span>
</co-inline>
```

## Utility Classes

Cobalt provides [token utilities](../foundations/utilities.md) for spacing, typography, and sizing — classes like `co-gap-4` and `co-p-6` that map directly to `--co-*` tokens. For layout primitives (display, flexbox, grid), use [Tailwind with the Cobalt preset](../foundations/tailwind.md) or write CSS directly.

```html
<div
  style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
  class="co-gap-4"
>
  <co-card>Item 1</co-card>
  <co-card>Item 2</co-card>
  <co-card>Item 3</co-card>
</div>
```

See the full [Token Utilities](../foundations/utilities.md) reference for available classes and responsive gap variants.
