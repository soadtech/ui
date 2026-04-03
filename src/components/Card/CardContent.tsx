import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { CardContentProps } from './Card.types';
import styles from './CardContent.module.css';

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';
