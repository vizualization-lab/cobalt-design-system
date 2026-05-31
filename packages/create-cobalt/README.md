# create-cobalt

Create starter applications wired for Cobalt components, tokens, and framework wrappers.

```bash
npm create cobalt
```

You can also pass flags to skip prompts:

```bash
npm create cobalt my-app -- --template react --scss --app-shell
```

## Options

| Option                              | Description                                            |
| ----------------------------------- | ------------------------------------------------------ |
| `--template <name>`                 | Choose `vanilla-ts`, `react`, `vue`, or `angular`.     |
| `--scss` / `--no-scss`              | Enable or disable SCSS and Cobalt Sass helper setup.   |
| `--app-shell` / `--no-app-shell`    | Enable or disable the Cobalt app shell starter layout. |
| `--cobalt-source <registry\|local>` | Use registry dependencies or local tarball paths.      |
| `--configure-registry`              | Create a project `.npmrc` during scaffolding.          |
| `--no-configure-registry`           | Keep `.npmrc.example` and skip `.npmrc` generation.    |
| `--registry-url <url>`              | Registry URL for `@cobalt` packages.                   |
| `--ca-bundle <path>`                | CA bundle path for the configured registry.            |
| `--yes`                             | Accept defaults for any omitted options.               |

The generated project includes a `.npmrc.example` file unless you choose to configure the registry during scaffolding. When registry configuration is enabled, the generator writes `.npmrc` from that template and removes `.npmrc.example`.

Use local tarball mode when testing unpublished Cobalt packages:

```bash
npm create cobalt my-app -- --cobalt-source local
```

Local mode points Cobalt dependencies at `./cobalt-packages/*.tgz` and creates instructions in `cobalt-packages/README.md`.
