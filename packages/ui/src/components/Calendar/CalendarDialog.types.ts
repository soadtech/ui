import type { HTMLAttributes } from 'react';
import type { CalendarHeaderAlign } from './Calendar.types';

export type CalendarDialogMode = 'basic' | 'range';

export interface DateRange {
  start: Date;
  end: Date;
}

export interface CalendarDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  /** Single calendar or side-by-side range picker. */
  mode?: CalendarDialogMode;
  /** Initial selected date (basic mode). */
  defaultValue?: Date | null;
  /** Initial date range (range mode). */
  defaultRange?: DateRange | null;
  /** Header alignment passed to inner Calendar(s). */
  headerAlign?: CalendarHeaderAlign;
  /** Dates that display an event indicator dot. */
  events?: Date[];
  /** Minimum selectable date. */
  minDate?: Date;
  /** Maximum selectable date. */
  maxDate?: Date;
  /** Called when Cancel is clicked. */
  onCancel?: () => void;
  /** Called when Done is clicked. Returns Date (basic) or DateRange (range). */
  onDone?: (value: Date | DateRange | null) => void;
}
