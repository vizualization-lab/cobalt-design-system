<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';

type ViewportMode = 'desktop' | 'mobile';

type AppShellElement = HTMLElement & {
  drawerOpen: boolean;
  requestUpdate?: () => void;
  _desktop?: boolean;
};

const railWidth = ref('115px');
const drawerWidth = ref('260px');
const drawerOpen = ref(false);
const viewport = ref<ViewportMode>('desktop');
const shellEl = ref<AppShellElement | null>(null);

async function syncShellViewport() {
  await nextTick();
  const shell = shellEl.value;
  if (!shell) return;

  shell._desktop = viewport.value === 'desktop';
  shell.drawerOpen = viewport.value === 'mobile' ? drawerOpen.value : false;
  shell.requestUpdate?.();
}

onMounted(async () => {
  await syncShellViewport();
});

watch(viewport, async (mode) => {
  if (mode === 'desktop') {
    drawerOpen.value = false;
  }

  await syncShellViewport();
});

watch(drawerOpen, async () => {
  await syncShellViewport();
});

const viewportLabel = computed(() =>
  viewport.value === 'desktop' ? 'Desktop widths are visible here.' : 'drawer-open applies here.',
);
</script>

<template>
  <div class="demo-block">
    <div class="demo-controls">
      <div class="demo-field">
        <label class="demo-label">Viewport</label>
        <div class="demo-segmented" role="radiogroup" aria-label="Viewport">
          <button
            type="button"
            class="demo-segmented-btn"
            :class="{ 'is-active': viewport === 'desktop' }"
            :aria-pressed="String(viewport === 'desktop')"
            @click="viewport = 'desktop'"
          >
            Desktop
          </button>
          <button
            type="button"
            class="demo-segmented-btn"
            :class="{ 'is-active': viewport === 'mobile' }"
            :aria-pressed="String(viewport === 'mobile')"
            @click="viewport = 'mobile'"
          >
            Mobile
          </button>
        </div>
      </div>

      <div class="demo-field">
        <label class="demo-label" for="app-shell-rail-width">rail-width</label>
        <input
          id="app-shell-rail-width"
          v-model="railWidth"
          type="text"
          class="demo-text-input"
          placeholder="115px"
        />
      </div>

      <div class="demo-field">
        <label class="demo-label" for="app-shell-drawer-width">drawer-width</label>
        <input
          id="app-shell-drawer-width"
          v-model="drawerWidth"
          type="text"
          class="demo-text-input"
          placeholder="260px"
        />
      </div>

      <div class="demo-field">
        <label class="demo-toggle" :class="{ 'is-disabled': viewport === 'desktop' }">
          <input v-model="drawerOpen" type="checkbox" :disabled="viewport === 'desktop'" />
          <span class="demo-toggle-track">
            <span class="demo-toggle-thumb"></span>
          </span>
          <span class="demo-toggle-label">drawer-open</span>
        </label>
      </div>

      <div class="demo-field demo-field--meta">
        <span class="demo-hint">{{ viewportLabel }}</span>
      </div>
    </div>

    <div class="demo-preview">
      <ClientOnly>
        <div class="app-shell-demo__viewport" :class="`app-shell-demo__viewport--${viewport}`">
          <div class="app-shell-demo__frame">
            <co-app-shell
              ref="shellEl"
              class="app-shell-demo__shell"
              :rail-width="railWidth"
              :drawer-width="drawerWidth"
            >
              <co-banner slot="banner" class="app-shell-demo__banner" label="Status banner">
                <span slot="title">Status banner</span>
              </co-banner>

              <co-nav-header-bar
                slot="topnav"
                class="app-shell-demo__header"
                label="Docs workspace header"
              >
                <div slot="logo" class="app-shell-demo__brand">
                  <div class="app-shell-demo__logo-mark" aria-hidden="true"></div>
                  <span>Docs workspace</span>
                </div>
                <co-input-pill
                  class="app-shell-demo__search"
                  variant="search"
                  placeholder="Search docs, patterns, tokens"
                ></co-input-pill>
                <div slot="avatar" class="app-shell-demo__avatar" aria-label="Avery Lane">AL</div>
              </co-nav-header-bar>

              <co-nav-rail-bar slot="rail" label="Primary sections">
                <co-nav-rail-item value="foundations" icon="stacks" selected
                  >Foundations</co-nav-rail-item
                >
                <co-nav-rail-item value="patterns" icon="grid-view">Patterns</co-nav-rail-item>
              </co-nav-rail-bar>

              <co-nav-drawer slot="drawer" label="Section navigation">
                <co-nav-drawer-item value="overview" icon="dashboard" selected
                  >Overview</co-nav-drawer-item
                >
                <co-nav-drawer-item value="tokens" icon="palette">Tokens</co-nav-drawer-item>
                <co-nav-drawer-item value="accessibility" icon="universal-access"
                  >Accessibility</co-nav-drawer-item
                >
              </co-nav-drawer>

              <div slot="body" class="app-shell-demo__body">
                <co-card>
                  <p class="app-shell-demo__eyebrow">Pattern guidance</p>
                  <h2 class="app-shell-demo__title">Compose article and TOC inside body</h2>
                  <p class="app-shell-demo__copy">
                    Keep shell API focused on global chrome. Put article layout, local grids, and
                    right-side reference content inside the body region.
                  </p>
                  <div class="app-shell-demo__stack">
                    <co-card
                      style="
                        --co-component-card-background: var(--co-color-surface-static-page);
                        --co-component-card-shadow: none;
                      "
                      >Introduction</co-card
                    >
                    <co-card
                      style="
                        --co-component-card-background: var(--co-color-surface-static-page);
                        --co-component-card-shadow: none;
                      "
                      >API summary</co-card
                    >
                    <co-card
                      style="
                        --co-component-card-background: var(--co-color-surface-static-page);
                        --co-component-card-shadow: none;
                      "
                      >Examples</co-card
                    >
                  </div>
                </co-card>

                <co-card style="color: var(--co-color-text-secondary)">
                  Optional TOC or reference panel composed inside body
                </co-card>
              </div>

              <div slot="footer" style="padding: 12px 0">Footer content</div>
            </co-app-shell>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.demo-block {
  border: 1px solid var(--co-border);
  border-radius: 12px;
  margin: 16px 0 24px;
  overflow: hidden;
  background: var(--co-color-surface-static-raised);
}

