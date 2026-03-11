# Getting Started

Welcome to the Cobalt Design System. This guide will help you get up and running regardless of your role on the product team.

## What is Cobalt?

Cobalt is a unified design system that provides reusable components, design tokens, and guidelines to help teams build consistent, accessible, and performant user interfaces. It bridges the gap between design and engineering by offering a shared language and toolkit.

## Core Principles

| Principle         | Description                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| **Consistency**   | Every component follows the same visual and interaction patterns across products. |
| **Accessibility** | All components meet WCAG 2.1 AA standards out of the box.                         |
| **Composability** | Components are designed to be combined in flexible ways without breaking.         |
| **Performance**   | Lightweight web components with minimal runtime overhead.                         |
| **Theming**       | Full support for light and dark modes via design tokens.                          |

## Choose Your Path

Cobalt serves designers, developers, and product managers. Pick the guide that fits your role to get the most relevant onboarding experience.

### For Designers

Learn how to use the Cobalt Figma library, apply design tokens in your mockups, and hand off specs to engineering with confidence.

[Read the Designers Guide](./designers.md)

### For Developers

Install packages, set up your framework of choice, import components, and start building. Covers vanilla HTML, React, Vue, and Angular.

[Read the Developers Guide](./developers.md)

### For Product Managers

Understand what the design system provides, how to request new components, and the governance model that keeps Cobalt evolving.

[Read the Product Managers Guide](./product-managers.md)

## Architecture Overview

Cobalt is distributed as a set of scoped npm packages:

| Package              | Purpose                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `@cobalt/tokens`     | Design tokens (colors, spacing, typography, etc.) as CSS custom properties and JS objects. |
| `@cobalt/components` | Web components built with Lit, usable in any framework.                                    |
| `@cobalt/icons`      | SVG icon library with tree-shakable exports.                                               |
| `@cobalt/utils`      | Shared utilities for focus management, ID generation, and more.                            |

## Quick Install

```bash
pnpm add @cobalt/components @cobalt/tokens
```

Then import the global stylesheet and any components you need:

```js
import '@cobalt/tokens/css/global.css';
import '@cobalt/components/cb-button';
```

> **Tip:** You do not need to install `@cobalt/tokens` separately if you are already using `@cobalt/components` — tokens are included as a dependency. The explicit install is only needed if you want tokens without the component library.

## Need Help?

- **Slack:** `#cobalt-support`
- **GitHub:** File an issue in the `cobalt-design-system` repository
- **Office Hours:** Wednesdays 2-3 PM ET — drop in with any question
