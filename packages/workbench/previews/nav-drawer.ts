import '@cobalt/components/nav-drawer';
import '@cobalt/components/nav-drawer-group';
import '@cobalt/components/nav-drawer-item';
import '@cobalt/components/nav-separator';

export const title = '<co-nav-drawer>';

export const html = `
  <style>
    .wb-nav-drawer-frame {
      height: 400px;
      position: relative;
      border: 1px solid var(--co-color-border-default);
      border-radius: 8px;
      overflow: hidden;
    }

    .wb-nav-drawer-frame--nested {
      height: 360px;
    }

    .wb-nav-drawer-frame--links {
      height: 300px;
    }

    .wb-nav-drawer-fill {
      block-size: 100%;
    }
  </style>

  <section class="wb-section">
    <h2 class="wb-heading">Basic</h2>
    <div class="wb-nav-drawer-frame">
      <co-nav-drawer class="wb-nav-drawer-fill" label="Main navigation">
        <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; padding: 0 4px;">Menu</h3>
        <co-nav-drawer-item value="dashboard" icon="dashboard" selected>Dashboard</co-nav-drawer-item>
        <co-nav-drawer-item value="activity" icon="sync">Activity</co-nav-drawer-item>
        <co-nav-drawer-item value="analytics" icon="monitoring">Analytics</co-nav-drawer-item>
        <co-nav-separator></co-nav-separator>
        <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; padding: 0 4px;">Settings</h3>
        <co-nav-drawer-item value="profile" icon="person">Profile</co-nav-drawer-item>
        <co-nav-drawer-item value="settings" icon="settings">Settings</co-nav-drawer-item>
        <co-nav-drawer-item value="billing" icon="credit-card" disabled>Billing</co-nav-drawer-item>
      </co-nav-drawer>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Nested Groups</h2>
    <div class="wb-nav-drawer-frame wb-nav-drawer-frame--nested">
      <co-nav-drawer class="wb-nav-drawer-fill" label="Documentation navigation" value="nav-drawer">
        <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; padding: 0 4px;">Components</h3>
        <co-nav-drawer-group label="Layout" value="layout">
          <co-nav-drawer-item value="app-shell" href="#app-shell">App Shell</co-nav-drawer-item>
          <co-nav-drawer-item value="card" href="#card">Card</co-nav-drawer-item>
        </co-nav-drawer-group>
        <co-nav-drawer-group label="Navigation" value="navigation" open>
          <co-nav-drawer-item value="nav-drawer" href="#nav-drawer" selected>Navigation Drawer</co-nav-drawer-item>
          <co-nav-drawer-item value="nav-rail" href="#nav-rail">Navigation Rail</co-nav-drawer-item>
        </co-nav-drawer-group>
      </co-nav-drawer>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Links</h2>
    <div class="wb-nav-drawer-frame wb-nav-drawer-frame--links">
      <co-nav-drawer class="wb-nav-drawer-fill" label="Site navigation">
        <co-nav-drawer-item value="home" icon="home" href="#home" selected>Home</co-nav-drawer-item>
        <co-nav-drawer-item value="docs" icon="description" href="#docs">Documentation</co-nav-drawer-item>
        <co-nav-drawer-item value="api" icon="code" href="#api">API Reference</co-nav-drawer-item>
      </co-nav-drawer>
    </div>
  </section>
`;
