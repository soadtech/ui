import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { RadioButton } from './RadioButton';
import { useRadioGroup } from './RadioGroupContext';
import type { RadioFieldProps } from './RadioButton.types';
import styles from './RadioField.module.css';

export const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(
  (
    {
      label,
      description,
      variant = 'default',
      disabled = false,
      readOnly = false,
      size,
      value,
      className,
      ...rest
    },
    ref,
  ) => {
    const group = useRadioGroup();
    const isDisabled = disabled || group?.disabled || false;
    const isReadOnly = readOnly || group?.readOnly || false;

    const groupProps: Record<string, unknown> = {};
    if (group) {
      if (group.name) groupProps.name = group.name;
      if (group.value !== undefined && value !== undefined) {
        groupProps.checked = group.value === value;
      }
      if (group.onValueChange && value !== undefined) {
        groupProps.onChange = () => group.onValueChange!(value);
      }
    }

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
        <RadioButton
          ref={ref}
          disabled={isDisabled}
          readOnly={isReadOnly}
          size={size}
          value={value}
          {...groupProps}
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

RadioField.displayName = 'RadioField';
