import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { RadioButtonProps } from './RadioButton.types';
import styles from './RadioButton.module.css';

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
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
          ref={ref}
          type="radio"
          className={styles.input}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          {...rest}
        />
        <span className={styles.circle}>
          <span className={styles.dot} />
        </span>
      </span>
    );
  },
);

RadioButton.displayName = 'RadioButton';
