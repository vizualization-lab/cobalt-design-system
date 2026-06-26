<script setup>
import { withBase } from 'vitepress';
</script>

# Cobalt CLI

The Cobalt CLI provides project scaffolding and reusable setup commands for teams building with Cobalt. Currently, the cli features are limited but as Cobalt evolves, so will the cli.

<img
  class="cli-screenshot"
  :src="withBase('/assets/images/cobalt-cli-ss.png')"
  alt="Cobalt CLI showing startup art and interactive project template prompts."
/>

## Install

Install the CLI from the Cobalt npm registry:

<CodeTabs :tabs="['npm', 'pnpm']">

<template #npm>

```bash
npm --@cobalt:registry=%REGISTRY_URL% --cafile=%CA_BUNDLE_PATH% install -g @cobalt/cli
```

</template>

<template #pnpm>

```bash
pnpm --config.@cobalt:registry=%REGISTRY_URL% --config.cafile=%CA_BUNDLE_PATH% add -g @cobalt/cli
```

</template>

</CodeTabs>

If your registry does not require a custom CA bundle, omit the `cafile` option.

## Usage

```bash
co [options] [command]
```

Run `co` without a command to print help. Run `co <command> --help` to print command-specific help.

## Global Options

| Option         | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `--no-art`     | Disables the startup art shown in help output and interactive `new` flows. |
| `--json`       | Prints supported command output as JSON for agents and CI.                 |
| `--quiet`      | Suppresses human-readable output. JSON output is still printed.            |
| `--cwd <path>` | Project directory for inspection and diagnostic commands.                  |
| `-h, --help`   | Prints help for the CLI or the current command.                            |

`--no-art` is a global option, so pass it before the subcommand:

```bash
co --no-art new
```

## Commands

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `co new`        | Creates a new Cobalt starter application.     |
| `co inspect`    | Inspects Cobalt usage in an existing project. |
| `co doctor`     | Checks for common Cobalt adoption issues.     |
| `co components` | Looks up Cobalt component metadata.           |
| `co agent`      | Prints AI-agent-oriented Cobalt context.      |
| `co config`     | Manages saved Cobalt CLI settings.            |

## Config

Save registry settings once so generated projects can install `@cobalt/*` packages without copying registry details manually:

```bash
co config set registry.url %REGISTRY_URL%
co config set registry.caBundle %CA_BUNDLE_PATH%
```

The CLI stores settings in `~/.cobalt.config.json`:

```json
{
  "registry": {
    "url": "%REGISTRY_URL%",
    "caBundle": "/path/to/ca.pem"
  }
}
```

Use `COBALT_CONFIG=/path/to/config.json` when you need to point the CLI at a different config file.

### Config Commands

```bash
co config list
co config get registry.url
co config set registry.url %REGISTRY_URL%
co config unset registry.caBundle
```

| Command                       | Description                      |
| ----------------------------- | -------------------------------- |
| `co config list`              | Prints the saved config as JSON. |
| `co config get <key>`         | Prints a saved config value.     |
| `co config set <key> <value>` | Saves a config value.            |
| `co config unset <key>`       | Removes a saved config value.    |

Supported config keys:

| Key                 | Description                                        |
| ------------------- | -------------------------------------------------- |
| `registry.url`      | Cobalt npm registry URL.                           |
| `registry.caBundle` | Path to the CA bundle used by the Cobalt registry. |

## New

Run the interactive starter flow:

```bash
co new
```

Interactive `new` flows show a small Cobalt startup banner with the installed CLI version unless `--no-art` is passed globally.

### New Usage

```bash
co new [options] [project-name]
```

### New Arguments

| Argument         | Description                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `[project-name]` | Project directory. Defaults to `cobalt-app` when omitted or when `--yes` accepts defaults. |

Pass flags to skip prompts:

```bash
co new my-app --template react --scss --app-shell
```

Available templates are `vanilla-ts`, `react`, `vue`, and `angular`.

### New Options

