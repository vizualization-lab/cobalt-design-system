import '@cobalt/components/icon';

export const title = '<co-icon>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Sizes</h2>
    <div class="wb-row" style="align-items: center">
      <co-icon name="home" size="xs"></co-icon>
      <co-icon name="home" size="sm"></co-icon>
      <co-icon name="home" size="md"></co-icon>
      <co-icon name="home" size="lg"></co-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Filled vs Outlined</h2>
    <div class="wb-row" style="align-items: center">
      <co-icon name="favorite" size="lg"></co-icon>
      <co-icon name="favorite" size="lg" fill></co-icon>
      <co-icon name="star" size="lg"></co-icon>
      <co-icon name="star" size="lg" fill></co-icon>
      <co-icon name="bookmark" size="lg"></co-icon>
      <co-icon name="bookmark" size="lg" fill></co-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Animated</h2>
    <div class="wb-row" style="align-items: center">
      <co-icon name="notifications" size="lg" animated></co-icon>
      <co-icon name="progress-activity" size="lg" animated></co-icon>
      <co-icon name="check-circle" size="lg" animated></co-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Common Icons</h2>
    <div class="wb-row" style="align-items: center; flex-wrap: wrap">
      <co-icon name="home" size="md"></co-icon>
      <co-icon name="search" size="md"></co-icon>
      <co-icon name="settings" size="md"></co-icon>
      <co-icon name="person" size="md"></co-icon>
      <co-icon name="close" size="md"></co-icon>
      <co-icon name="add" size="md"></co-icon>
      <co-icon name="delete" size="md"></co-icon>
      <co-icon name="edit" size="md"></co-icon>
      <co-icon name="info" size="md"></co-icon>
      <co-icon name="warning" size="md"></co-icon>
      <co-icon name="error" size="md"></co-icon>
      <co-icon name="check-circle" size="md"></co-icon>
      <co-icon name="arrow-forward" size="md"></co-icon>
      <co-icon name="arrow-back" size="md"></co-icon>
      <co-icon name="open-in-new" size="md"></co-icon>
      <co-icon name="content-copy" size="md"></co-icon>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Color</h2>
    <div class="wb-row" style="align-items: center">
      <co-icon name="check-circle" size="lg" style="color: var(--co-color-interactive-default-success)"></co-icon>
      <co-icon name="warning" size="lg" style="color: var(--co-color-status-warning)"></co-icon>
      <co-icon name="error" size="lg" style="color: var(--co-color-interactive-default-danger)"></co-icon>
      <co-icon name="info" size="lg" style="color: var(--co-color-interactive-default-primary)"></co-icon>
    </div>
  </section>
`;
