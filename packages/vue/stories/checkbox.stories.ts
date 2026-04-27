import { CoCheckbox } from '@cobalt/vue';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox',
};

const componentId = 'checkbox' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoCheckbox },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <CoCheckbox value="default">Default</CoCheckbox>
            <CoCheckbox value="checked" checked>Checked</CoCheckbox>
            <CoCheckbox value="disabled" disabled>Disabled</CoCheckbox>
            <CoCheckbox value="checked-disabled" checked disabled>Checked disabled</CoCheckbox>
          </div>
        </section>
      </div>
    `,
  }),
};
