# Component Status

This page tracks the verification status of every Cobalt component across design, development, and testing phases.

> **NOTE:** Status include: `fail`, `pending`, `pass`, and `na`. The statuses are stored and can be updated in the JSON file named `component-status.json`.

## Status Matrix

<StatusMatrix />

## Phase Definitions

### Design

#### Figma Alignment {#figma}

Fully implemented Figma component, including proper token mappings for spacing, colors, typography, border-radius, shadows, and responsive behavior.

#### Art Director Sign-off {#artDirector}

Visual review approved by the design lead. The rendered component matches the intended Figma design at pixel-level fidelity across light and dark modes.

#### Design Tokens {#tokens}

Component uses only design tokens from `@cobalt/tokens` — no hardcoded color values, pixel dimensions, or font stacks. All visual properties reference `--co-*` custom properties.

### Development

#### Unit Tests {#unitTests}

Component has passing unit tests covering: public properties, events, slots, keyboard interactions, and edge cases. Target: 90% line coverage.

#### Accessibility {#a11y}

Accessibility tests completed and passing. Includes automated and manual core audit including keyboard navigation verification, screen reader testing, and ARIA attribute validation.

#### Documentation {#docs}

Docs page is complete with all required sections: interactive demo, usage examples (all 4 frameworks), API tables (properties, events, slots, CSS parts), best practices, accessibility notes, and changelog. All code snippets are verified and aligned with the visual examples.

### Verification

#### React Wrapper {#react}

React wrapper created and verified with tests and live validation. Properties map correctly and custom events use `onCo*` naming.

#### Vue Wrapper {#vue}

Vue wrapper created and verified with tests and live validation. Properties sync via `h()` render function and events use `@co-*` emit pattern.

#### Angular Wrapper {#angular}

Angular directive created and verified with tests and live validation. Properties sync via `effect()`.

#### Browser Testing {#browsers}

Component verified across Chrome, Firefox, and Edge. Layout, interactions, focus management, and visual rendering confirmed in each browser.
