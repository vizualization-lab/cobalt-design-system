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
co --json --cwd ./my-app agent context
co --json --cwd ./my-app agent component button
co --json --cwd ./my-app agent component button --framework react
co --json --cwd ./my-app agent tokens --query surface --tier semantic
co --json --cwd ./my-app agent utilities --query gap
```

`co agent component` returns CEM-derived API metadata plus docs-derived `usage` guidance for the detected project framework. Use `--framework web-components`, `react`, `vue`, or `angular` to override ambiguous projects.

Projects generated with `co new` include installable Cobalt skill folders for agent workflows. By default, `--agent-skill both` writes `.codex/skills/cobalt` and `.claude/skills/cobalt`.

Use `--json` for machine-readable output, `--quiet` to suppress human output, and `--cwd <path>` to run against another project directory.
