import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoRadio, CoRadioGroup } from '@cobalt/angular';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Radio Group',
};

const componentId = 'radioGroup' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoRadio, CoRadioGroup],
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
            <co-radio-group name="plan" [required]="true">
              <span slot="label">Plan</span>
              <span slot="help-text">Choose one plan.</span>
              <co-radio value="starter">Starter</co-radio>
              <co-radio value="team" [checked]="true">Team</co-radio>
              <co-radio value="enterprise">Enterprise</co-radio>
            </co-radio-group>
          </div>
        </section>
      </div>
    `,
  }),
};
