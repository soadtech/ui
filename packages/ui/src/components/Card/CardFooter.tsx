import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { CardFooterProps } from './Card.types';
import styles from './CardFooter.module.css';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (
    {
      border = false,
      align = 'right',
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
          styles[align],
          border && styles.border,
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
