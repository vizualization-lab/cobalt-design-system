# Checkbox Group

<ComponentStatus component="co-checkbox-group" />

The `co-checkbox-group` and `co-checkbox` components provide a themed, accessible checkbox group built on Lion Web Components. Use checkbox groups for multi-choice selection where users can select zero or more options.

## Interactive Demo

<ComponentDemo
  tag="co-checkbox-group"
  :defaults="{ label: 'Ingredients' }"
  :booleans="['disabled', 'required']"
  :textInputs="['label']"
  :slotHtml="'<co-checkbox label=&quot;Cheese&quot; value=&quot;cheese&quot;></co-checkbox><co-checkbox label=&quot;Pepperoni&quot; value=&quot;pepperoni&quot;></co-checkbox><co-checkbox label=&quot;Mushrooms&quot; value=&quot;mushrooms&quot;></co-checkbox>'"
/>

## Pre-selected

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-checkbox-group label="Notifications" name="preselected">
    <co-checkbox label="Email" value="email" checked></co-checkbox>
    <co-checkbox label="SMS" value="sms"></co-checkbox>
    <co-checkbox label="Push" value="push" checked></co-checkbox>
  </co-checkbox-group>
</div>
</ClientOnly>

## States

<ClientOnly>
<div style="display: grid; gap: 24px; max-width: 420px; margin: 16px 0 24px;">
  <co-checkbox-group label="Disabled group" name="state-disabled" disabled>
    <co-checkbox label="Option A" value="a" checked></co-checkbox>
    <co-checkbox label="Option B" value="b"></co-checkbox>
  </co-checkbox-group>
  <co-checkbox-group label="Individual disabled" name="state-mixed">
    <co-checkbox label="Available" value="a"></co-checkbox>
    <co-checkbox label="Unavailable" value="b" disabled></co-checkbox>
    <co-checkbox label="Available" value="c"></co-checkbox>
  </co-checkbox-group>
</div>
</ClientOnly>

## Indeterminate (Select All)

Use `co-checkbox-indeterminate` as a parent checkbox that manages nested child checkboxes. It automatically tracks the state of its children:

- **All checked** → parent shows checked
- **None checked** → parent shows unchecked
- **Some checked** → parent shows an indeterminate (dash) icon

Clicking the parent toggles all children on or off.

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-checkbox-group label="Permissions" name="indeterminate-demo">
    <co-checkbox-indeterminate label="Select all">
      <co-checkbox label="Read" value="read"></co-checkbox>
      <co-checkbox label="Write" value="write"></co-checkbox>
      <co-checkbox label="Delete" value="delete"></co-checkbox>
    </co-checkbox-indeterminate>
  </co-checkbox-group>
</div>
</ClientOnly>

### Mixed State

Add the `mixed-state` attribute to enable three-state cycling: **checked → unchecked → indeterminate** (restores previous child states).

<ClientOnly>
<div style="max-width: 420px; margin: 16px 0 24px;">
  <co-checkbox-group label="Features" name="mixed-demo">
    <co-checkbox-indeterminate label="All features" mixed-state>
      <co-checkbox label="Dashboard" value="dashboard" checked></co-checkbox>
      <co-checkbox label="Analytics" value="analytics"></co-checkbox>
      <co-checkbox label="Reports" value="reports" checked></co-checkbox>
    </co-checkbox-indeterminate>
  </co-checkbox-group>
</div>
</ClientOnly>

```html
<!-- Basic select all -->
<co-checkbox-group label="Permissions" name="permissions">
  <co-checkbox-indeterminate label="Select all">
    <co-checkbox label="Read" value="read"></co-checkbox>
    <co-checkbox label="Write" value="write"></co-checkbox>
    <co-checkbox label="Delete" value="delete"></co-checkbox>
  </co-checkbox-indeterminate>
</co-checkbox-group>

<!-- With mixed-state (three-way toggle) -->
<co-checkbox-group label="Features" name="features">
  <co-checkbox-indeterminate label="All features" mixed-state>
    <co-checkbox label="Dashboard" value="dashboard" checked></co-checkbox>
    <co-checkbox label="Analytics" value="analytics"></co-checkbox>
  </co-checkbox-indeterminate>
</co-checkbox-group>
```

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/checkbox-group';
  import '@cobalt/components/checkbox';
  import '@cobalt/components/checkbox-indeterminate';
</script>

