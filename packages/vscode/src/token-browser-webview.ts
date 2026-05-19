import * as vscode from 'vscode';
import tokenBrowserTemplate from './token-browser-webview.html';
import { MetadataSnapshot } from './manifest';

export function renderTokenBrowserHtml(
  webview: vscode.Webview,
  snapshot: MetadataSnapshot | undefined,
): string {
  const nonce = createNonce();

  return tokenBrowserTemplate
    .replaceAll('{{cspSource}}', webview.cspSource)
    .replaceAll('{{nonce}}', nonce)
    .replaceAll('{{snapshotJson}}', escapeScriptJson(snapshot));
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
