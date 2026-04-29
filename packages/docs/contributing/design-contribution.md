# Design Contribution Guidelines

Designers play a critical role in the Cobalt Design System. This guide covers how to work with the Figma library, propose design changes, and collaborate with development during implementation.

## Figma Library Structure

The Cobalt Figma library is organized into the following files:

| File                   | Contents                                                     | Access                                |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------- |
| **Cobalt Foundations** | Color palettes, typography scales, spacing, elevation, icons | View (all), Edit (design system team) |
| **Cobalt Components**  | All production component specs with variants and states      | View (all), Edit (design system team) |
| **Cobalt Patterns**    | Composed patterns and page-level templates                   | View (all), Edit (design system team) |
| **Cobalt Playground**  | Sandbox for prototyping and experimentation                  | Edit (all designers)                  |

Each component page in the library includes:

- **Anatomy diagram** — labeled parts and slots
- **Variant matrix** — all property and state combinations
- **Spacing and sizing specs** — using Cobalt token values
- **Interaction notes** — hover, focus, active, and disabled states
- **Accessibility annotations** — roles, labels, keyboard behavior

> **Tip:** Always branch from the latest published version of the library. Working from an outdated branch leads to merge conflicts and inconsistent specs.

## How to Propose Design Changes

### Minor Changes

For small adjustments (e.g., spacing tweaks, color refinements, icon updates):

1. Create a **branch** in the relevant Figma file
2. Make your changes, annotating what was modified and why
3. Open a GitHub Discussion or Issue with a link to the branch and a brief description
4. A design system designer will review and merge within 3 business days

### Major Changes

For significant updates (e.g., new variants, interaction pattern changes, component redesigns):

1. Open a **GitHub Discussion** in the Design Proposals category
2. Include the problem statement, proposed solution, and supporting research
3. Create a Figma branch with the proposed design and link it in the discussion
4. Present the proposal at the next Design System Review meeting (biweekly, Tuesdays)
5. Iterate based on feedback until the proposal reaches consensus

### New Components

New component designs follow the [Component Proposal Process](./component-proposal.md). The design deliverables required are:

- Complete variant and state matrix
- Light and dark theme versions
- Responsive behavior documentation
- Accessibility annotations
- Redline specs with token references

## Design Review Checklist

Before a design is approved for development, it must pass the following review:

### Visual Consistency

- [ ] Uses only Cobalt design tokens — no hard-coded values
- [ ] Follows the established grid and spacing system
- [ ] Typography uses defined type scale styles
- [ ] Colors pass WCAG 2.1 AA contrast requirements (4.5:1 for text, 3:1 for UI elements)
- [ ] Works in both light and dark themes

### Interaction Design

- [ ] All interactive states are documented (default, hover, focus, active, disabled)
- [ ] Focus indicators are visible and consistent with the system
- [ ] Transitions and animations follow Cobalt motion guidelines
- [ ] Touch targets meet minimum 44x44px requirement

### Accessibility

- [ ] ARIA roles and labels are specified in annotations
- [ ] Keyboard interaction pattern is documented
- [ ] Screen reader behavior is described
- [ ] High contrast mode is considered
- [ ] Reduced motion alternatives are provided for animations

### Documentation Readiness

- [ ] Component anatomy is labeled
- [ ] Usage guidelines describe when to use (and when not to use) the component
- [ ] Edge cases are documented (long text, empty states, error states)
- [ ] Content guidelines are provided for any text-bearing elements

## Handoff to Development

Once a design is approved, the handoff process ensures a smooth transition to implementation:

1. **Publish the Figma branch** — Merge the approved design into the main library file
2. **Create a development issue** — Use the Component Implementation template, linking to the Figma spec
3. **Token mapping** — Provide a table mapping design values to CSS custom properties (`--co-` tokens)
4. **Pair with a developer** — Schedule a 30-minute walkthrough of the spec with the assigned developer
5. **Review implementation** — Compare the built component against the Figma spec at each milestone

### Token Mapping Example

| Design Property      | Figma Token     | CSS Custom Property                    |
| -------------------- | --------------- | -------------------------------------- |
| Background (primary) | `brand/500`     | `--co-button-background-primary`       |
| Background (hover)   | `brand/600`     | `--co-button-background-primary-hover` |
| Text color           | `neutral/white` | `--co-button-color-primary`            |
| Border radius        | `radius/md`     | `--co-button-border-radius`            |
| Padding horizontal   | `spacing/4`     | `--co-button-padding-inline`           |

> **Note:** Developers should never need to inspect pixel values from Figma. Every value should map to a named token. If a design requires a value that doesn't exist as a token, that's a signal to propose a new token first.
