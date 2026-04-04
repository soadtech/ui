import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TableFooterProps } from './Table.types';
import styles from './TableFooter.module.css';

export const TableFooter = forwardRef<HTMLDivElement, TableFooterProps>(
  ({ align = 'between', className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[align], className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

TableFooter.displayName = 'TableFooter';
