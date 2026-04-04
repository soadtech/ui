import type { HTMLAttributes, ReactNode } from 'react';

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Unique identifier for this item within the accordion */
  value: string;
  /** Trigger title text */
  title: string;
  /** Optional description below the title (collapsible/accordion variants) */
  description?: string;
  /** Optional icon rendered before the title (collapsible/accordion variants) */
  icon?: ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
}
