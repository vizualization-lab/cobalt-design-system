# Feedback & Status

Feedback patterns communicate the outcome of user actions and the current state of the system. Choosing the right mechanism ensures users stay informed without unnecessary interruption.

## Choosing the Right Feedback Type

| Type                | Persistence       | User action required | Use for                             |
| ------------------- | ----------------- | -------------------- | ----------------------------------- |
| Toast               | Auto-dismiss (5s) | No                   | Non-critical confirmations          |
| Inline alert        | Persistent        | Dismiss or resolve   | Contextual warnings, errors         |
| Progress indicator  | Until complete    | No                   | Multi-step or long operations       |
| Confirmation dialog | Blocking          | Yes                  | Destructive or irreversible actions |

## Toast Notifications

Toasts appear at the top-right of the viewport and dismiss automatically. Use them for lightweight confirmations that do not require user action.

```html
<co-toast type="success">
  <co-icon name="check-circle" slot="icon"></co-icon>
  Project saved successfully.
</co-toast>
```

> **Tip:** Never use toasts for error messages. Errors require persistent visibility so the user can read and act on them.

### Toast Variants

| Variant   | Token                | Purpose                                |
| --------- | -------------------- | -------------------------------------- |
| `success` | `--co-color-success` | Action completed                       |
| `info`    | `--co-color-info`    | Non-critical information               |
| `warning` | `--co-color-warning` | Potential issue, action may be needed  |
| `error`   | `--co-color-error`   | Reserved for inline alerts, not toasts |

## Inline Alerts

Inline alerts are placed within the page content, near the element they relate to. They persist until dismissed or resolved.

```html
<co-alert type="warning" dismissible>
  <co-icon name="alert-triangle" slot="icon"></co-icon>
  <strong>Storage almost full.</strong> You are using 92% of your allocated storage.
  <co-link href="/settings/billing">Upgrade plan</co-link>
</co-alert>

<co-alert type="error">
  <co-icon name="x-circle" slot="icon"></co-icon>
  <strong>Payment failed.</strong> Your card ending in 4242 was declined. Please update your payment
  method.
</co-alert>
```

## Progress Indicators

### Determinate Progress

Use a progress bar when the completion percentage is known.

```html
<co-progress value="65" max="100" label="Uploading files"> 65% complete </co-progress>
```

### Indeterminate Progress

Use a spinner when the duration is unknown. Pair it with descriptive text.

```html
<co-spinner size="md"></co-spinner>
<p class="co-text-secondary">Loading your dashboard...</p>
```

> **Warning:** Always provide a text label alongside spinners. A spinner alone gives no context about what is happening.

## Loading States

Apply loading states at the appropriate scope. Do not block the entire page when only one section is loading.

| Scope         | Pattern                       | Component            |
| ------------- | ----------------------------- | -------------------- |
| Full page     | Centered spinner with message | `co-page-loader`     |
| Section       | Skeleton placeholders         | `co-skeleton`        |
| Button action | Inline spinner in button      | `co-button[loading]` |
| Data fetch    | Skeleton rows in table        | `co-table-skeleton`  |

```html
<co-card>
  <co-card-header>Recent Activity</co-card-header>
  <co-card-body>
    <co-skeleton variant="text" count="4"></co-skeleton>
  </co-card-body>
</co-card>
```

## Success & Error Messaging

After a form submission or critical action, display persistent feedback within the page context.

```html
<co-alert type="success" role="status">
  <co-icon name="check-circle" slot="icon"></co-icon>
  Your profile has been updated.
</co-alert>

<co-alert type="error" role="alert">
  <co-icon name="x-circle" slot="icon"></co-icon>
  <strong>Unable to save changes.</strong> Check your network connection and try again.
</co-alert>
```

## Confirmation Dialogs

Use `co-dialog` for destructive or irreversible actions. State the consequence clearly and label buttons with specific verbs instead of "OK."

```html
<co-dialog open heading="Delete project?">
  <p>
    This will permanently delete <strong>Project Alpha</strong> and all associated data. This action
    cannot be undone.
  </p>
  <co-button slot="secondary" variant="secondary">Cancel</co-button>
  <co-button slot="primary" variant="error">Delete project</co-button>
</co-dialog>
```

## Accessibility

- Toasts and alerts use `role="status"` or `role="alert"` to announce changes to assistive technology.
- Confirmation dialogs trap focus and return focus to the triggering element when closed.
- Progress bars include `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` (handled by `co-progress`).
