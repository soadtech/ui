import type { HTMLAttributes, ReactNode } from 'react';

export type StepperOrientation = 'vertical' | 'horizontal';
export type StepperSize = 'md' | 'sm';
export type StepStatus = 'default' | 'active' | 'completed' | 'disabled' | 'error';

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: StepperOrientation;
  size?: StepperSize;
}

export interface StepperStepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  status?: StepStatus;
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export interface StepperStepInternalProps extends StepperStepProps {
  _step?: number;
  _isFirst?: boolean;
  _isLast?: boolean;
  _prevCompleted?: boolean;
}
