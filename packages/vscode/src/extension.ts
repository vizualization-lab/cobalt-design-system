import * as vscode from 'vscode';
import { CobaltMetadataStore } from './metadata';
import { registerCobaltProviders } from './providers';
import { CobaltTokenBrowserProvider } from './token-browser';

let outputChannel: vscode.OutputChannel | undefined;

export function activate(context: vscode.ExtensionContext): void {
  outputChannel = vscode.window.createOutputChannel('Cobalt');
  const extensionVersion = String(context.extension.packageJSON.version ?? 'unknown');
  outputChannel.appendLine('Activating Cobalt VS Code extension.');
  outputChannel.appendLine(`Extension version: ${extensionVersion}`);
  outputChannel.appendLine(`Extension path: ${context.extensionUri.fsPath}`);
  context.subscriptions.push(outputChannel);

  const metadataStore = new CobaltMetadataStore(context.extensionUri);
  context.subscriptions.push(metadataStore);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'cobalt.tokenBrowser',
      new CobaltTokenBrowserProvider(context, metadataStore, outputChannel),
    ),
    vscode.commands.registerCommand('cobalt.refreshMetadata', async () => {
      await refreshMetadata(metadataStore, true);
    }),
    vscode.commands.registerCommand('cobalt.showStatus', () => {
      showStatus(metadataStore, extensionVersion);
    }),
    vscode.workspace.onDidChangeConfiguration(async (event) => {
      if (!event.affectsConfiguration('cobalt.metadataSource')) return;
      await refreshMetadata(metadataStore, false);
    }),
  );

  outputChannel.appendLine('Registered Cobalt token browser provider.');

  try {
    registerCobaltProviders(context, metadataStore);
    outputChannel.appendLine('Registered Cobalt language providers.');
  } catch (error) {
    reportMetadataError('Cobalt language provider registration failed', error);
  }

  void initializeMetadata(metadataStore);
}

export function deactivate(): void {}

async function initializeMetadata(metadataStore: CobaltMetadataStore): Promise<void> {
  try {
    await metadataStore.initialize();
    const snapshot = metadataStore.current;
    outputChannel?.appendLine(
      `Loaded metadata from ${snapshot?.source ?? 'unknown'}: ${snapshot?.manifest.tokens.length ?? 0} tokens, ${snapshot?.manifest.utilities.length ?? 0} utilities.`,
    );
  } catch (error) {
    reportMetadataError('Cobalt metadata failed to load', error);
  }
}

async function refreshMetadata(
  metadataStore: CobaltMetadataStore,
  showSuccessMessage: boolean,
): Promise<void> {
  try {
    const snapshot = await metadataStore.refresh();
    outputChannel?.appendLine(
      `Refreshed metadata from ${snapshot.source}: ${snapshot.manifest.tokens.length} tokens, ${snapshot.manifest.utilities.length} utilities.`,
    );
    if (!showSuccessMessage) return;

    vscode.window.showInformationMessage(
      `Cobalt metadata refreshed from ${snapshot.source} (v${snapshot.manifest.cobaltVersion}).`,
    );
  } catch (error) {
    reportMetadataError('Cobalt metadata refresh failed', error);
  }
}

function reportMetadataError(prefix: string, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  outputChannel?.appendLine(`${prefix}: ${message}`);
  console.error(`${prefix}: ${message}`);
  vscode.window.showWarningMessage(`${prefix}. ${message}`);
}

function showStatus(metadataStore: CobaltMetadataStore, extensionVersion: string): void {
  const snapshot = metadataStore.current;
  outputChannel?.show(true);

  if (!snapshot) {
    outputChannel?.appendLine(
      `Cobalt status\nExtension version: ${extensionVersion}\nMetadata is not loaded yet.`,
    );
    vscode.window.showWarningMessage('Cobalt metadata is not loaded yet.');
    return;
  }

  const lines = [
    'Cobalt status',
    `Extension version: ${extensionVersion}`,
    `Source: ${snapshot.source}`,
    `Cobalt metadata version: ${snapshot.manifest.cobaltVersion}`,
    `Tokens: ${snapshot.manifest.tokens.length}`,
    `Utilities: ${snapshot.manifest.utilities.length}`,
    `URI: ${snapshot.uri ?? 'n/a'}`,
  ];

  outputChannel?.appendLine(lines.join('\n'));
  vscode.window.showInformationMessage(
    `Cobalt loaded ${snapshot.manifest.tokens.length} tokens and ${snapshot.manifest.utilities.length} utilities from ${snapshot.source}.`,
  );
}
