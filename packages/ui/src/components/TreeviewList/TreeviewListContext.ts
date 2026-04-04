import { createContext, useContext } from 'react';

export interface TreeviewListContextValue {
  depth: number;
}

export const TreeviewListContext =
  createContext<TreeviewListContextValue | null>(null);

export function useTreeviewDepth(): number {
  const ctx = useContext(TreeviewListContext);
  return ctx?.depth ?? 0;
}
