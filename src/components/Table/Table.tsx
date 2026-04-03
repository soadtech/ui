import { Children, forwardRef, isValidElement } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { TableContext } from './TableContext';
import type { TableProps } from './Table.types';
import styles from './Table.module.css';

export const Table = forwardRef<HTMLDivElement, TableProps>(
  (
    {
      selectedRows = [],
      onSelectionChange,
      sortKey,
      sortDirection,
      onSortChange,
      size = 'md',
      striped = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    let toolbar: ReactNode = null;
    let footer: ReactNode = null;
    const tableContent: ReactNode[] = [];

    Children.forEach(children, (child) => {
      if (!isValidElement(child)) {
        tableContent.push(child);
        return;
      }

      const displayName = (child.type as { displayName?: string })
        .displayName;

      if (displayName === 'TableToolbar') {
        toolbar = child;
      } else if (displayName === 'TableFooter') {
        footer = child;
      } else {
        tableContent.push(child);
      }
    });

    return (
      <TableContext.Provider
        value={{
          selectedRows,
          onSelectionChange,
          sortKey,
          sortDirection,
          onSortChange,
          size,
          striped,
        }}
      >
        <div
          ref={ref}
          className={cn(styles.root, styles[size], className)}
          {...rest}
        >
          {toolbar}
          <div className={styles.scrollWrapper}>
            <table className={styles.table}>{tableContent}</table>
          </div>
          {footer}
        </div>
      </TableContext.Provider>
    );
  }
);

Table.displayName = 'Table';
