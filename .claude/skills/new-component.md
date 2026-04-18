---
name: new-component
description: Scaffold documentation, workbench preview, and React/Vue/Angular framework wrappers for a new Cobalt component from its custom-elements.json manifest.
user_invocable: true
argument: '<component-name> — the short name without the co- prefix (e.g., input, dialog, tooltip)'
---

# New Component

Scaffold documentation, workbench preview, and framework wrappers for a new Cobalt component.

## Inputs

- `$ARGUMENTS` — the component short name (without `co-` prefix). Example: `input`, `dialog`, `tooltip`.

## Steps

### 1. Parse the component name

Extract the component name from `$ARGUMENTS`. Trim whitespace. The tag name is `co-{name}` and the PascalCase name is derived from the kebab-case name (e.g., `text-field` → `CoTextField`).

### 2. Read the component manifest

Read `packages/components/custom-elements.json`. Find the module whose `declarations` array contains a class declaration with `tagName` equal to `co-{name}`.

Extract from that class declaration:

- **Properties**: `members` where `kind === 'field'` and `privacy` is NOT `'private'`. Collect `name`, `type.text`, `default`, and `description`.
- **Events**: the `events` array. Collect `name`, `type.text` (if present), and `description`.
- **Slots**: the `slots` array. Collect `name` (empty string means default slot) and `description`.
- **CSS Parts**: the `cssParts` array. Collect `name` and `description`.

Also extract the class-level `summary` or `description` field for the intro paragraph.

### 3. Classify properties for the interactive demo

From the extracted properties, build:

