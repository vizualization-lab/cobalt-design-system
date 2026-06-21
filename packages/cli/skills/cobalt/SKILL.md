---
name: cobalt
description: Use when working in projects that depend on @cobalt/* packages — Cobalt web components (co-button, co-input, etc.), React/Vue/Angular wrappers, design tokens, or `co` CLI diagnostics.
---

# Cobalt

The `co` CLI is the source of truth for component APIs, design tokens, utilities, and project diagnostics. Query it before editing Cobalt code. When stdout is not a terminal, `co agent *` returns JSON by default — no `--json` flag needed.

## When to use

- Authoring or editing markup that uses `co-*` web components, or React/Vue/Angular Cobalt wrappers.
- Choosing a design token or utility class for CSS in a Cobalt project.
- Adopting, inspecting, or diagnosing a Cobalt setup.

## Bootstrap

Run the CLI from the project root. To pick an invocation:

1. Try `co --version`. If it succeeds, use `co`.
2. If `co` is not on PATH, check `package.json` for `@cobalt/cli`. If it is a dependency, run via the project's package manager: `pnpm exec co`, `npm exec -- co`, or `yarn co`. These pick up the project's local `.npmrc` automatically.
3. If `@cobalt/cli` is **not** installed locally, before suggesting an install: inspect `.npmrc` (project root and `~/.npmrc`) for a `@cobalt:registry=…` line. `@cobalt/*` is commonly hosted on a private registry. If a scoped registry is configured, run `npm install --save-dev @cobalt/cli` **from the project root** — the scoped registry resolves through the inherited `.npmrc`. If no `@cobalt:registry` is configured anywhere, stop and ask the user for the registry URL. Do not write `.npmrc`, run `npm config set`, or guess a registry URL.
4. If a prior `npm install` or `npx @cobalt/cli` failed with `E404` on `@cobalt/cli`, this is the private-registry case in step 3 — do not retry the same command.

## First move

Begin every Cobalt task with:

```bash
co agent context
```

From the response, pin three values for the rest of the task:

- `project.frameworks` — the framework you will write all imports and examples for.
- `metadata.source` — whether you are reading `workspace` metadata (the installed `@cobalt/*` packages) or `bundled` metadata (shipped with the CLI). Workspace is preferred; bundled is a fallback.
- `doctor.summary` — whether the project is already healthy. If there are failures here, address them before deeper work.

## Framework steering

The framework picked in **First move** governs every subsequent query and every import you write.

- `co agent component <name>` returns `usage.requiredImports`, `usage.examples`, and `usage.recommendedAttributes` already filtered to that framework. Use them verbatim — do not hand-translate React examples to Vue (or vice versa).
- If `frameworkSelection.ambiguous` is `true` (more than one framework detected, e.g. a monorepo), pick one explicitly: `co agent component button --framework react|vue|angular|web-components`. Stay on that choice for the rest of the task.
- If no framework wrapper is installed, use the web-components form (`@cobalt/components/<name>`).
- Never mix wrapper packages: no `@cobalt/react` imports in a Vue app, no `@cobalt/vue` imports in an Angular app, etc.

## Styling priority

When styling a DOM element with spacing, padding, margin, gap, typography (font family/size/weight/line-height), or color (text, background, border, surface), work in this order:

1. **Utility class first.** Search Cobalt utility classes with `co agent utilities --query <intent>` (e.g. `gap`, `padding`, `stack`, `text-size`, `text-color`, `bg`, `surface`). If a utility matches, apply the class — do not write a CSS rule.
2. **Token in CSS, only if no utility fits.** Search semantic tokens with `co agent tokens --query <intent> --tier semantic` and use the token via the CSS variable form (e.g. `padding: var(--co-space-md)`; `color: var(--co-color-text-default)`).
3. **Custom CSS only as a last resort,** and even then never hardcode color/space/radius/typography values — always reference a token.

This rule supersedes any habit of writing one-off `padding`, `margin`, `font-size`, `color`, or `background` declarations. Check utilities first; reach for a CSS rule only when nothing matches.

## Common tasks

### Add a Cobalt component to a page

1. `co agent context` (only if you have not done it yet this task).
2. `co agent component <name>` (e.g. `button`).
3. Add `usage.requiredImports` verbatim. Render the markup using `usage.examples` and `usage.recommendedAttributes`. Wire only documented `attributes` and `events`.
4. `co doctor --strict` and address any new diagnostics.

### Replace a custom element with a Cobalt one

1. `co agent components` and find the Cobalt equivalent by tag name or description.
2. `co agent component <name>` for the API and framework-correct example.
3. Swap markup, replace imports, drop now-dead CSS that Cobalt handles (e.g. focus rings, spacing tokens).
4. `co doctor --strict`.

### Style spacing, typography, or color on a DOM element

1. `co agent utilities --query <intent>` (e.g. `gap`, `padding`, `stack`, `text-size`, `text-color`, `bg`, `surface`). If a utility matches, apply the class and stop — no CSS rule needed. The returned `tokenRefs` show which tokens the utility resolves to.
2. If no utility fits, `co agent tokens --query <intent> --tier semantic` and use the token in a CSS rule via the CSS variable form. Prefer semantic tokens. Use a component token only when authoring a public component contract. Never reach for a primitive token in app/component styling.
3. If no semantic token fits, broaden the query before falling back to a custom rule. When unsure of the exact name, never guess — search first.

### Diagnose a broken setup

1. `co agent context` — read `doctor.summary` and `metadata.source`.
2. `co doctor --strict`. Work each diagnostic top-down. Prefer the `suggestedAction` field on each diagnostic over guessing the fix.
3. Re-run `co doctor --strict` until clean (or until remaining warnings are intentional and documented).

## Command reference

| Command                                                                                | Returns                                                                                   | When to use                                                         |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `co agent context`                                                                     | project frameworks, package versions, metadata source, doctor summary                     | First move on any Cobalt task                                       |
| `co agent components [--framework <target>]`                                           | All components with framework-filtered usage                                              | Discover what components exist                                      |
| `co agent component <name> [--framework <target>]`                                     | Single component: attributes, events, slots, CSS parts, methods, framework-filtered usage | Before writing or editing markup for that component                 |
| `co agent tokens [--query] [--tier] [--category] [--theme] [--mode] [--limit] [--all]` | Filtered token list                                                                       | Choose a token for a CSS rule                                       |
| `co agent token <name>`                                                                | One token: tier, category, value, resolved value, description                             | Verify a specific token exists / read its resolved value            |
| `co agent utilities [--query] [--limit] [--all]`                                       | Utility classes with CSS and tokenRefs                                                    | Find a utility class for a CSS need                                 |
| `co doctor [--strict]`                                                                 | All adoption diagnostics                                                                  | Before declaring a task done                                        |
| `co inspect`                                                                           | Project inventory (package manager, frameworks, Cobalt deps, style imports, base scope)   | Quick human-readable snapshot; for AI flows, prefer `agent context` |

Token names accept three forms — all resolve the same: bare (`color-text-default`), dotted (`color.text.default`), or CSS-variable form (`--co-color-text-default`).

The `agent` parent command takes `--metadata-source auto|workspace|bundled` (default `auto`). Override only when you need to force bundled metadata (e.g. before `@cobalt/*` packages are installed) or workspace-only metadata (e.g. when you must read the exact installed version).

## Anti-patterns

- Do not use `co components usage` or `co components status` to author code — those are human catalog commands. Use `co agent component <name>` for APIs and examples.
- Do not import the `@cobalt/components` barrel. Import per-component subpaths: `@cobalt/components/button`, `@cobalt/react/button`, `@cobalt/vue/button`, `@cobalt/angular/button`.
- Do not infer attributes or events from the raw `attributes`/`slots`/`events` arrays when `usage.recommendedAttributes` or `usage.examples` show a preferred pattern. The framework-specific guidance is authoritative.
- Do not call private/protected component methods, even when the manifest exposes them.
- When `frameworkSelection.ambiguous` is `true`, do not pick a framework silently — rerun with `--framework <target>`.
- Do not translate framework-specific guidance by hand. Re-query with `--framework <target>` and use the returned guidance.
- Do not write a CSS rule for spacing, padding, margin, gap, typography, or color without first running `co agent utilities --query <intent>`. A utility class usually exists; use it instead of a rule.
- Do not hardcode color/space/radius/typography values when a semantic token exists. Do not reach for primitive tokens in app code.
- Do not forget `data-co-base` on the app root (or the migrated slice) when using `@cobalt/tokens/css/base`.
- Do not skip importing `@cobalt/components/pre-upgrade.css` in any project that uses Cobalt web components. Without it, `co-*` elements flash unstyled while Lit upgrades them. The import belongs in the same global entrypoint as `@cobalt/tokens/css` — it reserves correct layout and hides content until each element is `:defined`. Projects scaffolded by `co new` include the import by default.
- Do not fabricate token names. When unsure, `co agent tokens --query <term>` first.
- Do not declare a task done without running `co doctor --strict` and quoting the result.
- Do not write a `.npmrc`, run `npm config set`, or guess a `@cobalt:registry` URL on the user's behalf. If a private registry is required and not configured, stop and ask.

## Output contract

CLI JSON is authoritative over memory or training-time examples. If CLI metadata conflicts with docs or prior knowledge, trust the CLI and call out the conflict. Keep changes scoped, avoid hard-coded visual values when token-backed equivalents exist, and finish every task by running `co doctor --strict` and quoting its summary.
