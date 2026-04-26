import '@cobalt/components/card';
import '@cobalt/components/button';

export const title = '<co-card>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <div class="wb-row" style="flex-wrap: wrap;">
      <co-card style="max-width: 480px;">
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
      </co-card>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Header and Footer</h2>
    <div class="wb-row" style="flex-wrap: wrap;">
      <co-card label="Dashboard" style="max-width: 480px;">
        <h3 slot="header" style="margin: 0; font-size: 1.1rem; font-weight: 600;">Dashboard</h3>
        <p style="margin: 0;">Track live operational health. Compose page-level structure inside the body slot.</p>
        <div slot="footer" style="display: flex; gap: 8px;">
          <co-button variant="primary" size="sm">View</co-button>
          <co-button variant="ghost" size="sm">Dismiss</co-button>
        </div>
      </co-card>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Multiple Cards</h2>
    <div class="wb-row" style="flex-wrap: wrap; gap: 16px;">
      <co-card style="flex: 1; min-width: 200px;">
        <h4 slot="header" style="margin: 0;">Incidents</h4>
        <p style="margin: 0; font-size: 2rem; font-weight: 700;">12</p>
        <span slot="footer" style="font-size: 0.85rem; color: var(--co-color-text-tertiary);">Last 24 hours</span>
      </co-card>
      <co-card style="flex: 1; min-width: 200px;">
        <h4 slot="header" style="margin: 0;">Uptime</h4>
        <p style="margin: 0; font-size: 2rem; font-weight: 700;">99.9%</p>
        <span slot="footer" style="font-size: 0.85rem; color: var(--co-color-text-tertiary);">Last 30 days</span>
      </co-card>
      <co-card style="flex: 1; min-width: 200px;">
        <h4 slot="header" style="margin: 0;">Alerts</h4>
        <p style="margin: 0; font-size: 2rem; font-weight: 700;">3</p>
        <span slot="footer" style="font-size: 0.85rem; color: var(--co-color-text-tertiary);">Active now</span>
      </co-card>
    </div>
  </section>
`;
