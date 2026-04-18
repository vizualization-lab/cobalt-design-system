import { html } from 'lit';
import '@cobalt/components/input';
import '@cobalt/components/icon';
import { fieldSizes, titleCase } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Input',
};

const componentId = 'input' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-grid">
          ${fieldSizes.map(
            (size) =>
              html`<co-input
                size=${size}
                label=${titleCase(size)}
                placeholder="name@example.com"
              ></co-input>`,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>States</h2>
        <div class="cobalt-grid">
          <co-input label="Default" placeholder="Search"></co-input>
          <co-input label="Required" required placeholder="Required"></co-input>
          <co-input label="Danger" danger value="Invalid value"></co-input>
          <co-input label="Disabled" disabled value="Disabled value"></co-input>
          <co-input label="Read only" readOnly value="Read only value"></co-input>
          <co-input label="With icon" placeholder="Search">
            <co-icon slot="prefix" name="search" size="sm"></co-icon>
          </co-input>
        </div>
      </section>
    </div>
  `,
};
