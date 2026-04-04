import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TableCellProps } from './Table.types';
import styles from './TableCell.module.css';

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ align = 'left', className, children, ...rest }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(styles.root, styles[align], className)}
        {...rest}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';
