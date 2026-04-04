import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ChipGroupProps } from './ChipGroup.types';
import styles from './ChipGroup.module.css';

export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {children}
      </div>
    );
  }
);

ChipGroup.displayName = 'ChipGroup';
