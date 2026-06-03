# Starter Templates

Use the starter generator when you are creating a new application and want Cobalt dependencies, global styles, and a working framework shell created for you.

<CodeTabs :tabs="['npm', 'pnpm']">

<template #npm>

```bash
npm create cobalt
```

</template>

<template #pnpm>

```bash
pnpm create cobalt
```

</template>

</CodeTabs>

The generator prompts for a framework template, whether to use SCSS, whether to include the Cobalt app shell pattern, where Cobalt packages should be installed from, and whether to configure the Cobalt npm registry.

## Skip Prompts

Pass flags when you already know the project shape:

<CodeTabs :tabs="['npm', 'pnpm']">

<template #npm>

```bash
npm create cobalt my-app -- --template react --scss --app-shell --configure-registry --registry-url %REGISTRY_URL% --ca-bundle %CA_BUNDLE_PATH%
```

</template>

<template #pnpm>

```bash
pnpm create cobalt my-app --template react --scss --app-shell --configure-registry --registry-url %REGISTRY_URL% --ca-bundle %CA_BUNDLE_PATH%
```

</template>

</CodeTabs>

If you configure the registry during scaffolding, the generator writes a project `.npmrc` and removes `.npmrc.example`. If you skip registry configuration, the generated project keeps `.npmrc.example` with the private registry settings you need to copy into your project or global npm configuration before installing dependencies.

## Use Local Package Mode

For local testing with unpublished tarballs or with the downloaded [Cobalt Package Bundle](/resources/artifacts#cobalt-packages), choose local package mode:

<CodeTabs :tabs="['npm', 'pnpm']">

<template #npm>

```bash
npm create cobalt my-app -- --cobalt-source local
```

</template>

<template #pnpm>

```bash
pnpm create cobalt my-app --cobalt-source local
```

</template>

</CodeTabs>

Local package mode points Cobalt dependencies at `./cobalt-packages/*.tgz` and writes copy instructions in `cobalt-packages/README.md`. If you are using the bundle artifact, extract it and copy the `cobalt-packages` folder into the generated project before installing dependencies.

## What the Templates Include

Templates include the package dependencies, Cobalt token stylesheet import, starter page structure, and framework-specific event wiring needed to render and test a Cobalt component. App shell templates also include the Cobalt shell pattern with navigation rail, navigation drawer, header, banner, and mode toggle.

Use the guidance in [Getting Started for Developers](/getting-started/developers) when you need to add Cobalt to an existing project instead of creating a new starter.