.demo-controls {
  padding: 14px 20px;
  background: var(--co-color-surface-static-raised);
  border-bottom: 1px solid var(--co-border);
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.demo-field {
  display: flex;
  align-items: center;
  gap: 8px;
}

.demo-field--meta {
  flex: 1 1 220px;
  min-inline-size: 0;
}

.demo-label,
.demo-toggle-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--co-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-hint {
  font-size: 0.82rem;
  color: var(--co-color-text-secondary);
}

.demo-text-input {
  padding: 5px 10px;
  border: 1px solid var(--co-border-strong);
  border-radius: 8px;
  background: var(--co-deep);
  color: var(--co-text-primary);
  font-family: var(--co-font-mono);
  font-size: 0.78rem;
  width: 120px;
  transition: border-color 0.2s ease;
}

.demo-text-input:hover {
  border-color: var(--co-blue-500);
}

.demo-text-input:focus {
  outline: none;
  border-color: var(--co-blue-500);
  box-shadow: 0 0 0 2px var(--co-blue-alpha-15);
}

.demo-segmented {
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--co-color-border-strong);
  border-radius: 999px;
  background: var(--co-color-surface-static-default);
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.35);
}

.demo-segmented-btn {
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--co-color-text-default);
  cursor: pointer;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 6px 12px;
  min-inline-size: 88px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.demo-segmented-btn:hover {
  background: var(--co-color-surface-static-raised);
}

