import { forwardRef, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { Calendar } from './Calendar';
import { Button } from '../Button/Button';
import type { CalendarDialogProps, DateRange } from './CalendarDialog.types';
import styles from './CalendarDialog.module.css';

export const CalendarDialog = forwardRef<HTMLDivElement, CalendarDialogProps>(
  (
    {
      mode = 'basic',
      defaultValue,
      defaultRange,
      headerAlign = 'center',
      events,
      minDate,
      maxDate,
      onCancel,
      onDone,
      className,
      ...rest
    },
    ref
  ) => {
    const today = new Date();

    /* ── Basic mode state ── */
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      defaultValue ?? null
    );

    /* ── Range mode state ── */
    const [rangeStart, setRangeStart] = useState<Date | null>(
      defaultRange?.start ?? null
    );
    const [rangeEnd, setRangeEnd] = useState<Date | null>(
      defaultRange?.end ?? null
    );
    const [rangeStep, setRangeStep] = useState<'start' | 'end'>('start');

    /* ── Navigation (left calendar) ── */
    const [leftMonth, setLeftMonth] = useState(
      () =>
        defaultRange?.start?.getMonth() ??
        defaultValue?.getMonth() ??
        today.getMonth()
    );
    const [leftYear, setLeftYear] = useState(
      () =>
        defaultRange?.start?.getFullYear() ??
        defaultValue?.getFullYear() ??
        today.getFullYear()
    );

    // Right calendar is always the next month
    const rightMonth = leftMonth === 11 ? 0 : leftMonth + 1;
    const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

    /* ── Handlers ── */

    const handleBasicSelect = useCallback((date: Date) => {
      setSelectedDate(date);
    }, []);

    const handleRangeSelect = useCallback(
      (date: Date) => {
        if (rangeStep === 'start') {
          setRangeStart(date);
          setRangeEnd(null);
          setRangeStep('end');
        } else {
          // Ensure start ≤ end
          if (rangeStart && date.getTime() < rangeStart.getTime()) {
            setRangeEnd(rangeStart);
            setRangeStart(date);
          } else {
            setRangeEnd(date);
          }
          setRangeStep('start');
        }
      },
      [rangeStep, rangeStart]
    );

    const handleDone = useCallback(() => {
      if (mode === 'basic') {
        onDone?.(selectedDate);
      } else if (rangeStart && rangeEnd) {
        onDone?.({ start: rangeStart, end: rangeEnd } as DateRange);
      }
    }, [mode, selectedDate, rangeStart, rangeEnd, onDone]);

    const dayCount =
      rangeStart && rangeEnd
        ? Math.round(
            Math.abs(rangeEnd.getTime() - rangeStart.getTime()) /
              (1000 * 60 * 60 * 24)
          ) + 1
        : 0;

    const isDoneDisabled =
      mode === 'basic' ? !selectedDate : !(rangeStart && rangeEnd);

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        <div className={styles.calendars}>
          <Calendar
            month={leftMonth}
            year={leftYear}
            value={mode === 'basic' ? selectedDate : undefined}
            rangeStart={mode === 'range' ? rangeStart : undefined}
            rangeEnd={mode === 'range' ? rangeEnd : undefined}
            headerAlign={headerAlign}
            events={events}
            minDate={minDate}
            maxDate={maxDate}
            onDateSelect={
              mode === 'basic' ? handleBasicSelect : handleRangeSelect
            }
            onMonthChange={(m, y) => {
              setLeftMonth(m);
              setLeftYear(y);
            }}
          />

          {mode === 'range' && (
            <Calendar
              month={rightMonth}
              year={rightYear}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              headerAlign={headerAlign}
              events={events}
              minDate={minDate}
              maxDate={maxDate}
              onDateSelect={handleRangeSelect}
              onMonthChange={(m, y) => {
                // Keep left = right − 1
                if (m === 0) {
                  setLeftMonth(11);
                  setLeftYear(y - 1);
                } else {
                  setLeftMonth(m - 1);
                  setLeftYear(y);
                }
              }}
            />
          )}
        </div>

        {mode === 'range' && dayCount > 0 && (
          <p className={styles.rangeInfo}>{dayCount} days selected</p>
        )}

        <div className={styles.actions}>
          <Button variant="outline" size="md" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="fill"
            size="md"
            onClick={handleDone}
            disabled={isDoneDisabled}
          >
            Done
          </Button>
        </div>
      </div>
    );
  }
);

CalendarDialog.displayName = 'CalendarDialog';
