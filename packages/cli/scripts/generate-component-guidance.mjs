import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const frameworks = ['web-components', 'react', 'vue', 'angular'];
const templateNames = {
  'web-components': 'web-component',
  react: 'react',
  vue: 'vue',
  angular: 'angular',
};

export function buildComponentGuidance({ docsDir }) {
  const components = [];

  for (const fileName of readdirSync(docsDir).sort()) {
    if (!fileName.endsWith('.md')) continue;
    if (fileName === 'index.md' || fileName === 'status.md') continue;

    const shortName = basename(fileName, '.md');
    const tagName = `co-${shortName}`;
    const docsPath = `/components/${shortName}`;
    const markdown = readFileSync(join(docsDir, fileName), 'utf8');
    const usageSection = extractUsageSection(markdown);
    if (!usageSection) continue;

    const frameworkGuidance = {};
    for (const framework of frameworks) {
      const template = extractTemplate(usageSection, templateNames[framework]);
      if (!template) continue;
      const codeBlocks = extractCodeBlocks(template);
      if (codeBlocks.length === 0) continue;
      frameworkGuidance[framework] = normalizeFrameworkGuidance({
        framework,
        tagName,
        docsPath,
        codeBlocks,
      });
    }

    if (Object.keys(frameworkGuidance).length === 0) continue;
    components.push({
      tagName,
      docsPath,
      frameworks: frameworkGuidance,
    });
  }

  return {
    schemaVersion: 1,
    components,
  };
}

export function writeComponentGuidance(options) {
  const manifest = buildComponentGuidance(options);
  writeFileSync(options.target, `${JSON.stringify(manifest, null, 2)}\n`);
  return manifest;
}

function extractUsageSection(markdown) {
  const usageStart = markdown.search(/^## Usage\s*$/m);
  if (usageStart === -1) return undefined;

  const afterUsage = markdown.slice(usageStart);
  const codeTabsEnd = afterUsage.indexOf('</CodeTabs>');
  if (codeTabsEnd === -1) return undefined;
  return afterUsage.slice(0, codeTabsEnd + '</CodeTabs>'.length);
}

function extractTemplate(section, name) {
  const pattern = new RegExp(`<template\\s+#${escapeRegExp(name)}>`);
  const match = section.match(pattern);
  if (!match || match.index === undefined) return undefined;

  const start = match.index + match[0].length;
  const rest = section.slice(start);
  const nextTemplate = rest.search(/\n<template\s+#|\n<\/CodeTabs>/);
  const chunk = nextTemplate === -1 ? rest : rest.slice(0, nextTemplate);
  const wrapperEnd = chunk.lastIndexOf('</template>');
  return wrapperEnd === -1 ? chunk : chunk.slice(0, wrapperEnd);
}

function extractCodeBlocks(markdown) {
  return [...markdown.matchAll(/```([a-zA-Z0-9-]+)?\n([\s\S]*?)```/g)].map((match) => ({
    language: match[1] ?? 'text',
    code: match[2].trim(),
  }));
}

function normalizeFrameworkGuidance({ framework, tagName, docsPath, codeBlocks }) {
  const code = codeBlocks.map((block) => block.code).join('\n\n');
  return {
    source: {
      docsPath,
      section: 'Usage',
      framework,
    },
    requiredImports: extractImportStatements(code),
    examples: extractExamples({ framework, codeBlocks }),
    relatedComponents: extractRelatedComponents(code, tagName),
    recommendedAttributes: extractRecommendedAttributes({ framework, code, tagName }),
  };
}

function extractImportStatements(code) {
  const statements = new Set();
  const lines = code.split('\n');

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed.startsWith('import ')) continue;

    if (trimmed.endsWith(';')) {
      statements.add(trimmed);
      continue;
    }

    const parts = [trimmed];
    for (index += 1; index < lines.length; index += 1) {
      parts.push(lines[index].trim());
      if (lines[index].trim().endsWith(';')) break;
    }
    statements.add(parts.join(' '));
  }

  return [...statements];
}

function extractExamples({ framework, codeBlocks }) {
  const examples = [];
  for (const block of codeBlocks) {
    const code = stripImportOnlySections(block.code);
    examples.push(...splitCommentedExamples({ framework, language: block.language, code }));
  }

  if (examples.length > 0) return examples;

  return codeBlocks.map((block) => ({
    title: 'Usage',
    language: block.language,
    code: stripImportOnlySections(block.code).trim(),
  }));
}