| Option                     | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `--template <name>`        | Template to use: `vanilla-ts`, `react`, `vue`, or `angular`.                 |
| `--scss`                   | Includes SCSS and Cobalt Sass helper setup.                                  |
| `--no-scss`                | Uses plain CSS.                                                              |
| `--app-shell`              | Uses the Cobalt app shell pattern.                                           |
| `--no-app-shell`           | Uses the base page layout.                                                   |
| `--cobalt-source <source>` | Cobalt package source: `registry` or `local`.                                |
| `--configure-registry`     | Creates a project `.npmrc` from saved CLI config or command flags.           |
| `--no-configure-registry`  | Keeps `.npmrc.example` without creating `.npmrc`.                            |
| `--registry-url <url>`     | Cobalt npm registry URL.                                                     |
| `--ca-bundle <path>`       | Path to the CA bundle used for the Cobalt registry.                          |
| `--agent-skill <target>`   | Installs the Cobalt AI agent skill for `none`, `codex`, `claude`, or `both`. |
| `-y, --yes`                | Accepts defaults for omitted options and skips prompts.                      |
| `-h, --help`               | Prints help for `co new`.                                                    |

## Registry Mode

Registry mode is the default package source. When saved registry settings exist, `co new` writes a project `.npmrc` for the `@cobalt` scope and removes `.npmrc.example`.

```bash
co new my-app --template vue --cobalt-source registry
```

You can override saved registry settings for one project:

```bash
co new my-app --configure-registry --registry-url %REGISTRY_URL% --ca-bundle %CA_BUNDLE_PATH%
```

Use `--no-configure-registry` when you want the generated project to keep `.npmrc.example` instead.

## Local Package Mode

