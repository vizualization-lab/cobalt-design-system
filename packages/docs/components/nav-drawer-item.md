# Navigation Drawer Item

The `co-nav-drawer-item` is a navigation link for use inside `co-nav-drawer`. It renders an icon + label row with selected and disabled states.

## Interactive Demo

<ComponentDemo
  tag="co-nav-drawer-item"
  label="Dashboard"
  :defaults="{ value: 'dashboard', icon: 'dashboard' }"
  :booleans="['selected', 'disabled']"
  :textInputs="['icon', 'href']"
/>

## With Links

When `href` is set, the item renders as an `<a>` element.

<ClientOnly>
<div style="max-width: 280px; margin: 16px 0 24px; border: 1px solid var(--co-color-border-default); border-radius: 8px; padding: 8px;">
  <co-nav-drawer-item value="home" icon="home" href="#home" selected>Home</co-nav-drawer-item>
  <co-nav-drawer-item value="docs" icon="description" href="#docs">Documentation</co-nav-drawer-item>
  <co-nav-drawer-item value="api" icon="code" href="#api">API Reference</co-nav-drawer-item>
</div>
</ClientOnly>

## Custom Prefix Slot

Override the default icon with the `prefix` slot.

<ClientOnly>
<div style="max-width: 280px; margin: 16px 0 24px; border: 1px solid var(--co-color-border-default); border-radius: 8px; padding: 8px;">
  <co-nav-drawer-item value="custom">
    <co-icon slot="prefix" name="star" size="sm" fill></co-icon>
    Custom prefix icon
  </co-nav-drawer-item>
</div>
</ClientOnly>

```html
<co-nav-drawer-item value="custom">
  <co-icon slot="prefix" name="star" size="sm" fill></co-icon>
  Custom prefix icon
</co-nav-drawer-item>
```

## Best Practices

### Content guidelines

- Keep labels short and scannable — one or two words is ideal
- Use consistent, recognizable icons across all items
- Use `href` for real navigation destinations so links work with browser history
- Use `disabled` sparingly — prefer hiding items the user can't access

### When to use

- Inside a [`co-nav-drawer`](/components/nav-drawer) for persistent side navigation
- For destinations with a clear icon + label pairing

### When NOT to use

- For actions that don't navigate — use buttons instead
- For deeply nested sub-navigation — consider a tree or accordion pattern

## API

### Properties

| Property   | Type      | Default | Description                      |
| ---------- | --------- | ------- | -------------------------------- |
| `value`    | `string`  | `''`    | Selection value                  |
| `icon`     | `string`  | `''`    | co-icon name for the prefix icon |
| `href`     | `string`  | —       | Link destination                 |
| `selected` | `boolean` | `false` | Whether this item is selected    |
| `disabled` | `boolean` | `false` | Prevents interaction             |

### Slots

| Name        | Description                                    |
| ----------- | ---------------------------------------------- |
| _(default)_ | Item label text                                |
| `prefix`    | Custom prefix content (overrides default icon) |

### CSS Parts

| Part     | Description               |
| -------- | ------------------------- |
| `base`   | The item wrapper          |
| `prefix` | The prefix icon container |
| `label`  | The label text container  |

## Accessibility

### ARIA notes

- When `href` is set, the item renders as an `<a>` element with native link semantics.
- Selected items expose `aria-current="page"` for assistive technology.
- Disabled items have `aria-disabled="true"` and are removed from keyboard navigation.

## Changelog

<ComponentChangelog component="co-nav-drawer-item" />
