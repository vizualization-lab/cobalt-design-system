import { html } from 'lit';
import '@cobalt/components/listbox';
import '@cobalt/components/option';
import { fruits } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Listbox',
};

const componentId = 'listbox' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Selection modes</h2>
        <div class="cobalt-grid">
          <co-listbox label="Single selection" name="single-fruit">
            ${fruits.map(
              (fruit, index) =>
                html`<co-option value=${fruit.value} ?checked=${index === 0}
                  >${fruit.label}</co-option
                >`,
            )}
          </co-listbox>

          <co-listbox label="Multiple selection" name="multi-fruit" multiple-choice>
            ${fruits.map(
              (fruit, index) =>
                html`<co-option value=${fruit.value} ?checked=${index < 2}
                  >${fruit.label}</co-option
                >`,
            )}
          </co-listbox>
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Layout and states</h2>
        <div class="cobalt-grid">
          <co-listbox label="Horizontal" name="horizontal-fruit" orientation="horizontal">
            ${fruits
              .slice(0, 3)
              .map(
                (fruit, index) =>
                  html`<co-option value=${fruit.value} ?checked=${index === 1}
                    >${fruit.label}</co-option
                  >`,
              )}
          </co-listbox>

          <co-listbox label="Disabled" name="disabled-fruit" disabled>
            ${fruits
              .slice(0, 3)
              .map(
                (fruit, index) =>
                  html`<co-option value=${fruit.value} ?checked=${index === 0}
                    >${fruit.label}</co-option
                  >`,
              )}
          </co-listbox>
        </div>
      </section>
    </div>
  `,
};
