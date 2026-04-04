import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DividerProps } from './Divider.types';
import styles from './Divider.module.css';

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(styles.root, styles[orientation], className)}
        {...rest}
      />
    );
  }
);

Divider.displayName = 'Divider';
