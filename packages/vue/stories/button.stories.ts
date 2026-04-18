import { CoButton, CoIcon } from '@cobalt/vue';
import { buttonSizes, buttonVariants, titleCase } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Button',
};

const componentId = 'button' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoButton, CoIcon },
    setup() {
      return { buttonSizes, buttonVariants, titleCase };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Variants</h2>
          <div class="cobalt-row">
            <CoButton v-for="variant in buttonVariants" :key="variant" :variant="variant">
              {{ titleCase(variant) }}
            </CoButton>
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-row">
            <CoButton v-for="size in buttonSizes" :key="size" :size="size">
              {{ titleCase(size) }}
            </CoButton>
          </div>
        </section>

        <section class="cobalt-section">
          <h2>States and slots</h2>
          <div class="cobalt-row">
            <CoButton>Default</CoButton>
            <CoButton disabled>Disabled</CoButton>
            <CoButton loading>Loading</CoButton>
            <CoButton variant="primary">
              <CoIcon slot="prefix" name="add" size="sm" />
              Add item
            </CoButton>
            <CoButton href="https://example.com" target="_blank">
              Open link
              <CoIcon slot="suffix" name="open-in-new" size="sm" />
            </CoButton>
          </div>
        </section>
      </div>
    `,
  }),
};
