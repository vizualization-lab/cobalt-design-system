import { CoTextarea } from '@cobalt/vue';
import { fieldSizes, textareaResizeOptions, titleCase } from '@cobalt/storybook-fixtures';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Textarea',
};

const componentId = 'textarea' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoTextarea },
    setup() {
      return { fieldSizes, textareaResizeOptions, titleCase };
    },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            <CoTextarea
              v-for="size in fieldSizes"
              :key="size"
              :size="size"
              :label="titleCase(size)"
              placeholder="Write a note"
            />
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Resize modes and states</h2>
          <div class="cobalt-grid">
            <CoTextarea
              v-for="resize in textareaResizeOptions"
              :key="resize"
              :resize="resize"
              :label="titleCase(resize)"
              :rows="3"
              placeholder="Write a note"
            />
            <CoTextarea label="Danger" danger value="Needs a clearer message" />
            <CoTextarea label="Disabled" disabled value="Disabled value" />
            <CoTextarea label="Read only" read-only value="Read only value" />
          </div>
        </section>
      </div>
    `,
  }),
};
