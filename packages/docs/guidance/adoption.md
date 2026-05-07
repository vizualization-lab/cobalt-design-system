# Adoption Plan for Existing Applications

Cobalt is in alpha, so existing applications should adopt it in small, visible stages instead of planning a full UI replacement. The goal is to show progress now through tokens, baseline styles, and focused pilots while the design system expands component support, testing, and verification coverage.

This plan is for application teams that need a realistic path forward under delivery pressure.

## Approach

Use Cobalt in layers:

1. **Tokens first.** Adopt shared color, spacing, typography, radius, and focus decisions before replacing entire workflows.
2. **Baseline styles in scoped areas.** Use `[data-co-base]` to progressively map native HTML elements to Cobalt typography and element defaults.
3. **Components only where ready.** Replace components in small slices after checking docs, accessibility notes, wrappers, tests, and browser behavior.
4. **Roadmap the gaps.** Keep local or legacy components where Cobalt does not yet support the pattern, and feed repeated blockers back into the roadmap.

This mirrors patterns used by mature systems such as [USWDS](https://designsystem.digital.gov/maturity-model/), [Atlassian](https://atlassian.design/foundations/tokens/migrate-to-tokens/), [Carbon](https://carbondesignsystem.com/migrating/guide/overview/), and [Polaris](https://polaris-react.shopify.com/version-guides/migrating-from-v11-to-v12): adoption is incremental, measurable, and validated.

## Adoption Stages

| Stage                               | What changes                                             | Progress signal                                                        | Exit criteria                                                               |
| ----------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 0. Choose a slice                   | Pick one route, workflow, or page region.                | A small target surface is named.                                       | Current UI stack, key elements, risks, and unsupported patterns are known.  |
| 1. Add tokens                       | Install tokens and replace hard-coded values where safe. | The slice uses Cobalt token imports and semantic `--co-*` values.      | Import order is verified and key styles use tokens instead of raw values.   |
| 2. Add baseline styles              | Scope `@cobalt/tokens/css/base` with `[data-co-base]`.   | Native headings, text, links, lists, tables, and code align locally.   | The scoped area passes visual review and does not regress adjacent UI.      |
| 3. Pilot ready components           | Replace a few low-risk, documented components.           | A real workflow uses Cobalt tokens, baseline styles, and components.   | Visual, accessibility, framework, browser, and regression checks pass.      |
| 4. Make Cobalt the new-work default | Use Cobalt for new UI where support is ready.            | New features start from Cobalt decisions instead of cleanup later.     | Team standards define when to use Cobalt, defer, or file a roadmap gap.     |
| 5. Expand and retire legacy         | Move repeated patterns as Cobalt support matures.        | Legacy CSS or component dependencies decline by route, bundle, or app. | Migrated slices no longer depend on old UI systems except intentional gaps. |

## Readiness Checks

Before expanding beyond a pilot, confirm:

- token CSS loads once and in the correct order
- baseline styles are scoped and visually reviewed
- selected components have usable docs and acceptable [Component Status](/components/status)
- wrapper behavior works in the app framework
- keyboard, focus, accessibility, browser, theme, and regression checks pass
- unsupported patterns have a local fallback and a roadmap issue when repeated

## What To Show Management

| Milestone          | Evidence                                                                         |
| ------------------ | -------------------------------------------------------------------------------- |
| Foundation started | Tokens installed, import order verified, and one surface using semantic tokens.  |
| Baseline adopted   | `[data-co-base]` applied to one scoped area and visually approved.               |
| Pilot delivered    | One real workflow uses Cobalt foundations and selected ready components.         |
| Standard active    | Team has a rule for when Cobalt is the default and when legacy remains in place. |
| Legacy reduced     | Old styles or component dependencies are removed from migrated slices.           |

The message is direct: Cobalt can make meaningful progress now, but broad adoption should wait for wider component coverage and stronger verification signals.

## Related

- [Element Mapping](/guidance/element-mapping)
- [Migrating an Existing Application](/guidance/migration)
- [Component Status](/components/status)
- [Token Structure](/tokens/structure)
