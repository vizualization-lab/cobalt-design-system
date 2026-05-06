# App Shell

<ComponentStatus component="co-app-shell" />

The `co-app-shell` component provides top-level application chrome with six named regions: `banner`, `topnav`, `rail`, `drawer`, `body`, and `footer`. On desktop, shell chrome stays fixed while `body` owns content scrolling; mobile collapses `rail` and `drawer` into one shell-owned overlay.

## Interactive Demo

<AppShellDemo />

## Slot Model

- `banner` is the topmost full-width row.
- `topnav` is the shell navigation row directly below `banner`.
- `rail` is the compact left rail, typically for `co-nav-rail-bar`.
- `drawer` is the wider contextual navigation column, typically for `co-nav-drawer`.
- `body` is the only flexible content region in the public API.
- `footer` is a full-width row below everything else.

On desktop, `rail` and `drawer` render as persistent columns when present. On small screens, the shell-owned toggle appears at the start of `topnav` and opens a single left overlay that renders `rail` first and `drawer` second inside the same panel.

## Docs-Style Composition

This composition intentionally omits `drawer` and uses `footer` so you can see how the shell collapses missing columns and still supports fixed page chrome.

<AppShellComposition />

## Usage

<CodeTabs :tabs="['Web Component', 'React', 'Vue', 'Angular']">

<template #web-component>

```html
<script type="module">
  import '@cobalt/components/app-shell';
  import '@cobalt/components/banner';
  import '@cobalt/components/input-pill';
  import '@cobalt/components/nav-rail-bar';
  import '@cobalt/components/nav-rail-item';
  import '@cobalt/components/nav-drawer';
  import '@cobalt/components/nav-drawer-item';
  import '@cobalt/components/nav-header-bar';
</script>

<co-app-shell rail-width="115px" drawer-width="260px">
  <co-banner slot="banner" label="Workspace announcement">
    <span slot="title">Navigation update</span>
  </co-banner>

  <co-nav-header-bar slot="topnav" label="Workspace navigation">
    <div
      slot="logo"
      style="display: inline-flex; align-items: center; gap: 12px; font-weight: 600;"
    >
      <div
        aria-hidden="true"
        style="width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%);"
      ></div>
      <span>Operations workspace</span>
    </div>
    <co-input-pill variant="search" placeholder="Search services, incidents, teams"></co-input-pill>
    <div
      slot="avatar"
      aria-label="Jordan Lee"
      style="display: grid; place-items: center; width: 36px; height: 36px; border-radius: 999px; background: var(--co-color-state-primary-subtle); color: var(--co-color-state-primary-base); font-size: 13px; font-weight: 600;"
    >
      JL
    </div>
  </co-nav-header-bar>

  <co-nav-rail-bar slot="rail" label="Primary sections">
    <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
    <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
  </co-nav-rail-bar>

  <co-nav-drawer slot="drawer" label="Section navigation">
    <co-nav-drawer-item value="overview" icon="dashboard" selected>Overview</co-nav-drawer-item>
    <co-nav-drawer-item value="activity" icon="monitoring">Activity</co-nav-drawer-item>
  </co-nav-drawer>

  <main slot="body">
    <article>Article content</article>
    <aside>Optional right-side reference content</aside>
  </main>

  <footer slot="footer">Footer</footer>
</co-app-shell>

<script>
  const shell = document.querySelector('co-app-shell');
  shell.addEventListener('co-drawer-toggle', (event) => {
    console.log(event.detail.open);
  });
</script>
```

</template>

<template #react>

