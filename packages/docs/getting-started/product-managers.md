# Getting Started for Product Managers

This guide explains what the Cobalt Design System provides, how it fits into your product workflow, and how to request changes or new components.

## What Cobalt Provides

Cobalt is a shared library of reusable UI components, design tokens, and guidelines that product teams use to build consistent interfaces. As a product manager, the design system affects your work in three key areas:

- **Faster delivery** — teams spend less time designing and building common UI patterns from scratch.
- **Consistent experience** — users see the same interactions and visual language across every product surface.
- **Built-in accessibility** — every component meets WCAG 2.1 AA standards, reducing compliance risk.

## How It Fits Your Workflow

### During Discovery

When scoping a feature, check the Cobalt component library first. Many common patterns are already solved:

| Pattern      | Cobalt Component                         | Notes                                              |
| ------------ | ---------------------------------------- | -------------------------------------------------- |
| Form inputs  | `co-input`, `co-select`, `co-checkbox`   | Includes built-in validation and error states      |
| Actions      | `co-button`, `co-icon-button`            | Primary, secondary, ghost, and danger variants     |
| Feedback     | `co-toast`, `co-alert`, `co-dialog`      | Covers success, warning, error, and info scenarios |
| Navigation   | `co-tabs`, `co-breadcrumb`, `co-sidebar` | Responsive by default                              |
| Data display | `co-table`, `co-card`, `co-badge`        | Sortable tables, status badges                     |

Using existing components means less design and engineering effort, which translates to smaller estimates and faster time-to-market.

### During Design Review

Look for these signals that the design is aligned with Cobalt:

1. Components match their Cobalt counterparts in Figma.
2. Colors, spacing, and typography use named tokens — not arbitrary values.
3. Interactive states (hover, focus, disabled, error) are accounted for.
4. The design includes responsive considerations for mobile, tablet, and desktop.

> **Tip:** If a design introduces a pattern that looks custom, ask whether an existing Cobalt component could cover the use case. Custom components add maintenance cost and slow down future redesigns.

### During Development

Cobalt components are production-ready. When engineering picks up a story, they import the component and configure it with props — they do not rebuild it. This means:

- Fewer bugs related to UI behavior.
- Shorter code review cycles for UI-heavy features.
- Consistent behavior across teams without extra coordination.

## Requesting New Components

Not every pattern exists in Cobalt yet. When you identify a gap, here is the process for requesting a new component or enhancement.

### Step 1 — Check Existing Components

Search the [component documentation](/components/button) to confirm the pattern is not already covered. Sometimes an existing component with different props can solve the use case.

### Step 2 — Submit a Request

Open a request in the `cobalt-design-system` GitHub repository using the **Component Request** issue template. Include:

- **Use case:** What problem does this component solve?
- **Scope:** Which products or teams need it?
- **Priority:** Is this blocking a launch or a nice-to-have?
- **Examples:** Screenshots, competitor references, or links to designs.

### Step 3 — Review and Prioritization

The Cobalt team reviews requests on a two-week cadence. Requests are evaluated against these criteria:

| Criteria                | Weight | Description                                          |
| ----------------------- | ------ | ---------------------------------------------------- |
| Cross-team demand       | High   | Is this needed by more than one product team?        |
| User impact             | High   | Does this affect a core workflow or conversion path? |
| Complexity              | Medium | How much design and engineering effort is required?  |
| Workaround availability | Medium | Can teams use an existing component as a stopgap?    |
| Strategic alignment     | Low    | Does this support a broader platform initiative?     |

### Step 4 — Tracking

Accepted requests appear on the Cobalt roadmap board. You will receive status updates in the GitHub issue and in `#cobalt-announcements` on Slack.

## Governance Model

Cobalt is maintained by a dedicated design system team, but it is governed collaboratively:

- **Design System Team** — owns the codebase, reviews contributions, publishes releases, and maintains documentation.
- **Product Teams** — submit requests, contribute components, and provide feedback on existing patterns.
- **Design Council** — a rotating group of senior designers and PMs who meet monthly to review the roadmap and resolve cross-team conflicts.

### Contributing a Component

Product teams can contribute components directly. The process is:

1. Propose the component via a GitHub issue.
2. The design system team provides a spec review and API guidance.
3. The product team builds the component following Cobalt conventions.
4. The design system team reviews, tests, and merges the contribution.

> **Warning:** Components that are merged into Cobalt become the responsibility of the design system team. Make sure the use case is general enough to justify long-term maintenance.

## Measuring Impact

Track the value of the design system with these metrics:

- **Adoption rate** — percentage of product surfaces using Cobalt components.
- **Time-to-ship** — compare feature delivery timelines before and after adoption.
- **Bug density** — UI-related bug count in Cobalt components vs. custom implementations.
- **Consistency score** — periodic audits measuring visual and interaction consistency across products.

## Resources

- **Component Library:** [Browse Components](/components/button)
- **Roadmap:** `cobalt-design-system` GitHub project board
- **Support:** See the [Contact](/resources/contact) page for all support channels
