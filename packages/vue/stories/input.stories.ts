import { CoIcon, CoInput } from '@cobalt/vue';
import { fieldSizes, titleCase } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Input',
};

const componentId = 'input' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoIcon, CoInput },
    setup() {
      return { fieldSizes, titleCase };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            <CoInput
              v-for="size in fieldSizes"
              :key="size"
              :size="size"
              :label="titleCase(size)"
              placeholder="name@example.com"
            />
          </div>
        </section>

        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <CoInput label="Default" placeholder="Search" />
            <CoInput label="Required" required placeholder="Required" />
            <CoInput label="Danger" danger value="Invalid value" />
            <CoInput label="Disabled" disabled value="Disabled value" />
            <CoInput label="Read only" read-only value="Read only value" />
            <CoInput label="With icon" placeholder="Search">
              <CoIcon slot="prefix" name="search" size="sm" />
            </CoInput>
          </div>
        </section>
      </div>
    `,
  }),
};
