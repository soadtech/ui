import type { HTMLAttributes, ReactNode, ButtonHTMLAttributes } from 'react';

export type SegmentedControlSize = 'lg' | 'md' | 'sm';
export type SegmentedControlVariant = 'button' | 'tag';

export interface SegmentedControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Size of the segmented control */
  size?: SegmentedControlSize;
  /** Visual variant */
  variant?: SegmentedControlVariant;
  /** Currently active segment value (controlled) */
  value?: string;
  /** Callback when active segment changes */
  onValueChange?: (value: string) => void;
  /** Disable all segments */
  disabled?: boolean;
  children: ReactNode;
}

export interface SegmentedControlItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** Unique value for this segment */
  value: string;
  /** Optional icon */
  icon?: ReactNode;
}
