import type { HTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type TabVariant = 'basic' | 'dynamic';

export interface TabProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: TabVariant;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
  value: string;
  icon?: ReactNode;
  badge?: number;
  onClose?: () => void;
  disabled?: boolean;
}

export interface TabAddProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
