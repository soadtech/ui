import type { TextareaHTMLAttributes, ReactNode } from 'react';

export type InputTextAreaFeedbackStatus = 'success' | 'error' | 'warning' | 'ai';

export interface InputTextAreaFeedback {
  status: InputTextAreaFeedbackStatus;
  message: string;
}

export interface InputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text above textarea. */
  label?: string;
  /** Validation feedback — affects border + text color. */
  feedback?: InputTextAreaFeedback;
  /** Slot rendered inside box above textarea (e.g. formatting toolbar). */
  toolbar?: ReactNode;
}
