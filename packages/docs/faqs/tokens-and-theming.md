---
title: Tokens & Theming FAQ
description: Common questions about token tiers, token files, theme bundles, dark mode, and token requests.
---

# Tokens & Theming FAQ

These questions cover how Cobalt’s token system is organized and how theming works in both code and design handoff.

## Should I use primitive, semantic, or component tokens?

Use the highest-level token that accurately expresses the intent.

- Use **semantic tokens** first for product and component styling
- Use **primitive tokens** when you are extending the underlying scales or palette
- Use **component tokens** only when a value truly belongs to one component family

That rule keeps raw values out of app code and lets themes change behavior through semantic remapping.

See [Token Structure](/tokens/structure) for the full decision tree.

## Where do I edit tokens and where do I consume exports?

Edit the source JSON files in `packages/tokens/tokens/*.json`.

Consume generated output from the published `@cobalt/tokens` package:

- `@cobalt/tokens/css`
- `@cobalt/tokens/themes/<theme>`
- `@cobalt/tokens`
- `@cobalt/tokens/json`
- `@cobalt/tokens/dtcg`

Do not hand-edit generated `dist/` artifacts.

## What is `tokens-merged.json` versus `tokens-dtcg.json`?

They serve different jobs:

- `tokens-merged.json` is the Token Studio round-trip artifact
- `tokens-dtcg.json` is the more standards-aligned export for downstream consumers

If you are syncing with Tokens Studio, use `tokens-merged.json`.
If you need a DTCG-style export for tooling or interoperability, use `tokens-dtcg.json`.

## How do themes and dark mode work?

Cobalt separates the base token layer from theme bundles.

Typical setup:

```css
@import '@cobalt/tokens/css';
@import '@cobalt/tokens/themes/default';
```

Then switch at runtime with:

```js
import { setTheme } from '@cobalt/tokens/theme';

setTheme('default', 'dark');
setTheme('purple');
```

`setTheme()` updates `data-theme` and `data-mode` on `<html>`, which lets semantic color tokens swap without changing component code.

## When should I request a new token instead of reusing an existing one?

Request a new token when one of these is true:

- the value represents a reusable system rule
- the value changes by theme or mode and current semantics cannot express it
- the value belongs to a component family and would otherwise become a hardcoded exception

Do not request a new token just because you found a raw value that is visually close to what you want. First check whether an existing semantic token already describes the intent.

## What accessibility standard do Cobalt token and theme docs assume?

The current formal docs claim is **WCAG 2.1 AA**.

That is the standard the FAQ and the normalized supporting docs should reference when talking about token contrast, component accessibility, and default design-system compliance.

## Can I override token values in my app?

Yes. Override token values, not token names.

Use subtree-scoped overrides when you want a local treatment, and root-level overrides when you want a global brand or application change. Keep the overrides semantic where possible so theme changes continue to work cleanly.

## Related

- [Token Structure](/tokens/structure)
- [Token Reference](/tokens/)
- [Colors](/foundations/colors)
- [Getting Started for Developers](/getting-started/developers)
