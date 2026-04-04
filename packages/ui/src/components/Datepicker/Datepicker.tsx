import { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { CalendarDialog } from '../Calendar/CalendarDialog';
import type { DateRange } from '../Calendar/CalendarDialog.types';
import type { DatepickerProps } from './Datepicker.types';
import styles from './Datepicker.module.css';

function formatDate(date: Date): string {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="3"
        width="12"
        height="11"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M2 6.5h12" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5.5 1.5v3M10.5 1.5v3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ErrorDot() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}

export const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>(
  (
    {
      range = false,
      size = 'lg',
      label,
      helperText,
      error,
      disabled = false,
      value,
      onChange,
      rangeValue,
      onRangeChange,
      placeholder = 'DD/MM/YYYY',
      minDate,
      maxDate,
      events,
      className,
      ...rest
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    // Merge forwarded ref with internal ref
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        (rootRef as React.MutableRefObject<HTMLDivElement | null>).current =
          node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    // Close on click-outside
    useEffect(() => {
      if (!open) return;
      function handleClick(e: MouseEvent) {
        if (
          rootRef.current &&
          !rootRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    // Close on Escape
    useEffect(() => {
      if (!open) return;
      function handleKey(e: KeyboardEvent) {
        if (e.key === 'Escape') setOpen(false);
      }
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }, [open]);

    const handleDone = useCallback(
      (val: Date | DateRange | null) => {
        if (range) {
          onRangeChange?.(val && !(val instanceof Date) ? val : null);
        } else {
          onChange?.(val instanceof Date ? val : null);
        }
        setOpen(false);
      },
      [range, onChange, onRangeChange],
    );

    const handleCancel = useCallback(() => {
      setOpen(false);
    }, []);

    const toggleOpen = useCallback(() => {
      if (!disabled) setOpen((prev) => !prev);
    }, [disabled]);

    const inputBoxCls = cn(
      styles.inputBox,
      styles[size],
      open && styles.open,
      error && styles.error,
      disabled && styles.disabled,
    );

    const renderInputBox = (
      displayValue: string | undefined,
      sublabel?: string,
    ) => (
      <div className={sublabel ? styles.fieldWrapper : undefined}>
        {sublabel && <span className={styles.label}>{sublabel}</span>}
        <div
          className={inputBoxCls}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={toggleOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleOpen();
            }
          }}
        >
          <span
            className={cn(
              styles.inputText,
              !displayValue && styles.placeholder,
            )}
          >
            {displayValue || placeholder}
          </span>
          <span className={styles.iconBtn} aria-hidden="true">
            <CalendarIcon />
          </span>
        </div>
      </div>
    );

    return (
      <div
        ref={setRefs}
        className={cn(styles.root, className)}
        {...rest}
      >
        {/* Label (single mode only) */}
        {!range && label && <span className={styles.label}>{label}</span>}

        {/* Inputs */}
        {range ? (
          <div className={styles.rangeFields}>
            {renderInputBox(
              rangeValue?.start ? formatDate(rangeValue.start) : undefined,
              'From',
            )}
            {renderInputBox(
              rangeValue?.end ? formatDate(rangeValue.end) : undefined,
              'To',
            )}
          </div>
        ) : (
          renderInputBox(value ? formatDate(value) : undefined)
        )}

        {/* Helper / Error text */}
        {error ? (
          <span className={styles.errorText}>
            <ErrorDot />
            {error}
          </span>
        ) : (
          helperText && <span className={styles.helperText}>{helperText}</span>
        )}

        {/* Calendar popover */}
        {open && (
          <div className={styles.popover}>
            <CalendarDialog
              mode={range ? 'range' : 'basic'}
              defaultValue={!range ? (value ?? undefined) : undefined}
              defaultRange={range ? (rangeValue ?? undefined) : undefined}
              headerAlign="center"
              events={events}
              minDate={minDate}
              maxDate={maxDate}
              onCancel={handleCancel}
              onDone={handleDone}
            />
          </div>
        )}
      </div>
    );
  },
);

Datepicker.displayName = 'Datepicker';
