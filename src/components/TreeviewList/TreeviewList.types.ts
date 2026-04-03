import type { HTMLAttributes, ReactNode } from 'react';

export interface TreeviewListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TreeviewItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  onSelect?: () => void;
  children?: ReactNode;
}
