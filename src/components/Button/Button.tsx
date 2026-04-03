import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'fill',
      color = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const isIconOnly = !children && (iconLeft || iconRight);

    return (
      <button
        ref={ref}
        className={cn(
          styles.root,
          styles[variant],
          styles[color],
          styles[size],
          isIconOnly && styles.iconOnly,
          className
        )}
        {...rest}
      >
        {iconLeft && <span className={styles.iconSlot}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles.iconSlot}>{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
