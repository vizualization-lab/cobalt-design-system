---
name: Component Status
about: Track the development lifecycle and verification status of a Cobalt component.
title: 'Component Status: co-'
labels: component, component-status
---

## Component

**Name:** `co-`
**Description:**

<!-- Brief description of the component's purpose and behavior. -->

## Status Checklist

### Design

- [ ] **Figma Alignment** — Code matches Figma design specs (spacing, colors, typography, border-radius, shadows, responsive behavior)
- [ ] **Art Director Sign-off** — Visual review approved by design lead across light and dark modes
- [ ] **Design Tokens** — Component uses only `--co-*` design tokens, no hardcoded values

### Development

- [ ] **Unit Tests** — Passing unit tests covering properties, events, slots, keyboard interactions, and edge cases (90% coverage target)
- [ ] **Accessibility** — Automated axe-core audit passing, keyboard navigation verified, screen reader tested, ARIA attributes validated
- [ ] **Documentation** — Docs page complete: interactive demo, usage examples (all 4 frameworks), API tables, best practices, accessibility notes, changelog

### Framework Wrappers

- [ ] **React** — Wrapper created, exported from `@cobalt/react`, verified with tests
- [ ] **Vue** — Wrapper created, exported from `@cobalt/vue`, verified with tests
- [ ] **Angular** — Wrapper created, exported from `@cobalt/angular`, verified with tests

### Verification

- [ ] **Browser Testing** — Verified across Chrome, Firefox, Safari, and Edge

## Notes

<!-- Any additional context, known issues, or dependencies. -->
