import { CoOption, CoSelect } from '@cobalt/vue';
import { fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Select',
};

const componentId = 'select' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoOption, CoSelect },
    setup() {
      return { fieldSizes, fruits, titleCase };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            <CoSelect
              v-for="size in fieldSizes"
              :key="size"
              :name="'select-' + size"
              :size="size"
            >
              <span slot="label">{{ titleCase(size) }}</span>
              <CoOption
                v-for="(fruit, index) in fruits"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 0"
              >
                {{ fruit.label }}
              </CoOption>
            </CoSelect>
          </div>
        </section>

        <section class="cobalt-section">
          <h2>States</h2>
          <div class="cobalt-grid">
            <CoSelect name="select-default">
              <span slot="label">Default</span>
              <span slot="help-text">Choose one option.</span>
              <CoOption
                v-for="(fruit, index) in fruits"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 0"
              >
                {{ fruit.label }}
              </CoOption>
            </CoSelect>

            <CoSelect name="select-placeholder" has-no-default-selected>
              <span slot="label">No default selected</span>
              <CoOption v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
                {{ fruit.label }}
              </CoOption>
            </CoSelect>

            <CoSelect name="select-danger" danger required>
              <span slot="label">Danger</span>
              <span slot="feedback">Select a fruit.</span>
              <CoOption
                v-for="(fruit, index) in fruits"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 0"
              >
                {{ fruit.label }}
              </CoOption>
            </CoSelect>

            <CoSelect name="select-disabled" disabled>
              <span slot="label">Disabled</span>
              <CoOption
                v-for="(fruit, index) in fruits"
                :key="fruit.value"
                :value="fruit.value"
                :checked="index === 0"
              >
                {{ fruit.label }}
              </CoOption>
            </CoSelect>
          </div>
        </section>
      </div>
    `,
  }),
};
