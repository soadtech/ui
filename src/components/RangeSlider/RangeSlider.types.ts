import type { HTMLAttributes } from 'react';

export interface RangeSliderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Label text above the slider */
  label?: string;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Single-thumb value */
  value?: number;
  /** Single-thumb change handler */
  onValueChange?: (value: number) => void;
  /** Dual-thumb range value [low, high] */
  rangeValue?: [number, number];
  /** Dual-thumb range change handler */
  onRangeChange?: (value: [number, number]) => void;
  /** Show editable input next to track (single mode) */
  showInput?: boolean;
  /** Suffix shown in input, e.g. "%" */
  suffix?: string;
}
