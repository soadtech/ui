import type { HTMLAttributes } from 'react';
import type { DateRange } from '../Calendar/CalendarDialog.types';

export type DatepickerSize = 'lg' | 'md';

export interface DatepickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Dual From/To inputs + range calendar. */
  range?: boolean;
  /** Input height: lg=48px, md=40px. */
  size?: DatepickerSize;
  /** Field label (single mode only). */
  label?: string;
  /** Helper text below input. Hidden when error is present. */
  helperText?: string;
  /** Error message. Shows red border + error dot. */
  error?: string;
  /** Disables the field. */
  disabled?: boolean;
  /** Selected date (single mode). */
  value?: Date | null;
  /** Called when date is selected (single mode). */
  onChange?: (date: Date | null) => void;
  /** Selected range (range mode). */
  rangeValue?: DateRange | null;
  /** Called when range is selected (range mode). */
  onRangeChange?: (range: DateRange | null) => void;
  /** Placeholder text for empty input. */
  placeholder?: string;
  /** Minimum selectable date. Passed to CalendarDialog. */
  minDate?: Date;
  /** Maximum selectable date. Passed to CalendarDialog. */
  maxDate?: Date;
  /** Event indicator dates. Passed to CalendarDialog. */
  events?: Date[];
}
