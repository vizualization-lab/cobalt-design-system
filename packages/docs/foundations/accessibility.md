# Accessibility Standards

The Cobalt Design System targets **WCAG 2.1 Level AA** conformance. Accessibility is not an afterthought — it is a core design constraint that influences every token, component, and pattern in the system.

## Color contrast

All text and interactive elements must meet minimum contrast ratios against their background:

| Element type                          | Minimum ratio | Standard       |
| ------------------------------------- | ------------- | -------------- |
| Normal text (< 18 px / < 14 px bold)  | 4.5:1         | WCAG 1.4.3 AA  |
| Large text (>= 18 px / >= 14 px bold) | 3:1           | WCAG 1.4.3 AA  |
| UI components and graphical objects   | 3:1           | WCAG 1.4.11 AA |

Cobalt's semantic color tokens are pre-validated to meet these ratios in both light and dark themes. If you create custom pairings, verify them with a contrast checker.

```css
/* Safe pairing — contrast ratio 7.1:1 */
.co-text {
  color: var(--co-color-text-default);
  background: var(--co-color-surface-static-default);
}

/* Danger — verify custom combinations */
.co-alert--danger {
  color: var(--co-color-state-danger-dark); /* dark red text */
  background: var(--co-color-state-danger-subtle); /* light red bg — ratio 8.2:1 */
}
```

> **Tip:** Never rely on color alone to communicate meaning. Always pair color with text labels, icons, or patterns (e.g., error messages should include an icon and explanatory text, not just a red border).

## Keyboard navigation

Every interactive component in Cobalt is fully operable with a keyboard.

| Key                 | Action                                                        |
| ------------------- | ------------------------------------------------------------- |
| `Tab` / `Shift+Tab` | Move focus between interactive elements                       |
| `Enter` / `Space`   | Activate buttons, links, checkboxes                           |
| `Arrow keys`        | Navigate within composite widgets (tabs, menus, radio groups) |
| `Escape`            | Close modals, popovers, dropdowns                             |
| `Home` / `End`      | Jump to first/last item in a list or menu                     |

### Focus order

Focus order must follow the visual reading order of the page. Avoid positive `tabindex` values — they create confusing focus sequences. Use `tabindex="0"` to add elements to the natural tab order and `tabindex="-1"` to make elements programmatically focusable without adding them to the tab sequence.

## Focus management

Visible focus indicators are critical for keyboard users. Cobalt provides a standard focus ring token:

```css
:focus-visible {
  outline: 2px solid var(--co-color-state-primary-base);
  outline-offset: 2px;
}
```

### Focus trapping

Modal dialogs and similar overlays must trap focus so the user cannot tab to obscured content behind the overlay. The `co-Dialog` component handles this automatically. If building custom overlays, use the `@cobalt/focus-trap` utility:

```tsx
import { useFocusTrap } from '@cobalt/focus-trap';

function CustomOverlay({ children }: { children: React.ReactNode }) {
  const ref = useFocusTrap();
  return (
    <div ref={ref} role="dialog" aria-modal="true">
      {children}
    </div>
  );
}
```

## Screen reader support

### Semantic HTML

Use native HTML elements whenever possible. A `<button>` provides built-in keyboard interaction and role announcement without any ARIA attributes.

| Need             | Preferred approach                  |
| ---------------- | ----------------------------------- |
| Clickable action | `<button>`                          |
| Navigation link  | `<a href="...">`                    |
| Form input       | `<input>`, `<select>`, `<textarea>` |
| Section heading  | `<h1>` through `<h6>`               |
| List of items    | `<ul>` / `<ol>` + `<li>`            |

### ARIA attributes

When native semantics are insufficient, use ARIA roles and properties:

```html
<!-- Tabs pattern -->
<div role="tablist" aria-label="Account settings">
  <button role="tab" aria-selected="true" aria-controls="panel-general">General</button>
  <button role="tab" aria-selected="false" aria-controls="panel-security">Security</button>
</div>
<div role="tabpanel" id="panel-general" aria-labelledby="tab-general">
  <!-- panel content -->
</div>
```

### Live regions

Dynamic content updates (toasts, inline validation) should use ARIA live regions so screen readers announce changes:

```html
<div role="status" aria-live="polite">3 items added to cart.</div>

<div role="alert" aria-live="assertive">Session expired. Please log in again.</div>
```

## Reduced motion

Users who enable `prefers-reduced-motion` should see minimal or no animation. See [Motion — Reduced Motion](./motion.md#reduced-motion) for the CSS implementation and token reference.

## Testing checklist

Use this checklist during development and code review:

- [ ] All interactive elements are reachable and operable via keyboard.
- [ ] Focus order follows the visual layout.
- [ ] Focus indicators are visible on every interactive element.
- [ ] Color is not the only means of conveying information.
- [ ] Text contrast meets 4.5:1 (normal) / 3:1 (large).
- [ ] Images and icons have appropriate alt text or `aria-hidden`.
- [ ] Dynamic content updates are announced via live regions.
- [ ] Modals trap and restore focus correctly.
- [ ] The page is usable with 200 % browser zoom.
- [ ] Screen reader testing passes with VoiceOver (macOS) or NVDA (Windows).

## Resources

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/)

## Related

- [Colors](./colors.md) — contrast-safe color tokens
- [Motion](./motion.md) — `prefers-reduced-motion` support
- [Iconography](./iconography.md) — accessible icon patterns
