<template>
  <ClientOnly>
    <div class="app-shell-composition">
      <div class="app-shell-composition__frame">
        <co-app-shell class="app-shell-composition__shell">
          <co-banner slot="banner" class="app-shell-composition__banner" label="Docs notice">
            <span slot="title">Docs navigation model</span>
          </co-banner>

          <co-nav-header-bar
            slot="topnav"
            class="app-shell-composition__header"
            label="Cobalt Docs header"
          >
            <div slot="logo" class="app-shell-composition__brand">
              <div class="app-shell-composition__logo-mark" aria-hidden="true"></div>
              <span>Cobalt Docs</span>
            </div>
            <co-input-pill
              class="app-shell-composition__search"
              variant="search"
              placeholder="Search components, guidance, changelogs"
            ></co-input-pill>
            <div slot="avatar" class="app-shell-composition__avatar" aria-label="Jordan Lee">
              JL
            </div>
          </co-nav-header-bar>

          <co-nav-rail-bar slot="rail" label="Primary sections">
            <co-nav-rail-item value="foundations" icon="stacks" selected
              >Foundations</co-nav-rail-item
            >
            <co-nav-rail-item value="patterns" icon="grid-view">Patterns</co-nav-rail-item>
          </co-nav-rail-bar>

          <div slot="body" class="app-shell-composition__body">
            <section class="app-shell-composition__panel">
              <p class="app-shell-composition__eyebrow">Component</p>
              <h2 class="app-shell-composition__title">App Shell</h2>
              <p class="app-shell-composition__copy">
                Use the shell for global chrome only. Compose article structure, action bars, cards,
                and any right-side reference content inside the `body` slot.
              </p>
              <div class="app-shell-composition__stack">
                <div class="app-shell-composition__card">Introduction</div>
                <div class="app-shell-composition__card">API summary</div>
                <div class="app-shell-composition__card">Examples</div>
              </div>
            </section>

            <aside class="app-shell-composition__panel app-shell-composition__panel--secondary">
              Optional TOC or reference panel composed inside `body`
            </aside>
          </div>

          <div slot="footer" class="app-shell-composition__footer">
            Footer content can sit outside the scrolling body region.
          </div>
        </co-app-shell>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.app-shell-composition {
  display: grid;
  gap: 24px;
  margin: 16px 0 24px;
}

.app-shell-composition__frame {
  position: relative;
  inline-size: 100%;
  max-inline-size: 960px;
  block-size: 520px;
  overflow: hidden;
  border: 1px solid var(--co-color-border-default);
  border-radius: 16px;
  background: var(--co-color-surface-page);
  box-shadow: var(--co-elevation-shadow-sm);
  transform: translateZ(0);
}

.app-shell-composition__shell {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  min-block-size: 100%;
}

.app-shell-composition__banner {
  --co-component-banner-background: var(--co-color-primary-subtle);
  --co-component-banner-foreground: var(--co-color-primary-base);
  --co-component-banner-padding: 12px 16px;
}

.app-shell-composition__header::part(base) {
  min-block-size: 0;
  padding: 0;
  background: transparent;
  border-block-end: 0;
}

.app-shell-composition__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-inline-size: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--co-color-text-default);
  white-space: nowrap;
}

.app-shell-composition__logo-mark {
  inline-size: 28px;
  block-size: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%);
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.24);
}

.app-shell-composition__search {
  flex: 1 1 320px;
  max-inline-size: 320px;
}

.app-shell-composition__avatar {
  display: grid;
  place-items: center;
  inline-size: 36px;
  block-size: 36px;
  border-radius: 999px;
  background: var(--co-color-primary-subtle);
  color: var(--co-color-primary-base);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.app-shell-composition__body {
  display: grid;
  gap: 24px;
}

.app-shell-composition__panel {
  padding: 24px;
  background: var(--co-color-surface-default);
  border: 1px solid var(--co-color-border-default);
  border-radius: 16px;
}

.app-shell-composition__panel--secondary {
  color: var(--co-color-text-secondary);
}

.app-shell-composition__eyebrow {
  margin: 0 0 8px;
  color: var(--co-color-text-secondary);
}

.app-shell-composition__title {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.app-shell-composition__copy {
  margin: 0 0 16px;
}

.app-shell-composition__stack {
  display: grid;
  gap: 12px;
}

.app-shell-composition__card {
  padding: 16px;
  background: var(--co-color-surface-page);
  border-radius: 12px;
}

.app-shell-composition__footer {
  color: var(--co-color-text-secondary);
}

@media (max-width: 640px) {
  .app-shell-composition__frame {
    block-size: 480px;
  }
}
</style>

<style>
.app-shell-composition__shell::part(base) {
  min-block-size: 100%;
}
</style>
