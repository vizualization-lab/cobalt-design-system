import { CoCheckbox, CoCheckboxGroup } from '@cobalt/vue';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Group',
};

const componentId = 'checkboxGroup' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoCheckbox, CoCheckboxGroup },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Selection</h2>
          <div class="cobalt-grid">
            <CoCheckboxGroup name="notifications" required>
              <span slot="label">Notifications</span>
              <span slot="help-text">Choose every channel you want to use.</span>
              <CoCheckbox value="email" checked>Email</CoCheckbox>
              <CoCheckbox value="sms">SMS</CoCheckbox>
              <CoCheckbox value="push">Push</CoCheckbox>
            </CoCheckboxGroup>
          </div>
        </section>
      </div>
    `,
  }),
};
