import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { RadioGroupContext } from './RadioGroupContext';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  name?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label,
      helperText,
      error,
      disabled = false,
      readOnly = false,
      name,
      value,
      onValueChange,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const ctx = useMemo(
      () => ({ disabled, readOnly, name, value, onValueChange }),
      [disabled, readOnly, name, value, onValueChange],
    );

    return (
      <RadioGroupContext.Provider value={ctx}>
        <div
          ref={ref}
          role="radiogroup"
          aria-label={label}
          className={cn(styles.root, className)}
          {...rest}
        >
          {label && <span className={styles.label}>{label}</span>}
          <div className={styles.items}>{children}</div>
          {error && (
            <span className={styles.error}>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
              {error}
            </span>
          )}
          {!error && helperText && (
            <span className={styles.helperText}>{helperText}</span>
          )}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
