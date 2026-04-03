import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TableHeaderProps } from './Table.types';
import styles from './TableHeader.module.css';

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, children, ...rest }, ref) => {
  return (
    <thead ref={ref} className={cn(styles.root, className)} {...rest}>
      {children}
    </thead>
  );
});

TableHeader.displayName = 'TableHeader';
