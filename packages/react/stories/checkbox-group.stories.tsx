import { CoCheckbox, CoCheckboxGroup } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Group',
};

const componentId = 'checkboxGroup' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Selection</h2>
        <div className="cobalt-grid">
          <CoCheckboxGroup name="notifications" required>
            <span slot="label">Notifications</span>
            <span slot="help-text">Choose every channel you want to use.</span>
            <CoCheckbox value="email" checked>
              Email
            </CoCheckbox>
            <CoCheckbox value="sms">SMS</CoCheckbox>
            <CoCheckbox value="push">Push</CoCheckbox>
          </CoCheckboxGroup>
        </div>
      </section>
    </div>
  ),
};
