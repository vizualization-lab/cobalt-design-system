import { html } from 'lit';
import '@cobalt/components/checkbox-indeterminate';
import '@cobalt/components/checkbox';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Indeterminate',
};

const componentId = 'checkboxIndeterminate' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Nested selection</h2>
        <div class="cobalt-grid">
          <co-checkbox-indeterminate value="notifications" indeterminate>
            <span slot="label">Notifications</span>
            <co-checkbox value="email" checked>Email</co-checkbox>
            <co-checkbox value="sms">SMS</co-checkbox>
            <co-checkbox value="push">Push</co-checkbox>
          </co-checkbox-indeterminate>
        </div>
      </section>
    </div>
  `,
};
