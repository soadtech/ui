import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTable } from './TableContext';
import type { TableRowProps } from './Table.types';
import styles from './TableRow.module.css';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ rowId, disabled = false, className, children, ...rest }, ref) => {
    const { selectedRows } = useTable();
    const isSelected = !!rowId && selectedRows.includes(rowId);

    return (
      <tr
        ref={ref}
        className={cn(
          styles.root,
          isSelected && styles.selected,
          disabled && styles.disabled,
          className
        )}
        aria-selected={isSelected || undefined}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';
