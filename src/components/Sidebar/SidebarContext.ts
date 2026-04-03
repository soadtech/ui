import { createContext, useContext } from 'react';

export interface SidebarContextValue {
  collapsed: boolean;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error('Sidebar components must be used within a <Sidebar>');
  }
  return ctx;
}
