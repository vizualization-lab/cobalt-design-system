import '@cobalt/components/form';
import '@cobalt/components/button';
import '@cobalt/components/button-icon';
import '@cobalt/components/input';
import '@cobalt/components/textarea';
import '@cobalt/components/select';
import '@cobalt/components/option';
import '@cobalt/components/radio-group';
import '@cobalt/components/radio';
import '@cobalt/components/checkbox-group';
import '@cobalt/components/checkbox';
import { Validator } from '@cobalt/components/validation';

export const title = '<co-form>';

const inputStyles = `padding: 8px; border: 1px solid var(--co-color-border-default); border-radius: 4px; font-size: 14px;`;
const labelStyles = `display: flex; flex-direction: column; gap: 4px; font-size: 14px;`;
const validationGridStyles = `display: grid; gap: 16px; max-width: 520px;`;

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
    <h2 class="wb-heading">Validation Examples</h2>
    <p style="font-size: 14px; color: var(--co-color-text-secondary); margin: 0 0 12px; max-width: 720px;">
      Demonstrates Cobalt declarative validators plus custom Lion validators. Try <code>admin</code>
      for username, <code>taken</code> for project slug, a mismatched confirmation email, or submit
      the empty form to inspect the invalid submit event.
    </p>
    <div style="display: grid; grid-template-columns: minmax(320px, 520px) minmax(280px, 1fr); gap: 24px; align-items: start;">
      <co-form id="wb-validation-form" label="Validation examples">
        <div style="${validationGridStyles}">
          <co-input
            id="wb-val-name"
            label="Full name"
            name="fullName"
            required
            required-message="Enter your full name."
          ></co-input>

          <co-input
            id="wb-val-email"
            label="Email"
            name="email"
            type="email"
            required
            required-message="Enter your email."
            email-message="Enter a valid email address."
          ></co-input>

          <co-input
            id="wb-val-confirm-email"
            label="Confirm email"
            name="confirmEmail"
            help-text="Custom cross-field validator: must match Email when filled."
          ></co-input>

          <co-input
            id="wb-val-code"
            label="Invite code"
            name="inviteCode"
            pattern="[A-Z0-9]{6}"
            pattern-message="Enter a 6-character uppercase invite code."
          ></co-input>

          <co-input
            id="wb-val-username"
            label="Username"
            name="username"
            help-text="Custom sync validator: admin is reserved."
          ></co-input>

          <co-input
            id="wb-val-slug"
            label="Project slug"
            name="projectSlug"
            help-text="Custom async validator: taken is unavailable."
          ></co-input>

          <co-textarea
            id="wb-val-summary"
            label="Summary"
            name="summary"
            minlength="10"
            maxlength="40"
            minlength-message="Enter at least 10 characters."
            maxlength-message="Enter no more than 40 characters."
          ></co-textarea>

          <co-select
            id="wb-val-department"
            label="Department"
            name="department"
            has-no-default-selected
            required
            required-message="Select a department."
          >
            <co-option value="engineering">Engineering</co-option>
            <co-option value="design">Design</co-option>
            <co-option value="support">Support</co-option>
          </co-select>

          <co-radio-group id="wb-val-plan" name="plan" required required-message="Select a plan.">
            <span slot="label">Plan</span>
            <co-radio value="basic"><span slot="label">Basic</span></co-radio>
            <co-radio value="pro"><span slot="label">Pro</span></co-radio>
          </co-radio-group>

          <co-checkbox-group
            id="wb-val-terms"
            name="terms"
            required
            required-message="Accept the terms to continue."
          >
            <span slot="label">Terms</span>
            <co-checkbox value="accepted"><span slot="label">I accept the terms.</span></co-checkbox>
          </co-checkbox-group>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <co-button type="submit" variant="primary">Submit</co-button>
            <co-button type="reset" variant="secondary">Reset</co-button>
          </div>
        </div>
      </co-form>

      <div>
        <div style="font-size: 13px; color: var(--co-color-text-secondary); line-height: 1.5;">
          <strong style="color: var(--co-color-text-default);">Validators shown:</strong>
          <ul style="margin: 8px 0 0; padding-left: 18px;">
            <li><code>required</code>, <code>type="email"</code>, <code>pattern</code>, <code>minlength</code>, and <code>maxlength</code></li>
            <li><code>ReservedUsername</code>: sync custom validator on Username</li>
            <li><code>ProjectSlugAvailable</code>: async custom validator on Project slug</li>
            <li><code>MatchesFieldValue</code>: cross-field validator on Confirm email</li>
            <li>Group-level required validation for select, radio, and checkbox groups</li>
          </ul>
        </div>
        <pre
          id="wb-validation-event-log"
          style="min-height: 160px; margin: 16px 0 0; padding: 12px; overflow: auto; background: var(--co-color-surface-static-default); border: 1px solid var(--co-color-border-default); border-radius: 6px; font-size: 12px;"
        >Submit the form to inspect co-submit or co-invalid-submit details.</pre>
      </div>
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

