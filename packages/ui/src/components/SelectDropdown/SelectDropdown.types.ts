import type { HTMLAttributes } from 'react';

export type SelectDropdownSize = 'lg' | 'md';
export type SelectDropdownFeedbackStatus = 'success' | 'error' | 'warning' | 'ai';

export interface SelectDropdownFeedback {
  status: SelectDropdownFeedbackStatus;
  message: string;
}

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

interface Base extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: SelectDropdownSize;
  label?: string;
  helperText?: string;
  feedback?: SelectDropdownFeedback;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  options: (SelectOption | SelectOptionGroup)[];
  noOptionsText?: string;
}

export interface SingleSelectProps extends Base {
  multiple?: false;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export interface MultiSelectProps extends Base {
  multiple: true;
  value?: string[];
  onChange?: (value: string[]) => void;
  maxVisibleChips?: number;
}

export type SelectDropdownProps = SingleSelectProps | MultiSelectProps;
