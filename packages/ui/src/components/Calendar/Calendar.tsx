import { forwardRef, useState, useMemo, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { CalendarProps } from './Calendar.types';
import styles from './Calendar.module.css';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

/* ── Inline icons ── */

function ChevronLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4L6 8L10 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Helpers ── */

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(date: Date, start: Date, end: Date): boolean {
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

function generateGrid(year: number, month: number): Date[] {
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const startOffset = (firstDayOfWeek + 6) % 7; // Monday = 0
  const dates: Date[] = [];
  for (let i = 0; i < 42; i++) {
    dates.push(new Date(year, month, 1 - startOffset + i));
  }
  return dates;
}

/* ── Component ── */

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      month: controlledMonth,
      year: controlledYear,
      value,
      rangeStart: rawRangeStart,
      rangeEnd: rawRangeEnd,
      events,
      minDate,
      maxDate,
      headerAlign = 'center',
      onDateSelect,
      onMonthChange,
      className,
      ...rest
    },
    ref
  ) => {
    const today = useMemo(() => new Date(), []);
    const [internalMonth, setInternalMonth] = useState(
      () => controlledMonth ?? today.getMonth()
    );
    const [internalYear, setInternalYear] = useState(
      () => controlledYear ?? today.getFullYear()
    );

    const displayMonth = controlledMonth ?? internalMonth;
    const displayYear = controlledYear ?? internalYear;

    // Normalize range so start ≤ end
    const rangeStart =
      rawRangeStart &&
      rawRangeEnd &&
      rawRangeEnd.getTime() < rawRangeStart.getTime()
        ? rawRangeEnd
        : rawRangeStart;
    const rangeEnd =
      rawRangeStart &&
      rawRangeEnd &&
      rawRangeEnd.getTime() < rawRangeStart.getTime()
        ? rawRangeStart
        : rawRangeEnd;
    const hasRange = !!(
      rangeStart &&
      rangeEnd &&
      !isSameDay(rangeStart, rangeEnd)
    );

    const days = useMemo(
      () => generateGrid(displayYear, displayMonth),
      [displayYear, displayMonth]
    );

    const eventSet = useMemo(() => {
      if (!events) return new Set<string>();
      return new Set(
        events.map(
          (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
        )
      );
    }, [events]);

    const navigate = useCallback(
      (newMonth: number, newYear: number) => {
        if (newMonth < 0) {
          newMonth = 11;
          newYear -= 1;
        } else if (newMonth > 11) {
          newMonth = 0;
          newYear += 1;
        }
        if (controlledMonth === undefined) {
          setInternalMonth(newMonth);
          setInternalYear(newYear);
        }
        onMonthChange?.(newMonth, newYear);
      },
      [controlledMonth, onMonthChange]
    );

    const yearRange = useMemo(() => {
      const min = minDate ? minDate.getFullYear() : displayYear - 50;
      const max = maxDate ? maxDate.getFullYear() : displayYear + 50;
      const years: number[] = [];
      for (let y = min; y <= max; y++) years.push(y);
      return years;
    }, [minDate, maxDate, displayYear]);

    const isDisabled = useCallback(
      (date: Date): boolean => {
        if (minDate) {
          const min = new Date(
            minDate.getFullYear(),
            minDate.getMonth(),
            minDate.getDate()
          );
          if (date < min) return true;
        }
        if (maxDate) {
          const max = new Date(
            maxDate.getFullYear(),
            maxDate.getMonth(),
            maxDate.getDate()
          );
          if (date > max) return true;
        }
        return false;
      },
      [minDate, maxDate]
    );

    const getDayClasses = useCallback(
      (date: Date) => {
        const outside = date.getMonth() !== displayMonth;
        const disabled = isDisabled(date);
        const isActive =
          (value != null && isSameDay(date, value)) ||
          (rangeStart != null && !hasRange && isSameDay(date, rangeStart));
        const isRangeStart = hasRange && isSameDay(date, rangeStart!);
        const isRangeEnd = hasRange && isSameDay(date, rangeEnd!);
        const inMiddle = hasRange && isInRange(date, rangeStart!, rangeEnd!);
        const hasEvent = eventSet.has(
          `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        );
        const isToday =
          isSameDay(date, today) &&
          !isActive &&
          !isRangeStart &&
          !isRangeEnd;

        const dayClass = cn(
          styles.day,
          outside && styles.outside,
          disabled && styles.disabled,
          isActive && styles.active,
          isRangeStart && styles.rangeStart,
          isRangeEnd && styles.rangeEnd,
          inMiddle && styles.rangeMiddle,
          hasEvent && styles.event,
          isToday && styles.today
        );

        const cellClass = cn(
          styles.dayCell,
          isRangeStart && styles.cellRangeStart,
          isRangeEnd && styles.cellRangeEnd,
          inMiddle && styles.cellRangeMiddle
        );

        return { dayClass, cellClass };
      },
      [
        displayMonth,
        isDisabled,
        value,
        rangeStart,
        rangeEnd,
        hasRange,
        eventSet,
        today,
      ]
    );

    /* ── Header pieces ── */

    const headerSelects = (
      <div className={styles.headerSelects}>
        <select
          className={styles.select}
          value={displayMonth}
          onChange={(e) => navigate(Number(e.target.value), displayYear)}
          aria-label="Month"
        >
          {MONTH_NAMES.map((name, i) => (
            <option key={i} value={i}>
              {name}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={displayYear}
          onChange={(e) => navigate(displayMonth, Number(e.target.value))}
          aria-label="Year"
        >
          {yearRange.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    );

    const prevButton = (
      <button
        type="button"
        className={styles.navButton}
        onClick={() => navigate(displayMonth - 1, displayYear)}
        aria-label="Previous month"
      >
        <ChevronLeftIcon />
      </button>
    );

    const nextButton = (
      <button
        type="button"
        className={styles.navButton}
        onClick={() => navigate(displayMonth + 1, displayYear)}
        aria-label="Next month"
      >
        <ChevronRightIcon />
      </button>
    );

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        <div className={cn(styles.header, styles[headerAlign])}>
          {headerAlign === 'left' && (
            <>
              {headerSelects}
              <div className={styles.headerNav}>
                {prevButton}
                {nextButton}
              </div>
            </>
          )}
          {headerAlign === 'center' && (
            <>
              {prevButton}
              {headerSelects}
              {nextButton}
            </>
          )}
          {headerAlign === 'right' && (
            <>
              <div className={styles.headerNav}>
                {prevButton}
                {nextButton}
              </div>
              {headerSelects}
            </>
          )}
        </div>

        <div className={styles.weekdays}>
          {WEEKDAYS.map((day) => (
            <span key={day} className={styles.weekday}>
              {day}
            </span>
          ))}
        </div>

        <div className={styles.grid}>
          {days.map((date, i) => {
            const { dayClass, cellClass } = getDayClasses(date);
            return (
              <div key={i} className={cellClass}>
                <button
                  type="button"
                  className={dayClass}
                  disabled={isDisabled(date)}
                  onClick={() => onDateSelect?.(date)}
                  tabIndex={date.getMonth() !== displayMonth ? -1 : 0}
                >
                  {date.getDate()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';
