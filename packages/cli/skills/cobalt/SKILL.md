---
name: cobalt
description: Use when working in Cobalt design system projects or apps that use @cobalt packages, including component implementation, Cobalt web components, React/Vue/Angular wrappers, design tokens, token-backed CSS, starter projects, project diagnostics, or migrations to Cobalt. This skill guides agents to use the Cobalt CLI for project context, component APIs from the custom elements manifest, token and utility metadata, and validation before making changes.
---

# Cobalt

Use the Cobalt CLI as the source of truth before editing a Cobalt app or design-system package. Prefer CLI JSON output for agent workflows because it normalizes project setup, component APIs, token metadata, and diagnostics.

## Workflow

1. Inspect the target project:

   ```bash
   co --json --cwd <project-root> agent context
   ```

   Use the result to identify framework, installed `@cobalt/*` packages, metadata source, available component count, token categories, themes, modes, and doctor diagnostics.

2. Query component APIs before authoring markup or wrapper code:

   ```bash
   co --json --cwd <project-root> agent component button
   co --json --cwd <project-root> agent components
   ```

   Use returned `attributes`, `events`, `slots`, `cssParts`, `methods`, and `imports`. Do not call private/protected members or infer unsupported attributes from examples.

3. Query tokens and utilities before writing CSS:

   ```bash
   co --json --cwd <project-root> agent tokens --query surface --tier semantic
   co --json --cwd <project-root> agent token --co-color-text-default
   co --json --cwd <project-root> agent utilities --query gap
   ```

   Prefer semantic tokens for application styling. Use component tokens only for public component contracts or true component-specific exceptions. Avoid primitive tokens in app/component styling unless the task is explicitly token-authoring.

4. Apply Cobalt package patterns:
   - Import token CSS once in a global entrypoint, commonly `@cobalt/tokens/css`, `@cobalt/tokens/css/fonts`, and `@cobalt/tokens/css/base`.
   - Add `data-co-base` to the app root or migrated slice when using base styles.
   - Prefer per-component imports such as `@cobalt/components/button`, `@cobalt/react/button`, `@cobalt/vue/button`, or `@cobalt/angular/button`.
   - Avoid `@cobalt/components` barrel imports in production app code.
   - Preserve the project’s existing framework and styling conventions.

5. Validate before finishing:

   ```bash
   co --json --cwd <project-root> doctor --strict
   ```

   Address failures and relevant warnings, or report any remaining diagnostics clearly.

## Metadata Source

The CLI defaults to workspace metadata with bundled fallback. Use this default for most work:

```bash
co --json --cwd <project-root> agent context
```

Use workspace-only metadata when exact installed package context is required:

```bash
co --json --cwd <project-root> agent --metadata-source workspace context
```

Use bundled metadata when inspecting an app before Cobalt packages are installed:

```bash
co --json --cwd <project-root> agent --metadata-source bundled components
```

## Output Rules

Treat CLI JSON as authoritative over memory. If CLI metadata conflicts with docs or examples, use the CLI output and mention the conflict. Keep changes readably scoped, avoid hard-coded visual values when token-backed values exist, and finish with the exact validation command that was run.
