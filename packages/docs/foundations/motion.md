# Motion

Motion makes interfaces feel responsive and alive. The Cobalt motion system defines **duration tokens** and **easing curves** that keep animations consistent, purposeful, and accessible.

## Duration tokens

| Token                         | Value  | Use case                                        |
| ----------------------------- | ------ | ----------------------------------------------- |
| `--co-motion-duration-fast`   | 100 ms | Micro-interactions — checkbox toggle, icon swap |
| `--co-motion-duration-normal` | 200 ms | Default — button hover, input focus ring        |
| `--co-motion-duration-slow`   | 300 ms | Expanding panels, dropdown open                 |

> **Tip:** Shorter durations feel snappier but can go unnoticed. Longer durations draw attention — reserve them for layout-level changes where the user needs to track what moved.

## Easing curves

| Token                        | CSS value                      | Character                            |
| ---------------------------- | ------------------------------ | ------------------------------------ |
| `--co-motion-easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose — smooth and natural |
| `--co-motion-easing-in`      | `cubic-bezier(0.4, 0, 1, 1)`   | Elements leaving the screen          |
| `--co-motion-easing-out`     | `cubic-bezier(0, 0, 0.2, 1)`   | Elements entering the screen         |
| `--co-motion-easing-in-out`  | `cubic-bezier(0.4, 0, 0.2, 1)` | Paired enter/exit and layout changes |

## Usage in CSS

### Transition shorthand

```css
.co-button {
  background: var(--co-color-interactive-default);
  transition:
    background-color var(--co-motion-duration-normal) var(--co-motion-easing-default),
    box-shadow var(--co-motion-duration-normal) var(--co-motion-easing-default);
}

.co-button:hover {
  background: var(--co-color-interactive-hover);
  box-shadow: var(--co-elevation-shadow-md);
}
```

### Keyframe animation

```css
@keyframes co-fade-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.co-dropdown-menu {
  animation: co-fade-in var(--co-motion-duration-slow) var(--co-motion-easing-out);
}
```

### Expanding and collapsing

```css
.co-accordion-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--co-motion-duration-slow) var(--co-motion-easing-default);
}

.co-accordion[open] .co-accordion-body {
  grid-template-rows: 1fr;
}
```

## Animation principles

- **Purposeful** — every animation should guide attention, show causality, or maintain spatial context.
- **Brief** — most transitions complete within 200 ms; above 400 ms feels sluggish.
- **Consistent** — same duration and easing for similar actions across components.
- **Accessible** — honor the `prefers-reduced-motion` media query (see [Accessibility — Reduced Motion](./accessibility.md#reduced-motion)).

## Reduced motion

Always wrap non-essential animations in a motion query so users who have requested reduced motion see a static or simplified experience:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Cobalt ships the foundational motion tokens in `@cobalt/tokens/css`, so all components can reference the same reduced-motion strategy by default.

## Related

- [Elevation](./elevation.md) — animating shadow transitions
- [Accessibility](./accessibility.md) — `prefers-reduced-motion` and inclusive design
