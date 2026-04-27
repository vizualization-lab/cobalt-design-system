import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCheckbox, CoCheckboxGroup } from '@cobalt/angular';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox Group',
};

const componentId = 'checkboxGroup' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoCheckbox, CoCheckboxGroup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Selection</h2>
          <div class="cobalt-grid">
            <co-checkbox-group name="notifications" [required]="true">
              <span slot="label">Notifications</span>
              <span slot="help-text">Choose every channel you want to use.</span>
              <co-checkbox value="email" [checked]="true">Email</co-checkbox>
              <co-checkbox value="sms">SMS</co-checkbox>
              <co-checkbox value="push">Push</co-checkbox>
            </co-checkbox-group>
          </div>
        </section>
      </div>
    `,
  }),
};
