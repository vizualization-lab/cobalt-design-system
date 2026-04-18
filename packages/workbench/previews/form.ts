import '@cobalt/components/form';
import '@cobalt/components/button';
import '@cobalt/components/button-icon';

export const title = '<co-form>';

const inputStyles = `padding: 8px; border: 1px solid var(--co-color-border-default); border-radius: 4px; font-size: 14px;`;
const labelStyles = `display: flex; flex-direction: column; gap: 4px; font-size: 14px;`;

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Native Form (co-button reset)</h2>
    <p style="font-size: 14px; color: var(--co-color-text-secondary); margin: 0 0 12px;">
      Plain <code>&lt;form&gt;</code> with <code>co-button type="reset"</code> — tests delegation without co-form.
    </p>
    <div style="max-width: 400px;">
      <form id="wb-native-form">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <label style="${labelStyles}">
            Name
            <input name="name" placeholder="Enter your name" style="${inputStyles}" />
          </label>
          <label style="${labelStyles}">
            Email
            <input name="email" type="email" placeholder="Enter your email" style="${inputStyles}" />
          </label>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <co-button type="submit" variant="primary">Submit</co-button>
            <co-button type="reset" variant="secondary">Reset</co-button>
          </div>
        </div>
      </form>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Native Form (co-button-icon reset)</h2>
    <p style="font-size: 14px; color: var(--co-color-text-secondary); margin: 0 0 12px;">
      Same test using <code>co-button-icon type="reset"</code>.
    </p>
    <div style="max-width: 400px;">
      <form id="wb-native-form-icon">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <label style="${labelStyles}">
            Note
            <input name="note" placeholder="Type something" style="${inputStyles}" />
          </label>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <co-button type="submit" variant="primary">Submit</co-button>
            <co-button-icon type="reset" name="restart-alt" variant="secondary" label="Reset"></co-button-icon>
          </div>
        </div>
      </form>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">co-form Reset</h2>
    <p style="font-size: 14px; color: var(--co-color-text-secondary); margin: 0 0 12px;">
      <code>&lt;co-form&gt;</code> wrapping native inputs — co-form creates the internal form element.
    </p>
    <div style="max-width: 400px;">
      <co-form id="wb-co-form">
        <label style="${labelStyles}">
          Message
          <input name="message" placeholder="Write a message" style="${inputStyles}" />
        </label>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <co-button type="submit" variant="primary">Submit</co-button>
          <co-button type="reset" variant="secondary">Reset</co-button>
        </div>
      </co-form>
    </div>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Native button baseline</h2>
    <p style="font-size: 14px; color: var(--co-color-text-secondary); margin: 0 0 12px;">
      Plain native <code>&lt;button type="reset"&gt;</code> — verifies the form itself works.
    </p>
    <div style="max-width: 400px;">
      <form id="wb-baseline-form">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <label style="${labelStyles}">
            Test
            <input name="test" placeholder="Type and reset" style="${inputStyles}" />
          </label>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <button type="submit" style="padding: 8px 16px;">Submit</button>
            <button type="reset" style="padding: 8px 16px;">Reset</button>
          </div>
        </div>
      </form>
    </div>
  </section>
`;
