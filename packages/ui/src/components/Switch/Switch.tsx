import { forwardRef, useRef } from 'react';
import { cn } from '../../utils/cn';
import type { SwitchProps } from './Switch.types';
import styles from './Switch.module.css';

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M3 3L9 9M9 3L3 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      readOnly = false,
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
          role="switch"
          className={styles.input}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          {...rest}
        />
        <span className={styles.track}>
          <span className={styles.thumb}>
            <span className={styles.iconX}>
              <XIcon />
            </span>
            <span className={styles.iconCheck}>
              <CheckIcon />
            </span>
          </span>
        </span>
      </span>
    );
  },
);

Switch.displayName = 'Switch';
