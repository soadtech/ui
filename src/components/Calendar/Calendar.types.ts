import type { HTMLAttributes } from 'react';

export type CalendarHeaderAlign = 'left' | 'center' | 'right';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  /** Displayed month (0–11). Component is controlled when provided. */
  month?: number;
  /** Displayed year. Component is controlled when provided. */
  year?: number;
  /** Selected date (single-selection mode). */
  value?: Date | null;
  /** Range start date. */
  rangeStart?: Date | null;
  /** Range end date. */
  rangeEnd?: Date | null;
  /** Dates that display an event indicator dot. */
  events?: Date[];
  /** Minimum selectable date. */
  minDate?: Date;
  /** Maximum selectable date. */
  maxDate?: Date;
  /** Header layout: where month/year selects and nav arrows are placed. */
  headerAlign?: CalendarHeaderAlign;
  /** Called when a day is clicked. */
  onDateSelect?: (date: Date) => void;
  /** Called when the displayed month/year changes via navigation. */
  onMonthChange?: (month: number, year: number) => void;
}
