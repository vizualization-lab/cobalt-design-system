export interface TokenEntry {
  name: string;
  value: string;
  resolvedValue: string | null;
  category: string;
  tier: 'primitive' | 'semantic';
  description: string | null;
}

export interface TokenLeafNode {
  type: 'leaf';
  id: string;
  label: string;
  count: 1;
  token: TokenEntry;
}

export interface TokenBranchNode {
  type: 'branch';
  id: string;
  label: string;
  count: number;
  children: TokenTreeNode[];
}

export type TokenTreeNode = TokenLeafNode | TokenBranchNode;
