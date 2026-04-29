# Getting Started

Welcome to the Cobalt Design System. This guide will help you get up and running regardless of your role on the product team.

Need a quick answer instead of a full walkthrough? Start with the new [FAQs](/faqs/).

## What is Cobalt?

Cobalt is a unified design system that provides reusable components, design tokens, and guidelines to help teams build accessible, performant interfaces with a consistent look and feel. It bridges the gap between designers and developers by offering a shared language and toolkit.

> Curious about the name? [Learn about the inspiration behind Cobalt](/resources/about-cobalt).

## Core Principles

| Principle         | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| **Identifiable**  | Branded in both name and a timeless visual aesthetic.                                  |
| **Collaborative** | Developed in the open, with clear guidance for how to [contribute](/contributing/).    |
| **Maintainable**  | Automated tooling formats the code, and generates semantically versioned changelogs.   |
| **Composable**    | Components are designed to be combined in flexible ways without breaking.              |
| **Enjoyable**     | Developer and designer experience is prioritized, centralizing resources and guidance. |
| **Available**     | Architected to be accessible where users may work.                                     |
| **Accessible**    | All components meet WCAG 2.1 AA standards out of the box.                              |

## Architecture Overview

Cobalt flows from design tokens through themed web components into framework-native wrappers:

<ArchitectureFlow />

### Style Dictionary tokens

The foundation of Cobalt is a single source of truth for design decisions, authored in the [DTCG](https://tr.designtokens.org/format/) format and transformed by [Style Dictionary](https://styledictionary.com/).

**DTCG** stands for the [Design Tokens Community Group](https://www.designtokens.org/), a W3C community group defining an open, vendor-neutral standard for how design tokens are structured and serialized. The format prescribes a predictable JSON shape — each token carries a `$value`, `$type`, and optional `$description` — plus a reference syntax (`{color.brand.500}`) for aliasing tokens to other tokens.

This matters because it turns tokens into portable data: Figma, Tokens Studio, Style Dictionary, and any future tool that speaks DTCG can read and write the same files without a custom adapter. It future-proofs the pipeline against tool churn and lets designers and developers share one canonical definition of every value.

From one set of DTCG JSON files we generate CSS custom properties, SCSS variables, JS/TS exports, and a flat JSON reference so designers, developers, and tooling all consume the same values. A three-tier structure (primitive → semantic → component) keeps raw palette values out of components and makes theming a matter of swapping semantic mappings.

### Lit-based web components

Components are built on [Lit](https://lit.dev/), a thin layer over the native Web Components APIs. This gives us standards-based custom elements that run in any modern browser without a framework runtime — the output is just HTML tags like `<co-button>`. Lit keeps bundles small, supports declarative templates and reactive properties, and lets us ship a single component library that stays portable across frameworks, server-rendered pages, and vanilla HTML.

### Framework wrappers

To make the web components feel native in each ecosystem, Cobalt publishes thin wrappers for **React**, **Vue**, and **Angular**. Each wrapper exposes idiomatic props, events, and types for its framework while delegating all rendering and behavior to the underlying Lit element. One implementation, three first-party developer experiences.

Cobalt is distributed as a set of scoped npm packages:

| Package              | Purpose                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `@cobalt/tokens`     | Design tokens (colors, spacing, typography, etc.) as CSS custom properties and JS objects. |
| `@cobalt/components` | Web components built with Lit, usable in any framework.                                    |
| `@cobalt/react`      | React wrappers for Cobalt web components, with proper prop and event binding.              |
| `@cobalt/vue`        | Vue 3 wrappers for Cobalt web components, using `defineComponent` for type safety.         |
| `@cobalt/angular`    | Angular directives that adopt modern patterns such as signals and standalone components.   |

## Choose Your Path

Beyond serving end users, Cobalt provides role-specific onboarding for designers, developers, and product managers. Pick the guide that fits your role.

### For Designers

Learn how to use the Cobalt Figma libraries, token workflows, and handoff guidance with confidence.

[Read the Designers Guide](./designers.md)

### For Developers

Install packages, set up your framework of choice, import components, and start building. Covers vanilla HTML, React, Vue, and Angular.

[Read the Developers Guide](./developers.md)

### For Product Managers

Understand what the design system provides, how it can benefit your team, and the governance model that keeps Cobalt evolving.

[Read the Product Managers Guide](./product-managers.md)