<!-- Basic checkbox group -->
<co-checkbox-group label="Toppings" name="toppings">
  <co-checkbox label="Cheese" value="cheese"></co-checkbox>
  <co-checkbox label="Pepperoni" value="pepperoni"></co-checkbox>
  <co-checkbox label="Mushrooms" value="mushrooms"></co-checkbox>
</co-checkbox-group>

<!-- With select all -->
<co-checkbox-group label="Permissions" name="permissions">
  <co-checkbox-indeterminate label="Select all">
    <co-checkbox label="Read" value="read"></co-checkbox>
    <co-checkbox label="Write" value="write"></co-checkbox>
    <co-checkbox label="Delete" value="delete"></co-checkbox>
  </co-checkbox-indeterminate>
</co-checkbox-group>

<script>
  document.querySelector('co-checkbox-group').addEventListener('co-change', (e) => {
    console.log('Selected:', e.detail.value);
  });
</script>
```

</template>

<template #react>

```tsx
import { CoCheckboxGroup, CoCheckbox, CoCheckboxIndeterminate } from '@cobalt/react';

function App() {
  return (
    <>
      {/* Basic */}
      <CoCheckboxGroup label="Toppings" name="toppings" onCoChange={(e) => console.log(e.detail)}>
        <CoCheckbox label="Cheese" value="cheese" />
        <CoCheckbox label="Pepperoni" value="pepperoni" />
      </CoCheckboxGroup>

      {/* With select all */}
      <CoCheckboxGroup label="Permissions" name="permissions">
        <CoCheckboxIndeterminate label="Select all">
          <CoCheckbox label="Read" value="read" />
          <CoCheckbox label="Write" value="write" />
        </CoCheckboxIndeterminate>
      </CoCheckboxGroup>
    </>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import { CoCheckboxGroup, CoCheckbox, CoCheckboxIndeterminate } from '@cobalt/vue';

function onChange(e) {
  console.log('Selected:', e.detail.value);
}
</script>

<template>
  <!-- Basic -->
  <CoCheckboxGroup label="Toppings" name="toppings" @co-change="onChange">
    <CoCheckbox label="Cheese" value="cheese" />
    <CoCheckbox label="Pepperoni" value="pepperoni" />
  </CoCheckboxGroup>

  <!-- With select all -->
  <CoCheckboxGroup label="Permissions" name="permissions">
    <CoCheckboxIndeterminate label="Select all">
      <CoCheckbox label="Read" value="read" />
      <CoCheckbox label="Write" value="write" />
    </CoCheckboxIndeterminate>
  </CoCheckboxGroup>
</template>
```

</template>

<template #angular>

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCheckboxGroup, CoCheckbox, CoCheckboxIndeterminate } from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoCheckboxGroup, CoCheckbox, CoCheckboxIndeterminate],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onChange(event: CustomEvent) {
    console.log('Selected:', event.detail.value);
  }
}
```

```html
<!-- Basic -->
<co-checkbox-group label="Toppings" name="toppings" (coChange)="onChange($event)">
  <co-checkbox label="Cheese" value="cheese"></co-checkbox>
  <co-checkbox label="Pepperoni" value="pepperoni"></co-checkbox>
</co-checkbox-group>

<!-- With select all -->
<co-checkbox-group label="Permissions" name="permissions">
  <co-checkbox-indeterminate label="Select all">
    <co-checkbox label="Read" value="read"></co-checkbox>
    <co-checkbox label="Write" value="write"></co-checkbox>
  </co-checkbox-indeterminate>
</co-checkbox-group>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- **Multiple selection** — users can select zero or more options
- **Independent choices** — each option is not mutually exclusive
- **Terms and conditions** — require agreement to multiple policies
- **Feature toggles** — enable/disable multiple settings

### When NOT to use

- **Single selection** — use [Radio Group](/components/radio-group) instead
- **Many options (10+)** — use [List Box](/components/listbox) with `multiple-choice`
- **On/off toggle** — for a single binary choice, use a standalone checkbox or switch

### Content guidelines

- Keep labels concise and parallel in structure
- Start each label with a capital letter
- Don't use punctuation at the end of labels
- Order options logically (most common first, alphabetically, or by category)

## API

### Properties

#### co-checkbox-group Properties

| Property   | Type      | Default | Description                   |
| ---------- | --------- | ------- | ----------------------------- |
| `name`     | `string`  | `''`    | Form field name               |
| `disabled` | `boolean` | `false` | Disables all child checkboxes |
| `required` | `boolean` | `false` | Adds required validation      |

#### co-checkbox Properties

| Property   | Type      | Default | Description                                |
| ---------- | --------- | ------- | ------------------------------------------ |
| `value`    | `string`  | `''`    | Value included in group value when checked |
| `checked`  | `boolean` | `false` | Whether this checkbox is selected          |
| `disabled` | `boolean` | `false` | Disables this individual checkbox          |

#### co-checkbox-indeterminate Properties

| Property        | Type      | Default | Description                                                       |
| --------------- | --------- | ------- | ----------------------------------------------------------------- |
| `value`         | `string`  | `''`    | Value alias for choiceValue                                       |
| `checked`       | `boolean` | `false` | Fully checked state (all children checked)                        |
| `indeterminate` | `boolean` | `false` | Partial selection state (some children checked)                   |
| `mixed-state`   | `boolean` | `false` | Enables three-state cycling (checked → unchecked → indeterminate) |
| `disabled`      | `boolean` | `false` | Disables this checkbox and all nested children                    |

### Events

| Event       | Detail                  | Description                      |
| ----------- | ----------------------- | -------------------------------- |
| `co-change` | `{ value, modelValue }` | Fired when the selection changes |

### Slots

#### co-checkbox-group Slots

| Name        | Description                 |
| ----------- | --------------------------- |
| _(default)_ | co-checkbox children        |
| `label`     | Label content               |
| `help-text` | Help text below the label   |
| `feedback`  | Validation feedback content |

#### co-checkbox Slots

| Name    | Description            |
| ------- | ---------------------- |
| `label` | Checkbox label content |

#### co-checkbox-indeterminate Slots

| Name        | Description                  |
| ----------- | ---------------------------- |
| _(default)_ | Nested co-checkbox children  |
| `label`     | Indeterminate checkbox label |

### CSS Parts

#### co-checkbox-indeterminate CSS Parts

| Part       | Description                     |
| ---------- | ------------------------------- |
| `base`     | The checkbox wrapper            |
| `icon`     | The co-icon indicator           |
| `label`    | The label wrapper               |
| `children` | The nested checkboxes container |

#### co-checkbox-group CSS Parts

| Part        | Description                     |
| ----------- | ------------------------------- |
| `label`     | The label wrapper               |
| `help-text` | The help text wrapper           |
| `group`     | The checkbox options container  |
| `feedback`  | The validation feedback wrapper |

#### co-checkbox CSS Parts

| Part    | Description           |
| ------- | --------------------- |
| `base`  | The checkbox wrapper  |
| `icon`  | The co-icon indicator |
| `label` | The label wrapper     |

## Accessibility

<ClientOnly>
<A11yReport component="co-checkbox-group" />
</ClientOnly>

### Keyboard interaction

| Key     | Action                                      |
| ------- | ------------------------------------------- |
| `Tab`   | Moves focus between checkboxes in the group |
| `Space` | Toggles the focused checkbox checked state  |

### ARIA notes

- `co-checkbox-group` uses `role="group"` on the checkbox container for semantic grouping.
- Each `co-checkbox` contains a native `<input type="checkbox">` that is visually hidden but remains in the DOM for form participation. The native input provides `role="checkbox"` and `aria-checked` automatically.
- When `disabled` is set on the group, all child checkboxes inherit the disabled state and `aria-disabled` is propagated.
- The group label is associated via `aria-labelledby` through Lion's form field infrastructure.
- Unlike radio groups, each checkbox is independently tabbable.

### WCAG criteria

| Criterion                    | Level | Status | Notes                                                              |
| ---------------------------- | ----- | ------ | ------------------------------------------------------------------ |
| 1.3.1 Info and Relationships | A     | Passes | `role="group"` + native `<input type="checkbox">` convey structure |
| 1.4.1 Use of Color           | A     | Passes | Icon shape (checked vs outline) indicates state, not color alone   |
| 1.4.3 Contrast (Minimum)     | AA    | Passes | Text and icons meet 4.5:1 ratio against surface                    |
| 2.1.1 Keyboard               | A     | Passes | Tab between checkboxes, Space to toggle                            |
| 2.4.7 Focus Visible          | AA    | Passes | Focus ring shown on the focused checkbox icon                      |
| 3.2.2 On Input               | A     | Passes | Toggling a checkbox does not trigger unexpected context changes    |
| 4.1.2 Name, Role, Value      | A     | Passes | Native checkbox input provides name, role, and checked state       |

## Changelog

<ComponentChangelog component="co-checkbox-group" />
