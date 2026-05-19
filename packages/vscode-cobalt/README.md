# Cobalt Tokens Explorer

Use Cobalt's design tokens and utility classes without leaving your editor.

## What It Does

- Suggests Cobalt design tokens in CSS, SCSS, and Less.
- Suggests Cobalt utility classes in static `class` and `className` attributes.
- Shows token and utility details on hover.
- Adds a Cobalt sidebar where you can browse, search, copy, and insert tokens or utilities.
- Works offline with bundled Cobalt metadata, and uses your workspace's installed `@cobalt/tokens` metadata when available.

## Install

Install the internal VSIX package:

```sh
code --install-extension cobalt-vscode.vsix
```

You can also install it from VS Code:

1. Open the Extensions view.
2. Select the `...` menu.
3. Choose `Install from VSIX...`.
4. Select `cobalt-vscode.vsix`.

Reload VS Code after installing or updating the extension.

## Use The Token Browser

1. Open the Cobalt icon in the VS Code Activity Bar.
2. Use the `Main`, `Palettes`, and `Utilities` tabs to browse metadata.
3. Search or filter by category.
4. Expand token groups to inspect nested tokens.
5. Use the clipboard icon to copy a token or class name.
6. Use the insert icon to add it at the active cursor. Tokens are inserted as `var(--co-...)`; utility classes are inserted as class names.

## Use Completions

Token completions appear in stylesheet files:

```css
.button {
  color: var(--co-
}
```

Utility completions appear in static markup attributes:

```html
<button class="co-
```

```tsx
<button className="co-
```

Supported files include CSS, SCSS, Less, HTML, TSX, JSX, Vue templates, and Angular HTML templates.

## Commands

Open the Command Palette and run:

- `Cobalt: Refresh Metadata` to reload token and utility metadata without restarting VS Code.
- `Cobalt: Show Status` to see which metadata source is active.

## Settings

- `cobalt.metadataSource`: choose `auto`, `workspace`, or `bundled`.
- `cobalt.enableTokenCompletions`: enable or disable token completions and hovers.
- `cobalt.enableUtilityCompletions`: enable or disable utility completions and hovers.

The default `auto` mode prefers `node_modules/@cobalt/tokens/dist/tooling/cobalt.manifest.json` in the active workspace, then falls back to the bundled manifest.

## Troubleshooting

If the sidebar says no metadata is loaded, run `Cobalt: Refresh Metadata`.

If workspace metadata is not found, confirm the project has installed `@cobalt/tokens` and that the package includes `dist/tooling/cobalt.manifest.json`.

If the Activity Bar icon does not update after installing a new VSIX, fully close and reopen the Extension Development Host or VS Code window.
