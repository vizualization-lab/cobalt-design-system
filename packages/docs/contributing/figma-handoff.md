# Figma Handoff

This page explains what designers should hand off in Figma when working with Cobalt tokens.

## Quick Handoff Template

Copy and paste this block into Figma file descriptions, frame notes, or handoff tickets:

```md
## Cobalt Handoff

### Token usage

- Existing semantic tokens/styles used:
- New token requests:
- Component-specific exceptions:

### States

- Default:
- Hover:
- Focus:
- Active:
- Disabled:
- Invalid/Error:
- Success:

### Sizes

- Supported sizes:

### Theme behavior

- Light mode:
- Dark mode:
- Theme-specific changes:

### Accessibility

- Labeling:
- Helper text:
- Error behavior:
- Focus behavior:

### Notes for Developers

- Shared system rule or one-off exception:
- Anything intentionally unique:
```

---

The goal is simple:

- use the existing token system where possible
- make new token requests easy to classify
- avoid handoff notes that force developers to guess intent

## Core Principle

Figma is a design workspace and review surface.

The source of truth for tokens lives in the Cobalt token files. Figma should reflect that system, not replace it.

In practice, that means:

- use token-backed styles when they already exist
- document intent when something is new
- call out theme differences explicitly
- avoid one-off visual values unless they are intentional

## What To Hand Off

Every handoff should make these things clear:

1. which existing tokens or styles are being used
2. which states need to be supported
3. which values change by theme
4. which values are component-specific exceptions

## The Designer Decision Tree

When a design needs a new value, use this order:

### 1. Reuse an existing semantic token first

This is the default choice.

Examples:

- text styles
- surface colors
- border colors
- control heights
- focus treatments

If the value is already a system rule, use the semantic token instead of creating a new style.

### 2. If it is a raw scale value, it is a primitive request

Examples:

- a new spacing step
- a new radius value
- a new palette color

These are system-building values, not component decisions.

### 3. If it changes between light, dark, or future brand themes, it is a theme request

Examples:

- text color on dark surfaces
- surface elevation color shifts
- primary brand color by theme

Theme requests should describe what changes and where it changes.

### 4. If it only belongs to one component, it is a component token request

Examples:

- avatar sizes
- nav rail selected item states
- a unique chip shape
- a component-only spacing rule

Use this only when the value should not become a system-wide rule.

## What Developers Needs From Figma

### Use named styles or variables whenever possible

Do not rely on visual matching alone. If a frame uses a Cobalt token-backed style, developers should be able to identify that directly.

### Call out all supported states

At minimum, include:

- default
- hover
- focus
- active when relevant
- disabled when relevant
- invalid or error when relevant
- success when relevant

### Call out all supported sizes

If a component supports multiple sizes, show them in the same handoff.

Examples:

- `sm`
- `md`
- `lg`

### Call out theme differences directly

If a design differs in light and dark mode, do not assume the difference is obvious from screenshots alone.

Show:

- what changes
- what stays the same
- whether the difference is semantic or component-specific

### Separate system rules from one-off exceptions

If a value is intended to become reusable, say so.

If it is intentionally unique to one component or pattern, say that too.

This helps developers place the token correctly.

## Handoff Checklist

Before marking a design ready:

- [ ] colors use existing semantic styles or clearly request a new semantic/theme token
- [ ] typography uses existing font tokens or clearly requests a new reusable typography rule
- [ ] spacing and radius values use existing system scales where possible
- [ ] component sizes and states are shown explicitly
- [ ] light and dark differences are documented when relevant
- [ ] one-off values are labeled as intentional exceptions
- [ ] accessibility requirements are present for labels, helper text, errors, and focus behavior

## Common Examples

| Design need                       | Best request type     | Why                                       |
| --------------------------------- | --------------------- | ----------------------------------------- |
| Different text color in dark mode | Theme semantic token  | It changes by mode                        |
| New brand palette ramp            | Primitive color token | It is a raw palette input                 |
| New avatar sizes                  | Component token       | It belongs to Avatar, not every control   |
| Nav rail selected item treatment  | Component token       | It belongs to Nav Rail, not every control |
| New default field height          | Shared semantic token | It affects standard controls              |
| New content max width             | Shared semantic token | It affects shared layout behavior         |

## Good Handoff Notes

Use notes like these:

- "Uses existing font-size and semantic color tokens."
- "Dark mode changes only the semantic color layer; spacing and typography stay the same."
- "Avatar sizes are component-specific and should not become global control sizes."
- "Nav rail selected and hover states are component-specific and should stay under the nav rail token family."
- "Input uses shared control height and shared control radius."

Avoid notes like these:

- "Use whatever matches this visually."
- "Same as before but darker."
- "Special case for now."

## Related Pages

- [Token Structure](/tokens/structure)
- [Token Reference](/tokens/)
- [For Designers](../getting-started/designers.md)
