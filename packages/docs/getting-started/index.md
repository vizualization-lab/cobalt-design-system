# Getting Started

Welcome to the Cobalt Design System. This guide will help you get up and running regardless of your role on the product team.

## What is Cobalt?

Cobalt is a unified design system that provides reusable components, design tokens, and guidelines to help teams build consistent, accessible, and performant user interfaces. It bridges the gap between design and developers by offering a shared language and toolkit.

## Why Cobalt?

The element cobalt is known for two things: extraordinary resilience and a vivid blue that has shaped art and craft for millennia. Both qualities inspired the name of this design system.

**Built to endure.** Cobalt superalloys withstand the extreme heat inside jet engine turbine blades. A design system faces a different kind of stress — scaling across teams, supporting enteprise-grade products, and edge cases — but the demand is the same: hold up under pressure without losing integrity.

**Rooted in craft.** Cobalt's blue pigment appears in Egyptian faience, the frescoes of Pompeii, and Chinese porcelain dating to the Tang Dynasty. Centuries of use across cultures are a reminder that good design outlasts trends.

**Woven into the system.** Cobalt's periodic symbol, `Co`, namespaces every token, and component. As a period-four element it sits on the fourth row of the periodic table, and the number four echoes throughout the system: a 4 px base unit for spacing, as well as a four-level elevation scale. The result is a consistent rhythm that is easy to learn and easy to extend.

## Core Principles

| Principle         | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| **Identifiable**  | Branded in both name and a timeless visual aesthetic.                                  |
| **Collaborative** | Developed in the open, with clear guidance for how to [contribute](/contributing).     |
| **Maintainable**  | Automated tooling formats the code, and generates semantically versioned changelogs.   |
| **Composable**    | Components are designed to be combined in flexible ways without breaking.              |
| **Enjoyable**     | Developer and designer experience is prioritized, centralizing resources and guidance. |
| **Available**     | Architected to be accessible where users may work.                                     |
| **Accessible**    | All components meet WCAG 2.1 AA standards out of the box.                              |

## Choose Your Path

Cobalt serves designers, developers, and product managers. Pick the guide that fits your role to get the most relevant onboarding experience.

### For Designers

Learn how to use the Cobalt Figma library, apply design tokens in your mockups, and hand off specs to developers with confidence.

[Read the Designers Guide](./designers.md)

### For Developers

Install packages, set up your framework of choice, import components, and start building. Covers vanilla HTML, React, Vue, and Angular.

[Read the Developers Guide](./developers.md)

### For Product Managers

Understand what the design system provides, how to request new components, and the governance model that keeps Cobalt evolving.

[Read the Product Managers Guide](./product-managers.md)

## Architecture Overview

Cobalt flows from design tokens through themed web components into framework-native wrappers:

<ArchitectureFlow />

### Style Dictionary tokens

The foundation of Cobalt is a single source of truth for design decisions, authored in the [DTCG](https://tr.designtokens.org/format/) format and transformed by [Style Dictionary](https://styledictionary.com/).

**DTCG** stands for the [Design Tokens Community Group](https://www.designtokens.org/), a W3C community group defining an open, vendor-neutral standard for how design tokens are structured and serialized. The format prescribes a predictable JSON shape — each token carries a `$value`, `$type`, and optional `$description` — plus a reference syntax (`{color.brand.500}`) for aliasing tokens to other tokens.

This matters because it turns tokens into portable data: Figma, PenPot, Tokens Studio, Style Dictionary, and any future tool that speaks DTCG can read and write the same files without a custom adapter. It future-proofs the pipeline against tool churn and lets design and developers share one canonical definition of every value.

From one set of DTCG JSON files we generate CSS custom properties, SCSS variables, JS/TS exports, and a flat JSON reference so designers, developers, and tooling all consume the same values. A three-tier structure (primitive → semantic → component) keeps raw palette values out of components and makes theming a matter of swapping semantic mappings.

### Lit-based web components

Components are built on [Lit](https://lit.dev/), a thin layer over the native Web Components APIs. This gives us standards-based custom elements that run in any modern browser without a framework runtime — the output is just HTML tags like `<co-button>`. Lit keeps bundles small, supports declarative templates and reactive properties, and lets us ship a single component library that stays portable across frameworks, server-rendered pages, and vanilla HTML.

### Framework wrappers

To make the web components feel native in each ecosystem, Cobalt publishes thin auto-generated wrappers for **React**, **Vue**, and **Angular**, derived from the Custom Elements Manifest. Each wrapper exposes idiomatic props, events, and types for its framework — `onClick` handlers in React, `v-model` and kebab-cased events in Vue, and Angular's `CUSTOM_ELEMENTS_SCHEMA` integration — while delegating all rendering and behavior to the underlying Lit element. One implementation, three first-class developer experiences.

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

Then import the token stylesheet and any components you need:

```js
import '@cobalt/tokens/css';
import '@cobalt/components/button';
```

> **Tip:** You do not need to install `@cobalt/tokens` separately if you are already using `@cobalt/components` — tokens are included as a dependency. The explicit install is only needed if you want tokens without the component library.
