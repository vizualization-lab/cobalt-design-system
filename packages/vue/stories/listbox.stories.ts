import { CoListbox, CoOption } from '@cobalt/vue';
import { fruits } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Listbox',
};

const componentId = 'listbox' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoListbox, CoOption },
    setup() {
      return { fruits };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Selection modes</h2>
          <div class="cobalt-grid">
            <CoListbox label="Single selection" name="single-fruit">
              <CoOption
                v-for="(fruit, index) in fruits"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 0"
              >
                {{ fruit.label }}
              </CoOption>
            </CoListbox>

            <CoListbox label="Multiple selection" name="multi-fruit" multiple-choice>
              <CoOption
                v-for="(fruit, index) in fruits"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index < 2"
              >
                {{ fruit.label }}
              </CoOption>
            </CoListbox>
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Layout and states</h2>
          <div class="cobalt-grid">
            <CoListbox label="Horizontal" name="horizontal-fruit" orientation="horizontal">
              <CoOption
                v-for="(fruit, index) in fruits.slice(0, 3)"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 1"
              >
                {{ fruit.label }}
              </CoOption>
            </CoListbox>

            <CoListbox label="Disabled" name="disabled-fruit" disabled>
              <CoOption
                v-for="(fruit, index) in fruits.slice(0, 3)"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 0"
              >
                {{ fruit.label }}
              </CoOption>
            </CoListbox>
          </div>
        </section>
      </div>
    `,
  }),
};
