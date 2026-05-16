import '@cobalt/components/mode-toggle';

export const title = '<co-mode-toggle>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Compact</h2>
    <div class="wb-row" style="align-items: center;">
      <co-mode-toggle></co-mode-toggle>
      <co-mode-toggle mode="light" size="sm"></co-mode-toggle>
      <co-mode-toggle mode="dark" size="lg"></co-mode-toggle>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Persisted namespace</h2>
    <div class="wb-row" style="align-items: center;">
      <co-mode-toggle storage-namespace="workbench"></co-mode-toggle>
      <co-mode-toggle mode="light" storage-namespace="workbench"></co-mode-toggle>
    </div>
  </section>

`;