```tsx
import {
  CoAppShell,
  CoBanner,
  CoInputPill,
  CoNavDrawer,
  CoNavDrawerItem,
  CoNavHeaderBar,
  CoNavRailBar,
  CoNavRailItem,
} from '@cobalt/react';

function App() {
  return (
    <CoAppShell
      railWidth="115px"
      drawerWidth="260px"
      onCoDrawerToggle={(event) => console.log(event.detail.open)}
    >
      <CoBanner slot="banner" label="Workspace announcement">
        <span slot="title">Navigation update</span>
      </CoBanner>

      <CoNavHeaderBar slot="topnav" label="Workspace navigation">
        <div
          slot="logo"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontWeight: 600 }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%)',
            }}
          />
          <span>Operations workspace</span>
        </div>
        <CoInputPill variant="search" placeholder="Search services, incidents, teams"></CoInputPill>
        <div
          slot="avatar"
          aria-label="Jordan Lee"
          style={{
            display: 'grid',
            placeItems: 'center',
            width: 36,
            height: 36,
            borderRadius: 999,
            background: 'var(--co-color-state-primary-subtle)',
            color: 'var(--co-color-state-primary-base)',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          JL
        </div>
      </CoNavHeaderBar>

      <CoNavRailBar slot="rail" label="Primary sections">
        <CoNavRailItem value="home" icon="home" selected>
          Home
        </CoNavRailItem>
        <CoNavRailItem value="reports" icon="sync">
          Reports
        </CoNavRailItem>
      </CoNavRailBar>

      <CoNavDrawer slot="drawer" label="Section navigation">
        <CoNavDrawerItem value="overview" icon="dashboard" selected>
          Overview
        </CoNavDrawerItem>
        <CoNavDrawerItem value="activity" icon="monitoring">
          Activity
        </CoNavDrawerItem>
      </CoNavDrawer>

      <main slot="body">Article and TOC composition goes here.</main>
    </CoAppShell>
  );
}
```

</template>

<template #vue>

```vue
<script setup>
import {
  CoAppShell,
  CoBanner,
  CoInputPill,
  CoNavDrawer,
  CoNavDrawerItem,
  CoNavHeaderBar,
  CoNavRailBar,
  CoNavRailItem,
} from '@cobalt/vue';

function onToggle(event: CustomEvent) {
  console.log(event.detail.open);
}
</script>

<template>
  <CoAppShell railWidth="115px" drawerWidth="260px" @co-drawer-toggle="onToggle">
    <CoBanner slot="banner" label="Workspace announcement">
      <span slot="title">Navigation update</span>
    </CoBanner>

    <CoNavHeaderBar slot="topnav" label="Workspace navigation">
      <div
        slot="logo"
        style="display: inline-flex; align-items: center; gap: 12px; font-weight: 600;"
      >
        <div
          aria-hidden="true"
          style="width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%);"
        ></div>
        <span>Operations workspace</span>
      </div>
      <CoInputPill variant="search" placeholder="Search services, incidents, teams"></CoInputPill>
      <div
        slot="avatar"
        aria-label="Jordan Lee"
        style="display: grid; place-items: center; width: 36px; height: 36px; border-radius: 999px; background: var(--co-color-state-primary-subtle); color: var(--co-color-state-primary-base); font-size: 13px; font-weight: 600;"
      >
        JL
      </div>
    </CoNavHeaderBar>

    <CoNavRailBar slot="rail" label="Primary sections">
      <CoNavRailItem value="home" icon="home" selected>Home</CoNavRailItem>
      <CoNavRailItem value="reports" icon="sync">Reports</CoNavRailItem>
    </CoNavRailBar>

    <CoNavDrawer slot="drawer" label="Section navigation">
      <CoNavDrawerItem value="overview" icon="dashboard" selected>Overview</CoNavDrawerItem>
      <CoNavDrawerItem value="activity" icon="monitoring">Activity</CoNavDrawerItem>
    </CoNavDrawer>

    <main slot="body">Article and TOC composition goes here.</main>
  </CoAppShell>
</template>
```

</template>

<template #angular>

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CoAppShell,
  CoBanner,
  CoInputPill,
  CoNavDrawer,
  CoNavDrawerItem,
  CoNavHeaderBar,
  CoNavRailBar,
  CoNavRailItem,
} from '@cobalt/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CoAppShell,
    CoBanner,
    CoInputPill,
    CoNavHeaderBar,
    CoNavRailBar,
    CoNavRailItem,
    CoNavDrawer,
    CoNavDrawerItem,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onDrawerToggle(event: CustomEvent<{ open: boolean }>) {
    console.log(event.detail.open);
  }
}
```

```html
<!-- app.component.html -->
<co-app-shell railWidth="115px" drawerWidth="260px" (coDrawerToggle)="onDrawerToggle($event)">
  <co-banner slot="banner" label="Workspace announcement">
    <span slot="title">Navigation update</span>
  </co-banner>

  <co-nav-header-bar slot="topnav" label="Workspace navigation">
    <div
      slot="logo"
      style="display: inline-flex; align-items: center; gap: 12px; font-weight: 600;"
    >
      <div
        aria-hidden="true"
        style="width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%);"
      ></div>
      <span>Operations workspace</span>
    </div>
    <co-input-pill variant="search" placeholder="Search services, incidents, teams"></co-input-pill>
    <div
      slot="avatar"
      aria-label="Jordan Lee"
      style="display: grid; place-items: center; width: 36px; height: 36px; border-radius: 999px; background: var(--co-color-state-primary-subtle); color: var(--co-color-state-primary-base); font-size: 13px; font-weight: 600;"
    >
      JL
    </div>
  </co-nav-header-bar>

  <co-nav-rail-bar slot="rail" label="Primary sections">
    <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
    <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
  </co-nav-rail-bar>

  <co-nav-drawer slot="drawer" label="Section navigation">
    <co-nav-drawer-item value="overview" icon="dashboard" selected>Overview</co-nav-drawer-item>
    <co-nav-drawer-item value="activity" icon="monitoring">Activity</co-nav-drawer-item>
  </co-nav-drawer>

  <main slot="body">Article and TOC composition goes here.</main>
