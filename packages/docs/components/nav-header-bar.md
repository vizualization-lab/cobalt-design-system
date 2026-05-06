# Navigation Header Bar

<ComponentStatus component="co-nav-header-bar" />

A horizontal header bar for app-level navigation. Provides a structured layout with a logo area on the left, a flexible content region in the middle, and an avatar area on the right.

## Demo

<ClientOnly>
<co-nav-header-bar label="App Header" style="margin: 16px 0 24px;">
  <svg slot="logo" width="32" height="32" viewBox="0 0 32 32" style="display: block;"><rect width="32" height="32" rx="6" fill="var(--co-color-state-primary-base)"/><text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="700" font-family="var(--co-font-family-sans)">C</text></svg>
  <co-button variant="primary" size="sm">
    <co-icon slot="prefix" name="add" size="sm"></co-icon>
    Create
  </co-button>
  <co-input-pill variant="search" placeholder="Search" style="flex: 1; max-width: 480px;"></co-input-pill>
  <co-icon slot="avatar" name="account-circle" size="lg" fill></co-icon>
</co-nav-header-bar>
</ClientOnly>

```html
<co-nav-header-bar label="App Header">
  <img slot="logo" src="logo.svg" alt="Logo" />
  <co-button variant="primary" size="sm">
    <co-icon slot="prefix" name="add" size="sm"></co-icon>
    Create
  </co-button>
  <co-input-pill variant="search" placeholder="Search"></co-input-pill>
  <co-icon slot="avatar" name="account-circle" size="lg" fill></co-icon>
</co-nav-header-bar>
```

## Slots

The header bar uses three slot regions to organize content:

<ClientOnly>
<co-nav-header-bar label="Minimal Header" style="margin: 16px 0 24px;">
  <span style="font-weight: 600;">My Application</span>
</co-nav-header-bar>
</ClientOnly>

The `logo` and `avatar` slots are optional. When omitted, the content area fills the available space.

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/nav-header-bar';
</script>

<co-nav-header-bar label="App Header">
  <img slot="logo" src="logo.svg" alt="Logo" />
  <nav>
    <a href="/dashboard">Dashboard</a>
    <a href="/settings">Settings</a>
  </nav>
  <button slot="avatar" aria-label="User menu">
    <img src="avatar.png" alt="User" />
  </button>
</co-nav-header-bar>
```

</template>

<template #react>

```tsx
import { CoNavHeaderBar } from '@cobalt/react';

function App() {
  return (
    <CoNavHeaderBar label="App Header">
      <img slot="logo" src="logo.svg" alt="Logo" />
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/settings">Settings</a>
      </nav>
      <button slot="avatar" aria-label="User menu">
        U
      </button>
    </CoNavHeaderBar>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoNavHeaderBar } from '@cobalt/vue';
</script>

<template>
  <CoNavHeaderBar label="App Header">
    <img slot="logo" src="logo.svg" alt="Logo" />
    <nav>
      <a href="/dashboard">Dashboard</a>
      <a href="/settings">Settings</a>
    </nav>
    <button slot="avatar" aria-label="User menu">U</button>
  </CoNavHeaderBar>
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoNavHeaderBar } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoNavHeaderBar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- app.component.html -->
<co-nav-header-bar label="App Header">
  <img slot="logo" src="logo.svg" alt="Logo" />
  <nav>
    <a href="/dashboard">Dashboard</a>
    <a href="/settings">Settings</a>
  </nav>
  <button slot="avatar" aria-label="User menu">U</button>
</co-nav-header-bar>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- As the primary top-level navigation bar in an application
- To provide consistent brand identity with a logo and user avatar
- When you need a flexible content area for search, actions, or navigation links

### When NOT to use

- For secondary or contextual toolbars within a page section
- As a footer bar — use a dedicated footer component instead
- For navigation that should be vertical — use `co-nav-rail-bar` or `co-nav-drawer` instead

### Content guidelines

- Keep the logo slot simple — a single image or brand mark under no greater than 60 pixels works best
- Place the most important actions in the default slot
- Use the avatar slot for user-facing controls, universal controls
- Ensure all interactive elements in slots have accessible labels

## API

### Properties

| Property | Type     | Default    | Description                              |
| -------- | -------- | ---------- | ---------------------------------------- |
| `label`  | `string` | `'Header'` | Accessible label for the header landmark |

### Slots

| Name        | Description                                    |
| ----------- | ---------------------------------------------- |
| `logo`      | Optional logo or brand area on the left        |
| _(default)_ | Main content area with space-between alignment |
| `avatar`    | Avatar or user icon area on the right          |

### CSS Parts

| Part      | Description              |
| --------- | ------------------------ |
| `base`    | The header container     |
| `logo`    | The logo slot wrapper    |
| `content` | The default slot wrapper |
| `avatar`  | The avatar slot wrapper  |

## Accessibility

<ClientOnly>
<A11yReport component="co-nav-header-bar" />
</ClientOnly>

### Keyboard interaction

| Key   | Action                                                          |
| ----- | --------------------------------------------------------------- |
| `Tab` | Moves focus through interactive elements within slotted content |

### ARIA notes

- Renders a native `<header>` element which provides the `banner` landmark role
- The `label` property sets `aria-label` on the header for identification when multiple landmarks exist
- Slotted interactive content (buttons, links) should have their own accessible labels
- The header itself is not focusable — focus passes through to slotted children

### Manual testing checklist

- [ ] Tab through all slotted interactive elements — focus order follows DOM order
- [ ] Verify header renders as a `banner` landmark in accessibility tree
- [ ] Test with empty logo and avatar slots — layout remains correct
- [ ] Resize viewport — content area responds without overlap
- [ ] Verify bottom border is visible in both light and dark modes
- [ ] Screen reader announces the header landmark with its label

## Changelog

<ComponentChangelog component="co-nav-header-bar" />
