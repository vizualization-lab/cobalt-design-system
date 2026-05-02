# Patterns

Patterns are reusable solutions to common design problems. Unlike individual components, patterns combine multiple components, layout strategies, and interaction behaviors into cohesive experiences that solve a specific user need.

## Patterns vs. Components

| Aspect    | Components              | Patterns                           |
| --------- | ----------------------- | ---------------------------------- |
| Scope     | Single UI element       | Composition of multiple elements   |
| Reuse     | Imported as a package   | Copied and adapted per context     |
| Ownership | Design system team      | Product teams                      |
| Examples  | `co-button`, `co-input` | Form validation, navigation layout |

> **Tip:** Think of components as the vocabulary and patterns as the grammar. Components give you the building blocks; patterns show you how to assemble them into meaningful interfaces.

## Available Patterns

### [Forms & Validation](./forms.md)

Layout patterns for forms, inline and summary validation, error messaging, required field indicators, and submission handling.

### [Layout](./layout.md)

Page structure, grid system, responsive breakpoints, sidebar layouts, content areas, and spacing rhythm.

## When to Create a New Pattern

Before proposing a new pattern, consider the following criteria:

1. **Frequency** -- The solution is needed in three or more distinct contexts across products.
2. **Consistency** -- Inconsistent implementations are causing user confusion or accessibility issues.
3. **Complexity** -- The solution involves coordinating multiple components with non-obvious interaction logic.
4. **Stability** -- The underlying components are mature and unlikely to change significantly.

## Contributing a Pattern

Patterns are documented collaboratively. To propose a new pattern:

1. Open an issue in the `@cobalt/design-system` repository using the **Pattern Proposal** template.
2. Include at least two real-world examples from existing products.
3. Draft the pattern documentation following the structure used in existing pattern pages.
4. Submit a pull request for review by the design system team.

## Using Patterns in Your Project

Patterns are not shipped as installable packages. Instead, use them as reference implementations:

Adapt the documented markup to fit your product's specific requirements while preserving the interaction and accessibility conventions described in each pattern.

## Resources

- [Component Library](/components/) -- Full reference for all `co-` components
- [Design Tokens](/tokens/) -- Spacing, color, and typography tokens used in patterns
- [Foundations](/foundations/) -- Core principles behind Cobalt's design decisions