function splitCommentedExamples({ framework, language, code }) {
  const commentPattern =
    framework === 'react' ? /\{\/\*\s*([^*]+?)\s*\*\/\}/g : /<!--\s*([\s\S]*?)\s*-->/g;
  const matches = [...code.matchAll(commentPattern)];
  const examples = [];

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const title = cleanTitle(match[1]);
    if (isIgnoredExampleTitle(title)) continue;

    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? code.length;
    const snippet = trimExampleSnippet(framework, code.slice(start, end).trim());
    if (!snippet || isImportOnlySnippet(snippet)) continue;

    examples.push({
      title,
      language,
      code: snippet,
    });
  }

  return examples;
}

function trimExampleSnippet(framework, snippet) {
  if (framework === 'react') {
    return snippet
      .replace(/\n\s*<\/>\s*;\s*\n\s*\)\s*;\s*\n}\s*$/s, '')
      .replace(/\n\s*<\/>\s*\n\s*\)\s*;\s*\n}\s*$/s, '')
      .trim();
  }

  if (framework === 'vue') {
    return snippet.replace(/\n\s*<\/template>\s*$/s, '').trim();
  }

  return snippet.trim();
}

function stripImportOnlySections(code) {
  return code
    .replace(/<script\s+type=["']module["']>[\s\S]*?<\/script>/g, '')
    .replace(/^import\s+[\s\S]*?;\n(?=\n|function|const|class|@Component|<template>|$)/gm, '')
    .trim();
}

function isImportOnlySnippet(snippet) {
  return (
    /^<script\s+type=["']module["']>[\s\S]*<\/script>\s*$/.test(snippet) ||
    /^import\s+[\s\S]*;\s*$/.test(snippet)
  );
}

function cleanTitle(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function isIgnoredExampleTitle(title) {
  return /^import once/i.test(title) || /^app\.component/i.test(title);
}

function extractRelatedComponents(code, tagName) {
  const tags = new Set();
  for (const match of code.matchAll(/<\/?(co-[a-z0-9-]+)\b/g)) {
    if (match[1] !== tagName) tags.add(match[1]);
  }

  for (const match of code.matchAll(/\b(Co[A-Z][A-Za-z0-9]*)\b/g)) {
    const tag = pascalToTagName(match[1]);
    if (tag !== tagName) tags.add(tag);
  }

  return [...tags].sort().map((tag) => ({
    tagName: tag,
    imports: {
      webComponent: `@cobalt/components/${tag.replace(/^co-/, '')}`,
      react: `@cobalt/react/${tag.replace(/^co-/, '')}`,
      vue: `@cobalt/vue/${tag.replace(/^co-/, '')}`,
      angular: `@cobalt/angular/${tag.replace(/^co-/, '')}`,
    },
  }));
}

function extractRecommendedAttributes({ framework, code, tagName }) {
  const attributes = new Set();
  const patterns =
    framework === 'react' || framework === 'vue'
      ? [new RegExp(`<${tagToPascal(tagName)}\\b([^>]*)`, 'g')]
      : [new RegExp(`<${tagName}\\b([^>]*)`, 'g')];

  for (const pattern of patterns) {
    for (const match of code.matchAll(pattern)) {
      for (const attribute of extractAttributeNames(match[1])) {
        attributes.add(attribute);
      }
    }
  }

  return [...attributes].sort();
}

function extractAttributeNames(source) {
  const attributes = [];
  const withoutValues = source.replace(/"[^"]*"|'[^']*'|\{[^}]*\}/g, '=""');
  const pattern = /(?:^|\s)([:@()[\]A-Za-z_][:@()[\]A-Za-z0-9_.-]*)(?:\s*=\s*|\s|$)/g;
  for (const match of withoutValues.matchAll(pattern)) {
    const name = normalizeAttributeName(match[1]);
    if (name && !ignoredAttributes.has(name)) attributes.push(name);
  }
  return attributes;
}

const ignoredAttributes = new Set(['id', 'class', 'style']);

function normalizeAttributeName(name) {
  return name
    .replace(/^:/, '')
    .replace(/^@/, '')
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .replace(/^\(/, '')
    .replace(/\)$/, '');
}

function tagToPascal(tagName) {
  return `Co${tagName
    .replace(/^co-/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}`;
}

function pascalToTagName(name) {
  return name
    .replace(/^Co/, 'co')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
