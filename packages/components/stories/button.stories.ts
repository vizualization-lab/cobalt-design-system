import { html } from 'lit';
import '@cobalt/components/button';
import '@cobalt/components/icon';
import { buttonSizes, buttonVariants, titleCase } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button',
};

const componentId = 'button' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Variants</h2>
        <div class="cobalt-row">
          ${buttonVariants.map(
            (variant) => html`<co-button variant=${variant}>${titleCase(variant)}</co-button>`,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-row">
          ${buttonSizes.map((size) => html`<co-button size=${size}>${titleCase(size)}</co-button>`)}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>States and slots</h2>
        <div class="cobalt-row">
          <co-button>Default</co-button>
          <co-button disabled>Disabled</co-button>
          <co-button loading>Loading</co-button>
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
};
