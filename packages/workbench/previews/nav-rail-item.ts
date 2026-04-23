import '@cobalt/components/nav-rail-item';

export const title = '<co-nav-rail-item>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <div class="wb-row" style="width: 160px;">
      <co-nav-rail-item value="home" icon="home">Home</co-nav-rail-item>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div class="wb-row" style="gap: 24px; align-items: flex-start;">
      <div style="width: 160px;">
        <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
      </div>
      <div style="width: 160px;">
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
      </div>
      <div style="width: 160px;">
        <co-nav-rail-item value="settings" icon="settings" disabled>Settings</co-nav-rail-item>
      </div>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Links</h2>
    <div class="wb-row" style="gap: 24px; align-items: flex-start;">
      <div style="width: 160px;">
        <co-nav-rail-item value="dashboard" icon="dashboard" href="#dashboard" selected>Dashboard</co-nav-rail-item>
      </div>
      <div style="width: 160px;">
        <co-nav-rail-item value="activity" icon="progress-activity" href="#activity">Activity</co-nav-rail-item>
      </div>
    </div>
  </section>
`;
