import type { InputHTMLAttributes } from 'react';

export type SwitchSize = 'md' | 'sm';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: SwitchSize;
  readOnly?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export type SwitchFieldVariant = 'default' | 'card';

export interface SwitchFieldProps extends Omit<SwitchProps, 'className'> {
  label: string;
  description?: string;
  variant?: SwitchFieldVariant;
  className?: string;
}
