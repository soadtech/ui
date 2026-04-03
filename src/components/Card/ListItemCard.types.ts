import type { HTMLAttributes, ReactNode } from 'react';

export interface ListItem {
  icon?: ReactNode;
  title: string;
  description?: string;
  value?: ReactNode;
  action?: ReactNode;
}

export interface ListItemCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card header title. */
  title?: string;
  /** Header action. */
  action?: ReactNode;
  /** List items. */
  items: ListItem[];
}
