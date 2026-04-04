import { createContext, useContext } from 'react';

export interface SegmentedControlContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled: boolean;
}

export const SegmentedControlContext =
  createContext<SegmentedControlContextValue | null>(null);

export function useSegmentedControl(): SegmentedControlContextValue {
  const ctx = useContext(SegmentedControlContext);
  if (!ctx) {
    throw new Error(
      'SegmentedControlItem must be used within a SegmentedControl'
    );
  }
  return ctx;
}
