# Design Principles

These principles guide every decision we make in the Cobalt Design System — from token naming to component APIs. When trade-offs arise, use these principles to break the tie.

---

## 1. Clarity over cleverness

Interfaces should be immediately understandable. Avoid novel interaction patterns when a conventional one will do. Every element on screen should have a clear purpose.

| Do                                                     | Don't                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------- |
| Use a standard dropdown for selecting a country.       | Build a custom globe widget that requires users to spin and click.    |
| Label buttons with explicit actions like "Save draft." | Use ambiguous labels like "Go" or icon-only buttons without tooltips. |

> **Guiding question:** Would a first-time user understand this without instructions?

---

## 2. Consistency breeds trust

Reuse the same patterns, tokens, and language throughout the product. Consistent experiences reduce cognitive load and build user confidence.

| Do                                                                              | Don't                                                             |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Use `co-button` with the `variant="primary"` attribute for all primary actions. | Style ad-hoc primary buttons with custom CSS in individual pages. |
| Follow the established spacing scale (`--co-space-200`, `--co-space-300`).      | Introduce one-off spacing values like `13px` or `1.15rem`.        |

> **Guiding question:** Have we solved this problem before? If so, reuse that solution.

---

## 3. Accessible by default

Accessibility is not an enhancement — it is a baseline requirement. Every Cobalt component ships with proper ARIA attributes, keyboard navigation, and color contrast ratios that meet WCAG 2.1 AA.

| Do                                                                                  | Don't                                        |
| ----------------------------------------------------------------------------------- | -------------------------------------------- |
| Rely on Cobalt's built-in focus management in `co-dialog`.                          | Remove focus outlines for aesthetic reasons. |
| Provide visible labels for all form fields using a field `label` API or `co-label`. | Use placeholder text as the only label.      |

> **Guiding question:** Can every user — regardless of ability or device — complete this task?

---

## 4. Composable, not monolithic

Components should do one thing well and combine easily with other components. Avoid building mega-components that try to handle every use case internally.

| Do                                                                           | Don't                                                                         |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Compose `co-card`, `co-avatar`, and `co-badge` to build a user profile card. | Create a `co-user-profile-card` that bundles avatar, badge, and layout logic. |
| Use slots and named slots to allow content projection.                       | Require deeply nested configuration objects to control rendering.             |

> **Guiding question:** Can this component be useful outside the context it was designed for?

---

## 5. Performance matters

Users notice when an interface feels sluggish. Cobalt components are tree-shakable, lazy-loadable, and optimized for minimal runtime overhead. Design decisions should respect performance budgets.

| Do                                                                        | Don't                                                          |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Import only the components you use: `import '@cobalt/components/button'`. | Import the entire library: `import '@cobalt/components'`.      |
| Use `co-virtual-scroll` for lists with more than 100 items.               | Render thousands of DOM nodes and rely on the browser to cope. |

> **Guiding question:** Does this decision keep the bundle under budget and the frame rate above 60 fps?

---

## 6. Progressive disclosure

Show only what the user needs at each step. Hide advanced options behind expandable sections, secondary panels, or progressive workflows. Reduce upfront complexity without removing capability.

| Do                                                                              | Don't                                            |
| ------------------------------------------------------------------------------- | ------------------------------------------------ |
| Place advanced filters inside a `co-expandable` section labeled "More filters." | Display 20 filter controls on initial page load. |
| Use `co-stepper` to break a long form into logical steps.                       | Present a single scrolling form with 30 fields.  |

> **Guiding question:** What is the minimum the user needs to see right now to take the next action?

---

## Applying the principles

When reviewing a design or pull request, reference these principles by number. For example:

> "This custom dropdown conflicts with **Principle 1 (Clarity)** and **Principle 2 (Consistency)** — let's use `co-select` instead."

This shared vocabulary keeps discussions objective and productive.
