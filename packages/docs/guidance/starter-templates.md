# Starter Templates

Use the Cobalt CLI when you are creating a new application and want Cobalt dependencies, global styles, and a working framework shell created for you.

Install and configure the CLI first using the [Cobalt CLI documentation](/resources/cli), then run the starter flow:

```bash
co new
```

The generator prompts for a framework template, whether to use SCSS, whether to include the Cobalt app shell pattern, and where Cobalt packages should be installed from.

## Skip Prompts

Pass flags when you already know the project shape:

```bash
co new my-app --template react --scss --app-shell
```

When saved CLI registry settings exist, the generator writes a project `.npmrc` and removes `.npmrc.example`. If you pass `--no-configure-registry`, the generated project keeps `.npmrc.example` with the private registry settings you need to copy into your project before installing dependencies.

## Use Local Package Mode

For local testing with unpublished tarballs or with the downloaded [Cobalt Package Bundle](/resources/artifacts#cobalt-packages), choose local package mode:

```bash
co new my-app --cobalt-source local
```

Local package mode points Cobalt dependencies at `./cobalt-packages/*.tgz` and writes copy instructions in `cobalt-packages/README.md`. If you are using the bundle artifact, extract it and copy the `cobalt-packages` folder into the generated project before installing dependencies.

## What the Templates Include

Templates include the package dependencies, Cobalt token stylesheet import, starter page structure, and framework-specific event wiring needed to render and test a Cobalt component. App shell templates also include the Cobalt shell pattern with navigation rail, navigation drawer, header, banner, and mode toggle.

Use the guidance in [Getting Started for Developers](/getting-started/developers) when you need to add Cobalt to an existing project instead of creating a new starter.