</co-app-shell>
```

</template>

</CodeTabs>

## Best Practices

### When to use

- Use `co-app-shell` for app-level chrome that stays consistent across views.
- Put global destinations in `rail`, section navigation in `drawer`, and page composition in `body`.
- Keep `body` responsible for any local article + TOC or article + aside layout.

### When NOT to use

- Don’t add page-internal right rails or card layouts to the shell API.
- Don’t use `co-app-shell` for simple content pages that only need one reading column.
- Don’t duplicate the shell mobile toggle with another menu trigger in `topnav`.

### Content guidelines

- Keep `rail` concise and stable across the broader product area.
- Treat `drawer` as contextual navigation that can change by section.
- Keep `banner` and `footer` shell-level; page-level alerts and summaries belong in `body`.

## API

### Properties

| Property      | Type      | Default                                  | Description                     |
| ------------- | --------- | ---------------------------------------- | ------------------------------- |
| `drawerOpen`  | `boolean` | `false`                                  | Controlled mobile overlay state |
| `railWidth`   | `string`  | `var(--co-component-nav-rail-bar-width)` | Desktop rail column width       |
| `drawerWidth` | `string`  | `var(--co-component-nav-drawer-width)`   | Desktop drawer column width     |

### Methods

| Method           | Description                |
| ---------------- | -------------------------- |
| `openDrawer()`   | Opens the mobile overlay   |
| `closeDrawer()`  | Closes the mobile overlay  |
| `toggleDrawer()` | Toggles the mobile overlay |

### Events

| Event              | Detail              | Description                               |
| ------------------ | ------------------- | ----------------------------------------- |
| `co-drawer-open`   | `{ open: true }`    | Fired when the mobile overlay opens       |
| `co-drawer-close`  | `{ open: false }`   | Fired when the mobile overlay closes      |
| `co-drawer-toggle` | `{ open: boolean }` | Fired whenever the mobile overlay toggles |

### Slots

| Name     | Description                                |
| -------- | ------------------------------------------ |
| `banner` | Full-width content above `topnav`          |
| `topnav` | Full-width navigation row below `banner`   |
| `rail`   | Compact left rail region                   |
| `drawer` | Wider contextual left navigation region    |
| `body`   | Flexible main region for page composition  |
| `footer` | Full-width content below all shell content |

### CSS Parts

| Part       | Description                       |
| ---------- | --------------------------------- |
| `base`     | The overall shell wrapper         |
| `banner`   | The banner row                    |
| `topnav`   | The top navigation row            |
| `toggle`   | The built-in mobile drawer toggle |
| `content`  | The desktop/mobile content row    |
| `rail`     | The rail region                   |
| `drawer`   | The drawer region                 |
| `body`     | The body region                   |
| `footer`   | The footer row                    |
| `backdrop` | The mobile overlay backdrop       |

### CSS Custom Properties

| Custom Property                     | Default | Description                  |
| ----------------------------------- | ------- | ---------------------------- |
| `--co-component-nav-rail-bar-width` | `116px` | Default desktop rail width   |
| `--co-component-nav-drawer-width`   | `260px` | Default desktop drawer width |

## Accessibility

- The shell-owned mobile toggle manages `aria-controls` and `aria-expanded`.
- The mobile overlay closes on `Escape` and backdrop press.
- Keep `rail` and `drawer` content semantic. The shell handles structure and responsive behavior, not the information architecture inside your navigation components.

## Changelog

<ComponentChangelog component="co-app-shell" />
