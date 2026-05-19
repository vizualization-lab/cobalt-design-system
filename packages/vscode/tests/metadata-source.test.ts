import { describe, expect, it } from 'vitest';
import { resolveMetadataSource, shouldAttemptWorkspaceMetadata } from '../src/metadata-source';

describe('metadata source precedence', () => {
  it('tries workspace metadata for auto and workspace modes', () => {
    expect(shouldAttemptWorkspaceMetadata('auto')).toBe(true);
    expect(shouldAttemptWorkspaceMetadata('workspace')).toBe(true);
  });

  it('skips workspace metadata for bundled mode', () => {
    expect(shouldAttemptWorkspaceMetadata('bundled')).toBe(false);
  });

  it('prefers workspace metadata when available', () => {
    expect(resolveMetadataSource('auto', true)).toBe('workspace');
    expect(resolveMetadataSource('workspace', true)).toBe('workspace');
  });

  it('falls back to bundled metadata when workspace metadata is unavailable', () => {
    expect(resolveMetadataSource('auto', false)).toBe('bundled');
    expect(resolveMetadataSource('workspace', false)).toBe('bundled');
    expect(resolveMetadataSource('bundled', true)).toBe('bundled');
  });
});
