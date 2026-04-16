# Figma Token Alignment

This page audits the Figma variables currently present in the design system against the token model defined in this repository.

The goal is not to preserve every exported variable. The goal is to separate:

- values that already fit the repository model
- missing semantic roles that are worth adding
- experimental Figma-only layers that should be retired instead of adopted

## Executive Summary

The Figma exports are not four parallel source-of-truths. They are four different stages of token maturity:

| Export          | What it appears to be                               | Recommended disposition                                 |
| --------------- | --------------------------------------------------- | ------------------------------------------------------- |
| `brand.json`    | Raw palette, typography, and spacing primitives     | Keep only where it matches repository primitives        |
| `alias.json`    | Friendly aliases over brand primitives              | Do not keep as a long-term production layer             |
| `semantic.json` | A very small global semantic layer                  | Replace with repository semantic tokens                 |
| `mapped.json`   | Component and state recipes built from lower layers | Treat as migration input, not as source-of-truth tokens |

Two things are true at the same time:

1. Most of the raw color palette already aligns with the repository.
2. The Figma library currently exposes too many overlapping layers, which is what creates confusion during handoff.

## What Already Aligns

The strongest alignment is in raw color values:

- `143` of the `146` exported Figma brand colors already exist as exact hex values in `packages/tokens/tokens/primitives.color.json`.
- The exported Figma brand ramps map cleanly to the repository palette names: `blue`, `navy`, `teal`, `lime`, `purple`, `indigo`, `brick`, `rust`, `gold`, `red`, `green`, `orange`, `yellow`, and `neutral`.
- The repository already has the correct architectural split for long-term governance: primitives, shared semantics, theme semantics, and selective component tokens.

This means the main problem is not palette incompatibility. The main problem is that Figma currently contains overlapping abstraction layers.

## What The Exports Mean

### `brand.json`

This file is closest to a primitive token set.

It contains:

- the core color ramps
- the Inter typography scale
- the spacing scale

It mostly matches the repository primitives, but it also carries a few values that the repository intentionally does not expose today:

- neutral steps `200`, `700`, and `1200`
- scale steps `75`, `250`, `700`, and `1100`
- a `26px` heading level that does not exist in the repository type scale

### `alias.json`

This file looks like a translation layer over `brand.json`.

It renames:

- `Primary-Colors/Blue/*` into `Primary/*`
- status ramps into `Status/*`
- typography primitives into `Text/Font-*`

This is useful during experimentation, but it creates duplication if designers can choose both the brand tokens and the alias tokens.

### `semantic.json`

This file is a small semantic layer for:

- background roles
- text roles

It is directionally correct, but it is too small for the repository’s semantic model. It does not cover the full set of surface, border, interactive, and feedback roles already defined in `packages/tokens/tokens/semantic.theme.default.light.json` and `packages/tokens/tokens/semantic.theme.default.dark.json`.

### `mapped.json`

This file is not a foundation layer. It is a usage-recipe layer.

Examples:

- `Text/Button-Primary/default`
- `Surface/Checkbox/Checked/hover`
- `Border-Color/Radio/Off/error`

Those names encode component, variant, state, and context all at once. That is useful as an audit of what designers needed, but it should not become the token taxonomy in the repository.

Most of this layer should either:

- map back to existing semantic tokens
- become component implementation logic
- become a very small set of explicit component tokens only when the rule is truly reusable and stable

## Implemented High-Confidence Additions

These were the strongest candidates because they represented real semantic gaps, not just Figma duplication. They are now implemented in the repository token files.

| Candidate                   | Why it looks real                                                                                                          | Evidence in Figma                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `co.color.surface.page`     | Designers are using a page background that is distinct from `surface.default`, `surface.raised`, and `surface.sunken`      | `semantic.Background.muted`, `mapped.Surface.page`               |
| `co.color.surface.disabled` | Disabled neutral surfaces appear repeatedly across controls and menus                                                      | `mapped.Surface.disabled`, button/select/menu disabled mappings  |
| `co.color.text.placeholder` | Placeholder text is treated as a first-class role, not just “secondary text”                                               | `mapped.Text/Default/placeholder`                                |
| `co.color.text.tertiary`    | Designers are using an intermediate low-emphasis text tone that does not match current `text.secondary` or `text.disabled` | `semantic.Text/secondary`, `mapped.Text/Default/caption`         |
| `co.color.border.active`    | Active border color is reused across controls                                                                              | `mapped.Border-Color.active` and repeated control state mappings |
| `co.color.border.danger`    | Error border state is reused across checkbox, radio, toggle, and fields                                                    | `mapped.Border-Color.error`                                      |
| `co.color.border.success`   | Success border state is reused across checkbox, radio, toggle, and fields                                                  | `mapped.Border-Color.success`                                    |
| `co.shape.border-width.lg`  | A `3px` border width exists as a separate Figma primitive; add only if the system wants to support it consistently         | `mapped.Border-Width.Lg`                                         |

