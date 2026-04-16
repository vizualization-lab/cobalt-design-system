# Data Display

Data display patterns define how information is presented and formatted across Cobalt interfaces. Consistent presentation helps users scan, compare, and act on information efficiently.

## Tables

Use `co-table` for structured, comparable data where users need to scan across rows and columns.

```html
<co-table>
  <co-table-head>
    <co-table-row>
      <co-table-header sortable sorted="asc">Name</co-table-header>
      <co-table-header sortable>Role</co-table-header>
      <co-table-header sortable>Last active</co-table-header>
      <co-table-header align="end">Actions</co-table-header>
    </co-table-row>
  </co-table-head>
  <co-table-body>
    <co-table-row>
      <co-table-cell>Ava Martinez</co-table-cell>
      <co-table-cell>Admin</co-table-cell>
      <co-table-cell>Mar 10, 2026</co-table-cell>
      <co-table-cell align="end">
        <co-icon-button icon="edit" label="Edit user"></co-icon-button>
      </co-table-cell>
    </co-table-row>
  </co-table-body>
</co-table>
```

> **Tip:** For tables with more than six columns, enable horizontal scrolling with `co-table-container` rather than hiding columns on smaller screens.

## Lists

Use `co-list` for sequential or grouped items where column-based comparison is not needed.

```html
<co-list>
  <co-list-item>
    <co-avatar name="Project Alpha" slot="prefix"></co-avatar>
    <co-list-item-text primary="Project Alpha" secondary="Updated 2 hours ago"></co-list-item-text>
    <co-badge slot="suffix" variant="success">Active</co-badge>
  </co-list-item>
  <co-list-item>
    <co-avatar name="Project Beta" slot="prefix"></co-avatar>
    <co-list-item-text primary="Project Beta" secondary="Updated yesterday"></co-list-item-text>
    <co-badge slot="suffix" variant="neutral">Archived</co-badge>
  </co-list-item>
</co-list>
```

## Cards

Use `co-card` for browsable collections where each item is a distinct entity. Cards work well for dashboards, catalogs, and resource galleries.

```html
<co-card-grid columns="3">
  <co-card>
    <img slot="media" src="/img/report-thumb.png" alt="Q4 Report" />
    <co-card-header>Q4 Revenue Report</co-card-header>
    <co-card-body>Summary of Q4 performance across all regions.</co-card-body>
    <co-card-footer>
      <co-button variant="secondary" size="sm">View report</co-button>
    </co-card-footer>
  </co-card>
</co-card-grid>
```

## Empty States

Always provide an empty state when a view has no data. Include a clear description and a primary action to help the user move forward.

```html
<co-empty-state>
  <co-icon name="folder-open" size="xl" slot="icon"></co-icon>
  <co-empty-state-title>No projects yet</co-empty-state-title>
  <co-empty-state-description>
    Create your first project to start collaborating with your team.
  </co-empty-state-description>
  <co-button variant="primary" slot="action">Create project</co-button>
</co-empty-state>
```

## Loading Skeletons

Use `co-skeleton` placeholders to indicate content is loading. Match the skeleton shape to the expected content layout.

```html
<co-list>
  <co-list-item>
    <co-skeleton variant="circle" width="40px" height="40px" slot="prefix"></co-skeleton>
    <co-skeleton variant="text" width="160px"></co-skeleton>
  </co-list-item>
</co-list>
```

> **Warning:** Avoid using spinners for content that loads in under 300ms. Skeleton screens are preferred for layout-stable loading.

## Data Formatting

For number, date, and currency formatting rules, see [Content & Writing — Formatting](../guidance/content.md#date-and-time-formatting).

Use the `@cobalt/formatters` utility package to apply these formats programmatically:

```js
import { formatDate, formatCurrency } from '@cobalt/formatters';

formatDate(new Date()); // "Mar 11, 2026"
formatCurrency(1299, 'USD'); // "$1,299.00"
```

## Choosing the Right Pattern

| Scenario                 | Recommended Pattern  |
| ------------------------ | -------------------- |
| Comparing rows of data   | Table                |
| Browsing distinct items  | Cards                |
| Sequential activity feed | List                 |
| Dashboard metrics        | Cards or stat blocks |
