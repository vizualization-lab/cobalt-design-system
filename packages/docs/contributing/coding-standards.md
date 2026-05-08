# Coding Standards

This document defines the coding conventions and quality requirements for contributing to the Cobalt Design System. All contributions must follow these standards to maintain consistency across the codebase.

## TypeScript Conventions

- Use **strict mode** — the repository `tsconfig.json` enforces `"strict": true`
- Prefer `interface` over `type` for object shapes that may be extended
- Export all public types from the package's `index.ts`
- Use descriptive names — avoid single-letter variables outside of loops or lambda parameters
- Avoid `any` — use `unknown` when the type is genuinely not known and narrow with type guards

## Lit Component Patterns

All components extend a shared `CobaltElement` base class from `@cobalt/core`. Key rules:

- Always set `reflect: true` for properties that affect styling or accessibility
- Use semantic HTML inside shadow DOM wherever possible
- Dispatch custom events with the `co-` prefix (e.g., `co-change`, `co-open`)
- Never manipulate light DOM from within the component

## CSS Custom Property Naming

All CSS custom properties must follow the `--co-` prefix convention:

```
--co-{component}-{property}-{variant}-{state}
```

| Segment   | Example                                | Required      |
| --------- | -------------------------------------- | ------------- |
| Prefix    | `--co-`                                | Yes           |
| Component | `button`                               | Yes           |
| Property  | `background`, `color`, `border-radius` | Yes           |
| Variant   | `primary`, `secondary`                 | If applicable |
| State     | `hover`, `focus`, `disabled`           | If applicable |

Examples:

```css
:host {
  --co-button-background-primary: var(--co-color-brand-500);
  --co-button-background-primary-hover: var(--co-color-brand-600);
  --co-button-color-primary: var(--co-color-white);
  --co-button-border-radius: var(--co-shape-radius-md);
  --co-button-padding-inline: var(--co-space-4);
}
```

> **Tip:** Reference design tokens (e.g., `--co-color-brand-500`) rather than hard-coded values. This ensures your component adapts to theming automatically.

## Testing Requirements

Every component must include both **unit tests** and **accessibility tests**.

### Unit Tests

- Test all public properties, methods, and events
- Test slot content rendering and keyboard interactions
- Aim for at least **90% line coverage**

### Accessibility Tests

- Run `axe-core` against every visual state
- Verify focus management and keyboard navigation
- Test with at least one screen reader scenario documented

## File Naming

| Type                | Convention               | Example                  |
| ------------------- | ------------------------ | ------------------------ |
| Component source    | `co-{name}.ts`           | `co-button.ts`           |
| Component styles    | `co-{name}.styles.ts`    | `co-button.styles.ts`    |
| Unit tests          | `co-{name}.test.ts`      | `co-button.test.ts`      |
| Accessibility tests | `co-{name}.a11y.test.ts` | `co-button.a11y.test.ts` |
| Stories             | `co-{name}.stories.ts`   | `co-button.stories.ts`   |

All files use **kebab-case**. Do not use `PascalCase` or `camelCase` for file names.

## Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/). Every commit message must match this pattern:

```
type: description
type(scope): description

[optional body]

[optional footer]
```

The scope is optional. The type and colon-separated description are required.

| Type       | When to Use                                           |
| ---------- | ----------------------------------------------------- |
| `feat`     | A new feature or component                            |
| `fix`      | A bug fix                                             |
| `docs`     | Documentation-only changes                            |
| `style`    | Code style changes (formatting, semicolons, etc.)     |
| `refactor` | Code changes that neither fix a bug nor add a feature |
| `test`     | Adding or updating tests                              |
| `chore`    | Build process, tooling, or dependency updates         |

Examples:

```bash
feat(co-button): add ghost variant
fix(co-input): resolve focus ring not visible in high contrast mode
docs(co-modal): add usage examples for nested modals
chore(deps): update lit to 3.2.0
```

> **Note:** Commit messages are validated by the Husky `commit-msg` hook. Commits that don't follow this format will be rejected automatically.
