---
title: Installation & Setup FAQ
description: Common questions about package installs, registries, framework support, and local testing.
---

# Installation & Setup FAQ

These questions cover the most common setup blockers for developers adopting Cobalt in an application or contributing inside the monorepo.

## Which Cobalt packages do I install?

Most apps start with `@cobalt/tokens` plus exactly one component layer:

- `@cobalt/components` if you want to use the web components directly
- `@cobalt/react` for React
- `@cobalt/vue` for Vue 3
- `@cobalt/angular` for Angular

Typical installs look like this:

```bash
npm install @cobalt/tokens @cobalt/components
```

or:

```bash
npm install @cobalt/tokens @cobalt/react
```

See [Getting Started for Developers](/getting-started/developers) for the longer setup flow.

## Do I need private registry access?

Maybe. Cobalt packages use the `@cobalt` scope, and some environments may provide that scope through an internal registry or mirror.

- If your team already provisions the `@cobalt` scope in npm config, install normally.
- If your install docs tell you to set a registry for `@cobalt`, follow that step first.
- If you are unsure which registry URL to use, ask through the [Contact](/resources/contact) path rather than guessing.

For local monorepo work, you do not need published packages at all.

## Should I use `npm` or `pnpm`?

Use whichever package manager matches your environment:

- Use `npm` or `pnpm` when consuming published Cobalt packages in an app.
- Use `pnpm` when working inside the Cobalt monorepo, because the repo uses pnpm workspaces and the root scripts assume pnpm.

Repo-level commands such as `pnpm build`, `pnpm dev`, and `pnpm test` should always be run with `pnpm`.

## Can I use Cobalt without React, Vue, or Angular?

Yes. Cobalt’s primary implementation is a set of standard web components built with Lit.

If you do not need a framework wrapper, you can import per-component entry points such as:

```js
import '@cobalt/components/button';
```

and render:

```html
<co-button variant="primary">Save</co-button>
```

Framework wrappers exist for DX, typed props, and framework-native event handling, not because the components require a framework.

## What Node and framework versions are supported?

Current docs should be read this way:

- Repo support baseline: `Node 20+`
- Recommended contributor version: `Node 20.x`
- `pnpm`: `9+`

Wrapper guidance currently documents:

- React: `18` and `19`
- Vue: `3.4+`
- Angular: `17+`

For the latest package-specific guidance, start with [Getting Started for Developers](/getting-started/developers) and the package READMEs.

## How do I test local or unpublished Cobalt changes in another app?

The recommended path is `pnpm pack:local` from the monorepo root. It builds tarballs that match publish output, which is the safest way to catch packaging/export mistakes.

Use `pnpm link --global` only when you need faster iteration and you understand the tradeoff: linked packages can introduce duplicate dependency problems in host apps.

The contributor workflow is documented in [Development Setup](/contributing/development-setup).

## Do I always need to import fonts and base styles?

No. The import rules break down like this:

- `@cobalt/tokens/css` is required
- `@cobalt/tokens/css/fonts` is recommended when you want Cobalt’s self-hosted font stack
- `@cobalt/tokens/css/base` is optional and adds the reset/base element styling layer

If your components look unstyled, the first thing to verify is that `@cobalt/tokens/css` is loaded.

## Related

- [Getting Started for Developers](/getting-started/developers)
- [Development Setup](/contributing/development-setup)
- [Token Reference](/tokens/)
