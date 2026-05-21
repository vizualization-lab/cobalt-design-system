import * as vscode from 'vscode';
import tokenBrowserTemplate from './token-browser-webview.html';
// Import the browser-side webview code as text so it can be injected into a nonce-approved
// inline script. This avoids VS Code webview local-resource URI differences across platforms.
import webviewScript from './webview-script.js?raw';
import { MetadataSnapshot } from './manifest';

export function renderTokenBrowserHtml(
  webview: vscode.Webview,
  snapshot: MetadataSnapshot | undefined,
): string {
  const nonce = createNonce();

  return tokenBrowserTemplate
    .replaceAll('{{cspSource}}', webview.cspSource)
    .replaceAll('{{nonce}}', nonce)
    .replaceAll('{{snapshotJson}}', escapeScriptJson(snapshot))
    .replaceAll('{{webviewScript}}', webviewScript);
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
