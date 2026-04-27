import { html } from 'lit';
import '@cobalt/components/checkbox';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox',
};

const componentId = 'checkbox' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>States</h2>
        <div class="cobalt-grid">
          <co-checkbox value="default">Default</co-checkbox>
          <co-checkbox value="checked" checked>Checked</co-checkbox>
          <co-checkbox value="disabled" disabled>Disabled</co-checkbox>
          <co-checkbox value="checked-disabled" checked disabled>Checked disabled</co-checkbox>
        </div>
      </section>
    </div>
  `,
};
