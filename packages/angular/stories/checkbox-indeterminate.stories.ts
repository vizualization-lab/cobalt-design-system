import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCheckbox, CoCheckboxIndeterminate } from '@cobalt/angular';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Indeterminate',
};

const componentId = 'checkboxIndeterminate' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoCheckbox, CoCheckboxIndeterminate],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Nested selection</h2>
          <div class="cobalt-grid">
            <co-checkbox-indeterminate value="notifications" [indeterminate]="true">
              <span slot="label">Notifications</span>
              <co-checkbox value="email" [checked]="true">Email</co-checkbox>
              <co-checkbox value="sms">SMS</co-checkbox>
              <co-checkbox value="push">Push</co-checkbox>
            </co-checkbox-indeterminate>
          </div>
        </section>
      </div>
    `,
  }),
};
