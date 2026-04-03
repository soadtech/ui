import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Switch } from './Switch';
import type { SwitchFieldProps } from './Switch.types';
import styles from './SwitchField.module.css';

export const SwitchField = forwardRef<HTMLInputElement, SwitchFieldProps>(
  (
    {
      label,
      description,
      variant = 'default',
      disabled = false,
      readOnly = false,
      size,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <label
        className={cn(
          styles.root,
          styles[variant],
          disabled && styles.disabled,
          readOnly && styles.readOnly,
          className,
        )}
      >
        <span className={styles.content}>
          <span className={styles.label}>{label}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </span>
        <Switch
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
          {...rest}
        />
      </label>
    );
  },
);

SwitchField.displayName = 'SwitchField';
