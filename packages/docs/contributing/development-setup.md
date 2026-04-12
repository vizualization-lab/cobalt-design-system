# Development Setup

This guide walks you through setting up a local development environment for the Cobalt Design System.

## Prerequisites

Ensure the following tools are installed before proceeding:

| Tool    | Minimum Version | Installation                                                 |
| ------- | --------------- | ------------------------------------------------------------ |
| Node.js | 20.0.0          | [nodejs.org](https://nodejs.org) or use `nvm`                |
| pnpm    | 9.0.0           | `corepack enable && corepack prepare pnpm@latest --activate` |
| Git     | 2.40+           | [git-scm.com](https://git-scm.com)                           |

> **Tip:** We recommend using `nvm` or `fnm` to manage Node versions. The repository includes an `.nvmrc` file, so you can run `nvm use` to switch to the correct version automatically.

## Clone and Install

```bash
# Clone the repository
git clone https://github.com/your-org/cobalt-design-system.git
cd cobalt-design-system

# Install dependencies
pnpm install
```

The install step uses pnpm workspaces to link all packages together. You should not need to install dependencies in individual packages.

## Project Structure

The repository is organized as a monorepo using pnpm workspaces:

```
cobalt-design-system/
├── packages/
│   ├── core/                  # @cobalt/core — shared utilities and base classes
│   ├── tokens/                # @cobalt/tokens — design tokens (colors, spacing, etc.)
│   ├── components/
│   │   ├── co-button/         # @cobalt/co-button
│   │   ├── co-input/          # @cobalt/co-input
│   │   ├── co-modal/          # @cobalt/co-modal
│   │   └── ...                # Additional components
│   ├── icons/                 # @cobalt/icons — icon library
│   ├── themes/                # @cobalt/themes — theme definitions
│   └── docs/                  # Documentation site (you are here)
├── tools/
│   ├── eslint-config/         # Shared ESLint configuration
│   └── test-utils/            # Testing helpers and fixtures
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## Build Commands

All commands should be run from the **repository root**.

| Command                                 | Description                                   |
| --------------------------------------- | --------------------------------------------- |
| `pnpm build`                            | Build all packages                            |
| `pnpm build --filter=@cobalt/co-button` | Build a single package                        |
| `pnpm dev`                              | Start development mode with file watching     |
| `pnpm lint`                             | Run ESLint across all packages                |
| `pnpm lint --fix`                       | Auto-fix linting issues                       |
| `pnpm format`                           | Run Prettier on all files                     |
| `pnpm clean`                            | Remove all build artifacts and `node_modules` |

## Running the Documentation Site

The docs site is built with VitePress and can be started locally:

```bash
# Start the dev server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview the production build
pnpm docs:preview
```

The dev server runs at `http://localhost:5173` by default and supports hot module replacement.

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests for a specific package
pnpm test --filter=@cobalt/co-button

# Run tests in watch mode
pnpm test:watch

# Run accessibility tests only
pnpm test:a11y

# Generate a coverage report
pnpm test:coverage
```

Tests use Web Test Runner with Playwright for browser-based testing. Accessibility tests use `@open-wc/testing` helpers along with `axe-core`.

## Troubleshooting

| Problem                                          | Solution                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------- |
| `pnpm install` fails with peer dependency errors | Run `pnpm install --no-frozen-lockfile` and commit the updated lockfile      |
| Components not reflecting changes                | Ensure `pnpm dev` is running; try `pnpm clean && pnpm install && pnpm build` |
| Tests timeout in CI                              | Run `pnpm exec playwright install` to install browser binaries               |

> **Note:** If you encounter issues not covered here, check our [Contact page](/resources/contact) for support channels.
