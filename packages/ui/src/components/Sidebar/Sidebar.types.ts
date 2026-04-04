import type { HTMLAttributes, ReactNode } from 'react';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Icon-only collapsed mode. */
  collapsed?: boolean;
  /** Width when expanded. */
  expandedWidth?: string;
  /** Width when collapsed. */
  collapsedWidth?: string;
}

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface SidebarContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Section label, hidden when collapsed. */
  label?: string;
}

export interface SidebarNavItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Icon shown in both expanded and collapsed modes. */
  icon: ReactNode;
  /** Nav item label text. */
  label: string;
  /** Active/selected state. */
  active?: boolean;
  /** Disabled state. */
  disabled?: boolean;
  /** Badge content — pill in expanded, dot in collapsed. */
  badge?: ReactNode;
  /** Callback when item is selected. */
  onSelect?: () => void;
  /** Submenu content — shows chevron + animated panel. */
  children?: ReactNode;
}

export interface SidebarDividerProps extends HTMLAttributes<HTMLDivElement> {}
