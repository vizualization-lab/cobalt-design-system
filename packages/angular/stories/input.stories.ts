import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoIcon, CoInput } from '@cobalt/angular';
import { fieldSizes, titleCase } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Input',
};

const componentId = 'input' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoIcon, CoInput],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { fieldSizes, titleCase },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            @for (size of fieldSizes; track size) {
              <co-input
                [size]="size"
                [label]="titleCase(size)"
                placeholder="name@example.com"
              ></co-input>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <co-input label="Default" placeholder="Search"></co-input>
            <co-input label="Required" [required]="true" placeholder="Required"></co-input>
            <co-input label="Danger" [danger]="true" value="Invalid value"></co-input>
            <co-input label="Disabled" [disabled]="true" value="Disabled value"></co-input>
            <co-input label="Read only" [readOnly]="true" value="Read only value"></co-input>
            <co-input label="With icon" placeholder="Search">
              <co-icon slot="prefix" name="search" size="sm"></co-icon>
            </co-input>
          </div>
        </section>
      </div>
    `,
  }),
};
