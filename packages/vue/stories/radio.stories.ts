import { CoRadio } from '@cobalt/vue';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio',
};

const componentId = 'radio' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoRadio },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <CoRadio value="default">Default</CoRadio>
            <CoRadio value="checked" checked>Checked</CoRadio>
            <CoRadio value="disabled" disabled>Disabled</CoRadio>
            <CoRadio value="checked-disabled" checked disabled>Checked disabled</CoRadio>
          </div>
        </section>
      </div>
    `,
  }),
};
