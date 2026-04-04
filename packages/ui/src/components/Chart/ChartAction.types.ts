import type { HTMLAttributes, ReactNode } from 'react';

export interface ChartActionTab {
  label: string;
  value: string;
}

export interface ChartActionProps extends HTMLAttributes<HTMLDivElement> {
  /** Segmented tab options */
  tabs?: ChartActionTab[];
  /** Currently active tab value */
  activeTab?: string;
  /** Tab change callback */
  onTabChange?: (value: string) => void;
  /** Slot for action buttons/icons on the right */
  actions?: ReactNode;
}
