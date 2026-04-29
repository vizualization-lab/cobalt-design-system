# Component Proposal Process

Adding a new component to the Cobalt Design System follows a structured RFC (Request for Comments) process. This ensures that every component meets a real need, has a well-considered API, and aligns with the system's design principles.

## When to Propose a Component

Before submitting a proposal, verify that:

- The component addresses a **recurring pattern** across at least two product teams
- No existing Cobalt component can be extended to cover the use case
- The pattern is **stable enough** that its API is unlikely to change significantly after release

> **Tip:** If you're unsure whether your idea warrants a new component, start in [GitHub Discussions](%GITHUB_URL%/discussions). The team can help you determine the right path before you formalize a proposal.

## RFC Template

Create a new GitHub Discussion in the **Component Proposals** category using the [component proposal form](%GITHUB_URL%/discussions/new?category=component-proposals). The form follows the structure below:

### 1. Problem Statement

Describe the user problem or developer pain point this component addresses. Include real examples from product teams.

```markdown
## Problem Statement

Currently, teams are building custom date range selectors independently.
At least three products (Billing, Analytics, Reports) maintain their own
implementations, leading to inconsistent behavior and duplicated effort.
```

### 2. Proposed API

Define the component's public interface: tag name, properties, events, slots, and CSS custom properties.

```html
<co-date-range-picker
  start-date="2025-01-01"
  end-date="2025-12-31"
  min-date="2020-01-01"
  max-date="2030-12-31"
  locale="en-US"
  disabled
>
  <span slot="label">Select a date range</span>
</co-date-range-picker>
```

| Property     | Type      | Default   | Description                          |
| ------------ | --------- | --------- | ------------------------------------ |
| `start-date` | `string`  | —         | ISO 8601 date string for range start |
| `end-date`   | `string`  | —         | ISO 8601 date string for range end   |
| `min-date`   | `string`  | —         | Earliest selectable date             |
| `max-date`   | `string`  | —         | Latest selectable date               |
| `locale`     | `string`  | `'en-US'` | Locale for date formatting           |
| `disabled`   | `boolean` | `false`   | Disables the picker                  |

| Event       | Detail                                   | Description                            |
| ----------- | ---------------------------------------- | -------------------------------------- |
| `co-change` | `{ startDate: string, endDate: string }` | Fires when the range selection changes |
| `co-open`   | —                                        | Fires when the picker dropdown opens   |
| `co-close`  | —                                        | Fires when the picker dropdown closes  |

### 3. Alternatives Considered

Document other approaches you evaluated and explain why the proposed solution is preferred.

### 4. Accessibility Plan

Outline how the component will meet WCAG 2.1 AA requirements:

- Keyboard navigation pattern (e.g., arrow keys, Enter, Escape)
- ARIA roles and attributes
- Screen reader announcements
- Focus management strategy
- High contrast and reduced motion support

## Review Process

Proposals move through the following stages:

| Stage               | Duration | Activities                                             |
| ------------------- | -------- | ------------------------------------------------------ |
| **Draft**           | 1 week   | Author refines the proposal based on early feedback    |
| **Open for Review** | 2 weeks  | Community and team members comment and suggest changes |
| **Design Review**   | 1 week   | Design team evaluates visual and interaction patterns  |
| **Decision**        | —        | Core team votes to accept, revise, or decline          |
| **Implementation**  | Varies   | Accepted proposals move to development                 |

## Acceptance Criteria

A proposal is accepted when it meets all of the following:

1. **Clear problem statement** with evidence of need across multiple teams
2. **Well-defined API** that follows Cobalt naming conventions and patterns
3. **Accessibility plan** covering keyboard, screen reader, and visual requirements
4. **Design spec** approved by the design team with Figma assets ready
5. **No unresolved concerns** from core team members
6. **At least three approvals** from core team voters

## After Acceptance

Once a proposal is accepted:

1. A tracking issue is created and added to the component backlog
2. The component is assigned a target release milestone
3. Development begins following the [Coding Standards](./coding-standards.md)
4. The component goes through alpha and beta stages before stable release

> **Note:** The typical timeline from accepted proposal to stable release is 4-8 weeks, depending on component complexity and team capacity.
