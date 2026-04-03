import { createContext, useContext } from 'react';
import type { TableSortDirection, TableSize } from './Table.types';

export interface TableContextValue {
  selectedRows: string[];
  onSelectionChange?: (rows: string[]) => void;
  sortKey?: string;
  sortDirection?: TableSortDirection;
  onSortChange?: (key: string, direction: TableSortDirection) => void;
  size: TableSize;
  striped: boolean;
}

export const TableContext = createContext<TableContextValue | null>(null);

export function useTable(): TableContextValue {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw new Error('Table sub-components must be used within a <Table>');
  }
  return ctx;
}
