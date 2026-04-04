import type { HTMLAttributes, ReactNode } from 'react';

export interface DropdownMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {}

export interface DropdownMenuItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {
  /** Leading icon slot */
  icon?: ReactNode;
  /** Keyboard shortcut label (right-aligned, muted) */
  shortcut?: string;
  /** Custom trailing content (submenu chevron, switch, etc.) */
  suffix?: ReactNode;
  /** Disables the item */
  disabled?: boolean;
}

export interface DropdownMenuHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownMenuDividerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {}
