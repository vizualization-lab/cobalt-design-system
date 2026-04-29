# Development Setup

This guide walks you through setting up a local development environment for the Cobalt monorepo.

## Prerequisites

Ensure the following tools are installed before proceeding:

| Tool    | Supported Version | Installation                                                 |
| ------- | ----------------- | ------------------------------------------------------------ |
| Node.js | 20+               | [nodejs.org](https://nodejs.org) or use `nvm`                |
| pnpm    | 9+                | `corepack enable && corepack prepare pnpm@latest --activate` |
| Git     | 2.40+             | [git-scm.com](https://git-scm.com)                           |

> **Tip:** Node 20.x is the contributor baseline. The repository includes an `.nvmrc` file, so `nvm use` is the easiest way to match the expected environment.

## Clone and Install

```bash
git clone %GITHUB_URL%.git
cd cobalt-design-system
pnpm install
```

The install step uses pnpm workspaces to link packages together. You should not need to install dependencies inside individual packages.

## Project Structure

The repository is organized as a pnpm workspace:

```text
cobalt-design-system/
├── packages/
│   ├── tokens/       # @cobalt/tokens — source tokens + generated outputs
│   ├── components/   # @cobalt/components — Lit web components
│   ├── react/        # @cobalt/react — React wrappers
│   ├── vue/          # @cobalt/vue — Vue wrappers
│   ├── angular/      # @cobalt/angular — Angular wrappers
│   ├── docs/         # @cobalt/docs — VitePress documentation site
│   ├── icons/        # @cobalt/icons — shared icon assets/runtime
│   └── workbench/    # isolated component preview environment
├── scripts/
├── pnpm-workspace.yaml
└── package.json
```

Component source files live under `packages/components/src/components/`. Token source files live under `packages/tokens/tokens/`.

## Environment Configuration

The docs site reads optional environment variables from a `.env` file at the repository root. This is useful when working from a fork or a different GitHub org.

To get started:

```bash
cp .env.example .env
```

Then uncomment and edit any values you need to override:

| Variable              | Default                                                       | Description                        |
| --------------------- | ------------------------------------------------------------- | ---------------------------------- |
| `COBALT_GITHUB_ORG`   | ``                                                            | GitHub organization name           |
| `COBALT_GITHUB_REPO`  | `cobalt-design-system`                                        | GitHub repository name             |
| `COBALT_GITHUB_URL`   | `https://github.com/{COBALT_GITHUB_ORG}/{COBALT_GITHUB_REPO}` | Full GitHub repository URL         |
| `COBALT_REGISTRY_URL` | `https://registry.your-org.com`                               | npm registry URL for docs examples |

If `COBALT_GITHUB_URL` is not set, it is derived automatically from `COBALT_GITHUB_ORG` and `COBALT_GITHUB_REPO`. The `.env` file is git-ignored.

## Common Root Commands

Run these from the repository root:

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `pnpm build`      | Build every package in the workspace                 |
| `pnpm dev`        | Start the docs site locally                          |
| `pnpm workbench`  | Start the isolated component workbench               |
| `pnpm test`       | Run the workspace test suites                        |
| `pnpm test:watch` | Run the component test suite in watch mode           |
| `pnpm lint`       | Run ESLint across TypeScript source files            |
| `pnpm format`     | Format the repo with Prettier                        |
| `pnpm clean`      | Remove build artifacts and docs cache                |
| `pnpm pack:local` | Build local publish-style tarballs for external apps |

When you only need one package, prefer package-scoped commands:

```bash
pnpm --filter @cobalt/components build
pnpm --filter @cobalt/components test
pnpm --filter @cobalt/docs build
pnpm --filter @cobalt/docs preview
```

## Component Workbench

The workbench is a lightweight Vite-powered environment for developing and previewing components in isolation. It avoids much of the docs-site overhead while still giving you live component and token feedback.

```bash
pnpm workbench
```

Typical workbench use cases:

- iterate on component TS and generated styles quickly
- preview token changes without navigating the full docs site
- validate composed examples before writing docs

## Running the Documentation Site

The docs site is built with VitePress:

```bash
# Start the local docs dev server
pnpm dev

# Build the docs package
pnpm --filter @cobalt/docs build

# Preview the production build
pnpm --filter @cobalt/docs preview
```

`pnpm dev` is the default contributor entry point for docs work because it runs the same site most users consume.

## Running Tests

Use the workspace or package-scoped commands depending on the change:

```bash
# Run all workspace tests
pnpm test

# Run the component test suite directly
pnpm --filter @cobalt/components test

# Re-run component tests in watch mode
pnpm test:watch
```

Component tests run through Web Test Runner with Playwright-backed browsers. Accessibility audits are part of the component test suite, so there is no separate root-level `pnpm test:a11y` command today.

## Local Testing in External Apps

When developing Cobalt, you may need to validate changes in a separate application before publishing.

### Using `pack:local` (recommended)

`pnpm pack:local` builds publish-style tarballs. This is the safest option because it validates exports, file inclusion, and build output rather than relying on symlinks.

```bash
pnpm pack:local
```

Then install the generated tarballs in your app:

```bash
npm install /path/to/cobalt/local-packs/*.tgz
```

If you already ran `pnpm build`, you can skip the extra build step:

```bash
pnpm pack:local --skip-build
```

### Using `pnpm link` (faster iteration)

If you need faster feedback and can tolerate symlink quirks:

```bash
cd packages/components
pnpm link --global

# in the external app
pnpm link --global @cobalt/components
```

This avoids reinstalling tarballs after every change, but linked packages can surface duplicate dependency issues. If that happens, fall back to `pack:local`.

## Troubleshooting

| Problem                                             | Solution                                                                   |
| --------------------------------------------------- | -------------------------------------------------------------------------- |
| `pnpm install` fails with workspace issues          | Re-run from the repo root and confirm you are using pnpm 9+                |
| Docs changes do not show up                         | Restart `pnpm dev` or run `pnpm clean` before restarting                   |
| Token changes do not appear in previews             | Rebuild or refresh the workbench/docs site after the token package updates |
| Tests timeout in CI or locally                      | Run `pnpm exec playwright install` to install browser binaries             |
| Linked packages behave strangely in an external app | Switch from `pnpm link` to `pnpm pack:local`                               |

If you hit a problem that is not covered here, use the [Contact](/resources/contact) page or [GitHub Discussions](%GITHUB_URL%/discussions).
