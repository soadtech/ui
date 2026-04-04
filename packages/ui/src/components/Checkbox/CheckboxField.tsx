import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Checkbox } from './Checkbox';
import { useCheckboxGroup } from './CheckboxGroupContext';
import type { CheckboxFieldProps } from './CheckboxField.types';
import styles from './CheckboxField.module.css';

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
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
    const group = useCheckboxGroup();
    const isDisabled = disabled || group?.disabled || false;
    const isReadOnly = readOnly || group?.readOnly || false;

    return (
      <label
        className={cn(
          styles.root,
          styles[variant],
          isDisabled && styles.disabled,
          isReadOnly && styles.readOnly,
          className,
        )}
      >
        <Checkbox
          ref={ref}
          disabled={isDisabled}
          readOnly={isReadOnly}
          size={size}
          {...rest}
        />
        <span className={styles.content}>
          <span className={styles.label}>{label}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </span>
      </label>
    );
  },
);

CheckboxField.displayName = 'CheckboxField';
