import type { HTMLAttributes } from 'react';

export type ActionBarAlign = 'start' | 'center' | 'end';

export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal alignment of items */
  align?: ActionBarAlign;
}
