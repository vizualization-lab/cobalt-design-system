import { html } from 'lit';
import '@cobalt/components/checkbox-group';
import '@cobalt/components/checkbox';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Group',
};

const componentId = 'checkboxGroup' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Selection</h2>
        <div class="cobalt-grid">
          <co-checkbox-group name="notifications" required>
            <span slot="label">Notifications</span>
            <span slot="help-text">Choose every channel you want to use.</span>
            <co-checkbox value="email" checked>Email</co-checkbox>
            <co-checkbox value="sms">SMS</co-checkbox>
            <co-checkbox value="push">Push</co-checkbox>
          </co-checkbox-group>
        </div>
      </section>
    </div>
  `,
};