.demo-segmented-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--co-blue-alpha-15);
}

.demo-segmented-btn.is-active {
  background: var(--co-color-surface-interactive-primary-default);
  color: var(--co-color-text-on-primary);
  box-shadow: var(--co-elevation-shadow-sm);
}

.demo-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.demo-toggle.is-disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

.demo-toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.demo-toggle-track {
  position: relative;
  width: 32px;
  height: 18px;
  background: var(--co-border-strong);
  border-radius: 9px;
  transition: background 0.2s ease;
}

.demo-toggle input:checked + .demo-toggle-track {
  background: var(--co-blue-600);
}

.demo-toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  background: var(--co-text-primary);
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.demo-toggle input:checked + .demo-toggle-track .demo-toggle-thumb {
  transform: translateX(14px);
}

/* Preview area — follows the page's active theme/mode via the cascade */
.demo-preview {
  padding: 24px;
  display: flex;
  justify-content: center;
  background-color: var(--co-color-surface-static-default);
  color: var(--co-color-text-default);
}

.app-shell-demo__viewport {
  inline-size: 100%;
  display: flex;
  justify-content: center;
}

.app-shell-demo__viewport--desktop {
  max-inline-size: 960px;
}

.app-shell-demo__viewport--mobile {
  max-inline-size: 390px;
}

.app-shell-demo__frame {
  position: relative;
  inline-size: 100%;
  block-size: 560px;
  overflow: hidden;
  border: 1px solid var(--co-color-border-default);
  border-radius: 16px;
  background: var(--co-color-surface-static-page);
  box-shadow: var(--co-elevation-shadow-sm);
  transform: translateZ(0);
}

.app-shell-demo__viewport--mobile .app-shell-demo__frame {
  block-size: 640px;
}

.app-shell-demo__shell {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  min-block-size: 100%;
}

.app-shell-demo__banner {
  --co-component-banner-background: var(--co-color-state-primary-subtle);
  --co-component-banner-foreground: var(--co-color-state-primary-base);
  --co-component-banner-padding: 12px 16px;
}

.app-shell-demo__header::part(base) {
  min-block-size: 0;
  padding: 0;
  background: transparent;
  border-block-end: 0;
}

.app-shell-demo__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-inline-size: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--co-color-text-default);
  white-space: nowrap;
}

.app-shell-demo__logo-mark {
  inline-size: 28px;
  block-size: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%);
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.24);
}

.app-shell-demo__search {
  flex: 1 1 320px;
  max-inline-size: 320px;
}

.app-shell-demo__avatar {
  display: grid;
  place-items: center;
  inline-size: 36px;
  block-size: 36px;
  border-radius: 999px;
  background: var(--co-color-state-primary-subtle);
  color: var(--co-color-state-primary-base);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.app-shell-demo__body {
  display: grid;
  gap: 24px;
}

.app-shell-demo__panel {
  padding: 24px;
  background: var(--co-color-surface-static-default);
  border: 1px solid var(--co-color-border-default);
  border-radius: 16px;
}

.app-shell-demo__panel--secondary {
  color: var(--co-color-text-secondary);
}

.app-shell-demo__eyebrow {
  margin: 0 0 8px;
  color: var(--co-color-text-secondary);
}

.app-shell-demo__title {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.app-shell-demo__copy {
  margin: 0 0 16px;
}

.app-shell-demo__stack {
  display: grid;
  gap: 12px;
}

.app-shell-demo__card {
  padding: 16px;
  background: var(--co-color-surface-static-page);
  border-radius: 12px;
}

@media (max-width: 640px) {
  .demo-controls {
    padding: 14px 16px;
    gap: 14px;
  }

  .demo-field--meta {
    flex-basis: 100%;
  }

  .demo-preview {
    padding: 16px;
  }
}
</style>

<style>
.app-shell-demo__shell::part(base) {
  min-block-size: 100%;
}
</style>
