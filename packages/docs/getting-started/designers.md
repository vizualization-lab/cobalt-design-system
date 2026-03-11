# Getting Started for Designers

This guide walks you through setting up the Cobalt Figma library, working with design tokens, and handing off your designs to engineering.

## Setting Up Figma

### 1. Enable the Cobalt Library

Open any Figma file, then go to **Assets > Team Library** and enable the following libraries:

- **Cobalt Components** — all production-ready UI components
- **Cobalt Icons** — the full icon set
- **Cobalt Tokens** — color, spacing, and typography styles

> **Tip:** Pin the Cobalt libraries to keep them at the top of your asset panel. This makes drag-and-drop much faster during daily work.

### 2. Install the Cobalt Figma Plugin

The Cobalt plugin helps you inspect token values, check contrast ratios, and sync with the latest token updates.

1. Open **Plugins > Browse plugins** in Figma.
2. Search for "Cobalt Design System."
3. Click **Install**.

## Working with Tokens

Design tokens are the single source of truth for visual style. Every color, spacing value, and font size in Cobalt maps to a named token.

### Token Naming Convention

Tokens follow a structured naming pattern:

```
cobalt/{category}/{property}/{variant}
```

Examples:

| Token Name                  | Value     | Usage                         |
| --------------------------- | --------- | ----------------------------- |
| `cobalt/color/primary/base` | `#0057FF` | Primary action buttons, links |
| `cobalt/color/neutral/700`  | `#374151` | Body text                     |
| `cobalt/spacing/md`         | `16px`    | Default padding and gaps      |
| `cobalt/font/size/lg`       | `18px`    | Subheadings                   |

### Applying Tokens in Figma

Always use tokens instead of raw hex values or pixel sizes. When you apply a fill, stroke, or text style:

1. Select the layer.
2. Open the **Design** panel on the right.
3. Click the style swatch (color dot or text style name).
4. Search for the token by name — e.g., "primary/base."
5. Select the matching style.

> **Warning:** Hardcoding values instead of using tokens causes inconsistencies and makes future theme changes painful. If a token does not exist for your use case, reach out in `#cobalt-support` before inventing one.

## Component Usage

Cobalt components in Figma are built with **auto layout**, **variants**, and **component properties** so they mirror the real implementation.

### Key Properties

Most components expose the following properties in the right panel:

- **Size** — `sm`, `md`, `lg`
- **Variant** — `primary`, `secondary`, `ghost`, `danger`
- **State** — `default`, `hover`, `focus`, `disabled`
- **Show Icon** — toggle leading/trailing icon slots

Swap icon instances by selecting the icon layer and choosing a replacement from the Cobalt Icons library.

## Handoff Process

Good handoff reduces back-and-forth and speeds up implementation. Follow these steps:

### 1. Annotate with Token Names

Use the Cobalt plugin's **Redline** mode to auto-annotate spacing, color, and typography tokens on your frames.

### 2. Document Interaction Behavior

Add notes for states and transitions that are not obvious from static frames:

- What happens on hover, focus, and active states?
- Are there loading or skeleton states?
- What is the error state content?

### 3. Link to the Component Docs

In your handoff notes, include links to the relevant Cobalt documentation pages so engineers can reference the API and usage examples.

### 4. Use the Handoff Checklist

Before marking a design as ready:

- [ ] All colors reference Cobalt token styles
- [ ] All text uses Cobalt type styles
- [ ] Spacing is consistent with Cobalt spacing tokens
- [ ] Components use the latest Cobalt library version
- [ ] Responsive behavior is documented for mobile, tablet, and desktop
- [ ] Accessibility annotations are present (labels, roles, focus order)

## Resources

- **Figma Library:** search "Cobalt" in Team Libraries
- **Token Reference:** [Tokens Documentation](../tokens/)
- **Slack:** `#cobalt-design`
