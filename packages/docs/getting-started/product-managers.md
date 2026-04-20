# Getting Started for Product Managers

This guide explains what the Cobalt Design System provides, how it fits into your product workflow, and how to request changes or new components.

## What Cobalt Provides

Cobalt is a shared library of reusable UI components, design tokens, and guidelines that product teams use to build consistent interfaces. As a product manager, the design system affects your work in three key areas:

- **Faster delivery** — teams spend less time designing and building common UI patterns from scratch.
- **Consistent experience** — users see the same interactions and visual language across every product surface.
- **Built-in accessibility** — every component meets WCAG 2.1 AA standards, reducing compliance risk.
- **Cross-tool integration** — a shared language and toolkit enables streamlined integration between various tools.

## How It Fits Your Workflow

### During Discovery

When scoping a feature, check the Cobalt component library first. Many common patterns are already solved and the component list is growing.

Using existing components means less design and development effort, which translates to smaller estimates and faster development times.

### During Design Review

Look for these signals that the design is aligned with Cobalt:

1. Components match their Cobalt counterparts in Figma.
2. Colors, spacing, and typography use named tokens — not arbitrary values.
3. Interactive states (hover, focus, disabled, error) are accounted for.
4. The design includes responsive considerations for mobile, tablet, and desktop.

> **Tip:** If a design introduces a pattern that looks custom, ask whether an existing Cobalt component could cover the use case. Custom components add maintenance cost and slow down future redesigns.

### During Development

Cobalt components are production-ready. When a developer picks up a story, they import the component and configure it with props — they do not rebuild it. This means:

- Fewer bugs related to UI behavior.
- Shorter code review cycles for UI-heavy features.
- Consistent behavior across teams without extra coordination.

## Requesting New Components

Not every pattern exists in Cobalt yet. When you identify a gap, here is how to get a new component or enhancement added.

### Check Existing Components First

Search the [component documentation](/components/button) to confirm the pattern is not already covered. Sometimes an existing component with different props can solve the use case.

### Submit a Proposal

If no existing component fits, submit a proposal through the [Component Proposal Process](/contributing/component-proposal). The proposal template asks for use case, scope, and examples — include priority and cross-team demand to help with prioritization.

When reviewing proposals, the team weighs these criteria:

| Criteria                | Weight | Description                                          |
| ----------------------- | ------ | ---------------------------------------------------- |
| Cross-team demand       | High   | Is this needed by more than one product team?        |
| User impact             | High   | Does this affect a core workflow or conversion path? |
| Complexity              | Medium | How much design and development effort is required?  |
| Workaround availability | Medium | Can teams use an existing component as a stopgap?    |
| Strategic alignment     | Low    | Does this support a broader platform initiative?     |

## Governance and Contributions

Cobalt is maintained by a dedicated design system team, but it is governed collaboratively with product teams. Product teams can also contribute components directly. For details on governance roles and the contribution process, see the [Contributing](/contributing/) guide.

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