## Lower-Confidence Additions

These exist in Figma, but they look more like experimental history than clear repository gaps.

| Candidate                              | Why it is lower confidence                                                                                                                                  |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Neutral steps `200`, `700`, `1200`     | These are exact palette gaps between current repository neutral steps, but they may have been removed intentionally to keep the palette smaller and clearer |
| Scale steps `75`, `250`, `700`, `1100` | These introduce `3px`, `10px`, `28px`, and `44px` steps that may be useful, but they are not clearly part of the current repository scale strategy          |
| Figma `Heading/H2 = 26px`              | This conflicts with the repository editorial scale more than it complements it                                                                              |
| Figma `28px` line-height aliases       | These show real usage, but the repository currently models line-height as ratios instead of fixed pixel values                                              |
| Icon-specific semantic colors          | These may be valuable for navigation and status-heavy UI, but many icons can still inherit text color successfully                                          |

## Tokens That Should Not Be Added As-Is

These layers are the main source of confusion and should be collapsed, not promoted.

### `alias.json`

Do not keep both raw brand primitives and alias primitives visible to designers in the production library.

Pick one primitive layer.

### Most of `mapped.json`

Do not add tokens like:

- `Text/Button-Secondary/focus`
- `Surface/Checkbox/Checked/success`
- `Border-Color/Radio/Off/error`

Those are component state recipes. They belong in:

- component variant logic
- component documentation
- a very small component token layer when a public contract is required

They do not belong in the global design token taxonomy.

## Recommended Figma Integration Strategy

The repository should remain the only source of truth.

The Figma library should become a projection of the repository, not a second token authoring system.

### 1. Sync from the repository build output

The token build already generates a Token Studio-compatible merged artifact at `packages/tokens/dist/tokens-merged.json`.

That file should become the only sync payload used to populate Figma variables.

### 2. Publish fewer collections in Figma

The current Figma setup exposes too many overlapping choices. Prefer this production structure:

1. `Cobalt Primitives`
2. `Cobalt Semantics`
3. `Cobalt Components`

Recommended behavior:

- `Cobalt Primitives` contains only raw scales and palettes
- `Cobalt Semantics` contains the tokens designers should use day to day
- `Cobalt Components` stays intentionally small and only covers real public component contracts

### 3. Use Figma modes for theme differences

Do not model light and dark as separate ad hoc collections when the difference is semantic.

Instead:

- keep shared semantic roles in the semantic collection
- expose `Light` and `Dark` modes in Figma
- let theme-varying semantic values change by mode

That mirrors the repository’s `semantic.shared` plus `semantic.theme.<theme>.<mode>` structure without making designers think about file boundaries.

### 4. Hide or lock primitives for most designers

Designers building product UI should mostly consume semantic tokens.

Primitives should remain available for:

- design system maintainers
- new token definition work
- debugging and audits

This reduces accidental “value shopping” in the Figma variable picker.

### 5. Retire the experimental Figma layers from production

Once repository-backed collections exist, the current exploratory sets should be treated like migration artifacts:

- retire `Alias`
- retire the current mini `Semantic` set
- retire `Mapped` as a token collection

If these files are still useful, keep them only as audit references in the playground or migration workspace.

### 6. Convert component recipes into component documentation

The best parts of `mapped.json` are signals about what designers need:

- supported states
- repeated disabled treatments
- repeated status treatments
- recurring page or surface roles

Use that file to:

- decide which semantic gaps to fill in the repository
- verify component state coverage in Figma
- update handoff documentation

Do not keep it as a production variable collection.

### 7. Add one governance rule for every new Figma token

Every proposed token should answer this question first:

Which repository layer does this belong to?

The allowed answers are:

- primitive
- shared semantic
- theme semantic
- component

If the answer is “it is a button hover recipe” or “it is a checkbox success border,” it is probably not a new global token.

## Suggested Migration Order

1. Import repository primitives and repository semantic tokens into a clean Figma library branch.
2. Add the high-confidence semantic gaps from this page before asking designers to migrate.
3. Remap current component library instances from `Alias`, `Semantic`, and `Mapped` to the new repository-backed collections.
4. Publish light and dark semantic modes from the repository token sets.
5. Remove the exploratory collections from the production library after the component library no longer depends on them.

## Decision Framing

If the team wants the least confusing designer-developer handoff, the principle should be:

Figma variables are a distribution channel for repository tokens, not an independent taxonomy.

That keeps naming, implementation, and handoff anchored to one system instead of four overlapping experiments.

## Related Pages

- [Token Structure](./structure.md)
- [Figma Handoff](./figma-handoff.md) — handoff process and quick template
- [Token Reference](./index.md)
