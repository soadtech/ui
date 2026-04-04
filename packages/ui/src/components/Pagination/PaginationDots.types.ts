import type { HTMLAttributes } from 'react';

export type PaginationDotsVariant = 'dot' | 'tab';

export interface PaginationDotsProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Number of indicators */
  count: number;
  /** Active index (0-based) */
  activeIndex: number;
  /** Click handler for an indicator */
  onIndexChange?: (index: number) => void;
  /** Indicator shape */
  variant?: PaginationDotsVariant;
  /** Disables all interaction */
  disabled?: boolean;
}
