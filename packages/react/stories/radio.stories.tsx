import { CoRadio } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio',
};

const componentId = 'radio' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>States</h2>
        <div className="cobalt-grid">
          <CoRadio value="default">Default</CoRadio>
          <CoRadio value="checked" checked>
            Checked
          </CoRadio>
          <CoRadio value="disabled" disabled>
            Disabled
          </CoRadio>
          <CoRadio value="checked-disabled" checked disabled>
            Checked disabled
          </CoRadio>
        </div>
      </section>
    </div>
  ),
};
