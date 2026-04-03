import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { CardProps } from './Card.types';
import styles from './Card.module.css';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'outline',
      padding = 'none',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.root,
          styles[variant],
          padding === 'sm' && styles.padSm,
          padding === 'md' && styles.padMd,
          padding === 'lg' && styles.padLg,
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
