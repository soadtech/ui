import type { HTMLAttributes } from 'react';

export type PaginationSize = 'sm' | 'md';
export type PaginationVariant = 'text' | 'spaced' | 'congested';

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page (1-based) */
  page: number;
  /** Total number of pages */
  count: number;
  /** Callback when the page changes */
  onPageChange: (page: number) => void;
  /** Size — sm uses icon-only nav buttons, md uses labeled nav buttons */
  size?: PaginationSize;
  /** Layout variant */
  variant?: PaginationVariant;
  /** Number of sibling pages around the active page */
  siblingCount?: number;
  /** Number of pages shown at the start and end */
  boundaryCount?: number;
  /** Disables all interaction */
  disabled?: boolean;
}
