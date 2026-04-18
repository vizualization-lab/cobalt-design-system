import { CoButton, CoForm, CoInput, CoTextarea } from '@cobalt/react';
import { createReactPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Form',
};

const componentId = 'form' as const;

export const Playground = createReactPlaygroundStory(componentId);

export const Overview = {
  render: () => (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <h2>Cobalt form controls</h2>
        <CoForm className="cobalt-panel" label="Feedback" name="feedback">
          <div className="cobalt-stack">
            <CoInput label="Name" name="name" required placeholder="Ada Lovelace" />
            <CoInput label="Email" name="email" type="email" placeholder="ada@example.com" />
            <CoTextarea label="Message" name="message" rows={4} placeholder="Write a message" />
            <div className="cobalt-form-row">
              <CoButton type="submit" variant="primary">
                Submit
              </CoButton>
              <CoButton type="reset" variant="secondary">
                Reset
              </CoButton>
            </div>
          </div>
        </CoForm>
      </section>

      <section className="cobalt-section">
        <h2>Native form baseline</h2>
        <form className="cobalt-panel">
          <label className="cobalt-native-field">
            Native input
            <input name="native" placeholder="Type and reset" />
          </label>
          <div className="cobalt-form-row">
            <CoButton type="submit" variant="primary">
              Submit
            </CoButton>
            <CoButton type="reset" variant="secondary">
              Reset
            </CoButton>
          </div>
        </form>
      </section>
    </div>
  ),
};
