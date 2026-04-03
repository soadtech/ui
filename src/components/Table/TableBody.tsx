import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTable } from './TableContext';
import type { TableBodyProps } from './Table.types';
import rowStyles from './TableRow.module.css';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...rest }, ref) => {
    const { striped } = useTable();

    return (
      <tbody
        ref={ref}
        className={cn(striped && rowStyles.striped, className)}
        {...rest}
      >
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';
