import * as vscode from 'vscode';
import { CobaltToken, CobaltUtility } from './manifest';

function tokenPreviewValue(token: CobaltToken): string {
  return token.resolvedValue ?? token.value;
}

export function tokenMarkdown(token: CobaltToken): vscode.MarkdownString {
  const markdown = new vscode.MarkdownString(undefined, true);
  markdown.isTrusted = false;
  markdown.appendMarkdown(`**${token.name}**\n\n`);

  if (token.description) {
    markdown.appendMarkdown(`${token.description}\n\n`);
  }

  markdown.appendMarkdown(`Category: \`${token.category}\`  \n`);
  markdown.appendMarkdown(`Tier: \`${token.tier}\`  \n`);
  markdown.appendMarkdown(`Value: \`${token.value}\``);

  if (token.resolvedValue) {
    markdown.appendMarkdown(`  \nResolved: \`${token.resolvedValue}\``);
  }

  return markdown;
}

export function tokenCompletionDocumentation(token: CobaltToken): vscode.MarkdownString {
  const markdown = tokenMarkdown(token);
  markdown.appendMarkdown('\n\n');
  markdown.appendCodeblock(`var(${token.name})`, 'css');

  return markdown;
}

export function utilityMarkdown(utility: CobaltUtility): vscode.MarkdownString {
  const markdown = new vscode.MarkdownString(undefined, true);
  markdown.isTrusted = false;
  markdown.appendMarkdown(`**.${utility.className}**\n\n`);

  if (utility.description) {
    markdown.appendMarkdown(`${utility.description}\n\n`);
  }

  markdown.appendCodeblock(utility.css, 'css');

  if (utility.tokenRefs.length > 0) {
    markdown.appendMarkdown(
      `\nToken refs: ${utility.tokenRefs.map((token) => `\`${token}\``).join(', ')}`,
    );
  }

  return markdown;
}

export function tokenDetail(token: CobaltToken): string {
  return `${token.category} ${token.tier}`;
}

export function utilityDetail(utility: CobaltUtility): string {
  if (utility.responsivePrefix) return `Cobalt utility (${utility.responsivePrefix})`;
  return 'Cobalt utility';
}

export function isColorToken(token: CobaltToken): boolean {
  return (
    token.category === 'Color' && /^#|^rgb|^hsl|^oklch|^color\(/.test(tokenPreviewValue(token))
  );
}
