# Adoption Plan for Existing Applications

Cobalt is in alpha, and we are working with selected pilot groups as a first step to mature the design system. While the design system expands component soporte, testing, and verification coverage, existing applications should adopt it in small, visible stages instead of planning a full UI replacement. This plan identifies a realistic adoption path for application teams that are not a part of any Cobalt pilot efforts.

## Approach

Use Cobalt in layers:

1. **Tokens first.** Adopt shared color, spacing, typography, radius, and focus decisions before replacing entire workflows.
2. **Baseline styles in scoped areas.** Use `[data-co-base]` to progressively map native HTML elements to Cobalt typography and element defaults.
3. **Components only where ready.** Replace components in small slices after checking docs, accessibility notes, wrappers, tests, and browser behavior.
4. **Roadmap the gaps.** Keep local or legacy components where Cobalt does not yet support the pattern, and feed repeated blockers back into the roadmap.

This mirrors patterns used by mature systems such as [USWDS](https://designsystem.digital.gov/maturity-model/), [Atlassian](https://atlassian.design/foundations/tokens/migrate-to-tokens/), [Carbon](https://carbondesignsystem.com/migrating/guide/overview/), and [Polaris](https://polaris-react.shopify.com/version-guides/migrating-from-v11-to-v12): adoption is incremental, measurable, and validated.

> **NOTE:** Encountering blockers or questions during adoption? Use [GitHub](%GITHUB_URL%/issues/new/choose) to report bugs, request features, or ask for migration help. Your feedback is crucial for improving Cobalt and prioritizing roadmap items.

## Adoption Stages

| Stage                               | What changes                                             | Progress signal                                                        | Exit criteria                                                               |
| ----------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 1. Choose a slice                   | Pick one route, workflow, or page region.                | A small target surface is named.                                       | Current UI stack, key elements, risks, and unsupported patterns are known.  |
| 2. Add tokens                       | Install tokens and replace hard-coded values where safe. | The slice uses Cobalt token imports and semantic `--co-*` values.      | Import order is verified and key styles use tokens instead of raw values.   |
| 3. Add baseline styles              | Scope `@cobalt/tokens/css/base` with `[data-co-base]`.   | Native headings, text, links, lists, tables, and code align locally.   | The scoped area passes visual review and does not regress adjacent UI.      |
| 4. Pilot ready components           | Replace a few low-risk, documented components.           | A real workflow uses Cobalt tokens, baseline styles, and components.   | Visual, accessibility, framework, browser, and regression checks pass.      |
| 5. Make Cobalt the new-work default | Use Cobalt for new UI where support is ready.            | New features start from Cobalt decisions instead of cleanup later.     | Team standards define when to use Cobalt, defer, or file a roadmap gap.     |
| 6. Expand and retire legacy         | Move repeated patterns as Cobalt support matures.        | Legacy CSS or component dependencies decline by route, bundle, or app. | Migrated slices no longer depend on old UI systems except intentional gaps. |

## Readiness Checks

Before expanding beyond a pilot, confirm:

- token CSS loads once and in the correct order
- baseline styles are scoped and visually reviewed
- selected components have usable docs and acceptable [Component Status](/components/status)
- wrapper behavior works in the app framework
- keyboard, focus, accessibility, browser, theme, and regression checks pass
- unsupported patterns have a local fallback and a roadmap issue when repeated

## Related

- [Element Mapping](/guidance/element-mapping)
- [Migrating an Existing Application](/guidance/migration)
- [Component Status](/components/status)
- [Token Structure](/tokens/structure)
