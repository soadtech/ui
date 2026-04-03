import type {
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';

export type TableSortDirection = 'asc' | 'desc';
export type TableSize = 'sm' | 'md' | 'lg';
export type TableCellAlign = 'left' | 'center' | 'right';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  /** IDs of currently selected rows. */
  selectedRows?: string[];
  /** Callback when selection changes. */
  onSelectionChange?: (rows: string[]) => void;
  /** Currently sorted column key. */
  sortKey?: string;
  /** Current sort direction. */
  sortDirection?: TableSortDirection;
  /** Callback when sort changes. */
  onSortChange?: (key: string, direction: TableSortDirection) => void;
  /** Row density. */
  size?: TableSize;
  /** Alternate row backgrounds. */
  striped?: boolean;
}

export interface TableToolbarProps extends HTMLAttributes<HTMLDivElement> {}

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Unique ID for selection tracking. */
  rowId?: string;
  /** Disable interaction. */
  disabled?: boolean;
}

export interface TableHeaderCellProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Makes the header sortable; value is the sort key. */
  sortKey?: string;
  /** Fixed width. */
  width?: string;
  /** Text alignment. */
  align?: TableCellAlign;
}

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Text alignment. */
  align?: TableCellAlign;
}

export type TableFooterAlign = 'left' | 'center' | 'right' | 'between';

export interface TableFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal alignment of footer children. */
  align?: TableFooterAlign;
}
