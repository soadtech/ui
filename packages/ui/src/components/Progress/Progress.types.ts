import type { HTMLAttributes } from 'react';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text above the bar */
  label?: string;
  /** Progress value 0–100 */
  value?: number;
  /** Show percentage text below the bar */
  showValue?: boolean;
}
