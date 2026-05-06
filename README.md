# Cobalt Design System

A token-first design system built with [Lit](https://lit.dev/) with framework wrappers for React, Vue, and Angular.

## Prerequisites

- **Node.js** >= 20
- **pnpm** >= 9

> **Tip:** Node 20 is the local development baseline for this repo.

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start the docs site locally
pnpm dev
```

### Other Commands

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `pnpm build`        | Build all packages                               |
| `pnpm clean`        | Remove all build artifacts and caches            |
| `pnpm rebuild`      | Clean + build in one step                        |
| `pnpm dev`          | Start the documentation dev server               |
| `pnpm test`         | Run component tests                              |
| `pnpm test:watch`   | Run component tests in watch mode                |
| `pnpm lint`         | Lint TypeScript source files                     |
| `pnpm format`       | Format all files with Prettier                   |
| `pnpm format:check` | Check formatting without writing changes         |
| `pnpm pack:local`   | Pack tarballs for local testing in external apps |

## Local Testing in External Apps

To test Cobalt packages in an external application without publishing to npm, use the `pack:local` script. This produces tarballs identical to what `npm publish` would create, so it validates package exports, file inclusion, and build output.

```bash
# Build all packages and create tarballs in ./local-packs/
pnpm pack:local

# If you already ran pnpm build, skip the build step:
pnpm pack:local --skip-build
```

Then install the tarballs in your app:

```bash
# Install all packages at once
npm install /path/to/cobalt/local-packs/*.tgz

# Or install specific packages
npm install /path/to/cobalt/local-packs/cobalt-components-0.0.1.tgz \
            /path/to/cobalt/local-packs/cobalt-tokens-0.0.1.tgz
```

After making changes in the monorepo, re-run `pnpm pack:local` and reinstall in your app.

**Alternative — `pnpm link`:** For faster iteration during active development, you can symlink packages directly with `pnpm link --global`. Changes are reflected after `pnpm build` without reinstalling. Note that linked packages can occasionally cause duplicate dependency issues at runtime; use `pack:local` if you hit problems.

## Versioning & Releases

All publishable `@cobalt/*` packages use **fixed/lockstep versioning** — every release bumps all six packages to the same version number. This is managed by [Changesets](https://github.com/changesets/changesets).

### Adding a changeset

After making changes, create a changeset to describe what changed:

```bash
pnpm changeset
```

Select the affected packages, choose a bump type (major/minor/patch), and write a short consumer-facing summary. Commit the generated `.changeset/*.md` file with your code.

### Checking pending changes

```bash
pnpm version:check
```

### Bumping versions

Apply all pending changesets, updating package versions and generating CHANGELOG entries:

```bash
pnpm version:bump
```

### Publishing

```bash
pnpm release
```

### CI release flow

1. Changesets accumulate on `main` as PRs are merged
2. The Changesets GitHub Action opens a **Version Packages** PR automatically
3. Merging that PR triggers the publish pipeline to npm

For the full policy (semver rules, breaking change criteria, deprecation process), see the [Versioning docs](packages/docs/contributing/versioning.md).

## Packages

This monorepo is managed with [pnpm workspaces](https://pnpm.io/workspaces). All packages live under `packages/`.

### `@cobalt/tokens`

Design tokens — the single source of truth for colors, typography, spacing, elevation, motion, and breakpoints. Built with [Style Dictionary](https://amzn.github.io/style-dictionary/) and output in multiple formats:

- **CSS** custom properties (light and dark themes)
- **SCSS** helpers, variables, and CSS/theme shims
- **JavaScript/TypeScript** module
- **JSON**

SCSS consumers can author against the same runtime token contract:

```scss
@use '@cobalt/tokens/scss' as co;
@use '@cobalt/tokens/scss/css';
@use '@cobalt/tokens/scss/themes/purple';

.card {
  padding: co.space('inset.md');
  color: co.color('text.default');
  background: co.color('surface.static.raised');
  @include co.type('body');
}
```

The token package intentionally publishes two different JSON-shaped artifacts for different workflows:

- `dist/tokens-merged.json` is the **Token Studio round-trip artifact**. It preserves the simple authoring shape used in `packages/tokens/tokens` and includes `$themes` and `$metadata` so the file can be imported back into Tokens Studio cleanly.
- `dist/tokens-dtcg.json` is the **DTCG-style export artifact**. It is generated from the authoring tokens during build and normalizes values into a more standards-friendly shape for downstream tooling and interoperability work. It is not the file to edit by hand and it is not the primary Token Studio sync file.

In other words:

- edit `packages/tokens/tokens/*.json`
- sync with Tokens Studio through `dist/tokens-merged.json`
- use `dist/tokens-dtcg.json` when you need a more DTCG-aligned export

### `@cobalt/components`

Framework-agnostic web components built with [Lit](https://lit.dev/) that wrap implementation from base libraries such as Lion. Each component applies Cobalt tokens and exposes a consistent API with slots, CSS custom properties, and custom events.

Components use the `co-` prefix (e.g., `<co-button>`).

### `@cobalt/react`

React wrappers generated with [`@lit/react`](https://lit.dev/docs/frameworks/react/). Provides native React components with proper prop and event binding.

**Peer dependencies:** React 18 or 19

### `@cobalt/vue`

Vue 3 wrappers using `defineComponent` for type-safe props and event forwarding.

**Peer dependencies:** Vue 3.4+

### `@cobalt/angular`

Angular directives that sync properties and forward custom events from the underlying web components.

**Peer dependencies:** Angular 17, 18, 19, 20, or 21

### `@cobalt/docs`

The documentation site, built with [VitePress](https://vitepress.dev/). Includes interactive component demos, a design token reference, a Phosphor icon gallery, and guides for designers, developers, and contributors.

### `@cobalt/icons`

Icon package (placeholder — not yet implemented).

## Project Structure

```
packages/
  tokens/        Design tokens (source JSON + generated output)
  components/    Lit web components (core library)
  react/         React wrapper components
  vue/           Vue wrapper components
  angular/       Angular wrapper directives
  docs/          VitePress documentation site
  icons/         Icon package (placeholder)
```

## License

MIT
