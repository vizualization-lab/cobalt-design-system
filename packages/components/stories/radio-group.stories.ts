import { html } from 'lit';
import '@cobalt/components/radio-group';
import '@cobalt/components/radio';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio Group',
};

const componentId = 'radioGroup' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Selection</h2>
        <div class="cobalt-grid">
          <co-radio-group name="plan" required>
            <span slot="label">Plan</span>
            <span slot="help-text">Choose one plan.</span>
            <co-radio value="starter">Starter</co-radio>
            <co-radio value="team" checked>Team</co-radio>
            <co-radio value="enterprise">Enterprise</co-radio>
          </co-radio-group>
        </div>
      </section>
    </div>
  `,
};
