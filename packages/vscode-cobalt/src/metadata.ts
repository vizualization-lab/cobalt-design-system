import * as vscode from 'vscode';
import {
  CobaltToken,
  CobaltToolingManifestV1,
  CobaltUtility,
  isCobaltToolingManifest,
  MetadataSnapshot,
  MetadataSource,
} from './manifest';
import { shouldAttemptWorkspaceMetadata } from './metadata-source';

const WORKSPACE_MANIFEST_SEGMENTS = [
  'node_modules',
  '@cobalt',
  'tokens',
  'dist',
  'tooling',
  'cobalt.manifest.json',
];

export class CobaltMetadataStore {
  private readonly didChangeEmitter = new vscode.EventEmitter<MetadataSnapshot>();
  private snapshot: MetadataSnapshot | undefined;
  private tokenMap = new Map<string, CobaltToken>();
  private utilityMap = new Map<string, CobaltUtility>();

  readonly onDidChange = this.didChangeEmitter.event;

  constructor(private readonly extensionUri: vscode.Uri) {}

  get current(): MetadataSnapshot | undefined {
    return this.snapshot;
  }

  get manifest(): CobaltToolingManifestV1 | undefined {
    return this.snapshot?.manifest;
  }

  async initialize(): Promise<void> {
    this.snapshot = await this.resolveMetadata();
    this.rebuildIndexes();
    this.didChangeEmitter.fire(this.snapshot);
  }

  async refresh(): Promise<MetadataSnapshot> {
    this.snapshot = await this.resolveMetadata();
    this.rebuildIndexes();
    this.didChangeEmitter.fire(this.snapshot);
    return this.snapshot;
  }

  findToken(name: string): CobaltToken | undefined {
    return this.tokenMap.get(name);
  }

  findUtility(className: string): CobaltUtility | undefined {
    return this.utilityMap.get(className);
  }

  dispose(): void {
    this.didChangeEmitter.dispose();
  }

  private rebuildIndexes(): void {
    this.tokenMap = new Map(this.snapshot?.manifest.tokens.map((token) => [token.name, token]));
    this.utilityMap = new Map(
      this.snapshot?.manifest.utilities.map((utility) => [utility.className, utility]),
    );
  }

  private async resolveMetadata(): Promise<MetadataSnapshot> {
    const mode = vscode.workspace
      .getConfiguration('cobalt')
      .get<MetadataSource>('metadataSource', 'auto');

    if (shouldAttemptWorkspaceMetadata(mode)) {
      const workspaceSnapshot = await this.tryReadWorkspaceManifest();
      if (workspaceSnapshot) return workspaceSnapshot;
    }

    return this.readManifest(
      vscode.Uri.joinPath(this.extensionUri, 'dist', 'cobalt.manifest.json'),
      'bundled',
    );
  }

  private getWorkspaceFoldersInPriorityOrder(): vscode.WorkspaceFolder[] {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders?.length) return [];

    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) return [...folders];

    const activeFolder = vscode.workspace.getWorkspaceFolder(activeEditor.document.uri);
    if (!activeFolder) return [...folders];

    return [
      activeFolder,
      ...folders.filter((folder) => folder.uri.toString() !== activeFolder.uri.toString()),
    ];
  }

  private async tryReadWorkspaceManifest(): Promise<MetadataSnapshot | undefined> {
    for (const folder of this.getWorkspaceFoldersInPriorityOrder()) {
      const manifestUri = vscode.Uri.joinPath(folder.uri, ...WORKSPACE_MANIFEST_SEGMENTS);
      const snapshot = await this.tryReadManifest(manifestUri, 'workspace');
      if (snapshot) return snapshot;
    }

    return undefined;
  }

  private async tryReadManifest(
    uri: vscode.Uri,
    source: MetadataSnapshot['source'],
  ): Promise<MetadataSnapshot | undefined> {
    try {
      return await this.readManifest(uri, source);
    } catch {
      return undefined;
    }
  }

  private async readManifest(
    uri: vscode.Uri,
    source: MetadataSnapshot['source'],
  ): Promise<MetadataSnapshot> {
    const bytes = await vscode.workspace.fs.readFile(uri);
    const parsed: unknown = JSON.parse(new TextDecoder().decode(bytes));

    if (!isCobaltToolingManifest(parsed)) {
      throw new Error(`Invalid Cobalt tooling manifest: ${uri.toString()}`);
    }

    return {
      manifest: parsed,
      source,
      uri: uri.toString(),
    };
  }
}
