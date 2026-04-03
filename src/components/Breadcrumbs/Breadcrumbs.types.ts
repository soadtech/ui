import type { HTMLAttributes, ReactNode } from 'react';

export type BreadcrumbSeparator = 'chevron' | 'slash';

export interface BreadcrumbsProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Separator between items */
  separator?: BreadcrumbSeparator;
  /** Max visible items before collapsing middle items to "..." */
  maxItems?: number;
  children: ReactNode;
}

export interface BreadcrumbItemProps
  extends HTMLAttributes<HTMLElement> {
  /** When provided, renders as a link */
  href?: string;
  /** Optional icon before text */
  icon?: ReactNode;
  /** @internal Set by Breadcrumbs container */
  _active?: boolean;
}
