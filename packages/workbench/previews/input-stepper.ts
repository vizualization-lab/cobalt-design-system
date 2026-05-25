import '@cobalt/components/icon';
import '@cobalt/components/input-stepper';

export const title = '<co-input-stepper>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <div style="max-width: 420px;">
      <co-input-stepper label="Quantity" min="0" max="10"></co-input-stepper>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Sizes</h2>
    <div style="display: grid; gap: 16px; max-width: 420px;">
      <co-input-stepper size="sm" label="Small" value="1"></co-input-stepper>
      <co-input-stepper size="md" label="Medium" value="2"></co-input-stepper>
      <co-input-stepper size="lg" label="Large" value="3"></co-input-stepper>
      <co-input-stepper size="xl" label="Extra large" value="4"></co-input-stepper>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Min, Max, and Step</h2>
    <div style="display: grid; gap: 16px; max-width: 420px;">
      <co-input-stepper label="Quantity" min="0" max="10" step="1" value="3"></co-input-stepper>
      <co-input-stepper label="Team size" min="5" max="50" step="5" value="15"></co-input-stepper>
      <co-input-stepper label="Rate" min="0" max="1" step="0.05" value="0.25"></co-input-stepper>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Leading Slot</h2>
    <div style="display: grid; gap: 16px; max-width: 420px;">
      <co-input-stepper label="Price" value="125" min="0" step="5">
        <span slot="leading">$</span>
      </co-input-stepper>
      <co-input-stepper label="Capacity" value="8" min="0" max="20">
        <co-icon slot="leading" name="group" size="sm"></co-icon>
      </co-input-stepper>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">States</h2>
    <div style="display: grid; gap: 16px; max-width: 420px;">
      <co-input-stepper label="Disabled" value="2" disabled></co-input-stepper>
      <co-input-stepper label="Readonly" value="2" readonly></co-input-stepper>
      <co-input-stepper label="Danger" value="2" danger></co-input-stepper>
    </div>
  </section>
`;
