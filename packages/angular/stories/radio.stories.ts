import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoRadio } from '@cobalt/angular';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio',
};

const componentId = 'radio' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoRadio],
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
            <co-radio value="default">Default</co-radio>
            <co-radio value="checked" [checked]="true">Checked</co-radio>
            <co-radio value="disabled" [disabled]="true">Disabled</co-radio>
            <co-radio value="checked-disabled" [checked]="true" [disabled]="true">
              Checked disabled
            </co-radio>
          </div>
        </section>
      </div>
    `,
  }),
};
