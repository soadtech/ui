import type { InputHTMLAttributes } from 'react';

export type CheckboxSize = 'md' | 'sm';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  indeterminate?: boolean;
  readOnly?: boolean;
  size?: CheckboxSize;
  onCheckedChange?: (checked: boolean) => void;
}
