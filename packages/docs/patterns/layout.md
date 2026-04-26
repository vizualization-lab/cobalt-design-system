# Layout Patterns

V1 layout guidance is intentionally narrow: `co-app-shell` is the only public layout component in this release. The shell owns global chrome; everything else should be composed inside the `body` slot with plain CSS, semantic HTML, and Cobalt tokens.

## Recommended Pattern

Use `co-app-shell` when the page needs persistent app chrome, section navigation, and a responsive mobile overlay.

```html
<co-app-shell rail-width="115px" drawer-width="260px">
  <div slot="topnav">Workspace navigation</div>

  <co-nav-rail-bar slot="rail" label="Primary sections">
    <co-nav-rail-item value="docs" icon="description" selected>Docs</co-nav-rail-item>
    <co-nav-rail-item value="tokens" icon="palette">Tokens</co-nav-rail-item>
    <co-nav-rail-item value="patterns" icon="grid-view">Patterns</co-nav-rail-item>
  </co-nav-rail-bar>

  <co-nav-drawer slot="drawer" label="Section navigation">
    <co-nav-drawer-item value="overview" icon="dashboard" selected>Overview</co-nav-drawer-item>
    <co-nav-drawer-item value="usage" icon="code">Usage</co-nav-drawer-item>
    <co-nav-drawer-item value="api" icon="list-alt">API</co-nav-drawer-item>
  </co-nav-drawer>

  <main slot="body" class="docs-body">
    <article class="docs-article">Main article</article>
    <aside class="docs-toc">Optional TOC</aside>
  </main>
</co-app-shell>
```

## Compose Inside `body`

The shell deliberately stops at one flexible `body` region. Keep page-specific structure inside that region:

- Article + TOC layouts
- Form screens
- Dashboards and card grids
- Split panes that are local to one page
- Page headers, alerts, and inline status content

Example body composition:

```html
<main
  slot="body"
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: minmax(0, 1fr);
  "
>
  <article
    style="
      padding: 24px;
      background: var(--co-color-surface-default);
      border: 1px solid var(--co-color-border-default);
      border-radius: 16px;
    "
  >
    <header style="margin-bottom: 16px;">
      <p style="margin: 0 0 8px; color: var(--co-color-text-secondary);">Pattern guidance</p>
      <h1 style="margin: 0;">Compose local layout here</h1>
    </header>
    <section>Body content</section>
  </article>

  <aside
    style="
      padding: 16px;
      background: var(--co-color-surface-raised);
      border: 1px solid var(--co-color-border-default);
      border-radius: 16px;
    "
  >
    Optional secondary content
  </aside>
</main>
```

## Docs-Site Shell

The docs-site flow maps cleanly to the shell slots:

- `rail`: primary section switching
- `drawer`: current-section navigation
- `topnav`: product header, search, theme, profile actions
- `body`: article plus right-side table of contents

Keep the TOC in `body`, not the shell API. That keeps the shell focused on shared chrome and prevents v1 from locking in a docs-specific right-rail contract.

## Responsive Strategy

- Design `body` compositions mobile-first.
- Let `co-app-shell` own the only shell-level overlay state.
- Keep the DOM order meaningful so content still reads logically when the layout stacks.
- Use Cobalt tokens for spacing, border, elevation, and typography decisions inside `body`.

## Custom Body Layouts

`co-app-shell` does not ship extra page-body, stack, inline, or sidebar primitives in this v1 surface. For bespoke page layouts inside `body`:

- Use CSS Grid or Flexbox directly
- Or use [Tailwind with the Cobalt preset](/foundations/tailwind)
- Continue using Cobalt tokens for spacing and sizing

```html
<div
  slot="body"
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  "
>
  <section>Card A</section>
  <section>Card B</section>
  <section>Card C</section>
</div>
```

## Best Practices

- Choose one layout owner for the screen: `co-app-shell` for global chrome, local CSS for page internals.
- Keep global navigation in `rail` and contextual navigation in `drawer`.
- Avoid turning shell slots into page-specific regions. If content is not global chrome, it belongs in `body`.
- Prefer token-backed spacing and sizing so app-shell compositions stay visually consistent across products.
