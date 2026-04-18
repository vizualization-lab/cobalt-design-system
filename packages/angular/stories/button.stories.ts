import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButton, CoIcon } from '@cobalt/angular';
import { buttonSizes, buttonVariants, titleCase } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button',
};

const componentId = 'button' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoButton, CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { buttonSizes, buttonVariants, titleCase },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Variants</h2>
          <div class="cobalt-row">
            @for (variant of buttonVariants; track variant) {
              <co-button [variant]="variant">{{ titleCase(variant) }}</co-button>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-row">
            @for (size of buttonSizes; track size) {
              <co-button [size]="size">{{ titleCase(size) }}</co-button>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>States and slots</h2>
          <div class="cobalt-row">
            <co-button>Default</co-button>
            <co-button [disabled]="true">Disabled</co-button>
            <co-button [loading]="true">Loading</co-button>
            <co-button variant="primary">
              <co-icon slot="prefix" name="add" size="sm"></co-icon>
              Add item
            </co-button>
            <co-button href="https://example.com" target="_blank">
              Open link
              <co-icon slot="suffix" name="open-in-new" size="sm"></co-icon>
            </co-button>
          </div>
        </section>
      </div>
    `,
  }),
};
