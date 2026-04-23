import '@cobalt/components/nav-drawer';
import '@cobalt/components/nav-drawer-item';
import '@cobalt/components/nav-separator';

export const title = '<co-nav-drawer>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Basic</h2>
    <div style="height: 400px; position: relative; border: 1px solid var(--co-color-border-default); border-radius: 8px; overflow: hidden;">
      <co-nav-drawer label="Main navigation">
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
    <h2 class="wb-heading">With Links</h2>
    <div style="height: 300px; position: relative; border: 1px solid var(--co-color-border-default); border-radius: 8px; overflow: hidden;">
      <co-nav-drawer label="Site navigation">
        <co-nav-drawer-item value="home" icon="home" href="#home" selected>Home</co-nav-drawer-item>
        <co-nav-drawer-item value="docs" icon="description" href="#docs">Documentation</co-nav-drawer-item>
        <co-nav-drawer-item value="api" icon="code" href="#api">API Reference</co-nav-drawer-item>
      </co-nav-drawer>
    </div>
  </section>
`;