- **`defaults`**: an object mapping property names to their default values for properties that have non-empty, non-undefined defaults.
- **`options`**: an object mapping property names to arrays of allowed values, for properties whose `type.text` is a union of string literals (e.g., `'primary' | 'secondary' | 'danger'`). Parse the type string by splitting on `|` and trimming quotes/whitespace. Only include properties with 2+ string literal options.
- **`booleans`**: an array of property names whose `type.text` is `'boolean'` (exclude `disabled` only if it's a universal inherited property with no special behavior).
- **`textInputs`**: an array of property names whose `type.text` is `'string'` and which are NOT already in `options`. Only include properties that make sense for interactive demo input (e.g., `name`, `label`, `placeholder`, `value`). Skip properties like `href`, `target`, `type` that are less useful for demos.

### 4. Generate the documentation page

Create `packages/docs/components/{name}.md` with the following sections, matching the exact structure and conventions of the existing `button.md` and `icon.md` pages:

#### Title + intro

```markdown
# {PascalName without Co prefix}

{Summary from manifest, or write a one-line description of what the component does.}
```

#### Interactive Demo

```markdown
## Interactive Demo

<ComponentDemo
tag="co-{name}"
{label attribute if component has a default slot, e.g., label="Demo content"}
:defaults="{JSON object}"
:options="{JSON object}"
:booleans="{JSON array}"
:textInputs="{JSON array}"
/>
```

Only include `:options`, `:booleans`, and `:textInputs` if they have entries.

#### Visual demo sections

For each property that has enum-like options (from the `options` map), create a demo section:

```markdown
## {Property name, title-cased and pluralized if appropriate}

<ClientOnly>
<div style="display: flex; gap: 12px; {align-items: center if sizing; flex-wrap: wrap otherwise}; margin: 16px 0 24px;">
  {One <co-{name}> element per option value, with that property set}
</div>
</ClientOnly>
```

If there are boolean properties like `disabled` or `loading`, create a "States" section showing each.

If there are slots (other than default), create a "Slots" section with examples.

#### Usage (CodeTabs)

Generate framework usage examples following these exact patterns:

```markdown
## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

\`\`\`html

<!-- Import once in your app -->
<script type="module">
  import '@cobalt/components/{name}';
</script>

<!-- Basic usage -->

<co-{name} {key-prop}="{value}">{slot content if applicable}</co-{name}>

<!-- Additional examples showing key properties -->

\`\`\`

</template>

<template #react>

\`\`\`tsx
import { {PascalName} } from '@cobalt/react';

function App() {
return (
<>
{/_ Basic _/}
<{PascalName} {key-prop}="{value}">{slot content}</{PascalName}>

      {/* Events */}
      <{PascalName} {onCoEventName}={() => console.log('event')}>{slot content}</{PascalName}>
    </>

);
}
\`\`\`

</template>

<template #vue>

\`\`\`vue

<script setup>
import { {PascalName} } from '@cobalt/vue';
</script>

<template>
  <!-- Basic -->
  <{PascalName} {key-prop}="{value}">{slot content}</{PascalName}>

  <!-- Events -->

<{PascalName} @co-event-name="handler">{slot content}</{PascalName}>
</template>
\`\`\`

</template>

<template #angular>

\`\`\`typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { {PascalName} } from '@cobalt/angular';

@Component({
selector: 'app-root',
standalone: true,
imports: [{PascalName}],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
templateUrl: './app.component.html',
})
export class AppComponent {}
\`\`\`

\`\`\`html

<!-- app.component.html -->

<!-- Basic -->

<co-{name} {key-prop}="{value}">{slot content}</co-{name}>

<!-- Events -->

<co-{name} (coEventName)="handler($event)">{slot content}</co-{name}>
\`\`\`

</template>

</CodeTabs>
```

**Event naming conventions across frameworks:**

- Web Component: `co-event-name` (addEventListener)
- React: `onCoEventName` (camelCase with `on` prefix)
- Vue: `@co-event-name` (kebab-case with `@`)
- Angular: `(coEventName)` (camelCase, no `on` prefix)

#### Best Practices

```markdown
## Best Practices

### When to use

- {3-5 contextual bullets based on the component's purpose}

### When NOT to use

- {2-4 contextual bullets about anti-patterns}

### Content guidelines

- {2-4 bullets about content/labeling best practices}
```

Write meaningful, component-specific guidance — not generic filler.

#### API

Generate tables directly from the extracted manifest data:

```markdown
## API

### Properties

| Property | Type          | Default     | Description   |
| -------- | ------------- | ----------- | ------------- |
| `{name}` | `{type.text}` | `{default}` | {description} |
```

Only include sections that have data (skip Events/Slots/CSS Parts if empty):

```markdown
### Events

| Event    | Detail           | Description   |
| -------- | ---------------- | ------------- |
| `{name}` | {type.text or —} | {description} |

### Slots

| Name        | Description   |
| ----------- | ------------- |
| _(default)_ | {description} |
| `{name}`    | {description} |

### CSS Parts

| Part     | Description   |
| -------- | ------------- |
| `{name}` | {description} |
```

For the default slot (empty string name), display as `_(default)_`.

#### Accessibility

```markdown
## Accessibility

<ClientOnly>
<A11yReport component="co-{name}" />
</ClientOnly>

### Keyboard interaction

| Key   | Action   |
| ----- | -------- |
| {key} | {action} |

### ARIA notes

- {Contextual ARIA guidance based on the component's semantics}
```

Write keyboard interactions and ARIA notes that are specific and accurate for the component type.

#### Changelog

```markdown
## Changelog

<ComponentChangelog component="co-{name}" />
```

### 5. Update sidebar navigation

Read `packages/docs/.vitepress/theme/navigation.ts`. Find the `Components` group's `items` array. Add a new entry:

```typescript
{ text: '{Display Name}', link: '/components/{name}' }
```

Insert it **alphabetically** among the existing component entries (e.g., "Input" goes between "Icon" and any later entries). The display name is the component name in title case (e.g., `text-field` → `Text Field`).

### 6. Create workbench preview

#### 6a. Create the preview file

Create `packages/workbench/previews/{name}.ts`:

```typescript
import '@cobalt/components/{name}';
// import additional dependencies as needed (e.g., '@cobalt/components/icon')

export const title = '<co-{name}>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">{Section title, e.g. "Variants"}</h2>
    <div class="wb-row" style="align-items: center; flex-wrap: wrap;">
      {One <co-{name}> per variant/option value}
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div class="wb-row" style="align-items: center;">
      {Show disabled, loading, and other boolean states}
    </div>
  </section>
`;
```

Include demo sections that exercise the key properties: enum-like options (variants, sizes), boolean states (disabled, loading), and slots.

#### 6b. Add a card to `packages/workbench/index.html`

Insert a new card **alphabetically** among the existing component cards:

```html
<a class="card" href="/preview.html?component={name}">
  <div class="card-name">{Display Name}</div>
  <div class="card-tag">&lt;co-{name}&gt;</div>
</a>
```

#### 6c. Add a Vite alias to `packages/workbench/vite.config.ts`

Add an entry in the `alias` array, **before** the catch-all `@cobalt/components` entry:

```typescript
{
  find: '@cobalt/components/{name}',
  replacement: resolve(componentsDir, 'src/components/{name}/co-{name}.ts'),
},
```

### 7. Create framework wrappers

Create wrappers for **all three frameworks** — React, Vue, and Angular. Every Cobalt component must have wrappers in all three. Use the component's extracted properties and events from step 2 to generate the wrapper APIs.

#### 7a. React wrapper

Create `packages/react/src/components/{name}.ts`:

```typescript
import '@cobalt/components/{name}';
import type { {PascalName} as {PascalName}Element } from '@cobalt/components/{name}';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const {PascalName} = createCobaltComponent<{PascalName}Element>({
  tagName: 'co-{name}',
  events: {
    // Map each custom event: onCoEventName: 'co-event-name'
    onCoChange: 'co-change',
  },
});
```

Create `packages/react/src/components/{name}.test.tsx`:

```tsx
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { {PascalName} } from './{name}.js';

afterEach(cleanup);

describe('React {PascalName} wrapper', () => {
  it('renders co-{name} element', () => {
    const { container } = render(<{PascalName}>{/* slot content */}</{PascalName}>);
    expect(container.querySelector('co-{name}')).toBeTruthy();
  });

  // Test key properties and attributes
});
```

Add to `packages/react/src/index.ts` (alphabetically):

```typescript
export { {PascalName} } from './components/{name}.js';
```

Add to `packages/react/package.json` exports (alphabetically):

```json
"./{name}": {
  "import": "./dist/components/{name}.js",
  "types": "./dist/components/{name}.d.ts"
}
```

#### 7b. Vue wrapper

Create `packages/vue/src/components/{name}.ts`:

```typescript
import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { /* property types */ } from '@cobalt/components/{name}';
import '@cobalt/components/{name}';

export type {PascalName}Props = {
  // Typed props from manifest
};

export const {PascalName} = defineComponent({
  name: '{PascalName}',
  props: {
    // Each public property with type and default
  },
  emits: ['co-change' /* all custom events */],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const handlers: Array<[string, (e: Event) => void]> = [
      ['co-change', (e: Event) => emit('co-change', e)],
      // ... all custom events
    ];

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) {
        el.addEventListener(event, handler);
      }
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) {
        el.removeEventListener(event, handler);
      }
    });

    return () =>
      h('co-{name}', {
        ref: elRef,
        // Map each prop: propName: props.propName
        // For booleans: disabled: props.disabled || undefined
      }, slots.default?.());
  },
});
```

Create `packages/vue/src/components/{name}.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { {PascalName} } from './{name}.js';

