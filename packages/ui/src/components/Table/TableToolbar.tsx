import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TableToolbarProps } from './Table.types';
import styles from './TableToolbar.module.css';

export const TableToolbar = forwardRef<HTMLDivElement, TableToolbarProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {children}
      </div>
    );
  }
);

TableToolbar.displayName = 'TableToolbar';
