import '@cobalt/components/button';
import '@cobalt/components/icon';
import '@cobalt/components/form';
import '@cobalt/components/input';

export const title = '<co-button>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Variants</h2>
    <div class="wb-row">
      <co-button variant="primary">Primary</co-button>
      <co-button variant="secondary">Secondary</co-button>
      <co-button variant="danger">Danger</co-button>
      <co-button variant="success">Success</co-button>
      <co-button variant="ghost">Ghost</co-button>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Sizes</h2>
    <div class="wb-row" style="align-items: center">
      <co-button size="sm">Small</co-button>
      <co-button size="md">Medium</co-button>
      <co-button size="lg">Large</co-button>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div class="wb-row">
      <co-button>Default</co-button>
      <co-button disabled>Disabled</co-button>
      <co-button loading>Loading</co-button>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Icons (slots)</h2>
    <div class="wb-row">
      <co-button variant="primary">
        <co-icon slot="prefix" name="add" size="sm"></co-icon>
        Add item
      </co-button>
      <co-button variant="secondary">
        Settings
        <co-icon slot="suffix" name="arrow-right-alt" size="sm"></co-icon>
      </co-button>
      <co-button variant="danger">
        <co-icon slot="prefix" name="delete" size="sm"></co-icon>
        Delete
      </co-button>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">As Link</h2>
    <div class="wb-row">
      <co-button href="https://example.com" target="_blank">
        External link
        <co-icon slot="suffix" name="open-in-new" size="sm"></co-icon>
      </co-button>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Stretched in flex containers</h2>
    <p style="font-size: 14px; color: var(--co-color-text-secondary); margin: 0 0 12px;">
      Buttons should remain content-sized by default. When a parent forces a wider
      width (explicit width, flex-column with stretch, or grid cell), the label must
      stay centered horizontally and vertically.
    </p>

    <h3 style="font-size: 14px; margin: 12px 0 8px; color: var(--co-color-text-secondary);">
      Flex column with align-items: stretch (default)
    </h3>
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 360px; padding: 12px; border: 1px dashed var(--co-color-border-default); border-radius: 8px;">
      <co-button variant="primary">Primary stretched</co-button>
      <co-button variant="secondary">Secondary stretched</co-button>
      <co-button variant="danger">
        <co-icon slot="prefix" name="delete" size="sm"></co-icon>
        Delete with prefix
      </co-button>
    </div>

    <h3 style="font-size: 14px; margin: 16px 0 8px; color: var(--co-color-text-secondary);">
      Explicit fixed width (style="width: 320px")
    </h3>
    <div class="wb-row">
      <co-button variant="primary" style="width: 320px;">Fixed width primary</co-button>
      <co-button variant="success" style="width: 320px;">Fixed width success</co-button>
    </div>

    <h3 style="font-size: 14px; margin: 16px 0 8px; color: var(--co-color-text-secondary);">
      Grid cell that exceeds content width
    </h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; max-width: 480px;">
      <co-button variant="primary">Cell A</co-button>
      <co-button variant="secondary">Cell B</co-button>
      <co-button variant="ghost">Cell C</co-button>
      <co-button variant="danger">Cell D</co-button>
    </div>

    <h3 style="font-size: 14px; margin: 16px 0 8px; color: var(--co-color-text-secondary);">
      Inside &lt;co-form&gt; (should stay content-sized)
    </h3>
    <p style="font-size: 13px; color: var(--co-color-text-tertiary); margin: 0 0 8px;">
      Verifies the co-form fix that prevents flex stretch from forcing the button to full width.
    </p>
    <div style="max-width: 400px;">
      <co-form id="wb-button-form">
        <co-input label="Email" name="email" type="email"></co-input>
        <co-button type="submit" variant="primary">Submit</co-button>
      </co-form>
    </div>
  </section>
`;
