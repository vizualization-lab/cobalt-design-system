<script setup lang="ts">
import './icons';
import { CoAppShell } from '@cobalt/vue/app-shell';
import { CoBanner } from '@cobalt/vue/banner';
import { CoButton } from '@cobalt/vue/button';
import { CoCard } from '@cobalt/vue/card';
import { CoIcon } from '@cobalt/vue/icon';
import { CoModeToggle } from '@cobalt/vue/mode-toggle';
import { CoNavDrawer } from '@cobalt/vue/nav-drawer';
import { CoNavDrawerItem } from '@cobalt/vue/nav-drawer-item';
import { CoNavHeaderBar } from '@cobalt/vue/nav-header-bar';
import { CoNavRailBar } from '@cobalt/vue/nav-rail-bar';
import { CoNavRailItem } from '@cobalt/vue/nav-rail-item';

function handleSuccess() {
  console.log('Success');
}
</script>

<template>
  <CoAppShell rail-width="96px" drawer-width="260px">
    <CoBanner slot="banner" label="Cobalt starter banner">
      <span slot="title">Cobalt starter</span>
    </CoBanner>
    <CoNavHeaderBar slot="topnav" label="Workspace header">
      <div slot="logo" class="shell-header-brand">
        <CoIcon name="co-logo" size="lg" aria-hidden="true" />
        <span>Cobalt starter</span>
      </div>
      <CoModeToggle slot="avatar" storage-namespace="cobalt-starter" />
    </CoNavHeaderBar>
    <CoNavRailBar slot="rail" label="Primary sections">
      <CoNavRailItem value="home" icon="home" selected>Home</CoNavRailItem>
      <CoNavRailItem value="reports" icon="dashboard">Reports</CoNavRailItem>
      <CoNavRailItem value="settings" icon="settings">Settings</CoNavRailItem>
    </CoNavRailBar>
    <CoNavDrawer slot="drawer" label="Workspace navigation">
      <CoNavDrawerItem value="overview" icon="dashboard" selected>Overview</CoNavDrawerItem>
      <CoNavDrawerItem value="activity" icon="task-alt">Activity</CoNavDrawerItem>
      <CoNavDrawerItem value="settings" icon="settings">Settings</CoNavDrawerItem>
    </CoNavDrawer>
    <main slot="body" class="shell-body">
      <CoCard label="Starter content">
        <div class="starter-card">
          <p class="starter-eyebrow">Vue</p>
          <h1 class="starter-title">Build inside the app shell</h1>
          <p class="starter-copy">
            The banner, header, rail, drawer, and body regions are ready for routing.
          </p>
          <div>
            <CoButton variant="success" @co-focus="handleSuccess">Success</CoButton>
          </div>
        </div>
      </CoCard>
    </main>
  </CoAppShell>
</template>
