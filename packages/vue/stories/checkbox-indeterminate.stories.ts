import { CoCheckbox, CoCheckboxIndeterminate } from '@cobalt/vue';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Indeterminate',
};

const componentId = 'checkboxIndeterminate' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoCheckbox, CoCheckboxIndeterminate },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Nested selection</h2>
          <div class="cobalt-grid">
            <CoCheckboxIndeterminate value="notifications" indeterminate>
              <span slot="label">Notifications</span>
              <CoCheckbox value="email" checked>Email</CoCheckbox>
              <CoCheckbox value="sms">SMS</CoCheckbox>
              <CoCheckbox value="push">Push</CoCheckbox>
            </CoCheckboxIndeterminate>
          </div>
        </section>
      </div>
    `,
  }),
};
