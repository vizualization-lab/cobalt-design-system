---
title: Contributing & Roadmap FAQ
description: Common questions about contributions, component proposals, design feedback, release notes, and component readiness.
---

# Contributing & Roadmap FAQ

These questions cover how teams participate in Cobalt’s evolution and where to look for maturity and planning signals.

## Can product teams contribute directly?

Yes. The docs explicitly position Cobalt as a collaborative system, not a closed handoff queue.

Teams can contribute:

- bug fixes
- documentation updates
- design feedback
- new component proposals
- implementation work, once a change is aligned

Start with [How to Contribute](/contributing/how-to-contribute).

## How do I propose a new component or major enhancement?

Use the [Component Proposal Process](/contributing/component-proposal).

The current expectation is:

- verify the need is recurring
- check whether an existing component can be extended
- start the proposal in GitHub Discussions
- document the problem, API shape, alternatives, and accessibility plan

## How do I contribute design feedback?

Design feedback usually starts in one of two places:

- GitHub Discussions for early design-system conversation
- design proposal or contribution threads when the change is more concrete

If the feedback affects Figma library content, token usage, or handoff expectations, the related starting points are:

- [Design Contributions](/contributing/design-contribution)
- [Figma Handoff](/contributing/figma-handoff)

## Where do I find release notes and roadmap context?

Use these pages first:

- [Release Notes](/release-notes)
- [Component Status](/components/status)

The docs do not currently provide a full in-site roadmap page. For broader planning context, use the release notes, current component status, and the relevant GitHub Discussions or backlog references mentioned in the product-management and contribution docs.

## How do I know whether a component is production-ready?

Look at the component’s documentation as a package of signals:

- [Component Status](/components/status)
- the component page’s accessibility report
- examples and usage guidance
- changelog history

If a component is still evolving, those pages should give you a better signal than a single “yes/no” label alone.

## What do I do if the token or component I need does not exist?

First determine which kind of gap you found:

- if it is a **token gap**, use the token decision guidance in [Token Structure](/tokens/structure)
- if it is a **component gap**, use the [Component Proposal Process](/contributing/component-proposal)
- if you are not sure which it is, start with [GitHub Discussions](%GITHUB_URL%/discussions)

The goal is to avoid inventing one-off values or components when the need is really a shared system change.

## Do I need a changeset for docs-only or user-facing changes?

If the change is user-facing and follows the repo’s release process, expect to add a changeset unless the maintainers explicitly scope it out.

When in doubt, check:

- [How to Contribute](/contributing/how-to-contribute)
- [Versioning & Releases](/contributing/versioning)

## Related

- [How to Contribute](/contributing/how-to-contribute)
- [Component Proposal Process](/contributing/component-proposal)
- [Versioning & Releases](/contributing/versioning)
- [Component Status](/components/status)
