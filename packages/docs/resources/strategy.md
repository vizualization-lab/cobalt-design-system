# Strategy

During Cobalt's research phase, we authored a strategy document to define the system's values and guide design and development decisions. That document identified seven core principles that should be embodied throughout the Cobalt design system. This page expands on the core principles from [Getting Started](/getting-started/) and provides additional context for our decisions.

## Core Principles

### Identifiable

Cobalt should feel recognizable in both name and visual expression. The system takes its name from a material known for resilience and a vivid blue hue, and that idea carries into the product experience: durable foundations, a consistent aesthetic, and components that look like they belong to the same family.

**Goals:**

- Encapsulate Cobalt's core principles in a recognizable brand.
- Use tokens to define brand expression and carry it into components.
- Use [About Cobalt](/resources/about-cobalt) as the source for the story behind the name and visual metaphor.

### Collaborative

Cobalt is developed in the open so teams can understand how decisions are made and how to participate. Contribution paths should be visible for designers, developers, and product managers, with enough structure to keep the system coherent as more people contribute.

**Goals:**

- Use the [Contributing](/contributing/) guides to route proposals, implementation work, design contributions, and versioning decisions.
- Keep component proposals focused on real product needs, accessibility expectations, API shape, and maintenance cost.
- Treat documentation as part of the contribution, not an afterthought.

### Maintainable

Cobalt should be easy to operate over time. Tokens, components, wrappers, changelogs, and docs should be generated or validated where possible so the system scales without relying on memory or manual cleanup.

**Goals:**

- Prefer automated workflows for generated styles, component metadata, icon registries, and release notes.
- Keep package changes traceable through changesets and semantically versioned releases.
- Design APIs that reduce long-term support burden, even when that means saying no to a convenience option.

### Composable

Cobalt components should do focused jobs and combine predictably. Teams should be able to build product-specific surfaces from shared primitives without needing a new component for every layout.

**Goals:**

- Favor slots, attributes, and small component APIs over large configuration objects.
- Document composition patterns where multiple components are expected to work together, such as app shell navigation, forms, and data entry.
- Use the [Design Principles](/guidance/principles) guidance when deciding whether a component should stay focused or become a larger pattern.

### Enjoyable

Cobalt should improve the daily experience of using the system. Designers should be able to find the right guidance quickly, developers should be able to install and type-check components without friction, and product managers should be able to understand the system's value and maturity.

**Goals:**

- Centralize onboarding in the role-specific [Getting Started](/getting-started/) guides.
- Keep examples realistic enough to copy into product work.
- Make resources discoverable through docs navigation, FAQs, and search.

### Available

Cobalt should be usable where teams work. The core implementation is web-component based, with framework wrappers for React, Vue, and Angular so product teams can adopt the same system without changing their application stack.

**Goals:**

- Keep web components as the portable implementation layer.
- Maintain first-party framework wrappers where they improve developer ergonomics.
- Publish package and integration guidance in [Developer Resources](/resources/developers) and [Getting Started for Developers](/getting-started/developers).
- Make the design system available where designers and developers work to minimize context switching.

### Accessible

Accessibility is a baseline requirement for the system, not a final review step. Components should ship with accessible defaults, and guidance should make it clear where product teams still need to provide labels, content, focus order, and interaction context.

**Goals:**

- Align component behavior with WCAG 2.1 AA expectations.
- Provide accessible examples in docs and workbench scenarios.
- Use [Accessibility](/foundations/accessibility) as the foundation for testing expectations, authoring guidance, and review criteria.
- Maintain automated and manual accessibility testing workflows.
