import { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import type { CheckboxGroupProps } from './CheckboxGroup.types';
import styles from './CheckboxGroup.module.css';

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      label,
      helperText,
      error,
      disabled = false,
      readOnly = false,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const ctx = useMemo(
      () => ({ disabled, readOnly }),
      [disabled, readOnly],
    );

    return (
      <CheckboxGroupContext.Provider value={ctx}>
        <div
          ref={ref}
          role="group"
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
      </CheckboxGroupContext.Provider>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
