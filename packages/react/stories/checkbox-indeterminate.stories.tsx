import { CoCheckbox, CoCheckboxIndeterminate } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Indeterminate',
};

const componentId = 'checkboxIndeterminate' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Nested selection</h2>
        <div className="cobalt-grid">
          <CoCheckboxIndeterminate value="notifications" indeterminate>
            <span slot="label">Notifications</span>
            <CoCheckbox value="email" checked>
              Email
            </CoCheckbox>
            <CoCheckbox value="sms">SMS</CoCheckbox>
            <CoCheckbox value="push">Push</CoCheckbox>
          </CoCheckboxIndeterminate>
        </div>
      </section>
    </div>
  ),
};
