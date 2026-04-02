import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(styles.root, styles[variant], styles[size], className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
