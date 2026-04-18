import { CoCombobox, CoOption } from '@cobalt/vue';
import { autocompleteModes, fieldSizes, fruits, titleCase } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Combobox',
};

const componentId = 'combobox' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoCombobox, CoOption },
    setup() {
      return { autocompleteModes, fieldSizes, fruits, titleCase };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            <CoCombobox
              v-for="size in fieldSizes"
              :key="size"
              :label="titleCase(size)"
              :name="'combobox-' + size"
              :size="size"
              show-all-on-empty
            >
              <CoOption v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
                {{ fruit.label }}
              </CoOption>
            </CoCombobox>
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Modes and states</h2>
          <div class="cobalt-grid">
            <CoCombobox label="Multiple" name="combobox-multiple" multiple show-all-on-empty>
              <CoOption v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
                {{ fruit.label }}
              </CoOption>
            </CoCombobox>

            <CoCombobox
              v-for="mode in autocompleteModes"
              :key="mode"
              :label="'Autocomplete ' + mode"
              :name="'combobox-' + mode"
              :autocomplete="mode"
              show-all-on-empty
            >
              <CoOption v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
                {{ fruit.label }}
              </CoOption>
            </CoCombobox>

            <CoCombobox label="Danger" name="combobox-danger" danger>
              <CoOption v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
                {{ fruit.label }}
              </CoOption>
            </CoCombobox>

            <CoCombobox label="Disabled" name="combobox-disabled" disabled>
              <CoOption v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
                {{ fruit.label }}
              </CoOption>
            </CoCombobox>
          </div>
        </section>
      </div>
    `,
  }),
};
