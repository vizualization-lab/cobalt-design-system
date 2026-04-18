import '@cobalt/components/button-icon';

export const title = '<co-button-icon>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Variants</h2>
    <div class="wb-row" style="align-items: center">
      <co-button-icon name="star" variant="primary" aria-label="Primary"></co-button-icon>
      <co-button-icon name="star" variant="secondary" aria-label="Secondary"></co-button-icon>
      <co-button-icon name="star" variant="danger" aria-label="Danger"></co-button-icon>
      <co-button-icon name="star" variant="success" aria-label="Success"></co-button-icon>
      <co-button-icon name="star" variant="ghost" aria-label="Ghost"></co-button-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Sizes</h2>
    <div class="wb-row" style="align-items: center">
      <co-button-icon name="star" size="sm" aria-label="Small"></co-button-icon>
      <co-button-icon name="star" size="md" aria-label="Medium"></co-button-icon>
      <co-button-icon name="star" size="lg" aria-label="Large"></co-button-icon>
      <co-button-icon name="star" size="xl" aria-label="Extra Large"></co-button-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Label (Bottom)</h2>
    <div class="wb-row" style="align-items: center">
      <co-button-icon name="star" label="Favorite" variant="primary"></co-button-icon>
      <co-button-icon name="delete" label="Delete" variant="danger"></co-button-icon>
      <co-button-icon name="settings" label="Settings" variant="secondary"></co-button-icon>
      <co-button-icon name="add" label="Add" variant="success"></co-button-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Label (Top)</h2>
    <div class="wb-row" style="align-items: center">
      <co-button-icon name="star" label="Favorite" label-position="top" variant="primary"></co-button-icon>
      <co-button-icon name="delete" label="Delete" label-position="top" variant="danger"></co-button-icon>
      <co-button-icon name="settings" label="Settings" label-position="top" variant="secondary"></co-button-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div class="wb-row" style="align-items: center">
      <co-button-icon name="star" aria-label="Default"></co-button-icon>
      <co-button-icon name="star" disabled aria-label="Disabled"></co-button-icon>
    </div>
  </section>
`;
