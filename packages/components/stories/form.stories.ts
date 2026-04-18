import { html } from 'lit';
import '@cobalt/components/form';
import '@cobalt/components/input';
import '@cobalt/components/textarea';
import '@cobalt/components/button';
import { createWebPlaygroundStory } from './playground.js';

export default {
  title: 'Components/Form',
};

const componentId = 'form' as const;

export const Playground = createWebPlaygroundStory(componentId);

export const Overview = {
  render: () => html`
    <div class="cobalt-story cobalt-stack">
      <section class="cobalt-section">
        <h2>Cobalt form controls</h2>
        <co-form class="cobalt-panel" label="Feedback" name="feedback">
          <div class="cobalt-stack">
            <co-input label="Name" name="name" required placeholder="Ada Lovelace"></co-input>
            <co-input
              label="Email"
              name="email"
              type="email"
              placeholder="ada@example.com"
            ></co-input>
            <co-textarea
              label="Message"
              name="message"
              rows="4"
              placeholder="Write a message"
            ></co-textarea>
            <div class="cobalt-form-row">
              <co-button type="submit" variant="primary">Submit</co-button>
              <co-button type="reset" variant="secondary">Reset</co-button>
            </div>
          </div>
        </co-form>
      </section>

      <section class="cobalt-section">
        <h2>Native form baseline</h2>
        <form class="cobalt-panel">
          <label class="cobalt-native-field">
            Native input
            <input name="native" placeholder="Type and reset" />
          </label>
          <div class="cobalt-form-row">
            <co-button type="submit" variant="primary">Submit</co-button>
            <co-button type="reset" variant="secondary">Reset</co-button>
          </div>
        </form>
      </section>
    </div>
  `,
};
