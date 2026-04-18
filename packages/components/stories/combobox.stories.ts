import { html } from 'lit';
import '@cobalt/components/combobox';
import '@cobalt/components/option';
import { autocompleteModes, fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Combobox',
};

const componentId = 'combobox' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-grid">
          ${fieldSizes.map(
            (size) => html`
              <co-combobox
                label=${titleCase(size)}
                name="combobox-${size}"
                size=${size}
                show-all-on-empty
              >
                ${fruits.map(
                  (fruit) => html`<co-option value=${fruit.value}>${fruit.label}</co-option>`,
                )}
              </co-combobox>
            `,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Modes and states</h2>
        <div class="cobalt-grid">
          <co-combobox label="Multiple" name="combobox-multiple" multiple show-all-on-empty>
            ${fruits.map(
              (fruit) => html`<co-option value=${fruit.value}>${fruit.label}</co-option>`,
            )}
          </co-combobox>
          ${autocompleteModes.map(
            (mode) => html`
              <co-combobox
                label="Autocomplete ${mode}"
                name="combobox-${mode}"
                autocomplete=${mode}
                show-all-on-empty
              >
                ${fruits.map(
                  (fruit) => html`<co-option value=${fruit.value}>${fruit.label}</co-option>`,
                )}
              </co-combobox>
            `,
          )}
          <co-combobox label="Danger" name="combobox-danger" danger>
            ${fruits.map(
              (fruit) => html`<co-option value=${fruit.value}>${fruit.label}</co-option>`,
            )}
          </co-combobox>
          <co-combobox label="Disabled" name="combobox-disabled" disabled>
            ${fruits.map(
              (fruit) => html`<co-option value=${fruit.value}>${fruit.label}</co-option>`,
            )}
          </co-combobox>
        </div>
      </section>
    </div>
  `,
};
