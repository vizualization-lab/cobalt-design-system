import { html } from 'lit';
import '@cobalt/components/radio';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio',
};

const componentId = 'radio' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>States</h2>
        <div class="cobalt-grid">
          <co-radio value="default">Default</co-radio>
          <co-radio value="checked" checked>Checked</co-radio>
          <co-radio value="disabled" disabled>Disabled</co-radio>
          <co-radio value="checked-disabled" checked disabled>Checked disabled</co-radio>
        </div>
      </section>
    </div>
  `,
};
