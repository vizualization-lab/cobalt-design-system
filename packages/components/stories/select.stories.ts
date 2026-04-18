import { html } from 'lit';
import '@cobalt/components/select';
import '@cobalt/components/option';
import { fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Select',
};

const componentId = 'select' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-grid">
          ${fieldSizes.map(
            (size) => html`
              <co-select name="select-${size}" size=${size}>
                <span slot="label">${titleCase(size)}</span>
                ${fruits.map(
                  (fruit, index) =>
                    html`<co-option value=${fruit.value} ?checked=${index === 0}
                      >${fruit.label}</co-option
                    >`,
                )}
              </co-select>
            `,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>States</h2>
        <div class="cobalt-grid">
          <co-select name="select-default">
            <span slot="label">Default</span>
            <span slot="help-text">Choose one option.</span>
            ${fruits.map(
              (fruit, index) =>
                html`<co-option value=${fruit.value} ?checked=${index === 0}
                  >${fruit.label}</co-option
                >`,
            )}
          </co-select>

          <co-select name="select-placeholder" has-no-default-selected>
            <span slot="label">No default selected</span>
            ${fruits.map(
              (fruit) => html`<co-option value=${fruit.value}>${fruit.label}</co-option>`,
            )}
          </co-select>

          <co-select name="select-danger" danger required>
            <span slot="label">Danger</span>
            <span slot="feedback">Select a fruit.</span>
            ${fruits.map(
              (fruit, index) =>
                html`<co-option value=${fruit.value} ?checked=${index === 0}
                  >${fruit.label}</co-option
                >`,
            )}
          </co-select>

          <co-select name="select-disabled" disabled>
            <span slot="label">Disabled</span>
            ${fruits.map(
              (fruit, index) =>
                html`<co-option value=${fruit.value} ?checked=${index === 0}
                  >${fruit.label}</co-option
                >`,
            )}
          </co-select>
        </div>
      </section>
    </div>
  `,
};
