# Navigation Patterns

Effective navigation helps users understand where they are, where they can go, and how to get back. Cobalt provides several navigation components that can be composed into consistent patterns.

## When to Use Each Pattern

| Pattern     | Best For                                    | Avoid When                |
| ----------- | ------------------------------------------- | ------------------------- |
| Top nav     | Global app navigation, 4--7 top-level items | More than 7 primary items |
| Sidebar nav | Complex apps with nested sections           | Simple marketing pages    |
| Breadcrumbs | Deep hierarchical content                   | Flat site structures      |
| Tabs        | Switching views within a page               | Sequential workflows      |
| Pagination  | Large data sets, search results             | Fewer than 25 items       |

## Top Navigation

Use `co-top-nav` for primary application navigation. It supports a logo slot, navigation items, and a utility area for user actions.

```html
<co-top-nav>
  <co-logo slot="logo" href="/">Cobalt</co-logo>

  <co-nav-item href="/dashboard" active>Dashboard</co-nav-rail-item>
  <co-nav-item href="/projects">Projects</co-nav-rail-item>
  <co-nav-item href="/reports">Reports</co-nav-rail-item>
  <co-nav-item href="/settings">Settings</co-nav-rail-item>

  <co-nav-actions slot="actions">
    <co-icon-button icon="bell" label="Notifications"></co-icon-button>
    <co-avatar name="Jane Doe" size="sm"></co-avatar>
  </co-nav-actions>
</co-top-nav>
```

## Sidebar Navigation

Use `co-side-nav` for applications with persistent information architecture. It supports collapsible sections and nested items.

```html
<co-side-nav collapsible>
  <co-nav-rail-bar label="Workspace">
    <co-nav-rail-item href="/inbox" icon="inbox">Inbox</co-nav-rail-item>
    <co-nav-rail-item href="/tasks" icon="check-square">Tasks</co-nav-rail-item>
  </co-nav-rail-bar>

  <co-nav-section label="Settings" expanded>
    <co-nav-rail-item href="/settings/profile" icon="user">Profile</co-nav-rail-item>
    <co-nav-rail-item href="/settings/team" icon="users">Team</co-nav-rail-item>
    <co-nav-rail-item href="/settings/billing" icon="credit-card">Billing</co-nav-rail-item>
  </co-nav-section>
</co-side-nav>
```

> **Tip:** Keep sidebar navigation to two levels of nesting at most. Deeper hierarchies should be handled with breadcrumbs or in-page navigation.

## Breadcrumbs

Use `co-breadcrumbs` to show the user's location within a hierarchy. Always include the current page as the last non-linked item.

```html
<co-breadcrumbs>
  <co-breadcrumb href="/">Home</co-breadcrumb>
  <co-breadcrumb href="/projects">Projects</co-breadcrumb>
  <co-breadcrumb href="/projects/cobalt">Cobalt</co-breadcrumb>
  <co-breadcrumb current>Settings</co-breadcrumb>
</co-breadcrumbs>
```

## Tabs

Use `co-tabs` to organize related content within the same page context. Tabs should not be used for sequential steps -- use a stepper instead.

```html
<co-tabs>
  <co-tab id="tab-overview" selected>Overview</co-tab>
  <co-tab id="tab-activity">Activity</co-tab>
  <co-tab id="tab-members">Members</co-tab>
</co-tabs>

<co-tab-panel tab="tab-overview">
  <!-- Overview content -->
</co-tab-panel>
```

## Pagination

Use `co-pagination` for navigating through paged data. Always display the current page, total pages, and provide first/last page shortcuts for large sets.

```html
<co-pagination current-page="3" total-pages="12" page-size="25" total-items="290"> </co-pagination>
```

## Mobile Navigation

On viewports narrower than `768px`, the top navigation collapses into a hamburger menu. The sidebar converts to an overlay drawer.

```html
<co-top-nav>
  <!-- Navigation items are automatically placed in a drawer on mobile -->
  <co-nav-rail-item href="/dashboard">Dashboard</co-nav-rail-item>
  <co-nav-rail-item href="/projects">Projects</co-nav-rail-item>
</co-top-nav>
```

No additional markup is needed. Responsive behavior is built into `co-top-nav` and `co-side-nav`. Override the breakpoint with the `collapse-at` attribute if the default does not suit your layout.

## Accessibility

- Use `<nav>` landmark roles (built into `co-top-nav` and `co-side-nav`).
- Label each navigation region with `aria-label` when multiple `<nav>` elements exist on a page.
- The active page item should use `aria-current="page"` (applied automatically via the `active` attribute).
- Keyboard navigation follows the roving tabindex pattern within tab groups and navigation bars.
