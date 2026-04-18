import { CoTextarea } from '@cobalt/react';
import { fieldSizes, textareaResizeOptions, titleCase } from '@cobalt/storybook-fixtures';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Textarea',
};

const componentId = 'textarea' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Sizes</h2>
        <div className="cobalt-grid">
          {fieldSizes.map((size) => (
            <CoTextarea key={size} size={size} label={titleCase(size)} placeholder="Write a note" />
          ))}
        </div>
      </section>

      <section className="cobalt-section">
        <h2>Resize modes and states</h2>
        <div className="cobalt-grid">
          {textareaResizeOptions.map((resize) => (
            <CoTextarea
              key={resize}
              resize={resize}
              label={titleCase(resize)}
              rows={3}
              placeholder="Write a note"
            />
          ))}
          <CoTextarea label="Danger" danger value="Needs a clearer message" />
          <CoTextarea label="Disabled" disabled value="Disabled value" />
          <CoTextarea label="Read only" readOnly value="Read only value" />
        </div>
      </section>
    </div>
  ),
};
