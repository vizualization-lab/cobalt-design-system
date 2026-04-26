import '@cobalt/components/banner';

export const title = '<co-banner>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <co-banner label="Announcement">
      <span slot="title">System Maintenance</span>
      Scheduled downtime Saturday 2-4 AM EST.
    </co-banner>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Title Only</h2>
    <co-banner>
      <span slot="title">New Feature Available</span>
    </co-banner>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Stacked Content</h2>
    <co-banner label="Release Notes">
      <span slot="title">Version 2.0 Released</span>
      <span>Check out the new dashboard and improved performance.</span>
      <a href="#" style="color: inherit;">Learn more</a>
    </co-banner>
  </section>
`;
