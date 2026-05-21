import * as vscode from 'vscode';
import { CobaltMetadataStore } from './metadata';
import { MetadataSnapshot } from './manifest';
import { renderTokenBrowserHtml } from './token-browser-webview';

export class CobaltTokenBrowserProvider implements vscode.WebviewViewProvider {
  private view: vscode.WebviewView | undefined;
  private readyTimeout: NodeJS.Timeout | undefined;

  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly metadataStore: CobaltMetadataStore,
    private readonly outputChannel: vscode.OutputChannel,
  ) {
    this.context.subscriptions.push(
      this.metadataStore.onDidChange((snapshot) => {
        this.postMetadata(snapshot);
      }),
    );
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void {
    this.view = webviewView;
    let readyReceived = false;
    webviewView.webview.options = {
      enableScripts: true,
    };

    // Register before assigning html because the inline renderer can post "ready"
    // as soon as VS Code evaluates the webview content.
    webviewView.webview.onDidReceiveMessage(
      async (message: { type?: string; text?: string }) => {
        if (message.type === 'ready') {
          readyReceived = true;
          if (this.readyTimeout) {
            clearTimeout(this.readyTimeout);
            this.readyTimeout = undefined;
          }
          this.outputChannel.appendLine('Token browser webview ready signal received.');
          this.postCurrentMetadata();
          return;
        }

        if (message.type === 'webview-error' || message.type === 'log') {
          this.outputChannel.appendLine(
            `Token browser webview ${message.type}: ${message.text ?? 'Unknown message'}`,
          );
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

    webviewView.webview.html = this.renderHtml(webviewView.webview);

    this.context.subscriptions.push(
      webviewView.onDidChangeVisibility(() => {
        if (webviewView.visible) {
          this.postCurrentMetadata();
        }
      }),
    );

    if (this.readyTimeout) {
      clearTimeout(this.readyTimeout);
    }

    this.readyTimeout = setTimeout(() => {
      if (readyReceived) return;
      this.outputChannel.appendLine(
        'Token browser webview did not send ready signal. The webview script may be blocked from running.',
      );
    }, 2000);
    this.context.subscriptions.push({
      dispose: () => {
        if (this.readyTimeout) {
          clearTimeout(this.readyTimeout);
          this.readyTimeout = undefined;
        }
      },
    });
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
    return renderTokenBrowserHtml(webview, this.metadataStore.current);
  }
}
