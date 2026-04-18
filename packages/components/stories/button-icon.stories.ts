import { html } from 'lit';
import '@cobalt/components/button-icon';
import {
  buttonIconSizes,
  buttonVariants,
  labelPositions,
  titleCase,
} from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button Icon',
};

const componentId = 'buttonIcon' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Variants</h2>
        <div class="cobalt-row">
          ${buttonVariants.map(
            (variant) =>
              html`<co-button-icon
                name="star"
                variant=${variant}
                aria-label=${titleCase(variant)}
              ></co-button-icon>`,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-row">
          ${buttonIconSizes.map(
            (size) =>
              html`<co-button-icon
                name="settings"
                size=${size}
                label=${titleCase(size)}
              ></co-button-icon>`,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Labels and shapes</h2>
        <div class="cobalt-row">
          ${labelPositions.map(
            (position) =>
              html`<co-button-icon
                name="favorite"
                label=${titleCase(position)}
                label-position=${position}
                variant="primary"
              ></co-button-icon>`,
          )}
          <co-button-icon name="add" circle variant="success" aria-label="Add"></co-button-icon>
          <co-button-icon name="delete" disabled aria-label="Disabled delete"></co-button-icon>
        </div>
      </section>
    </div>
  `,
};
