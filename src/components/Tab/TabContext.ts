import { createContext, useContext } from 'react';
import type { TabVariant } from './Tab.types';

export interface TabContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  variant: TabVariant;
  disabled: boolean;
}

export const TabContext = createContext<TabContextValue | null>(null);

export function useTab(): TabContextValue {
  const ctx = useContext(TabContext);
  if (!ctx) {
    throw new Error('TabItem must be used within a Tab');
  }
  return ctx;
}
