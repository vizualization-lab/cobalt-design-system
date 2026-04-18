import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoTextarea } from '@cobalt/angular';
import { fieldSizes, textareaResizeOptions, titleCase } from '@cobalt/storybook-fixtures';
import { createAngularPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Textarea',
};

const componentId = 'textarea' as const;

export const Playground = createAngularPlaygroundStory(componentId);

const moduleMetadata = {
  imports: [CoTextarea],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

export const Overview = {
  render: () => ({
    moduleMetadata,
    props: { fieldSizes, textareaResizeOptions, titleCase },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Sizes</h2>
          <div class="cobalt-grid">
            @for (size of fieldSizes; track size) {
              <co-textarea
                [size]="size"
                [label]="titleCase(size)"
                placeholder="Write a note"
              ></co-textarea>
            }
          </div>
        </section>

        <section class="cobalt-section">
          <h2>Resize modes and states</h2>
          <div class="cobalt-grid">
            @for (resize of textareaResizeOptions; track resize) {
              <co-textarea
                [resize]="resize"
                [label]="titleCase(resize)"
                [rows]="3"
                placeholder="Write a note"
              ></co-textarea>
            }
            <co-textarea label="Danger" [danger]="true" value="Needs a clearer message"></co-textarea>
            <co-textarea label="Disabled" [disabled]="true" value="Disabled value"></co-textarea>
            <co-textarea label="Read only" [readOnly]="true" value="Read only value"></co-textarea>
          </div>
        </section>
      </div>
    `,
  }),
};
