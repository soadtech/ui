export type InputCounterSize = 'lg' | 'md';

export type InputCounterFeedbackStatus = 'success' | 'error' | 'warning' | 'ai';

export interface InputCounterFeedback {
  status: InputCounterFeedbackStatus;
  message: string;
}

export interface InputCounterProps {
  /** Label text above counter. */
  label?: string;
  /** Counter height: lg=48px, md=40px. */
  size?: InputCounterSize;
  /** Validation feedback — affects border + value text color. */
  feedback?: InputCounterFeedback;
  /** Controlled value. */
  value?: number;
  /** Uncontrolled initial value. */
  defaultValue?: number;
  /** Called with new numeric value on increment/decrement. */
  onChange?: (value: number) => void;
  /** Minimum bound. */
  min?: number;
  /** Maximum bound. */
  max?: number;
  /** Increment/decrement amount. */
  step?: number;
  /** Disables entire component. */
  disabled?: boolean;
  /** Shows asterisk on label. */
  required?: boolean;
  /** Additional class on root element. */
  className?: string;
  /** Name attribute for the hidden input. */
  name?: string;
}
