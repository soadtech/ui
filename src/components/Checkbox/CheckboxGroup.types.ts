import type { HTMLAttributes, ReactNode } from 'react';

export interface CheckboxGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  children: ReactNode;
}
