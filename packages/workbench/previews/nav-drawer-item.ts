import '@cobalt/components/nav-drawer-item';
import '@cobalt/components/icon';

export const title = '<co-nav-drawer-item>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div style="max-width: 280px; display: flex; flex-direction: column; gap: 4px;">
      <co-nav-drawer-item value="default" icon="home">Default</co-nav-drawer-item>
      <co-nav-drawer-item value="selected" icon="dashboard" selected>Selected</co-nav-drawer-item>
      <co-nav-drawer-item value="disabled" icon="lock" disabled>Disabled</co-nav-drawer-item>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Links</h2>
    <div style="max-width: 280px; display: flex; flex-direction: column; gap: 4px;">
      <co-nav-drawer-item value="home" icon="home" href="#home" selected>Home</co-nav-drawer-item>
      <co-nav-drawer-item value="docs" icon="description" href="#docs">Documentation</co-nav-drawer-item>
      <co-nav-drawer-item value="api" icon="code" href="#api">API Reference</co-nav-drawer-item>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Various Icons</h2>
    <div style="max-width: 280px; display: flex; flex-direction: column; gap: 4px;">
      <co-nav-drawer-item value="dashboard" icon="dashboard">Dashboard</co-nav-drawer-item>
      <co-nav-drawer-item value="activity" icon="sync">Activity</co-nav-drawer-item>
      <co-nav-drawer-item value="analytics" icon="monitoring">Analytics</co-nav-drawer-item>
      <co-nav-drawer-item value="settings" icon="settings">Settings</co-nav-drawer-item>
      <co-nav-drawer-item value="profile" icon="person">Profile</co-nav-drawer-item>
      <co-nav-drawer-item value="help" icon="help">Help & Support</co-nav-drawer-item>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Custom Prefix Slot</h2>
    <div style="max-width: 280px; display: flex; flex-direction: column; gap: 4px;">
      <co-nav-drawer-item value="star">
        <co-icon slot="prefix" name="star" size="sm" fill></co-icon>
        Favorites
      </co-nav-drawer-item>
      <co-nav-drawer-item value="bookmark">
        <co-icon slot="prefix" name="bookmark" size="sm" fill></co-icon>
        Bookmarks
      </co-nav-drawer-item>
    </div>
  </section>
`;
