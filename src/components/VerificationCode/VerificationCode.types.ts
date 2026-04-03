import type { HTMLAttributes } from 'react';

export interface VerificationCodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Number of digit inputs. */
  length?: number;
  /** Controlled value string. */
  value?: string;
  /** Initial value for uncontrolled usage. */
  defaultValue?: string;
  /** Called on every digit change with the full value string. */
  onChange?: (value: string) => void;
  /** Called when all digits are filled. */
  onComplete?: (value: string) => void;
  /** Shows error ring + red text on all digits. */
  error?: boolean;
  /** Disables all digit inputs. */
  disabled?: boolean;
  /** Auto-focuses the first input on mount. */
  autoFocus?: boolean;
}
