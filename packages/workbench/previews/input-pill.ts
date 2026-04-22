import '@cobalt/components/input-pill';

export const title = '<co-input-pill>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <div style="max-width: 480px;">
      <co-input-pill placeholder="Type something..."></co-input-pill>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Search Variant</h2>
    <div style="max-width: 480px;">
      <co-input-pill variant="search" placeholder="Search..."></co-input-pill>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Chat Variant</h2>
    <div style="display: grid; gap: 16px; max-width: 480px;">
      <co-input-pill variant="chat" size="sm" placeholder="Message (small)"></co-input-pill>
      <co-input-pill variant="chat" placeholder="Message (medium)"></co-input-pill>
      <co-input-pill variant="chat" size="lg" placeholder="Message (large)"></co-input-pill>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Custom Icons</h2>
    <div style="display: grid; gap: 16px; max-width: 480px;">
      <co-input-pill prefix-icon="star" action-icon="send" placeholder="Favorite and send"></co-input-pill>
      <co-input-pill prefix-icon="location-on" placeholder="Find nearby"></co-input-pill>
      <co-input-pill action-icon="add" placeholder="Add item"></co-input-pill>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Sizes</h2>
    <div style="display: grid; gap: 16px; max-width: 480px;">
      <co-input-pill variant="search" size="sm" placeholder="Small"></co-input-pill>
      <co-input-pill variant="search" size="md" placeholder="Medium (default)"></co-input-pill>
      <co-input-pill variant="search" size="lg" placeholder="Large"></co-input-pill>
      <co-input-pill variant="search" size="xl" placeholder="Extra large"></co-input-pill>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Disabled</h2>
    <div style="max-width: 480px;">
      <co-input-pill variant="chat" placeholder="Disabled" disabled></co-input-pill>
    </div>
  </section>
`;
