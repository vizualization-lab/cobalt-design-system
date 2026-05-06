import '@cobalt/components/label';
import '@cobalt/components/icon';
import '@cobalt/components/input';
import '@cobalt/components/textarea';
import '@cobalt/components/select';
import '@cobalt/components/option';

export const title = '<co-label>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Figma states</h2>
    <div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 24px;
        padding: 24px;
        border: 2px dashed #8a3ffc;
        border-radius: 16px;
      "
    >
      <div style="display: grid; gap: 12px;">
        <div style="font-size: 14px; color: var(--co-color-text-secondary);">Default</div>
        <co-label>
          <co-icon slot="prefix" name="arrow-back" size="sm" aria-hidden="true"></co-icon>
          Label
          <co-icon slot="suffix" name="arrow-forward" size="sm" aria-hidden="true"></co-icon>
        </co-label>
      </div>
      <div style="display: grid; gap: 12px;">
        <div style="font-size: 14px; color: var(--co-color-text-secondary);">Required</div>
        <co-label required>Label</co-label>
      </div>
      <div style="display: grid; gap: 12px;">
        <div style="font-size: 14px; color: var(--co-color-text-secondary);">Optional</div>
        <co-label optional>Label</co-label>
      </div>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Native input association</h2>
    <div style="display: grid; gap: 12px; max-width: 320px;">
      <co-label for="wb-native-email" required>Email address</co-label>
      <input
        id="wb-native-email"
        type="email"
        placeholder="name@example.com"
        style="
          padding: 10px 12px;
          border: 1px solid var(--co-color-border-default);
          border-radius: var(--co-control-radius-interactive);
          font: inherit;
        "
      />
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Horizontal field layout</h2>
    <div style="display: grid; gap: 16px; max-width: 640px;">
      <div
        style="
          display: grid;
          grid-template-columns: minmax(140px, 180px) minmax(0, 1fr);
          gap: 16px;
          align-items: center;
        "
      >
        <co-label for="wb-billing-code" required>Billing code</co-label>
        <co-input id="wb-billing-code" placeholder="ACME-2048"></co-input>
      </div>

      <div
        style="
          display: grid;
          grid-template-columns: minmax(140px, 180px) minmax(0, 1fr);
          gap: 16px;
          align-items: center;
        "
      >
        <co-label for="wb-notify-team" optional>
          Notify team
          <co-icon slot="suffix" name="arrow-forward" size="sm" aria-hidden="true"></co-icon>
        </co-label>
        <co-select id="wb-notify-team">
          <co-option value="always">Always</co-option>
          <co-option value="mentions">Mentions only</co-option>
          <co-option value="never">Never</co-option>
        </co-select>
      </div>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Cobalt field associations</h2>
    <div style="display: grid; gap: 20px; max-width: 360px;">
      <div style="display: grid; gap: 8px;">
        <co-label for="wb-project-name">Project name</co-label>
        <co-input id="wb-project-name" placeholder="Atlas"></co-input>
      </div>

      <div style="display: grid; gap: 8px;">
        <co-label for="wb-summary" optional optional-label="(recommended)">Summary</co-label>
        <co-textarea id="wb-summary" rows="3" placeholder="Add rollout notes"></co-textarea>
      </div>

      <div style="display: grid; gap: 8px;">
        <co-label for="wb-region" required>
          <co-icon slot="prefix" name="public" size="sm" aria-hidden="true"></co-icon>
          Deployment region
        </co-label>
        <co-select id="wb-region">
          <co-option value="us-east-1">US East 1</co-option>
          <co-option value="us-west-2">US West 2</co-option>
          <co-option value="eu-west-1">EU West 1</co-option>
        </co-select>
      </div>
    </div>
  </section>
`;
