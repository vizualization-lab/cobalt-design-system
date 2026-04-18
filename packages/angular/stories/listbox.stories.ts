import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoListbox, CoOption } from '@cobalt/angular';
import { fruits } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Listbox',
};

const componentId = 'listbox' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoListbox, CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { fruits },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Selection modes</h2>
          <div class="cobalt-grid">
            <co-listbox label="Single selection" name="single-fruit">
              @for (fruit of fruits; track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index === 0">{{ fruit.label }}</co-option>
              }
            </co-listbox>

            <co-listbox label="Multiple selection" name="multi-fruit" [multipleChoice]="true">
              @for (fruit of fruits; track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index < 2">{{ fruit.label }}</co-option>
              }
            </co-listbox>
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Layout and states</h2>
          <div class="cobalt-grid">
            <co-listbox label="Horizontal" name="horizontal-fruit" orientation="horizontal">
              @for (fruit of fruits.slice(0, 3); track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index === 1">{{ fruit.label }}</co-option>
              }
            </co-listbox>

            <co-listbox label="Disabled" name="disabled-fruit" [disabled]="true">
              @for (fruit of fruits.slice(0, 3); track fruit.value; let index = $index) {
                <co-option [value]="fruit.value" [checked]="index === 0">{{ fruit.label }}</co-option>
              }
            </co-listbox>
          </div>
        </section>
      </div>
    `,
  }),
};
