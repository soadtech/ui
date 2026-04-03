import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputTextSize = 'lg' | 'md';

export type InputTextFeedbackStatus = 'success' | 'error' | 'warning' | 'ai';

export interface InputTextFeedback {
  status: InputTextFeedbackStatus;
  message: string;
}

export interface InputTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input height: lg=48px, md=40px. */
  size?: InputTextSize;
  /** Label text above input. */
  label?: string;
  /** Description text below label, above input. */
  description?: string;
  /** Helper text below input. Coexists with feedback. */
  helperText?: string;
  /** Validation feedback — affects border + text color. */
  feedback?: InputTextFeedback;
  /** Shows X button when input has value. */
  clearable?: boolean;
  /** Clear button callback. */
  onClear?: () => void;
  /** Left slot inside input box. */
  leftElement?: ReactNode;
  /** Right slot inside input box. */
  rightElement?: ReactNode;
}
