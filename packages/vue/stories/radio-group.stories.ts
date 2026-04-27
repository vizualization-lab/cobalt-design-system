import { CoRadio, CoRadioGroup } from '@cobalt/vue';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio Group',
};

const componentId = 'radioGroup' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoRadio, CoRadioGroup },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Selection</h2>
          <div class="cobalt-grid">
            <CoRadioGroup name="plan" required>
              <span slot="label">Plan</span>
              <span slot="help-text">Choose one plan.</span>
              <CoRadio value="starter">Starter</CoRadio>
              <CoRadio value="team" checked>Team</CoRadio>
              <CoRadio value="enterprise">Enterprise</CoRadio>
            </CoRadioGroup>
          </div>
        </section>
      </div>
    `,
  }),
};
