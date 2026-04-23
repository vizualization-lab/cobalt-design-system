import '@cobalt/components/nav-rail-bar';
import '@cobalt/components/nav-rail-item';

export const title = '<co-nav-rail-bar>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <co-nav-rail-bar label="Primary app navigation">
      <co-nav-rail-item value="dashboard" icon="dashboard" href="#dashboard" selected>Dashboard</co-nav-rail-item>
      <co-nav-rail-item value="activity" icon="sync" href="#activity">Activity</co-nav-rail-item>
      <co-nav-rail-item value="analytics" icon="monitoring" href="#analytics">Analytics</co-nav-rail-item>
      <co-nav-rail-item value="settings" icon="settings" href="#settings">Settings</co-nav-rail-item>
    </co-nav-rail-bar>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled Item</h2>
    <co-nav-rail-bar label="Secondary navigation">
      <co-nav-rail-item value="home" icon="home" href="#home" selected>Home</co-nav-rail-item>
      <co-nav-rail-item value="team" icon="groups" href="#team">Team</co-nav-rail-item>
      <co-nav-rail-item value="billing" icon="credit-card" href="#billing" disabled>Billing</co-nav-rail-item>
      <co-nav-rail-item value="support" icon="help" href="#support">Support</co-nav-rail-item>
    </co-nav-rail-bar>
  </section>
`;
