# Artifacts

Downloadable artifacts collect Cobalt tools and supporting files that are useful outside of the package registry. This page will grow as more installable extensions, templates, and packaged resources become available.

## VS Code Extension {#cobalt-tokens-explorer}

<ArtifactDownload
  title="Cobalt Tokens Explorer"
  type="VS Code extension"
  description="Browse, search, copy, and insert Cobalt design tokens and utility classes from inside VS Code. The extension works offline with bundled Cobalt metadata and can use workspace metadata when available."
  download-href="/assets/artifacts/vscode/cobalt-tokens-explorer.vsix"
  screenshot-src="/assets/artifacts/vscode/cobalt-tokens-explorer.png"
  screenshot-alt="Cobalt Tokens Explorer showing token categories, filters, and token details inside VS Code."
  file-name="cobalt-tokens-explorer.vsix"
/>

After downloading, install the extension from VS Code by opening the Extensions view, selecting **Install from VSIX...**, and choosing `cobalt-tokens-explorer.vsix`.

## Cobalt Package Bundle {#cobalt-packages}

<ArtifactDownload
  title="Cobalt Package Bundle"
  type="Developer artifact"
  description="Local npm tarballs for teams that cannot install Cobalt packages from the private npm registry. Use with co new --cobalt-source local, then copy the cobalt-packages folder into the generated project before installing dependencies."
  download-href="/assets/artifacts/npm/cobalt-packages.zip"
  screenshot-src="/assets/artifacts/npm/cobalt-packages.png"
  screenshot-alt="Cobalt Package Bundle preview showing Cobalt branding, npm branding, and local package tarballs."
  file-name="cobalt-packages.zip"
  button-label="Download ZIP"
/>

## Cobalt Agent Skill {#cobalt-agent-skill}

<ArtifactDownload
  title="Cobalt Agent Skill"
  type="AI workflow artifact"
  description="Installable SKILL.md package for AI agents. The skill teaches agents to use the Cobalt CLI for project diagnostics, component API metadata, token lookup, utility lookup, and validation before making Cobalt changes."
  download-href="/assets/artifacts/skills/cobalt-agent-skill.zip"
  screenshot-src="/assets/artifacts/skills/cobalt-agent-skill.svg"
  screenshot-alt="Cobalt Agent Skill preview showing the co agent context command with component, token, and utility counts."
  file-name="cobalt-agent-skill.zip"
  button-label="Download ZIP"
/>

After downloading, extract the ZIP and install the `cobalt` skill folder into your agent's skills directory. Starter projects generated with `co new` also include this folder at `.codex/skills/cobalt`.

## Fonts Package {#cobalt-fonts-package}

<ArtifactDownload
  title="Cobalt Fonts Package"
  type="Designer artifact"
  description="Installable TTF variable fonts for designers creating Cobalt mockups and prototypes. Includes Inter, Noto Sans, and JetBrains Mono with normal and italic variable font files."
  download-href="/assets/artifacts/fonts/cobalt-design-system-fonts.zip"
  screenshot-src="/assets/artifacts/fonts/cobalt-fonts-package.png"
  screenshot-alt="Cobalt Fonts Package preview showing Inter, Noto Sans, and JetBrains Mono type specimens."
  file-name="cobalt-design-system-fonts.zip"
  button-label="Download ZIP"
/>

## Icon Keyline Templates {#icon-keyline-templates}

<ArtifactDownload
  title="SVG Keyline Template"
  type="Designer template"
  description="A 24 by 24 SVG keyline guide with the Cobalt icon canvas, live area, padding zone, and optical sizing shapes for custom icon design."
  download-href="/assets/artifacts/icons/icon-keyline-template.svg"
  screenshot-src="/assets/artifacts/icons/icon-keyline-template.png"
  screenshot-alt="SVG keyline template preview showing the 24 by 24 icon canvas, live area, padding zone, and keyline shapes."
  file-name="icon-keyline-template.svg"
  button-label="Download SVG"
/>

<ArtifactDownload
  title="Illustrator Keyline Template"
  type="Designer template"
  description="An Adobe Illustrator keyline template for designers working from the original Material Design icon template."
  download-href="/assets/artifacts/icons/gm_icon_template.ai.zip"
  screenshot-src="/assets/artifacts/icons/illustrator-keyline-template.png"
  screenshot-alt="Illustrator keyline template preview with Adobe Illustrator-inspired orange branding and icon keyline artwork."
  file-name="gm_icon_template.ai.zip"
  button-label="Download AI ZIP"
/>

The Illustrator template is provided by Google under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0). Original source: [Material Design icon template](https://storage.googleapis.com/material-io-design/downloads/gm_icon_template.ai.zip).
