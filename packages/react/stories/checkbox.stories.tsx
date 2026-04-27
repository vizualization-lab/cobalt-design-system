import { CoCheckbox } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox',
};

const componentId = 'checkbox' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>States</h2>
        <div className="cobalt-grid">
          <CoCheckbox value="default">Default</CoCheckbox>
          <CoCheckbox value="checked" checked>
            Checked
          </CoCheckbox>
          <CoCheckbox value="disabled" disabled>
            Disabled
          </CoCheckbox>
          <CoCheckbox value="checked-disabled" checked disabled>
            Checked disabled
          </CoCheckbox>
        </div>
      </section>
    </div>
  ),
};
