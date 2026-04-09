# Figma Checklist

Use this page as a short handoff template when a design is ready for engineering.

It is intentionally shorter than the full [Figma Handoff](./figma-handoff.md) guide.

## Copy-Paste Template

Use this block in Figma file descriptions, frame notes, or handoff tickets.

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

### Notes for engineering

- Shared system rule or one-off exception:
- Anything intentionally unique:
```

## Quick Checklist

Before marking a design ready:

- [ ] existing semantic styles are used where available
- [ ] new token requests are clearly labeled
- [ ] all required states are shown
- [ ] all supported sizes are shown
- [ ] theme differences are documented
- [ ] accessibility notes are present
- [ ] one-off values are called out as intentional

## Fast Classification Guide

Use this when requesting a new token:

| If the value is...               | Ask for...              |
| -------------------------------- | ----------------------- |
| a raw system value               | a primitive token       |
| a reusable design rule           | a shared semantic token |
| different by light/dark or theme | a theme semantic token  |
| only for one component           | a component token       |

## Example Handoff Notes

### Good

- "Uses existing body text role and default surface tokens."
- "Input uses shared control height and shared control padding."
- "Dark mode changes only the semantic color layer."
- "Avatar sizes are component-specific and should not become system-wide."

### Avoid

- "Use whatever matches this visually."
- "Same as before but darker."
- "Special case for now."

## Related Pages

- [Figma Handoff](./figma-handoff.md)
- [Token Structure](./structure.md)
- [Token Reference](./index.md)
