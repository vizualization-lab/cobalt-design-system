import * as vscode from 'vscode';
import { CobaltMetadataStore } from './metadata';
import { MetadataSnapshot } from './manifest';

export class CobaltTokenBrowserProvider implements vscode.WebviewViewProvider {
  private view: vscode.WebviewView | undefined;

  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly metadataStore: CobaltMetadataStore,
  ) {
    this.context.subscriptions.push(
      this.metadataStore.onDidChange((snapshot) => {
        this.postMetadata(snapshot);
      }),
    );
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void {
    this.view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
    };

    webviewView.webview.html = this.renderHtml(webviewView.webview);
    webviewView.webview.onDidReceiveMessage(
      async (message: { type?: string; text?: string }) => {
        if (message.type === 'ready') {
          this.postCurrentMetadata();
          return;
        }

        if (!message.text) return;

        if (message.type === 'copy') {
          await vscode.env.clipboard.writeText(message.text);
          return;
        }

        if (message.type === 'insert') {
          const editor = vscode.window.activeTextEditor;
          if (!editor) return;

          await editor.edit((editBuilder) => {
            for (const selection of editor.selections) {
              editBuilder.replace(selection, message.text ?? '');
            }
          });
        }
      },
      undefined,
      this.context.subscriptions,
    );

    this.context.subscriptions.push(
      webviewView.onDidChangeVisibility(() => {
        if (webviewView.visible) {
          this.postCurrentMetadata();
        }
      }),
    );

    setTimeout(() => this.postCurrentMetadata(), 0);
  }

  private postCurrentMetadata(): void {
    const snapshot = this.metadataStore.current;
    if (!snapshot) return;

    this.postMetadata(snapshot);
  }

  private postMetadata(snapshot: MetadataSnapshot): void {
    void this.view?.webview.postMessage({ type: 'metadata', snapshot });
  }

  private renderHtml(webview: vscode.Webview): string {
    const nonce = createNonce();
    const snapshot = this.metadataStore.current;
    const safeSnapshot = escapeScriptJson(snapshot);

    return /* html */ `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';"
    >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      :root {
        color-scheme: light dark;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
      }

      body {
        margin: 0;
        color: var(--vscode-foreground);
        background: var(--vscode-sideBar-background);
        font-family: var(--vscode-font-family);
        font-size: var(--vscode-font-size);
        overflow: hidden;
      }

      button,
      input,
      select {
        font: inherit;
      }

      .shell {
        display: grid;
        grid-template-rows: auto auto auto auto minmax(0, 1fr);
        height: 100vh;
        min-height: 0;
      }

      .header,
      .filters,
      .status {
        padding: 10px 12px;
        border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
      }

      .title {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
      }

      .source {
        margin-top: 4px;
        color: var(--vscode-descriptionForeground);
        font-size: 11px;
      }

      .tabs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
      }

      .tab {
        min-width: 0;
        padding: 8px 6px;
        border: 0;
        border-bottom: 2px solid transparent;
        color: var(--vscode-descriptionForeground);
        background: transparent;
        cursor: pointer;
      }

      .tab[aria-selected="true"] {
        color: var(--vscode-foreground);
        border-bottom-color: var(--vscode-focusBorder);
      }

      .filters {
        display: grid;
        gap: 8px;
      }

      .input,
      .select {
        width: 100%;
        min-height: 28px;
        border: 1px solid var(--vscode-input-border, transparent);
        color: var(--vscode-input-foreground);
        background: var(--vscode-input-background);
        padding: 4px 7px;
      }

      .filter-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      .status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        color: var(--vscode-descriptionForeground);
        font-size: 11px;
      }

      .list {
        min-height: 0;
        overflow: auto;
      }

      .tree {
        min-width: 0;
      }

      .branch-toggle,
      .tree-leaf {
        width: 100%;
        min-width: 0;
        border: 0;
        border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
        color: var(--vscode-foreground);
        background: transparent;
        text-align: left;
      }

      .branch-toggle {
        display: grid;
        grid-template-columns: 14px minmax(0, 1fr) auto;
        align-items: center;
        gap: 6px;
        min-height: 34px;
        padding: 7px 10px 7px calc(var(--depth) * 16px + 10px);
        cursor: pointer;
      }

      .branch-toggle:hover,
      .tree-leaf:hover {
        background: var(--vscode-list-hoverBackground);
      }

      .chevron {
        color: var(--vscode-descriptionForeground);
        font-size: 10px;
        transform: rotate(0deg);
        transition: transform 120ms ease;
      }

      .branch-toggle[aria-expanded="true"] .chevron {
        transform: rotate(90deg);
      }

      .branch-label {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .branch-count {
        color: var(--vscode-descriptionForeground);
        font-size: 11px;
      }

      .item {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 8px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
      }

      .tree-leaf {
        padding: 0;
      }

      .tree-leaf .item {
        padding-left: calc(var(--depth) * 16px + 12px);
      }

      .item-main {
        min-width: 0;
      }

      .name-row {
        display: flex;
        align-items: center;
        gap: 7px;
        min-width: 0;
      }

      .leaf-label {
        flex: 0 0 auto;
        color: var(--vscode-descriptionForeground);
        font-family: var(--vscode-editor-font-family);
        font-size: 11px;
      }

      .name {
        min-width: 0;
        overflow-wrap: anywhere;
        color: var(--vscode-foreground);
        font-family: var(--vscode-editor-font-family);
        font-size: 12px;
      }

      .meta,
      .desc,
      .css {
        margin-top: 5px;
        color: var(--vscode-descriptionForeground);
        font-size: 11px;
      }

      .css {
        white-space: pre-wrap;
        font-family: var(--vscode-editor-font-family);
      }

      .swatch {
        width: 14px;
        height: 14px;
        flex: 0 0 auto;
        border: 1px solid var(--vscode-contrastBorder, rgba(127, 127, 127, 0.5));
        border-radius: 3px;
      }

      .actions {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .icon-button {
        width: 28px;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 1px solid var(--vscode-button-border, transparent);
        border-radius: 4px;
        color: var(--vscode-button-secondaryForeground);
        background: var(--vscode-button-secondaryBackground);
        cursor: pointer;
      }

      .icon-button:hover {
        background: var(--vscode-button-secondaryHoverBackground);
      }

      .button-icon {
        width: 16px;
        height: 16px;
        pointer-events: none;
        stroke: currentColor;
      }

      .empty {
        padding: 24px 12px;
        color: var(--vscode-descriptionForeground);
        text-align: center;
      }
    </style>
  </head>
  <body>
    <main class="shell">
      <header class="header">
        <h1 class="title">Cobalt Tokens Explorer</h1>
        <div id="source" class="source"></div>
      </header>
      <nav class="tabs" aria-label="Cobalt browser">
        <button class="tab" type="button" data-tab="main">Main</button>
        <button class="tab" type="button" data-tab="palettes">Palettes</button>
        <button class="tab" type="button" data-tab="utilities">Utilities</button>
      </nav>
      <section class="filters">
        <input id="query" class="input" type="search" placeholder="Search">
        <div class="filter-row">
          <select id="category" class="select"></select>
          <select id="theme" class="select"></select>
        </div>
      </section>
      <div id="status" class="status"></div>
      <section id="list" class="list" aria-live="polite"></section>
    </main>
    <script nonce="${nonce}">
      const vscode = acquireVsCodeApi();
      let snapshot = ${safeSnapshot};
      const state = {
        tab: 'main',
        query: '',
        category: 'all',
        themeMode: 'default::light',
        expanded: new Set()
      };

      const sourceEl = document.getElementById('source');
      const statusEl = document.getElementById('status');
      const listEl = document.getElementById('list');
      const queryEl = document.getElementById('query');
      const categoryEl = document.getElementById('category');
      const themeEl = document.getElementById('theme');

      function escapeHtml(value) {
        return String(value)
          .replaceAll('&', '&amp;')
          .replaceAll('<', '&lt;')
          .replaceAll('>', '&gt;')
          .replaceAll('"', '&quot;')
          .replaceAll("'", '&#39;');
      }

      function actionIcon(type) {
        if (type === 'copy') {
          return '<svg class="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
            '<rect x="9" y="9" width="10" height="10" rx="2" stroke-width="2"></rect>' +
            '<path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
          '</svg>';
        }

        return '<svg class="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
          '<path d="M9 10L5 14L9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
          '<path d="M5 14H16a4 4 0 0 0 4-4V6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
          '<path d="M4 21H20" stroke-width="2" stroke-linecap="round"></path>' +
        '</svg>';
      }

      function renderActions(copyValue, insertValue) {
        const escapedCopyValue = escapeHtml(copyValue);
        const escapedInsertValue = escapeHtml(insertValue);
        return '<div class="actions">' +
          '<button class="icon-button" type="button" title="Copy" aria-label="Copy ' + escapedCopyValue + '" data-copy="' + escapedCopyValue + '">' + actionIcon('copy') + '</button>' +
          '<button class="icon-button" type="button" title="Insert" aria-label="Insert ' + escapedInsertValue + '" data-insert="' + escapedInsertValue + '">' + actionIcon('insert') + '</button>' +
        '</div>';
      }

      function manifest() {
        return snapshot?.manifest ?? { cobaltVersion: 'unknown', tokens: [], utilities: [] };
      }

      function isPaletteToken(token) {
        return token.name.startsWith('--co-color-primitive-');
      }

      const compoundSegments = ['line-height', 'modal-backdrop', 'body-sm', 'body-lg'];

      function joinCompoundSegments(segments) {
        const out = [];
        let index = 0;

        while (index < segments.length) {
          let matched = false;

          for (const compound of compoundSegments) {
            const parts = compound.split('-');
            if (parts.every((part, partIndex) => segments[index + partIndex] === part)) {
              out.push(compound);
              index += parts.length;
              matched = true;
              break;
            }
          }

          if (!matched) {
            out.push(segments[index]);
            index += 1;
          }
        }

        return out;
      }

      function mainTreeSegments(token) {
        return joinCompoundSegments(token.name.replace(/^--co-/, '').split('-').slice(1));
      }

      function primitiveTreeSegments(token) {
        const segments = token.name.replace(/^--co-color-primitive-/, '').split('-');
        const lastSegment = segments[segments.length - 1];

        if (!/^\\d+$/.test(lastSegment)) {
          return joinCompoundSegments(segments);
        }

        const familySegments = segments.slice(0, -1);
        const mode = familySegments[familySegments.length - 1] === 'dark' ? 'dark' : 'light';

        if (mode === 'dark') {
          familySegments.pop();
        }

        return [...joinCompoundSegments(familySegments), mode, lastSegment];
      }

      function compareLabel(left, right) {
        return left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' });
      }

      function leafCount(nodes) {
        return nodes.reduce((total, node) => total + node.count, 0);
      }

      function finalizeNodes(nodes) {
        const branches = [];
        const leaves = [];

        for (const node of nodes) {
          if (node.type === 'branch') {
            node.children = finalizeNodes(node.children);
            node.count = leafCount(node.children);
            branches.push(node);
          } else {
            leaves.push(node);
          }
        }

        branches.sort((left, right) => compareLabel(left.label, right.label));
        leaves.sort((left, right) => compareLabel(left.label, right.label));

        return [...branches, ...leaves];
      }

      function buildTree(tokens, pathForToken, scope) {
        const roots = [];
        const sortedTokens = [...tokens].sort((left, right) => compareLabel(left.name, right.name));

        for (const token of sortedTokens) {
          const segments = pathForToken(token).filter(Boolean);

          if (segments.length === 0) {
            roots.push({
              type: 'leaf',
              id: scope + ':leaf:' + token.name,
              label: token.name,
              count: 1,
              token
            });
            continue;
          }

          let currentNodes = roots;
          let currentPath = '';

          for (let index = 0; index < segments.length; index += 1) {
            const segment = segments[index];
            currentPath = currentPath ? currentPath + '/' + segment : segment;
            const isLeaf = index === segments.length - 1;

            if (isLeaf) {
              currentNodes.push({
                type: 'leaf',
                id: scope + ':leaf:' + token.name,
                label: segment,
                count: 1,
                token
              });
              continue;
            }

            let branch = currentNodes.find((node) => node.type === 'branch' && node.label === segment);

            if (!branch) {
              branch = {
                type: 'branch',
                id: scope + ':branch:' + currentPath,
                label: segment,
                count: 0,
                children: []
              };
              currentNodes.push(branch);
            }

            currentNodes = branch.children;
          }
        }

        return finalizeNodes(roots);
      }

      function buildMainRoots(tokens) {
        const groups = new Map();

        for (const token of tokens) {
          const group = groups.get(token.category) ?? [];
          group.push(token);
          groups.set(token.category, group);
        }

        return [...groups.entries()]
          .sort(([left], [right]) => compareLabel(left, right))
          .map(([category, entries]) => {
            const children = buildTree(entries, mainTreeSegments, 'main:' + category.toLowerCase());
            return {
              type: 'branch',
              id: 'main:category:' + category,
              label: category,
              count: leafCount(children),
              children
            };
          });
      }

      function availableItems() {
        const data = manifest();
        if (state.tab === 'utilities') return data.utilities;
        if (state.tab === 'palettes') return data.tokens.filter(isPaletteToken);
        return data.tokens.filter((token) => !isPaletteToken(token));
      }

      function selectedThemeParts() {
        const [theme, mode] = state.themeMode.split('::');
        return { theme, mode };
      }

      function tokenValue(token) {
        const { theme, mode } = selectedThemeParts();
        return token.themeModes?.find((entry) => entry.theme === theme && entry.mode === mode)?.value ?? token.value;
      }

      function tokenSwatch(token) {
        const value = tokenValue(token);
        if (/^(#|rgb|hsl|oklch|color\\()/.test(value)) return value;
        if (/^(#|rgb|hsl|oklch|color\\()/.test(token.resolvedValue ?? '')) return token.resolvedValue;
        return '';
      }

      function itemMatches(item) {
        const query = state.query.trim().toLowerCase();
        if (state.category !== 'all' && item.category !== state.category) return false;
        if (!query) return true;

        const haystack = [
          item.name,
          item.className,
          item.category,
          item.tier,
          item.description,
          item.css,
          ...(item.tokenRefs ?? [])
        ].filter(Boolean).join(' ').toLowerCase();

        return haystack.includes(query);
      }

      function renderTabs() {
        for (const button of document.querySelectorAll('.tab')) {
          button.setAttribute('aria-selected', String(button.dataset.tab === state.tab));
        }
      }

      function renderCategories() {
        const categories = [...new Set(availableItems().map((item) => item.category).filter(Boolean))].sort();
        const previous = state.category;
        categoryEl.innerHTML = [
          '<option value="all">All categories</option>',
          ...categories.map((category) => '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>')
        ].join('');

        if (categories.includes(previous)) {
          categoryEl.value = previous;
        } else {
          state.category = 'all';
          categoryEl.value = 'all';
        }

        categoryEl.disabled = state.tab === 'utilities';
      }

      function renderThemes() {
        const pairs = [];
        for (const token of manifest().tokens) {
          for (const entry of token.themeModes ?? []) {
            const key = entry.theme + '::' + entry.mode;
            if (!pairs.some((pair) => pair.key === key)) {
              pairs.push({ key, label: entry.theme + ' / ' + entry.mode });
            }
          }
        }

        themeEl.innerHTML = pairs
          .map((pair) => '<option value="' + escapeHtml(pair.key) + '">' + escapeHtml(pair.label) + '</option>')
          .join('');

        if (pairs.some((pair) => pair.key === state.themeMode)) {
          themeEl.value = state.themeMode;
        } else if (pairs.length > 0) {
          state.themeMode = pairs[0].key;
          themeEl.value = state.themeMode;
        }

        themeEl.disabled = state.tab === 'utilities';
      }

      function renderList() {
        const items = availableItems().filter(itemMatches);
        statusEl.textContent = items.length + ' of ' + availableItems().length;

        if (items.length === 0) {
          listEl.innerHTML = '<div class="empty">No matches</div>';
          return;
        }

        if (state.tab === 'utilities') {
          listEl.innerHTML = items.map((item) => renderUtility(item)).join('');
          return;
        }

        if (state.query.trim()) {
          listEl.innerHTML = items.map((item) => renderToken(item, '', 0)).join('');
          return;
        }

        const roots = state.tab === 'palettes'
          ? buildTree(items, primitiveTreeSegments, 'palettes')
          : buildMainRoots(items);
        listEl.innerHTML = '<div class="tree">' + roots.map((node) => renderTreeNode(node, 0)).join('') + '</div>';
      }

      function renderTreeNode(node, depth) {
        if (node.type === 'leaf') {
          return '<div class="tree-leaf" style="--depth:' + depth + '">' + renderToken(node.token, node.label, depth) + '</div>';
        }

        const expanded = state.expanded.has(node.id);

        return '<div class="tree-branch">' +
          '<button class="branch-toggle" type="button" aria-expanded="' + String(expanded) + '" data-toggle="' + escapeHtml(node.id) + '" style="--depth:' + depth + '">' +
            '<span class="chevron">▶</span>' +
            '<span class="branch-label">' + escapeHtml(node.label) + '</span>' +
            '<span class="branch-count">' + node.count + '</span>' +
          '</button>' +
          (expanded ? '<div class="branch-children">' + node.children.map((child) => renderTreeNode(child, depth + 1)).join('') + '</div>' : '') +
        '</div>';
      }

      function renderToken(token, leafLabel, depth) {
        const swatch = tokenSwatch(token);
        const value = tokenValue(token);
        return '<article class="item" style="--depth:' + depth + '">' +
          '<div class="item-main">' +
            '<div class="name-row">' +
              (swatch ? '<span class="swatch" style="background:' + escapeHtml(swatch) + '"></span>' : '') +
              (leafLabel ? '<span class="leaf-label">' + escapeHtml(leafLabel) + '</span>' : '') +
              '<code class="name">' + escapeHtml(token.name) + '</code>' +
            '</div>' +
            '<div class="meta">' + escapeHtml(token.category) + ' · ' + escapeHtml(token.tier) + ' · ' + escapeHtml(value) + '</div>' +
            (token.resolvedValue ? '<div class="meta">Resolved · ' + escapeHtml(token.resolvedValue) + '</div>' : '') +
            (token.description ? '<div class="desc">' + escapeHtml(token.description) + '</div>' : '') +
          '</div>' +
          renderActions(token.name, 'var(' + token.name + ')') +
        '</article>';
      }

      function renderUtility(utility) {
        return '<article class="item">' +
          '<div class="item-main">' +
            '<div class="name-row"><code class="name">.' + escapeHtml(utility.className) + '</code></div>' +
            (utility.description ? '<div class="desc">' + escapeHtml(utility.description) + '</div>' : '') +
            '<pre class="css">' + escapeHtml(utility.css) + '</pre>' +
            (utility.tokenRefs?.length ? '<div class="meta">' + utility.tokenRefs.map(escapeHtml).join(', ') + '</div>' : '') +
          '</div>' +
          renderActions(utility.className, utility.className) +
        '</article>';
      }

      function render() {
        sourceEl.textContent = snapshot
          ? 'v' + manifest().cobaltVersion + ' · ' + snapshot.source
          : 'No metadata loaded';
        renderTabs();
        renderCategories();
        renderThemes();
        renderList();
      }

      document.querySelector('.tabs').addEventListener('click', (event) => {
        const button = event.target.closest('[data-tab]');
        if (!button) return;
        state.tab = button.dataset.tab;
        state.category = 'all';
        render();
      });

      queryEl.addEventListener('input', () => {
        state.query = queryEl.value;
        renderList();
      });

      categoryEl.addEventListener('change', () => {
        state.category = categoryEl.value;
        renderList();
      });

      themeEl.addEventListener('change', () => {
        state.themeMode = themeEl.value;
        renderList();
      });

      listEl.addEventListener('click', (event) => {
        const toggleButton = event.target.closest('[data-toggle]');
        if (toggleButton) {
          const id = toggleButton.dataset.toggle;
          if (state.expanded.has(id)) {
            state.expanded.delete(id);
          } else {
            state.expanded.add(id);
          }
          renderList();
          return;
        }

        const copyButton = event.target.closest('[data-copy]');
        if (copyButton) {
          vscode.postMessage({ type: 'copy', text: copyButton.dataset.copy });
          return;
        }

        const insertButton = event.target.closest('[data-insert]');
        if (insertButton) {
          vscode.postMessage({ type: 'insert', text: insertButton.dataset.insert });
        }
      });

      window.addEventListener('message', (event) => {
        if (event.data?.type !== 'metadata') return;
        if (!event.data.snapshot) return;
        snapshot = event.data.snapshot;
        state.expanded.clear();
        render();
      });

      render();
      vscode.postMessage({ type: 'ready' });
    </script>
  </body>
</html>`;
  }
}

function createNonce(): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';

  for (let i = 0; i < 32; i += 1) {
    nonce += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return nonce;
}

function escapeScriptJson(snapshot: MetadataSnapshot | undefined): string {
  return JSON.stringify(snapshot ?? null).replace(/</g, '\\u003c');
}
