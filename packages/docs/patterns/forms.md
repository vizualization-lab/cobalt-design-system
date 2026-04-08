# Forms & Validation

Forms are the primary way users provide input in an application. Consistent form patterns reduce cognitive load and help users complete tasks efficiently.

## Form Layout

Use a single-column layout for most forms. Multi-column layouts are acceptable only for closely related short fields such as city, state, and zip code.

```html
<co-form>
  <co-form-field>
    <co-label for="name">Full name</co-label>
    <co-input id="name" required></co-input>
  </co-form-field>

  <co-form-field>
    <co-label for="email">Email address</co-label>
    <co-input id="email" type="email" required></co-input>
    <co-helper-text>We will never share your email.</co-helper-text>
  </co-form-field>

  <co-form-actions>
    <co-button type="submit" variant="primary">Submit</co-button>
    <co-button type="reset" variant="secondary">Cancel</co-button>
  </co-form-actions>
</co-form>
```

## Required Field Indicators

Mark required fields with an asterisk and provide a legend at the top of the form. Optional fields should be labeled with "(optional)" when most fields are required.

```html
<co-form>
  <p class="co-form-legend">Fields marked with <span aria-hidden="true">*</span> are required.</p>

  <co-form-field required>
    <co-label for="company">Company name</co-label>
    <co-input id="company"></co-input>
  </co-form-field>

  <co-form-field>
    <co-label for="website">Website (optional)</co-label>
    <co-input id="website" type="url"></co-input>
  </co-form-field>
</co-form>
```

## Validation States

### Inline Validation

Validate fields on blur, not on every keystroke. Display error messages directly below the invalid field.

```html
<co-form-field invalid>
  <co-label for="password">Password</co-label>
  <co-input id="password" type="password" aria-describedby="pw-error"></co-input>
  <co-error-text id="pw-error">Password must be at least 8 characters.</co-error-text>
</co-form-field>
```

> **Warning:** Never rely solely on color to indicate errors. Always pair the red border with an icon and descriptive text.

### Validation Summary

For complex forms, display a summary of all errors at the top of the form after a failed submission. Each error should link to the corresponding field.

```html
<co-alert type="error" role="alert">
  <strong>Please fix the following errors:</strong>
  <ul>
    <li><a href="#name">Full name is required</a></li>
    <li><a href="#email">Enter a valid email address</a></li>
  </ul>
</co-alert>
```

## Error Message Guidelines

| Guideline          | Good                                | Bad                             |
| ------------------ | ----------------------------------- | ------------------------------- |
| Be specific        | "Enter a date in MM/DD/YYYY format" | "Invalid input"                 |
| Use plain language | "This field is required"            | "Error: null value"             |
| Suggest a fix      | "Password needs a number"           | "Password invalid"              |
| Avoid blame        | "That email is already in use"      | "You entered a duplicate email" |

## Form Submission

Disable the submit button and show a loading indicator during submission. Restore the button state on success or failure.

```html
<co-button type="submit" variant="primary" loading disabled>
  <co-spinner size="sm" slot="prefix"></co-spinner>
  Submitting...
</co-button>
```

After successful submission, either redirect the user or display an inline success message. Do not use a toast for critical confirmations like payment processing.

## Accessibility Checklist

- All inputs have associated `<co-label>` elements.
- Error messages are linked to inputs via `aria-describedby`.
- The validation summary uses `role="alert"` so screen readers announce it.
- Focus is moved to the first invalid field or the error summary after a failed submission.
- Form groups use `<co-fieldset>` and `<co-legend>` for related controls.
