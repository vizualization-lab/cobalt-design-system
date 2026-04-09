import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const PRIMITIVE_PRIORITY = ['primitives', 'primitives.color'];
const SHARED_SEMANTIC_PRIORITY = ['semantic.shared'];

function toTokenSetName(fileName) {
  return fileName.replace(/\.json$/, '');
}

function formatLabel(value) {
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function sortThemeTokenSets(a, b) {
  if (a.themeId !== b.themeId) {
    return a.themeId.localeCompare(b.themeId);
  }

  const modeOrder = ['light', 'dark'];
  const leftMode = modeOrder.indexOf(a.mode);
  const rightMode = modeOrder.indexOf(b.mode);

  if (leftMode !== -1 || rightMode !== -1) {
    return (
      (leftMode === -1 ? Number.MAX_SAFE_INTEGER : leftMode) -
      (rightMode === -1 ? Number.MAX_SAFE_INTEGER : rightMode)
    );
  }

  return a.mode.localeCompare(b.mode);
}

export function isThemeTokenSet(name) {
  return /^semantic\.theme\.[^.]+\.[^.]+$/.test(name);
}

export function parseThemeTokenSet(name) {
  if (!isThemeTokenSet(name)) {
    return null;
  }

  const [, , themeId, mode] = name.split('.');
  return { themeId, mode };
}

export function isComponentTokenSet(name) {
  return name === 'components' || name.startsWith('components.');
}

export function discoverTokenSets(tokensDir) {
  const jsonFiles = readdirSync(tokensDir)
    .filter((fileName) => fileName.endsWith('.json') && !fileName.startsWith('$'))
    .sort();

  const tokenSets = jsonFiles.map((fileName) => {
    const name = toTokenSetName(fileName);
    const theme = parseThemeTokenSet(name);

    return {
      fileName,
      name,
      sourcePath: `tokens/${fileName}`,
      ...theme,
    };
  });

  const primitives = [];
  const sharedSemantic = [];
  const themeTokenSets = [];
  const componentTokenSets = [];
  const uncategorized = [];

  for (const tokenSet of tokenSets) {
    if (PRIMITIVE_PRIORITY.includes(tokenSet.name)) {
      primitives.push(tokenSet);
      continue;
    }

    if (SHARED_SEMANTIC_PRIORITY.includes(tokenSet.name)) {
      sharedSemantic.push(tokenSet);
      continue;
    }

    if (isThemeTokenSet(tokenSet.name)) {
      themeTokenSets.push(tokenSet);
      continue;
    }

    if (isComponentTokenSet(tokenSet.name)) {
      componentTokenSets.push(tokenSet);
      continue;
    }

    uncategorized.push(tokenSet);
  }

  const prioritySort = (priority) => (left, right) => {
    const leftIndex = priority.indexOf(left.name);
    const rightIndex = priority.indexOf(right.name);
    return leftIndex - rightIndex;
  };

  primitives.sort(prioritySort(PRIMITIVE_PRIORITY));
  sharedSemantic.sort(prioritySort(SHARED_SEMANTIC_PRIORITY));
  themeTokenSets.sort(sortThemeTokenSets);
  componentTokenSets.sort((left, right) => left.name.localeCompare(right.name));
  uncategorized.sort((left, right) => left.name.localeCompare(right.name));

  return {
    tokenSets,
    primitives,
    sharedSemantic,
    themeTokenSets,
    componentTokenSets,
    uncategorized,
  };
}

export function getTokenSetOrder(discovery) {
  return [
    ...discovery.primitives,
    ...discovery.sharedSemantic,
    ...discovery.themeTokenSets,
    ...discovery.componentTokenSets,
    ...discovery.uncategorized,
  ].map((tokenSet) => tokenSet.name);
}

export function buildThemes(discovery) {
  return discovery.themeTokenSets.map((themeTokenSet) => {
    const selectedTokenSets = {};

    for (const primitive of discovery.primitives) {
      selectedTokenSets[primitive.name] =
        primitive.name === 'primitives.color' ? 'source' : 'enabled';
    }

    for (const semantic of discovery.sharedSemantic) {
      selectedTokenSets[semantic.name] = 'enabled';
    }

    selectedTokenSets[themeTokenSet.name] = 'enabled';

    for (const componentTokenSet of discovery.componentTokenSets) {
      selectedTokenSets[componentTokenSet.name] = 'enabled';
    }

    const id =
      themeTokenSet.themeId === 'default'
        ? themeTokenSet.mode
        : `${themeTokenSet.themeId}-${themeTokenSet.mode}`;

    return {
      id,
      name: `${formatLabel(themeTokenSet.themeId)} ${formatLabel(themeTokenSet.mode)}`,
      selectedTokenSets,
      group: themeTokenSet.themeId === 'default' ? 'Theme' : formatLabel(themeTokenSet.themeId),
    };
  });
}

export function buildMetadata(discovery) {
  return {
    tokenSetOrder: getTokenSetOrder(discovery),
  };
}

export function writeGeneratedTokenMetadata(tokensDir, discovery = discoverTokenSets(tokensDir)) {
  writeFileSync(
    join(tokensDir, '$themes.json'),
    JSON.stringify(buildThemes(discovery), null, 2) + '\n',
  );
  writeFileSync(
    join(tokensDir, '$metadata.json'),
    JSON.stringify(buildMetadata(discovery), null, 2) + '\n',
  );
}
