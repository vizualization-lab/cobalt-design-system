import { CoRadio, CoRadioGroup } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio Group',
};

const componentId = 'radioGroup' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Selection</h2>
        <div className="cobalt-grid">
          <CoRadioGroup name="plan" required>
            <span slot="label">Plan</span>
            <span slot="help-text">Choose one plan.</span>
            <CoRadio value="starter">Starter</CoRadio>
            <CoRadio value="team" checked>
              Team
            </CoRadio>
            <CoRadio value="enterprise">Enterprise</CoRadio>
          </CoRadioGroup>
        </div>
      </section>
    </div>
  ),
};
