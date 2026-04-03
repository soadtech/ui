export type InputSearchFeedbackStatus = 'success' | 'error' | 'warning' | 'ai';

export interface InputSearchFeedback {
  status: InputSearchFeedbackStatus;
  message: string;
}

export interface InputSearchProps {
  /** Label text above input. */
  label?: string;
  /** Placeholder text for the input. */
  placeholder?: string;
  /** Controlled value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Native change handler for the input. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Called with current value on Enter or search icon click. */
  onSearch?: (value: string) => void;
  /** Called when the clear button is clicked. */
  onClear?: () => void;
  /** Helper text below input. */
  helperText?: string;
  /** Validation feedback — affects border + text color. */
  feedback?: InputSearchFeedback;
  /** Disables entire component. */
  disabled?: boolean;
  /** Shows asterisk on label. */
  required?: boolean;
  /** Additional class on root element. */
  className?: string;
  /** Name attribute for the input. */
  name?: string;
}
