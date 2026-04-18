import { CoButtonIcon } from '@cobalt/vue';
import {
  buttonIconSizes,
  buttonVariants,
  labelPositions,
  titleCase,
} from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button Icon',
};

const componentId = 'buttonIcon' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoButtonIcon },
    setup() {
      return { buttonIconSizes, buttonVariants, labelPositions, titleCase };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Variants</h2>
          <div class="cobalt-row">
            <CoButtonIcon
              v-for="variant in buttonVariants"
              :key="variant"
              name="star"
              :variant="variant"
              :aria-label="titleCase(variant)"
            />
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-row">
            <CoButtonIcon
              v-for="size in buttonIconSizes"
              :key="size"
              name="settings"
              :size="size"
              :label="titleCase(size)"
            />
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Labels and shapes</h2>
          <div class="cobalt-row">
            <CoButtonIcon
              v-for="position in labelPositions"
              :key="position"
              name="favorite"
              :label="titleCase(position)"
              :label-position="position"
              variant="primary"
            />
            <CoButtonIcon name="add" circle variant="success" aria-label="Add" />
            <CoButtonIcon name="delete" disabled aria-label="Disabled delete" />
          </div>
        </section>
      </div>
    `,
  }),
};
