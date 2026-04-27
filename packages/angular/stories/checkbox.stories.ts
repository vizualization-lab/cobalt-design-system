import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCheckbox } from '@cobalt/angular';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Checkbox',
};

const componentId = 'checkbox' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoCheckbox],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <co-checkbox value="default">Default</co-checkbox>
            <co-checkbox value="checked" [checked]="true">Checked</co-checkbox>
            <co-checkbox value="disabled" [disabled]="true">Disabled</co-checkbox>
            <co-checkbox value="checked-disabled" [checked]="true" [disabled]="true">
              Checked disabled
            </co-checkbox>
          </div>
        </section>
      </div>
    `,
  }),
};
