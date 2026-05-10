import '@cobalt/components/nav-drawer';
import '@cobalt/components/nav-drawer-group';
import '@cobalt/components/nav-drawer-item';

export const title = '<co-nav-drawer-group>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div style="height: 320px; position: relative; border: 1px solid var(--co-color-border-default); border-radius: 8px; overflow: hidden;">
      <co-nav-drawer label="Grouped navigation">
        <co-nav-drawer-group label="Closed group" value="closed">
          <co-nav-drawer-item value="hidden">Hidden child</co-nav-drawer-item>
        </co-nav-drawer-group>
        <co-nav-drawer-group label="Open group" value="open" open>
          <co-nav-drawer-item value="overview" selected>Overview</co-nav-drawer-item>
          <co-nav-drawer-item value="settings">Settings</co-nav-drawer-item>
        </co-nav-drawer-group>
      </co-nav-drawer>
    </div>
  </section>
`;