Use local package mode with the downloaded [Cobalt Package Bundle](/resources/artifacts#cobalt-packages) or locally packed tarballs:

```bash
co new my-app --cobalt-source local
```

Local package mode points Cobalt dependencies at `./cobalt-packages/*.tgz` and writes copy instructions in `cobalt-packages/README.md`.

## Inspect

Inspect a project without changing files:

```bash
co inspect --cwd ./my-app
```

For agentic workflows, request JSON output:

```bash
co --json --cwd ./my-app inspect
```

`co inspect` reports:

- package manager
- detected framework
- installed `@cobalt/*` packages and versions
- Cobalt token, font, and base style imports
- `data-co-base` usage
- project `.npmrc` presence
- local tarball mode
- `@cobalt/components` barrel imports

## Doctor

Run read-only adoption diagnostics:

```bash
co doctor --cwd ./my-app
```

Use `--strict` when warnings or failures should fail the command:

```bash
co --json --cwd ./my-app doctor --strict
```

`co doctor` checks for common setup issues such as missing token CSS, missing optional font/base styles, missing `data-co-base`, mismatched Cobalt package versions, missing local tarballs, and `@cobalt/components` barrel imports. When the project depends on a Cobalt component-rendering package (`@cobalt/components`, `@cobalt/react`, `@cobalt/vue`, or `@cobalt/angular`), the `cobalt.styles.pre-upgrade` diagnostic also warns when `@cobalt/components/pre-upgrade.css` is not imported anywhere in the project source — without that import, `co-*` elements flash unstyled while Lit upgrades them. Pure token consumers do not see this diagnostic.

## Components

List available Cobalt components:

```bash
co components list
```

Print component status:

```bash
co components status button
```

Print component import paths:

```bash
co components usage button
```

Component commands support JSON output:

```bash
co --json components status co-button
```

## Agent Workflows

Use the `agent` namespace when an AI agent or automation needs compact, normalized Cobalt context:

```bash
co agent context
```

The context command combines project inspection, doctor diagnostics, metadata source, component counts, token summaries, utility counts, themes, and modes. `co agent *` emits JSON automatically when stdout is not a terminal — the `--json` flag is only needed in a terminal. Pass `--no-json` to force human-readable output when piping.

Query component APIs and authoring guidance from normalized metadata:

```bash
co agent component button
co agent component button --framework react
co agent components
```

`co agent component` returns CEM-derived `attributes`, `events`, `slots`, `cssParts`, and `methods`, plus docs-derived `usage` guidance for the detected framework. The `usage` block includes selected imports, examples, related components, and recommended attributes. Use `--framework web-components`, `react`, `vue`, or `angular` when a project contains multiple frameworks.

Search token and utility metadata:

```bash
co agent tokens --query surface --tier semantic
co agent token color-text-default
co agent utilities --query gap
```

`co agent token` accepts the token name in three forms — bare (`color-text-default`), dotted (`color.text.default`), or CSS-variable (`--co-color-text-default`).

Discover Cobalt icons (Material Symbols + custom Cobalt icons) by intent:

```bash
co agent icons --query arrow --kind material
co agent icons --kind custom
co agent icon arrow-forward
```

`co agent icon` accepts the icon name in kebab-case (`arrow-forward`), snake_case (`arrow_forward`), or camelCase (`arrowForward`). `--kind animated` is a UX shortcut that filters to icons with an animated variant. The CLI surfaces full category/description/search-terms only when the project has `@cobalt/icons` installed in `node_modules`; the bundled fallback returns names + kind only.

List the themes that `@cobalt/tokens` exports:

```bash
co agent themes
```

Each entry includes the theme `name`, its `cssImportPath` (e.g. `@cobalt/tokens/themes/<name>`), an optional `scssImportPath`, and the supported `modes`. The catalog is derived from the installed `@cobalt/tokens` build (workspace) and falls back to a bundled snapshot when the package isn't installed in the project — agents should never hardcode theme names.

By default, agent commands use workspace metadata from installed Cobalt packages and fall back to bundled CLI metadata. Override that behavior when needed:

```bash
co agent --metadata-source workspace context
co agent --metadata-source bundled components
```

The recommended way to install the Cobalt skill into an existing project is `co skill add` — see [Manage the Cobalt Skill](#manage-the-cobalt-skill) below. Projects generated with `co new` include the skill by default (`--agent-skill both` writes `.codex/skills/cobalt` for Codex and `.claude/skills/cobalt` for Claude Code). The skill is also available as a [downloadable artifact](/resources/artifacts#cobalt-agent-skill) for offline installs.

## Manage the Cobalt Skill

The `co skill` command group installs and refreshes the Cobalt agent skill in any project — useful when you adopt Cobalt into an existing repo or when the bundled CLI ships an updated skill.

```bash
co skill list                            # available skills and per-harness state
co skill status                          # current state for codex and claude
co skill add                             # install missing harnesses; offer to update outdated
co skill add --target codex --yes        # codex only, non-interactive
co skill update --target both --yes      # refresh both harnesses from the bundled CLI version
co skill remove --target claude          # uninstall claude (backs up local edits)
```

Each harness is in one of three states:

- **`not-installed`** — `.codex/skills/cobalt` or `.claude/skills/cobalt` does not exist.
- **`current`** — installed and byte-for-byte identical to what the CLI ships.
- **`outdated`** — installed but differs from the bundled version (either the CLI was updated or files were edited locally).

`co skill add` walks every requested harness:

- `not-installed` → installs.
- `current` → no action.
- `outdated` → prompts to update in a terminal, auto-updates under `--yes`, and skips with a warning when run non-interactively.

When all requested harnesses are already current, `add` reports `Cobalt skill is already installed and up to date … No action taken.` and exits successfully.

`update` and `remove` back up locally modified files before overwriting or deleting:

- `update` writes `<file>.bak` next to each modified file in the skill directory.
- `remove` writes a sibling `<skill-dir>.bak/` directory tree, then deletes the skill directory.

Pass `--target codex`, `--target claude`, or `--target both` to scope the action; the default is `both`. The `--cwd <path>` global flag scopes the command to another project directory.

## JSON Output

Diagnostic commands return a stable structure for agents and CI:

```json
{
  "command": "doctor",
  "cwd": "/path/to/project",
  "summary": {
    "status": "warn",
    "pass": 5,
    "warn": 2,
    "fail": 0
  },
  "diagnostics": [
    {
      "id": "cobalt.styles.base",
      "status": "warn",
      "severity": "warning",
      "message": "Cobalt base CSS was not found.",
      "suggestedAction": "Import '@cobalt/tokens/css/base' when native element defaults should use Cobalt styles."
    }
  ],
  "data": {}
}
```

<style scoped>
.cli-screenshot {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
