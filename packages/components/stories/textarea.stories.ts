import { html } from 'lit';
import '@cobalt/components/textarea';
import { fieldSizes, textareaResizeOptions, titleCase } from '@cobalt/storybook-fixtures';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Textarea',
};

const componentId = 'textarea' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Sizes</h2>
        <div class="cobalt-grid">
          ${fieldSizes.map(
            (size) =>
              html`<co-textarea
                size=${size}
                label=${titleCase(size)}
                placeholder="Write a note"
              ></co-textarea>`,
          )}
        </div>
      </section>

      <section class="cobalt-section">
        <h2>Resize modes and states</h2>
        <div class="cobalt-grid">
          ${textareaResizeOptions.map(
            (resize) =>
              html`<co-textarea
                resize=${resize}
                label=${titleCase(resize)}
                rows="3"
                placeholder="Write a note"
              ></co-textarea>`,
          )}
          <co-textarea label="Danger" danger value="Needs a clearer message"></co-textarea>
          <co-textarea label="Disabled" disabled value="Disabled value"></co-textarea>
          <co-textarea label="Read only" readOnly value="Read only value"></co-textarea>
        </div>
      </section>
    </div>
  `,
};
