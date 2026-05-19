import * as vscode from 'vscode';
import { CobaltMetadataStore } from './metadata';
import { MetadataSnapshot } from './manifest';
import { renderTokenBrowserHtml } from './token-browser-webview';

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
    return renderTokenBrowserHtml(webview, this.metadataStore.current);
  }
}
