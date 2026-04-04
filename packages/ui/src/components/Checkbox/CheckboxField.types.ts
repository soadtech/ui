import type { CheckboxProps } from './Checkbox.types';

export type CheckboxFieldVariant = 'default' | 'card';

export interface CheckboxFieldProps extends CheckboxProps {
  label: string;
  description?: string;
  variant?: CheckboxFieldVariant;
}
