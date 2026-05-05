# Forms & Validation

Forms are the primary way users provide input in an application. Consistent form patterns reduce cognitive load and help users complete tasks efficiently.

## Form Layout

Use a single-column layout for most forms. Multi-column layouts are acceptable only for closely related short fields such as city, state, and zip code.

```html
<co-form>
  <co-input label="Full name" name="name" required></co-input>

  <co-input label="Email address" name="email" type="email" required>
    <span slot="help-text">We will never share your email.</span>
  </co-input>

  <div style="display: flex; gap: 12px;">
    <co-button type="submit" variant="primary">Submit</co-button>
    <co-button type="reset" variant="secondary">Cancel</co-button>
  </div>
</co-form>
```

## External Label Layouts

Use a field component's built-in `label` API by default. Reach for `co-label` only when the label must be a separate DOM element for layout or integration reasons.

```html
<div style="display: grid; gap: 8px;">
  <co-label for="billing-code" required>Billing code</co-label>
  <co-input id="billing-code" name="billingCode"></co-input>
</div>
```

## Required Field Indicators

Mark required fields with an asterisk and provide a legend at the top of the form. Optional fields should be labeled with "(optional)" when most fields are required.

```html
<co-form>
  <p class="co-form-legend">Fields marked with <span aria-hidden="true">*</span> are required.</p>

  <co-label for="company" required>Company name</co-label>
  <co-input id="company"></co-input>

  <co-label for="website" optional>Website</co-label>
  <co-input id="website" type="url"></co-input>
</co-form>
```

## Validation States

For API details, supported rules, custom Lion validators, and event detail shapes, use the canonical [Form validation guide](/components/form#validation).

### Inline Validation

Cobalt follows Lion's default feedback timing: prefilled invalid fields may show feedback immediately, fields show feedback after users change and leave them, and submit attempts show all current errors. Use inline feedback for errors that can be fixed in one field, especially required, email, pattern, and length rules.

```html
<co-input
  label="Password"
  name="password"
  type="password"
  required
  minlength="8"
  required-message="Enter a password."
  minlength-message="Enter at least 8 characters."
></co-input>
```

> **Warning:** Never rely solely on color to indicate errors. Always pair the error state with descriptive text.

### Validation Summary

For complex forms, display a summary of all errors at the top of the form after a failed submission. Listen for `co-invalid-submit` to collect current field errors; `co-submit` only fires when the form is valid. Each summary item should link to the corresponding field and use the same wording as the inline message.

```html
<co-form id="account-form">
  <co-input id="name" label="Full name" name="name" required></co-input>
  <co-input id="email" label="Email" name="email" type="email" required></co-input>
  <co-button type="submit" variant="primary">Submit</co-button>
</co-form>

<script>
  const form = document.getElementById('account-form');

  form.addEventListener('co-invalid-submit', (event) => {
    renderErrorSummary(event.detail.errors);
  });
</script>
```

Use inline feedback alone for short forms with one or two fields. Add a submit-time summary when the form is long, spans sections, or errors may be out of view after submit.

## Error Message Guidelines

For error message wording and formatting rules, see [Content & Writing — Error Messages](../guidance/content.md#error-messages).

## Form Submission

Disable the submit button and show a loading indicator during submission. Restore the button state on success or failure.

```html
<co-button type="submit" variant="primary" loading disabled>Submitting...</co-button>
```

After successful submission, either redirect the user or display an inline success message. Do not use a toast for critical confirmations like payment processing.

## Accessibility Checklist

- All inputs have a visible label, either through the field `label` API or an external `<co-label>`.
- Error messages stay on the field component and remain linked to the control through Lion's feedback wiring or `aria-describedby` when needed.
- The validation summary uses `role="alert"` so screen readers announce it.
- Focus is moved to the first invalid field or the error summary after a failed submission.
- Related native controls use standard `<fieldset>` and `<legend>` markup when a shared group label is required.
