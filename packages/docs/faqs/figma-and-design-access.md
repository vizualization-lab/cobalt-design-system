---
title: Figma & Design Access FAQ
description: Common questions about Figma access, supported design tooling, plugins, and handoff expectations.
---

# Figma & Design Access FAQ

These questions cover how designers get into the Cobalt design resources and what the docs currently treat as the supported design workflow.

## How do I get access to the Cobalt Figma team or library?

The docs currently provide general access guidance rather than a full internal provisioning workflow.

- Request access through the [Contact](/resources/contact) path.
- Once access is granted, enable the Cobalt libraries in **Assets > Team Library**.
- If your organization has additional internal approval or group-membership steps, follow those local instructions as well.

The [Getting Started for Designers](/getting-started/designers) page is the canonical starting point.

## Which Figma libraries should I enable?

Once you have access to the Cobalt Figma team, enable the `Cobalt Design System [MVP]` library.

## Which plugins are required versus optional?

Today’s docs support this split:

- **Required for token sync workflows:** [Tokens Studio](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma)
- **Helpful but optional:** contrast and accessibility helper plugins such as Contrast or Able

If you are only consuming the library and not working on token synchronization, Tokens Studio may be less central day to day, but it is still the documented token plugin in the current workflow.

## Is Figma the primary design workflow today?

Yes. Figma is the explicitly documented design-tool workflow in the current site.

The strongest documentation support today is for:

- Cobalt libraries in Figma
- Tokens Studio-based token workflows
- Figma handoff into development

## Are Penpot or Adobe XD supported right now?

Not as first-class documented workflows.

Older docs language may imply broader tool coverage, but the current practical guidance is Figma-first. Until dedicated Penpot or XD setup pages exist, treat Figma as the canonical design workflow.

## What should designers hand off to developers?

At minimum, the handoff should make these things explicit:

- which tokens or styles were used
- supported states
- supported sizes
- theme differences
- component-specific exceptions
- accessibility notes such as labels, focus behavior, and error handling

The full handoff template lives in [Figma Handoff](/contributing/figma-handoff).

## When should I ask for a new token instead of inventing a Figma-only style?

Ask for a new token whenever the value represents a reusable system rule or a value that needs to survive handoff into code. Do not create private Figma-only values for system behavior.

Use the token decision tree in:

- [Token Structure](/tokens/structure)
- [Figma Handoff](/contributing/figma-handoff)

## Related

- [Getting Started for Designers](/getting-started/designers)
- [Figma Handoff](/contributing/figma-handoff)
- [Token Structure](/tokens/structure)
- [Designer Resources](/resources/designers)
