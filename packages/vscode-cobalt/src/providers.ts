import * as vscode from 'vscode';
import {
  findClassAttributeContext,
  getClassSegment,
  isTokenCompletionContext,
} from './language-context';
import { CobaltMetadataStore } from './metadata';
import {
  isColorToken,
  tokenCompletionDocumentation,
  tokenDetail,
  tokenMarkdown,
  utilityDetail,
  utilityMarkdown,
} from './markdown';

const TOKEN_SELECTOR: vscode.DocumentSelector = [
  { language: 'css' },
  { language: 'scss' },
  { language: 'less' },
];

const MARKUP_SELECTOR: vscode.DocumentSelector = [
  { language: 'html' },
  { language: 'typescriptreact' },
  { language: 'javascriptreact' },
  { language: 'vue' },
  { language: 'angular-html' },
  { language: 'angular' },
];

const HOVER_SELECTOR: vscode.DocumentSelector = [...TOKEN_SELECTOR, ...MARKUP_SELECTOR];

function isEnabled(setting: 'enableTokenCompletions' | 'enableUtilityCompletions'): boolean {
  return vscode.workspace.getConfiguration('cobalt').get<boolean>(setting, true);
}

function tokenReplacementRange(
  document: vscode.TextDocument,
  position: vscode.Position,
): vscode.Range {
  return (
    document.getWordRangeAtPosition(position, /--co-[\w-]*|--[\w-]*|-+/) ??
    new vscode.Range(position, position)
  );
}

function classReplacementRange(
  position: vscode.Position,
  lineText: string,
): vscode.Range | undefined {
  const attributeContext = findClassAttributeContext(lineText, position.character);
  if (!attributeContext) return undefined;

  const segment = getClassSegment(
    attributeContext.value,
    position.character - attributeContext.valueStart,
  );

  return new vscode.Range(
    position.line,
    attributeContext.valueStart + segment.start,
    position.line,
    attributeContext.valueStart + segment.end,
  );
}

function classSegmentAtPosition(lineText: string, character: number): string | undefined {
  const attributeContext = findClassAttributeContext(lineText, character);
  if (!attributeContext) return undefined;

  return getClassSegment(attributeContext.value, character - attributeContext.valueStart).text;
}

export function registerCobaltProviders(
  context: vscode.ExtensionContext,
  metadataStore: CobaltMetadataStore,
): void {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      TOKEN_SELECTOR,
      {
        provideCompletionItems(document, position) {
          if (!isEnabled('enableTokenCompletions')) return undefined;

          const manifest = metadataStore.manifest;
          if (!manifest) return undefined;

          const lineText = document.lineAt(position.line).text;
          if (!isTokenCompletionContext(lineText, position.character)) return undefined;

          const range = tokenReplacementRange(document, position);
          return manifest.tokens.map((token) => {
            const item = new vscode.CompletionItem(
              token.name,
              isColorToken(token)
                ? vscode.CompletionItemKind.Color
                : vscode.CompletionItemKind.Variable,
            );

            item.range = range;
            item.detail = tokenDetail(token);
            item.documentation = tokenCompletionDocumentation(token);
            item.insertText = token.name;
            item.sortText = `${token.tier === 'semantic' ? '0' : token.tier === 'component' ? '1' : '2'}-${token.name}`;

            return item;
          });
        },
      },
      '-',
      '(',
    ),
    vscode.languages.registerCompletionItemProvider(
      MARKUP_SELECTOR,
      {
        provideCompletionItems(document, position) {
          if (!isEnabled('enableUtilityCompletions')) return undefined;

          const manifest = metadataStore.manifest;
          if (!manifest) return undefined;

          const lineText = document.lineAt(position.line).text;
          const range = classReplacementRange(position, lineText);
          if (!range) return undefined;

          return manifest.utilities.map((utility) => {
            const item = new vscode.CompletionItem(
              utility.className,
              vscode.CompletionItemKind.Keyword,
            );

            item.range = range;
            item.detail = utilityDetail(utility);
            item.documentation = utilityMarkdown(utility);
            item.insertText = utility.className;
            item.sortText = utility.className;

            return item;
          });
        },
      },
      ' ',
      '-',
      ':',
    ),
    vscode.languages.registerHoverProvider(HOVER_SELECTOR, {
      provideHover(document, position) {
        const tokenRange = document.getWordRangeAtPosition(position, /--co-[\w-]+/);
        if (tokenRange && isEnabled('enableTokenCompletions')) {
          const token = metadataStore.findToken(document.getText(tokenRange));
          if (token) return new vscode.Hover(tokenMarkdown(token), tokenRange);
        }

        if (!isEnabled('enableUtilityCompletions')) return undefined;

        const lineText = document.lineAt(position.line).text;
        const className = classSegmentAtPosition(lineText, position.character);
        if (!className) return undefined;

        const utility = metadataStore.findUtility(className);
        if (!utility) return undefined;

        const range = classReplacementRange(position, lineText);
        return new vscode.Hover(utilityMarkdown(utility), range);
      },
    }),
  );
}
