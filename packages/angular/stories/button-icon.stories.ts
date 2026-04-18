import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoButtonIcon } from '@cobalt/angular';
import {
  buttonIconSizes,
  buttonVariants,
  labelPositions,
  titleCase,
} from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button Icon',
};

const componentId = 'buttonIcon' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoButtonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { buttonIconSizes, buttonVariants, labelPositions, titleCase },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Variants</h2>
          <div class="cobalt-row">
            @for (variant of buttonVariants; track variant) {
              <co-button-icon
                name="star"
                [variant]="variant"
                [attr.aria-label]="titleCase(variant)"
              ></co-button-icon>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-row">
            @for (size of buttonIconSizes; track size) {
              <co-button-icon name="settings" [size]="size" [label]="titleCase(size)"></co-button-icon>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Labels and shapes</h2>
          <div class="cobalt-row">
            @for (position of labelPositions; track position) {
              <co-button-icon
                name="favorite"
                [label]="titleCase(position)"
                [labelPosition]="position"
                variant="primary"
              ></co-button-icon>
            }
            <co-button-icon name="add" [circle]="true" variant="success" aria-label="Add"></co-button-icon>
            <co-button-icon name="delete" [disabled]="true" aria-label="Disabled delete"></co-button-icon>
          </div>
        </section>
      </div>
    `,
  }),
};
