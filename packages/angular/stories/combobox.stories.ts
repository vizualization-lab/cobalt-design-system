import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoCombobox, CoOption } from '@cobalt/angular';
import { autocompleteModes, fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Combobox',
};

const componentId = 'combobox' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoCombobox, CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { autocompleteModes, fieldSizes, fruits, titleCase },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            @for (size of fieldSizes; track size) {
              <co-combobox
                [label]="titleCase(size)"
                [name]="'combobox-' + size"
                [size]="size"
                [showAllOnEmpty]="true"
              >
                @for (fruit of fruits; track fruit.value) {
                  <co-option [value]="fruit.value">{{ fruit.label }}</co-option>
                }
              </co-combobox>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Modes and states</h2>
          <div class="cobalt-grid">
            <co-combobox label="Multiple" name="combobox-multiple" [multiple]="true" [showAllOnEmpty]="true">
              @for (fruit of fruits; track fruit.value) {
                <co-option [value]="fruit.value">{{ fruit.label }}</co-option>
              }
            </co-combobox>

            @for (mode of autocompleteModes; track mode) {
              <co-combobox
                [label]="'Autocomplete ' + mode"
                [name]="'combobox-' + mode"
                [autocomplete]="mode"
                [showAllOnEmpty]="true"
              >
                @for (fruit of fruits; track fruit.value) {
                  <co-option [value]="fruit.value">{{ fruit.label }}</co-option>
                }
              </co-combobox>
            }

            <co-combobox label="Danger" name="combobox-danger" [danger]="true">
              @for (fruit of fruits; track fruit.value) {
                <co-option [value]="fruit.value">{{ fruit.label }}</co-option>
              }
            </co-combobox>

            <co-combobox label="Disabled" name="combobox-disabled" [disabled]="true">
              @for (fruit of fruits; track fruit.value) {
                <co-option [value]="fruit.value">{{ fruit.label }}</co-option>
              }
            </co-combobox>
          </div>
        </section>
      </div>
    `,
  }),
};
