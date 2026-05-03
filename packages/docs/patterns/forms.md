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

### Inline Validation

Validate fields on blur, not on every keystroke. Display error messages directly below the invalid field.

```html
<co-label for="password" required>Password</co-label>
<co-input id="password" type="password" required shows-feedback-for="error">
  <span slot="feedback">Password must be at least 8 characters.</span>
</co-input>
```

> **Warning:** Never rely solely on color to indicate errors. Always pair the red border with an icon and descriptive text.

### Validation Summary

For complex forms, display a summary of all errors at the top of the form after a failed submission. Each error should link to the corresponding field.

```html
<div class="co-form-summary" role="alert">
  <strong>Please fix the following errors:</strong>
  <ul>
    <li><a href="#name">Full name is required</a></li>
    <li><a href="#email">Enter a valid email address</a></li>
  </ul>
</div>
```

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
