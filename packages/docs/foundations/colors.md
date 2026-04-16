# Colors

<script setup>
import { data } from './colors.data';
</script>

The Cobalt color system is organized into **primitive palettes** and **semantic color tokens**. Primitive colors live in `primitives.color.json`; semantic color roles live in `semantic.theme.default.light.json` and `semantic.theme.default.dark.json` so the same UI role can adapt by theme or mode.

## Core palette

The core palette includes **Neutral** and the four colors used by semantic tokens (Blue, Red, Green, Orange).

<ColorSwatch :palettes="data.corePalettes" />

## Extended palette

Additional primitives available for illustrations, data visualization, status indicators, and brand expression. These do not have semantic aliases — reference them directly via `--co-color-primitive-{name}-{shade}`.

<ColorSwatch :palettes="data.extendedPalettes" />

## Semantic tokens

Semantic tokens abstract primitives so your UI adapts to theme changes without touching component code. The table below shows a representative selection — see the [Tokens reference](../tokens/index.md) for the complete list.

| Token                                    | Light mode                     | Dark mode                      | Usage                                                    |
| ---------------------------------------- | ------------------------------ | ------------------------------ | -------------------------------------------------------- |
| `--co-color-primary-base`                | `#154bcc` <br/>(`blue.600`)    | `#769eff` <br/>(`blue.300`)    | Brand primary, links, selected text                      |
| `--co-color-surface-page`                | `#f7f7f7` <br/>(`neutral.75`)  | `#1e1f21` <br/>(`neutral.900`) | Page canvas — the floor of the app                       |
| `--co-color-surface-default`             | `#ffffff` <br/>(`white`)       | `#363738` <br/>(`neutral.800`) | Cards, panels, default containers                        |
| `--co-color-surface-raised`              | `#fcfcfc` <br/>(`neutral.50`)  | `#363738` <br/>(`neutral.800`) | Popovers, menus, sticky headers                          |
| `--co-color-surface-sunken`              | `#f2f2f2` <br/>(`neutral.100`) | `#0c0c0d` <br/>(`neutral.950`) | Inset wells, code blocks, input backgrounds              |
| `--co-color-surface-bold`                | `#1e1f21` <br/>(`neutral.900`) | `#1e1f21` <br/>(`neutral.900`) | App-shell chrome — navigation rails, header bars         |
| `--co-color-text-default`                | `#464646` <br/>(`neutral.700`) | `#fcfcfc` <br/>(`neutral.50`)  | Body text                                                |
| `--co-color-text-secondary`              | `#686868` <br/>(`neutral.600`) | `#c0c0c0` <br/>(`neutral.400`) | Subordinate text, body secondary                         |
| `--co-color-text-tertiary`               | `#919191` <br/>(`neutral.500`) | `#919191` <br/>(`neutral.500`) | Quietest text — captions, icons, chrome accents          |
| `--co-color-danger-base`                 | `#a61b12` <br/>(`red.600`)     | `#d94e45` <br/>(`red.400`)     | Destructive actions, errors                              |
| `--co-color-success-base`                | `#16652a` <br/>(`green.600`)   | `#49985d` <br/>(`green.400`)   | Success states                                           |
| `--co-color-warning-base`                | `#c78017` <br/>(`orange.600`)  | `#fab34a` <br/>(`orange.400`)  | Warning indicators                                       |
| `--co-color-interactive-default`         | `#1a5eff` <br/>(`blue.500`)    | `#487eff` <br/>(`blue.400`)    | Default interactive backgrounds (buttons, active states) |
| `--co-color-interactive-hover`           | `#154bcc` <br/>(`blue.600`)    | `#769eff` <br/>(`blue.300`)    | Interactive hover                                        |
| `--co-color-interactive-subtle-selected` | `#e8efff` <br/>(`blue.50`)     | `#1d3c53` <br/>(`navy.600`)    | Persistent selection background (selected nav, tabs)     |
| `--co-color-border-focus`                | `#1a5eff` <br/>(`blue.500`)    | `#487eff` <br/>(`blue.400`)    | Focus outlines                                           |
| `--co-color-border-selected`             | `#a3bfff` <br/>(`blue.200`)    | `#244b68` <br/>(`navy.500`)    | Edge of a selected item, paired with `subtle-selected`   |

## Usage in CSS

Reference tokens with `var()`:

```css
.co-button--primary {
  background-color: var(--co-color-interactive-default);
  color: var(--co-color-text-on-primary);
}

.co-alert--danger {
  background-color: var(--co-color-feedback-danger-bg);
  border-left: 4px solid var(--co-color-danger-base);
  color: var(--co-color-feedback-danger-text);
}
```

## Light and dark mode

Cobalt ships two published token layers today:

- `@cobalt/tokens/css` for the default light values
- `@cobalt/tokens/css/dark` for the default dark overrides

The recommended selector model for dark mode is `data-theme="default" data-mode="dark"`. For backward compatibility, the dark stylesheet also supports `data-theme="dark"` for the default dark theme.

```css
/* Automatically provided by @cobalt/tokens */
:root {
  --co-color-primary-base: #154bcc;
  --co-color-surface-page: #f7f7f7;
  --co-color-text-default: #464646;
}

[data-theme='dark'],
[data-theme='default'][data-mode='dark'] {
  --co-color-primary-base: #769eff;
  --co-color-surface-page: #1e1f21;
  --co-color-text-default: #fcfcfc;
}
```

No component CSS needs to change — the same `var(--co-color-primary-base)` resolves to the correct value in either mode.

### The light → dark mirroring rule

Dark-mode blue values are **shifted one step brighter on the blue primitive ramp** compared to their light-mode counterparts. Saturated mid-blues (e.g. `blue.500` = #1a5eff) look harsh on dark backgrounds, so the dark theme uses `blue.300`/`blue.400` where light uses `blue.500`/`blue.600`. Hover and active states continue the mirror: in light mode they move _darker_ than the default (more commitment), in dark mode they move _brighter_.

| State                 | Light                     | Dark                        |
| --------------------- | ------------------------- | --------------------------- |
| `primary.base`        | `blue.600` (#154bcc)      | `blue.300` (#769eff)        |
| `interactive.default` | `blue.500` (#1a5eff)      | `blue.400` (#487eff)        |
| `interactive.hover`   | `blue.600` (darker)       | `blue.300` (brighter)       |
| `interactive.active`  | `blue.700` (darker still) | `blue.200` (brighter still) |

### Selection backgrounds use different blue sub-families

The `interactive.subtle-selected` / `border.selected` pair gives selected nav items a soft tinted pill treatment. In **light mode** these reach for the saturated `blue.50` / `blue.200` primitives because pale blues on a white surface read as airy highlight. In **dark mode**, the same saturated-blue primitives render as deep vivid navy on a dark surface — so the dark theme uses the desaturated `navy.500` / `navy.600` primitives instead, giving a muted tonal pill that reads as quiet elevation rather than a saturated accent. Different primitive sub-families, same semantic intent.

> **Tip:** Always verify that foreground/background pairings meet a minimum contrast ratio of **4.5:1** for normal text and **3:1** for large text, as required by WCAG 2.1 AA.

## Accessibility

Ensure all color pairings meet WCAG 2.1 AA contrast ratios. See [Accessibility — Color Contrast](./accessibility.md#color-contrast) for requirements and testing tools.

## Related

- [Accessibility Standards](./accessibility.md)
- [Tokens reference](../tokens/index.md)
