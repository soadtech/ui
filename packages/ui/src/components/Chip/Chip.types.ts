import type { HTMLAttributes, ReactNode } from 'react';

export type ChipVariant = 'filled' | 'light';
export type ChipSize = 'md' | 'sm';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: ChipVariant;
  /** Chip size */
  size?: ChipSize;
  /** Whether the chip is selected */
  selected?: boolean;
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Left icon slot */
  icon?: ReactNode;
  /** Called when the dismiss button is clicked — shows X button when provided */
  onDismiss?: () => void;
}
