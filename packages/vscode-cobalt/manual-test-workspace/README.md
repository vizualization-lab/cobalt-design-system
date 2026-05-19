# Cobalt VS Code Extension Manual Test Workspace

Use the `Launch Cobalt Extension (sample workspace)` debug configuration from the monorepo root. The Extension Development Host opens this folder and uses the bundled Cobalt manifest fallback.

Manual checks:

- Open `styles.css` or `styles.scss`, type `var(--co-`, and confirm token completions appear.
- Hover an existing `--co-*` token in `styles.css` or `styles.scss`.
- Open `index.html`, `component.tsx`, `component.vue`, or `app.component.html`, type inside a static `class` or `className` attribute, and confirm `co-*` utility completions appear.
- Open the Cobalt activity bar item and confirm the token browser renders, filters, copies, and inserts tokens/classes.