class ReservedUsername extends Validator {
  static override get validatorName() {
    return 'ReservedUsername';
  }

  override execute(value: unknown) {
    return String(value).trim().toLowerCase() === 'admin';
  }
}

class ProjectSlugAvailable extends Validator {
  static override get validatorName() {
    return 'ProjectSlugAvailable';
  }

  static override get async() {
    return true;
  }

  override async execute(value: unknown) {
    await new Promise((resolve) => window.setTimeout(resolve, 250));
    return String(value).trim().toLowerCase() === 'taken';
  }
}

class MatchesFieldValue extends Validator {
  static override get validatorName() {
    return 'MatchesFieldValue';
  }

  override execute(value: unknown, source?: WorkbenchField) {
    return String(value) !== String(source?.modelValue ?? '');
  }
}

type WorkbenchField = HTMLElement & {
  modelValue?: unknown;
  value?: string;
  validators?: Validator[];
};

type WorkbenchSubmitEvent = CustomEvent<{
  errors?: Array<{
    name: string;
    messages: string[];
    validationStates: Record<string, Record<string, unknown>>;
  }>;
  modelValue: Record<string, unknown>;
  serializedValue: Record<string, unknown>;
}>;

export async function setup(root: HTMLElement) {
  const form = root.querySelector<HTMLElement>('#wb-validation-form');
  const email = root.querySelector<WorkbenchField>('#wb-val-email');
  const confirmEmail = root.querySelector<WorkbenchField>('#wb-val-confirm-email');
  const username = root.querySelector<WorkbenchField>('#wb-val-username');
  const slug = root.querySelector<WorkbenchField>('#wb-val-slug');
  const eventLog = root.querySelector<HTMLElement>('#wb-validation-event-log');
  if (!form || !email || !confirmEmail || !username || !slug || !eventLog) return;

  confirmEmail.validators = [
    new MatchesFieldValue(email, {
      getMessage: () => 'Enter the same email address.',
    }),
  ];

  username.validators = [
    new ReservedUsername(undefined, {
      getMessage: () => 'Choose a username other than admin.',
    }),
  ];

  slug.validators = [
    new ProjectSlugAvailable(undefined, {
      getMessage: () => 'This project slug is already taken.',
    }),
  ];

  const logEvent = (event: Event) => {
    const submitEvent = event as WorkbenchSubmitEvent;
    eventLog.textContent = JSON.stringify(
      {
        type: event.type,
        errors: submitEvent.detail.errors?.map((error) => ({
          name: error.name,
          messages: error.messages,
          validationStates: error.validationStates.error,
        })),
        serializedValue: submitEvent.detail.serializedValue,
      },
      null,
      2,
    );
  };

  form.addEventListener('co-submit', logEvent);
  form.addEventListener('co-invalid-submit', logEvent);
}
