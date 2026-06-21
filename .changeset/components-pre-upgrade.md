---
'@cobalt/components': patch
---

Added `@cobalt/components/pre-upgrade.css`, a stylesheet that suppresses flash-of-unstyled-content (FOUC) on every Cobalt custom element. Each `co-*` tag gets a `:not(:defined)` rule in the `co.reset` layer that reserves the layout its upgraded `:host` will occupy (display, sizing) and hides slotted content via `visibility: hidden`. When the browser registers each element, the rule disengages automatically and shadow-DOM `:host` styles take over with no visible shift. Import once next to `@cobalt/tokens/css` in the app's global entrypoint; `co new` scaffolded projects already include the import.

Pre-upgrade rules are authored as colocated per-component fragments (`src/components/<name>/co-<name>.pre-upgrade.css`) and assembled into `dist/pre-upgrade.css` at build time. A new `pre-upgrade:check` script enforces that every component has a fragment, requires `display:` + `visibility: hidden;` declarations, and can scaffold a starter from the component's `:host` via `--fix`.

Note: `co-nav-drawer` now uses `var(--co-component-nav-drawer-width)` for `inline-size` and `max-inline-size` instead of the hardcoded `280px`. The token value is `260px`, so the drawer renders 20px narrower by default. If your app relied on the prior 280px width, override the token (`--co-component-nav-drawer-width: 280px;`) in your global scope.
