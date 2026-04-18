import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoOption, CoSelect } from '@cobalt/angular';
import { fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Select',
};

const componentId = 'select' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoOption, CoSelect],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { fieldSizes, fruits, titleCase },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            @for (size of fieldSizes; track size) {
              <co-select [name]="'select-' + size" [size]="size">
                <span slot="label">{{ titleCase(size) }}</span>
                @for (fruit of fruits; track fruit.value; let index = $index) {
                  <co-option [value]="fruit.value" [checked]="index === 0">
                    {{ fruit.label }}
                  </co-option>
                }
              </co-select>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <co-select name="select-default">
              <span slot="label">Default</span>
              <span slot="help-text">Choose one option.</span>
              @for (fruit of fruits; track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index === 0">
                  {{ fruit.label }}
                </co-option>
              }
            </co-select>

            <co-select name="select-placeholder" [hasNoDefaultSelected]="true">
              <span slot="label">No default selected</span>
              @for (fruit of fruits; track fruit.value) {
                <co-option [value]="fruit.value">{{ fruit.label }}</co-option>
              }
            </co-select>

            <co-select name="select-danger" [danger]="true" [required]="true">
              <span slot="label">Danger</span>
              <span slot="feedback">Select a fruit.</span>
              @for (fruit of fruits; track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index === 0">
                  {{ fruit.label }}
                </co-option>
              }
            </co-select>

            <co-select name="select-disabled" [disabled]="true">
              <span slot="label">Disabled</span>
              @for (fruit of fruits; track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index === 0">
                  {{ fruit.label }}
                </co-option>
              }
            </co-select>
          </div>
        </section>
      </div>
    `,
  }),
};
