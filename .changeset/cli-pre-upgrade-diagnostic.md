---
'@cobalt/cli': patch
---

`co doctor` gains a new `cobalt.styles.pre-upgrade` diagnostic. When the project has a Cobalt component-rendering package installed (`@cobalt/components`, `@cobalt/react`, `@cobalt/vue`, or `@cobalt/angular`) but no `@cobalt/components/pre-upgrade.css` import in source, the diagnostic warns about the resulting flash-of-unstyled-content and suggests the import line. Pure token consumers are not affected — the check is silent unless a component package is present. The CSS-import scanner that powers the existing `cobalt.styles.*` checks now also recognizes `@cobalt/components/*` paths, so `inspection.styleImports` reports a broader picture without affecting the existing token-import booleans.
