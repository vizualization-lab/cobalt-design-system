# @cobalt/cli

Cobalt design system command line tool.

## Install

```bash
npm --@cobalt:registry=%REGISTRY_URL% --cafile=%CA_BUNDLE_PATH% install -g @cobalt/cli
```

## Configure

Save private registry settings once:

```bash
co config set registry.url %REGISTRY_URL%
co config set registry.caBundle %CA_BUNDLE_PATH%
```

Settings are stored in `~/.cobalt.config.json`.

## Create a starter

Create starter applications wired for Cobalt components, tokens, and framework wrappers.

```bash
co new
```

Pass flags to skip prompts:

```bash
co new my-app --template react --scss --app-shell
```

## Options

| Option                              | Description                                                        |
| ----------------------------------- | ------------------------------------------------------------------ |
| `--template <name>`                 | Choose `vanilla-ts`, `react`, `vue`, or `angular`.                 |
| `--scss` / `--no-scss`              | Enable or disable SCSS and Cobalt Sass helper setup.               |
| `--app-shell` / `--no-app-shell`    | Enable or disable the Cobalt app shell starter layout.             |
| `--cobalt-source <registry\|local>` | Use registry dependencies or local tarball paths.                  |
| `--configure-registry`              | Create a project `.npmrc` during scaffolding.                      |
| `--no-configure-registry`           | Keep `.npmrc.example` and skip `.npmrc` generation.                |
| `--registry-url <url>`              | Registry URL for `@cobalt` packages.                               |
| `--ca-bundle <path>`                | CA bundle path for the configured registry.                        |
| `--agent-skill <target>`            | Install the Cobalt skill for `none`, `codex`, `claude`, or `both`. |
| `--yes`                             | Accept defaults for any omitted options.                           |

The generated project includes a `.npmrc.example` file unless you choose to configure the registry during scaffolding. When registry configuration is enabled, the generator writes `.npmrc` from that template and removes `.npmrc.example`.

Use local tarball mode when testing unpublished Cobalt packages:

```bash
co new my-app --cobalt-source local
```

Local mode points Cobalt dependencies at `./cobalt-packages/*.tgz` and creates instructions in `cobalt-packages/README.md`.

Generated projects include `@cobalt/components/pre-upgrade.css` in the global entrypoint alongside `@cobalt/tokens/css`. The pre-upgrade stylesheet reserves correct layout and hides content for `co-*` elements until each one is `:defined`, so the app does not flash unstyled chrome while Lit upgrades the components. Existing projects can opt in by adding the same import next to their token imports.

## Inspect a project

Review a project for Cobalt setup details:

```bash
co inspect
```

Run diagnostics for CI or agent workflows:

```bash
co doctor --strict --json
```

Look up component metadata:

```bash
co components list
co components status button
co components usage button
```

Use agent-oriented metadata for AI workflows:

```bash
co agent context
co agent component button
co agent component button --framework react
co agent tokens --query surface --tier semantic
co agent token color-text-default
co agent utilities --query gap
```

`co agent *` commands emit JSON automatically when stdout is not a terminal (the typical AI-agent invocation), so the `--json` flag is not required. Pass `--no-json` to force human-readable output when piping, or `--json` to force JSON in a terminal.

`co agent component` returns CEM-derived API metadata plus docs-derived `usage` guidance for the detected project framework. Use `--framework web-components`, `react`, `vue`, or `angular` to override ambiguous projects.

`co agent token` accepts the token name in three forms: bare (`color-text-default`), dotted (`color.text.default`), or CSS-variable (`--co-color-text-default`).

Projects generated with `co new` include installable Cobalt skill folders for agent workflows. By default, `--agent-skill both` writes `.codex/skills/cobalt` and `.claude/skills/cobalt`.

## Manage the Cobalt skill

Install or refresh the Cobalt agent skill in an existing project:

```bash
co skill list                            # show available skills and per-harness state
co skill status                          # report current state for codex and claude
co skill add                             # install (auto-update outdated installs)
co skill add --target codex              # codex only
co skill update --target both --yes      # refresh installed skill from bundled CLI version
co skill remove --target claude          # uninstall (backs up local edits)
```

State per harness is one of `not-installed`, `current`, or `outdated`. `co skill add` installs missing harnesses and, when an install is outdated, prompts to update (or auto-updates under `--yes`). `update` and `remove` back up locally modified files before overwriting or deleting: `update` writes `<file>.bak` next to each modified file; `remove` writes a sibling `.bak/` directory tree next to the removed skill directory.

Use `--json` for machine-readable output, `--quiet` to suppress human output, and `--cwd <path>` to run against another project directory.
