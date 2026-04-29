# Getting Started for Designers

This guide walks you through setting up the Cobalt Figma library, working with design tokens, and handing off your designs to developers.

## Setting Up Figma

### 1. Request Access to the Cobalt Figma Team

Cobalt's design resources are hosted in a shared Figma team. To request access, please contact the Cobalt team through our [contact page](/resources/contact).

### 2. Enable the Cobalt Library

Once you have access, open any Figma file, then go to **Assets > Team Library** and enable the `Cobalt Design System [MVP]` library. This will give you access to all the components, tokens, and icons.

> **Tip:** Pin the Cobalt library to keep them at the top of your asset panel. This makes drag-and-drop much faster during daily work.

### 3. Install the Tokens Studio Figma Plugin

The Tokens Studio plugin helps you import and export design tokens, and synchronize with Figma variables.

1. Open **Plugins > Browse plugins** in Figma.
2. Search for "Tokens Studio" and select the plugin.
3. Click **Install**.

## Working with Tokens

Design tokens are the single source of truth for visual style. Every color, spacing value, and font size in Cobalt maps to a named token.

### Token Naming Convention

Figma should mirror the same token categories used in code. In code, tokens are exposed as `--co-*` CSS variables; in Figma, the library should preserve the same category and role structure so handoff stays unambiguous.

Examples:

| Token Name                      | Value      | Usage                             |
| ------------------------------- | ---------- | --------------------------------- |
| `--co-color-primary-base`       | `#154bcc`  | Primary actions, key links        |
| `--co-color-surface-raised`     | `#fcfcfc`  | Raised surfaces and subtle cards  |
| `--co-space-inset-md`           | `16px`     | Default component padding         |
| `--co-font-size-lg`             | `1.125rem` | Subheadings and emphasized labels |
| `--co-component-avatar-size-md` | `32px`     | Default avatar size               |

### Applying Tokens in Figma

Always use tokens instead of raw hex values or pixel sizes. When you apply a fill, stroke, or text style:

1. Select the layer.
2. Open the **Design** panel on the right.
3. Click the style swatch (color dot or text style name).
4. Search for the token by name — e.g., "primary/base."
5. Select the matching style.

> **Warning:** Hardcoding values instead of using tokens causes inconsistencies and makes future theme changes painful. If a token does not exist for your use case, [reach out to the Cobalt team](/resources/contact) before inventing one.

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

Ensure tokens are assigned to all colors, text styles, and spacing. Developers should be able to use dev mode to identify all of the token names directly from the design.

### 2. Document Interaction Behavior

Add notes for states and transitions that are not obvious from static frames:

- What happens on hover, focus, and active states?
- Are there loading or skeleton states?
- What is the error state content?

### 3. Link to the Component Docs

In your handoff notes, include links to the relevant Cobalt documentation pages so developers can reference the API and usage examples.

### 4. Use the Handoff Checklist

Before marking a design as ready:

- [ ] All colors reference Cobalt token styles
- [ ] All text uses Cobalt type styles
- [ ] Spacing is consistent with Cobalt spacing tokens
- [ ] Components use the latest Cobalt library version
- [ ] Responsive behavior is documented for mobile, tablet, and desktop
- [ ] Accessibility annotations are present (labels, roles, focus order)

## Resources

- **Token Structure:** [How tokens are organized](../tokens/structure.md)
- **Figma Handoff:** [What to hand off with tokens](../contributing/figma-handoff.md) (includes a [copy-paste template](../contributing/figma-handoff.md#quick-handoff-template))
- **Token Reference:** [Tokens Documentation](../tokens/)
- **Custom Icons:** Need to design a custom icon for Cobalt? See the [Designing Icons](/contributing/designing-icons) guide for grid specs, keyline templates, and an export checklist.
