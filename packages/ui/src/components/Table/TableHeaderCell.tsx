import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTable } from './TableContext';
import type { TableHeaderCellProps } from './Table.types';
import type { TableSortDirection } from './Table.types';
import styles from './TableHeaderCell.module.css';

function SortIcon({ direction }: { direction?: TableSortDirection }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3L11 7H5L8 3Z"
        fill={
          direction === 'asc'
            ? 'currentColor'
            : 'var(--st-color-neutral-300)'
        }
      />
      <path
        d="M8 13L5 9H11L8 13Z"
        fill={
          direction === 'desc'
            ? 'currentColor'
            : 'var(--st-color-neutral-300)'
        }
      />
    </svg>
  );
}

export const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(
  (
    { sortKey, width, align = 'left', className, children, style, ...rest },
    ref
  ) => {
    const { sortKey: activeSortKey, sortDirection, onSortChange } = useTable();
    const sortable = !!sortKey;
    const isActive = sortable && sortKey === activeSortKey;
    const activeDirection = isActive ? sortDirection : undefined;

    function handleClick() {
      if (!sortable || !onSortChange || !sortKey) return;

      let nextDirection: TableSortDirection = 'asc';
      if (isActive && sortDirection === 'asc') {
        nextDirection = 'desc';
      } else if (isActive && sortDirection === 'desc') {
        nextDirection = 'asc';
      }
      onSortChange(sortKey, nextDirection);
    }

    const ariaSortValue = isActive
      ? sortDirection === 'asc'
        ? 'ascending'
        : 'descending'
      : sortable
        ? 'none'
        : undefined;

    return (
      <th
        ref={ref}
        className={cn(
          styles.root,
          styles[align],
          sortable && styles.sortable,
          isActive && styles.active,
          className
        )}
        style={{ width, ...style }}
        onClick={sortable ? handleClick : undefined}
        aria-sort={ariaSortValue}
        {...rest}
      >
        <span className={styles.content}>
          {children}
          {sortable && (
            <span className={styles.sortIcon}>
              <SortIcon direction={activeDirection} />
            </span>
          )}
        </span>
      </th>
    );
  }
);

TableHeaderCell.displayName = 'TableHeaderCell';
