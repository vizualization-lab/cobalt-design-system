# Components

Cobalt components are accessible, token-driven web components built on Lit. Each ships as a `<co-*>` custom element with framework wrappers for React, Vue, and Angular.

## Component Anatomy

Every component page in this section follows the same structure so you always know where to find information:

| Section               | What it covers                                             |
| --------------------- | ---------------------------------------------------------- |
| **Interactive Demo**  | Live preview with prop toggles                             |
| **Variants & States** | Visual examples of every variant, size, and state          |
| **Slots**             | Named slots for composing content                          |
| **Usage**             | Framework-tabbed code (Web Component, React, Vue, Angular) |
| **Best Practices**    | When to use, when not to, content and layout tips          |
| **API**               | Properties, events, slots, and CSS parts tables            |
| **Accessibility**     | WCAG 2.1 AA report, keyboard interaction, ARIA notes       |
| **Changelog**         | Auto-generated from git history                            |

## Principles

1. **Accessible by default** — WCAG 2.1 AA, keyboard nav, ARIA built in
2. **Token-driven** — all visual decisions reference design tokens, no magic values
3. **Composable** — slots and CSS parts let you extend without forking
4. **Consistent** — shared API patterns (i.e. `variant`, `size`, `disabled`) across all components

## For Designers

- Interactive demos let you preview the Cobalt component library in action
- Variants & States sections show the full visual spec for each component
- Accessibility reports confirm WCAG compliance per component and state
- Design token names give you the shared vocabulary for design–dev handoff
- Pair component pages with the [Foundations](/foundations/) section for color, spacing, and type decisions

## For Developers

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/button';
</script>

<co-button variant="primary">Save</co-button>
```

</template>

<template #react>

```tsx
import { CoButton } from '@cobalt/react';

<CoButton variant="primary">Save</CoButton>;
```

</template>

<template #vue>

```vue
<script setup>
import { CoButton } from '@cobalt/vue';
</script>

<template>
  <CoButton variant="primary">Save</CoButton>
</template>
```

</template>

<template #angular>

```html
<co-button variant="primary">Save</co-button>
```

```typescript
import { CoButton } from '@cobalt/angular';

@Component({
  standalone: true,
  imports: [CoButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

</template>

</CodeTabs>

- Import per-component entry points for tree-shaking
- Customize with CSS custom properties and `::part()` selectors
- See [Getting Started > For Developers](/getting-started/developers) for full setup

## Further Reading

- [Design Foundations](/foundations/) — tokens powering component styles
- [Token Reference](/tokens/) — full list of CSS custom properties
- [Developer Getting Started Guidance](/getting-started/developers) — installation and framework setup
- [Patterns](/patterns/) — composed layouts using these components
