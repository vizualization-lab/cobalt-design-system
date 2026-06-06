# Cobalt CLI

The Cobalt CLI provides project scaffolding and reusable setup commands for teams building with Cobalt. Install it once, save your private registry settings, then use `co new` to create framework starter applications.

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

## Configure

Save registry settings once so generated projects can install `@cobalt/*` packages without copying registry details manually:

```bash
co config set registry.url %REGISTRY_URL%
co config set registry.caBundle %CA_BUNDLE_PATH%
```

The CLI stores settings in `~/.cobalt.config.json`:

```json
{
  "registry": {
    "url": "https://registry.example.com/npm/",
    "caBundle": "/path/to/ca.pem"
  }
}
```

Use `COBALT_CONFIG=/path/to/config.json` when you need to point the CLI at a different config file.

## Create a Project

Run the interactive starter flow:

```bash
co new
```

Pass flags to skip prompts:

```bash
co new my-app --template react --scss --app-shell
```

Available templates are `vanilla-ts`, `react`, `vue`, and `angular`.

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

## Config Commands

```bash
co config list
co config get registry.url
co config set registry.url %REGISTRY_URL%
co config unset registry.caBundle
```

Supported config keys are `registry.url` and `registry.caBundle`.
