import { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndeterminateIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6H9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      indeterminate = false,
      readOnly = false,
      size = 'md',
      disabled = false,
      checked,
      defaultChecked,
      onCheckedChange,
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const el =
        (ref as React.RefObject<HTMLInputElement | null>)?.current ??
        internalRef.current;
      if (el) {
        el.indeterminate = indeterminate;
      }
    }, [indeterminate, ref]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (readOnly) {
        e.preventDefault();
        return;
      }
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <span
        className={cn(
          styles.root,
          styles[size],
          disabled && styles.disabled,
          readOnly && styles.readOnly,
          className,
        )}
      >
        <input
          ref={ref ?? internalRef}
          type="checkbox"
          className={styles.input}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          {...rest}
        />
        <span className={styles.box}>
          <span className={styles.icon}>
            {indeterminate ? <IndeterminateIcon /> : <CheckIcon />}
          </span>
        </span>
      </span>
    );
  },
);

Checkbox.displayName = 'Checkbox';
