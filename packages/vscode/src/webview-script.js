// Webview script for the Cobalt Tokens Explorer
(function () {
  const vscode = acquireVsCodeApi();
  let snapshot = window.__cobaltInitialSnapshot || null;

  // UI state stays inside the webview; metadata updates are pushed in from the extension host.
  const state = {
    tab: 'main',
    query: '',
    category: 'all',
    themeMode: 'default::light',
    semanticOnly: false,
    expanded: new Set(),
  };

  const sourceEl = document.getElementById('source');
  const statusEl = document.getElementById('status');
  const listEl = document.getElementById('list');
  const queryEl = document.getElementById('query');
  const filterRowEl = document.getElementById('filter-row');
  const categoryEl = document.getElementById('category');
  const themeEl = document.getElementById('theme');
  const semanticFilterEl = document.getElementById('semantic-filter');
  const semanticOnlyEl = document.getElementById('semantic-only');
  let themeValueCache = { manifest: null, themeMode: '', values: null };

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function reportWebviewError(context, error) {
    const text = error && error.message ? String(error.message) : String(error);
    const message = context + ': ' + text;
    statusEl.textContent = 'Error';
    listEl.innerHTML = '<div class="empty">' + escapeHtml(message) + '</div>';
    vscode.postMessage({ type: 'webview-error', text: message });
  }

  window.addEventListener('error', (event) => {
    reportWebviewError('Uncaught error', event.error || event.message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportWebviewError('Unhandled promise rejection', event.reason);
  });

  function actionIcon(type) {
    if (type === 'copy') {
      return (
        '<svg class="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<rect x="9" y="9" width="10" height="10" rx="2" stroke-width="2"></rect>' +
        '<path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
        '</svg>'
      );
    }

    return (
      '<svg class="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<path d="M9 10L5 14L9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
      '<path d="M5 14H16a4 4 0 0 0 4-4V6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
      '<path d="M4 21H20" stroke-width="2" stroke-linecap="round"></path>' +
      '</svg>'
    );
  }

  function renderActions(copyValue, insertValue) {
    const escapedCopyValue = escapeHtml(copyValue);
    const escapedInsertValue = escapeHtml(insertValue);
    return (
      '<div class="actions">' +
      '<button class="icon-button" type="button" title="Copy" aria-label="Copy ' +
      escapedCopyValue +
      '" data-copy="' +
      escapedCopyValue +
      '">' +
      actionIcon('copy') +
      '</button>' +
      '<button class="icon-button" type="button" title="Insert" aria-label="Insert ' +
      escapedInsertValue +
      '" data-insert="' +
      escapedInsertValue +
      '">' +
      actionIcon('insert') +
      '</button>' +
      '</div>'
    );
  }

  function manifest() {
    return snapshot?.manifest ?? { cobaltVersion: 'unknown', tokens: [], utilities: [] };
  }

  function isPaletteToken(token) {
    return token.name.startsWith('--co-color-primitive-');
  }

  // Some token path names are meaningful as a phrase and should not be split into separate folders.
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
    return joinCompoundSegments(
      token.name
        .replace(/^--co-/, '')
        .split('-')
        .slice(1),
    );
  }

  function primitiveTreeSegments(token) {
    const segments = token.name.replace(/^--co-color-primitive-/, '').split('-');
    const lastSegment = segments[segments.length - 1];

    if (!/^\d+$/.test(lastSegment)) {
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

  // Converts a flat token list into the collapsible tree shown when no search query is active.
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
          token,
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
            token,
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
            children: [],
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
          children,
        };
      });
  }

  function availableItems() {
    const data = manifest();
    if (state.tab === 'utilities') return data.utilities;
    if (state.tab === 'palettes') return data.tokens.filter(isPaletteToken);
    return data.tokens.filter(
      (token) => !isPaletteToken(token) && (!state.semanticOnly || token.tier === 'semantic'),
    );
  }

  function selectedThemeParts() {
    const [theme, mode] = state.themeMode.split('::');
    return { theme, mode };
  }

  function tokenValueForTheme(token) {
    const { theme, mode } = selectedThemeParts();
    return (
      token.themeModes?.find((entry) => entry.theme === theme && entry.mode === mode)?.value ??
      token.value
    );
  }

  function selectedThemeValueMap() {
    const data = manifest();
    if (
      themeValueCache.manifest === data &&
      themeValueCache.themeMode === state.themeMode &&
      themeValueCache.values
    ) {
      return themeValueCache.values;
    }

    const values = new Map();
    for (const token of data.tokens) {
      values.set(token.name, tokenValueForTheme(token));
    }

    themeValueCache = { manifest: data, themeMode: state.themeMode, values };
    return values;
  }

  function resolveThemeValue(value, values, depth = 0) {
    if (depth > 10) return null;

    const varMatch = String(value).match(/^var\((--co-[\w-]+)\)$/);
    if (!varMatch) return value;

    const referencedValue = values.get(varMatch[1]);
    if (!referencedValue) return null;

    return resolveThemeValue(referencedValue, values, depth + 1);
  }

  function tokenValue(token) {
    return selectedThemeValueMap().get(token.name) ?? token.value;
  }

  function tokenResolvedValue(token) {
    const values = selectedThemeValueMap();
    const value = values.get(token.name) ?? token.value;
    const resolvedValue = resolveThemeValue(value, values);

    if (!resolvedValue || resolvedValue === value) return '';
    return resolvedValue;
  }

  function tokenSwatch(token) {
    const resolvedValue = tokenResolvedValue(token);
    const value = resolvedValue || tokenValue(token);
    if (/^(#|rgb|hsl|oklch|color\()/.test(value)) return value;
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
      ...(item.tokenRefs ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  }

  // Render helpers rebuild small sections directly from the current state and metadata snapshot.
  function renderTabs() {
    for (const button of document.querySelectorAll('.tab')) {
      button.setAttribute('aria-selected', String(button.dataset.tab === state.tab));
    }
  }

  function renderFilters() {
    const isMain = state.tab === 'main';
    filterRowEl.hidden = !isMain;
    semanticFilterEl.hidden = !isMain;
    semanticOnlyEl.checked = state.semanticOnly;
  }

  function renderCategories() {
    const categories = [
      ...new Set(
        availableItems()
          .map((item) => item.category)
          .filter(Boolean),
      ),
    ].sort();
    const previous = state.category;
    categoryEl.innerHTML = [
      '<option value="all">All categories</option>',
      ...categories.map(
        (category) =>
          '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>',
      ),
    ].join('');

    if (categories.includes(previous)) {
      categoryEl.value = previous;
    } else {
      state.category = 'all';
      categoryEl.value = 'all';
    }

    categoryEl.disabled = state.tab !== 'main';
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
      .map(
        (pair) =>
          '<option value="' + escapeHtml(pair.key) + '">' + escapeHtml(pair.label) + '</option>',
      )
      .join('');

    if (pairs.some((pair) => pair.key === state.themeMode)) {
      themeEl.value = state.themeMode;
    } else if (pairs.length > 0) {
      state.themeMode = pairs[0].key;
      themeEl.value = state.themeMode;
    }

    themeEl.disabled = state.tab !== 'main';
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

    const roots =
      state.tab === 'palettes'
        ? buildTree(items, primitiveTreeSegments, 'palettes')
        : buildMainRoots(items);
    listEl.innerHTML =
      '<div class="tree">' + roots.map((node) => renderTreeNode(node, 0)).join('') + '</div>';
  }

  function renderTreeNode(node, depth) {
    if (node.type === 'leaf') {
      return (
        '<div class="tree-leaf" style="--depth:' +
        depth +
        '">' +
        renderToken(node.token, node.label, depth) +
        '</div>'
      );
    }

    const expanded = state.expanded.has(node.id);

    return (
      '<div class="tree-branch">' +
      '<button class="branch-toggle" type="button" aria-expanded="' +
      String(expanded) +
      '" data-toggle="' +
      escapeHtml(node.id) +
      '" style="--depth:' +
      depth +
      '">' +
      '<span class="chevron">▶</span>' +
      '<span class="branch-label">' +
      escapeHtml(node.label) +
      '</span>' +
      '<span class="branch-count">' +
      node.count +
      '</span>' +
      '</button>' +
      (expanded
        ? '<div class="branch-children">' +
          node.children.map((child) => renderTreeNode(child, depth + 1)).join('') +
          '</div>'
        : '') +
      '</div>'
    );
  }

  function renderToken(token, leafLabel, depth) {
    const swatch = tokenSwatch(token);
    const value = tokenValue(token);
    const resolvedValue = tokenResolvedValue(token);
    return (
      '<article class="item" style="--depth:' +
      depth +
      '">' +
      '<div class="item-main">' +
      '<div class="name-row">' +
      (swatch ? '<span class="swatch" style="background:' + escapeHtml(swatch) + '"></span>' : '') +
      (leafLabel ? '<span class="leaf-label">' + escapeHtml(leafLabel) + '</span>' : '') +
      '<code class="name">' +
      escapeHtml(token.name) +
      '</code>' +
      '</div>' +
      '<div class="meta">' +
      escapeHtml(token.category) +
      ' · ' +
      escapeHtml(token.tier) +
      ' · ' +
      escapeHtml(value) +
      '</div>' +
      (resolvedValue
        ? '<div class="meta">Resolved · ' + escapeHtml(resolvedValue) + '</div>'
        : '') +
      (token.description ? '<div class="desc">' + escapeHtml(token.description) + '</div>' : '') +
      '</div>' +
      renderActions(token.name, 'var(' + token.name + ')') +
      '</article>'
    );
  }

  function renderUtility(utility) {
    return (
      '<article class="item">' +
      '<div class="item-main">' +
      '<div class="name-row"><code class="name">.' +
      escapeHtml(utility.className) +
      '</code></div>' +
      (utility.description
        ? '<div class="desc">' + escapeHtml(utility.description) + '</div>'
        : '') +
      '<pre class="css">' +
      escapeHtml(utility.css) +
      '</pre>' +
      (utility.tokenRefs?.length
        ? '<div class="meta">' + utility.tokenRefs.map(escapeHtml).join(', ') + '</div>'
        : '') +
      '</div>' +
      renderActions(utility.className, utility.className) +
      '</article>'
    );
  }

  function render() {
    sourceEl.textContent = snapshot
      ? 'v' + manifest().cobaltVersion + ' - ' + snapshot.source
      : 'No metadata loaded';
    renderTabs();
    renderFilters();
    renderCategories();
    renderThemes();
    renderList();
  }

  // Event handlers translate webview interactions into local state changes or extension messages.
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

  semanticOnlyEl.addEventListener('change', () => {
    state.semanticOnly = semanticOnlyEl.checked;
    state.category = 'all';
    render();
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

  // The extension can refresh metadata after the view loads; re-render from the newest snapshot.
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'metadata') return;
    if (!event.data.snapshot) return;
    snapshot = event.data.snapshot;
    state.expanded.clear();
    themeValueCache = { manifest: null, themeMode: '', values: null };
    render();
  });

  try {
    render();
  } catch (error) {
    reportWebviewError('Initial render failed', error);
  }

  vscode.postMessage({ type: 'ready' });
  console.log('Webview script loaded.');
  vscode.postMessage({ type: 'log', text: 'Webview script initialized.' });
})();
