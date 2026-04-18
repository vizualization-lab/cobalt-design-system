import { CoButton, CoForm, CoInput, CoTextarea } from '@cobalt/vue';
import { createVuePlaygroundStory } from './playground.js';

export default {
  title: 'Components/Form',
};

const componentId = 'form' as const;

export const Playground = createVuePlaygroundStory(componentId);

export const Overview = {
  render: () => ({
    components: { CoButton, CoForm, CoInput, CoTextarea },
    template: `
      <div class="cobalt-story cobalt-stack">
        <section class="cobalt-section">
          <h2>Cobalt form controls</h2>
          <CoForm class="cobalt-panel" label="Feedback" name="feedback">
            <div class="cobalt-stack">
              <CoInput label="Name" name="name" required placeholder="Ada Lovelace" />
              <CoInput label="Email" name="email" type="email" placeholder="ada@example.com" />
              <CoTextarea label="Message" name="message" :rows="4" placeholder="Write a message" />
              <div class="cobalt-form-row">
                <CoButton type="submit" variant="primary">Submit</CoButton>
                <CoButton type="reset" variant="secondary">Reset</CoButton>
              </div>
            </div>
          </CoForm>
        </section>

        <section class="cobalt-section">
          <h2>Native form baseline</h2>
          <form class="cobalt-panel">
            <label class="cobalt-native-field">
              Native input
              <input name="native" placeholder="Type and reset" />
            </label>
            <div class="cobalt-form-row">
              <CoButton type="submit" variant="primary">Submit</CoButton>
              <CoButton type="reset" variant="secondary">Reset</CoButton>
            </div>
          </form>
        </section>
      </div>
    `,
  }),
};
