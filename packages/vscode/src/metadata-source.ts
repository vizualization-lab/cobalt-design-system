import { MetadataSource } from './manifest';

export function shouldAttemptWorkspaceMetadata(mode: MetadataSource): boolean {
  return mode !== 'bundled';
}

export function resolveMetadataSource(
  mode: MetadataSource,
  workspaceManifestAvailable: boolean,
): 'workspace' | 'bundled' {
  if (shouldAttemptWorkspaceMetadata(mode) && workspaceManifestAvailable) return 'workspace';
  return 'bundled';
}
