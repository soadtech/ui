import type { InputHTMLAttributes } from 'react';

export type RadioSize = 'md' | 'sm';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: RadioSize;
  readOnly?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export type RadioFieldVariant = 'default' | 'card';

export interface RadioFieldProps extends RadioButtonProps {
  label: string;
  description?: string;
  variant?: RadioFieldVariant;
  value?: string;
}