describe('Vue {PascalName} wrapper', () => {
  it('renders co-{name} element', () => {
    const wrapper = mount({PascalName}, { slots: { default: 'Content' } });
    expect(wrapper.find('co-{name}').exists()).toBe(true);
  });

  // Test key properties sync to element
});
```

Add to `packages/vue/src/index.ts` (alphabetically):

```typescript
export { {PascalName}, type {PascalName}Props } from './components/{name}.js';
```

Add to `packages/vue/package.json` exports (alphabetically):

```json
"./{name}": {
  "import": "./dist/components/{name}.js",
  "types": "./dist/components/{name}.d.ts"
}
```

#### 7c. Angular wrapper

Create `packages/angular/src/components/{name}.ts`:

```typescript
import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { /* property types */ } from '@cobalt/components/{name}';
import '@cobalt/components/{name}';

@Directive({
  selector: 'co-{name}',
  standalone: true,
})
export class {PascalName} implements OnInit {
  // Signal inputs for each public property
  readonly propName = input<PropType>(defaultValue);

  // Signal outputs for each custom event
  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.propName = this.propName();
      // ... sync all properties
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
    // ... all custom events
  }
}
```

Create `packages/angular/src/components/{name}.spec.ts`:

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { {PascalName} } from './{name}.js';

@Component({
  standalone: true,
  imports: [{PascalName}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-{name} [{propName}]="propName">{slot content}</co-{name}>`,
})
class TestHostComponent {
  propName = defaultValue;
  // ... test properties
}

describe('Angular {PascalName}', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-{name}');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs default properties on init', () => {
    expect(el.propName).toBe(defaultValue);
  });

  // Test property updates and event emission
});
```

Add to `packages/angular/src/index.ts` (alphabetically):

```typescript
export { {PascalName} } from './components/{name}.js';
```

Add to `packages/angular/package.json` exports (alphabetically):

```json
"./{name}": {
  "import": "./dist/components/{name}.js",
  "types": "./dist/components/{name}.d.ts"
}
```

### 8. Report what was created

After creating all files, tell the user:

- The path to the new documentation page
- The path to the workbench preview
- The paths to each framework wrapper (React, Vue, Angular) and their tests
- That the navigation, index exports, and package.json entries were updated
- Suggest they run `pnpm dev` to preview the docs page
- Suggest they run `pnpm test` to verify the framework wrappers
