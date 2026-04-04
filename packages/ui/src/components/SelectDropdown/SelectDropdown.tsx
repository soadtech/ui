import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { cn } from '../../utils/cn';
import type {
  SelectDropdownProps,
  SelectOption,
  SelectOptionGroup,
} from './SelectDropdown.types';
import { SelectDropdownOverlay } from './SelectDropdownOverlay';
import styles from './SelectDropdown.module.css';

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChipDismissIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3L9 9M9 3L3 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeedbackDot() {
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

function FeedbackTriangle() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 0L8 8H0L4 0Z" fill="currentColor" />
    </svg>
  );
}

function FeedbackDiamond() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 0L8 4L4 8L0 4L4 0Z" fill="currentColor" />
    </svg>
  );
}

const feedbackIcons = {
  success: FeedbackDot,
  error: FeedbackDot,
  warning: FeedbackTriangle,
  ai: FeedbackDiamond,
} as const;

function isGroup(
  item: SelectOption | SelectOptionGroup,
): item is SelectOptionGroup {
  return 'options' in item;
}

function flattenOptions(
  items: (SelectOption | SelectOptionGroup)[],
): SelectOption[] {
  const result: SelectOption[] = [];
  for (const item of items) {
    if (isGroup(item)) {
      result.push(...item.options);
    } else {
      result.push(item);
    }
  }
  return result;
}

export const SelectDropdown = forwardRef<HTMLDivElement, SelectDropdownProps>(
  (props, ref) => {
    const {
      size = 'lg',
      label,
      helperText,
      feedback,
      placeholder = 'Select...',
      disabled = false,
      required,
      searchable = true,
      searchPlaceholder = 'Search',
      options,
      noOptionsText = 'No options',
      className,
      multiple: _multiple,
      value: _value,
      onChange: _onChange,
      maxVisibleChips: _maxVisibleChips,
      ...rest
    } = props as SelectDropdownProps & {
      multiple?: boolean;
      value?: unknown;
      onChange?: unknown;
      maxVisibleChips?: number;
    };

    const multiple = props.multiple === true;
    const maxVisibleChips = multiple
      ? ((props as { maxVisibleChips?: number }).maxVisibleChips ?? 1)
      : 1;

    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    // Merge forwarded ref with internal ref
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        (rootRef as React.MutableRefObject<HTMLDivElement | null>).current =
          node;
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
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

    const toggleOpen = useCallback(() => {
      if (!disabled) setOpen((prev) => !prev);
    }, [disabled]);

    const allOptions = flattenOptions(options);

    // Selected values as array
    const selectedValues: string[] = multiple
      ? ((props as { value?: string[] }).value ?? [])
      : (props as { value?: string | null }).value
        ? [(props as { value?: string | null }).value as string]
        : [];

    const handleSelect = useCallback(
      (value: string) => {
        if (multiple) {
          const onChange = (props as { onChange?: (v: string[]) => void })
            .onChange;
          const current = (props as { value?: string[] }).value ?? [];
          if (current.includes(value)) {
            onChange?.(current.filter((v) => v !== value));
          } else {
            onChange?.([...current, value]);
          }
        } else {
          const onChange = (
            props as { onChange?: (v: string | null) => void }
          ).onChange;
          onChange?.(value);
          setOpen(false);
        }
      },
      [multiple, props],
    );

    const handleChipDismiss = useCallback(
      (value: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (multiple) {
          const onChange = (props as { onChange?: (v: string[]) => void })
            .onChange;
          const current = (props as { value?: string[] }).value ?? [];
          onChange?.(current.filter((v) => v !== value));
        }
      },
      [multiple, props],
    );

    const feedbackStatus = feedback?.status;
    const FeedbackIcon = feedbackStatus
      ? feedbackIcons[feedbackStatus]
      : null;

    const triggerCls = cn(
      styles.trigger,
      styles[size],
      open && styles.open,
      feedbackStatus && styles[feedbackStatus],
      disabled && styles.disabled,
    );

    // Render trigger content
    const renderTriggerContent = () => {
      if (multiple) {
        const values = (props as { value?: string[] }).value ?? [];
        if (values.length === 0) {
          return <span className={styles.placeholder}>{placeholder}</span>;
        }

        const visibleChips = values.slice(0, maxVisibleChips);
        const overflowCount = values.length - maxVisibleChips;

        return (
          <div className={styles.chipArea}>
            {visibleChips.map((val) => {
              const opt = allOptions.find((o) => o.value === val);
              return (
                <span key={val} className={styles.valueChip}>
                  <span className={styles.chipLabel}>
                    {opt?.label ?? val}
                  </span>
                  <button
                    type="button"
                    className={styles.chipDismiss}
                    onClick={(e) => handleChipDismiss(val, e)}
                    aria-label={`Remove ${opt?.label ?? val}`}
                  >
                    <ChipDismissIcon />
                  </button>
                </span>
              );
            })}
            {overflowCount > 0 && (
              <span className={styles.overflowCount}>+{overflowCount}</span>
            )}
          </div>
        );
      }

      // Single select
      const singleValue = (props as { value?: string | null }).value;
      if (!singleValue) {
        return <span className={styles.placeholder}>{placeholder}</span>;
      }

      const selectedOpt = allOptions.find((o) => o.value === singleValue);
      return (
        <span className={styles.value}>
          {selectedOpt?.label ?? singleValue}
        </span>
      );
    };

    return (
      <div
        ref={setRefs}
        className={cn(styles.root, className)}
        {...rest}
      >
        {label && (
          <span className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
        )}

        <div
          className={triggerCls}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          tabIndex={disabled ? -1 : 0}
          onClick={toggleOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleOpen();
            }
          }}
        >
          {renderTriggerContent()}
          <span className={cn(styles.chevron, open && styles.chevronOpen)}>
            <ChevronDownIcon />
          </span>
        </div>

        {helperText && (
          <span className={styles.helperText}>{helperText}</span>
        )}

        {feedback && (
          <span
            className={cn(
              styles.feedbackText,
              styles[`feedback_${feedbackStatus}`],
            )}
          >
            {FeedbackIcon && <FeedbackIcon />}
            {feedback.message}
          </span>
        )}

        {open && (
          <div className={styles.popover}>
            <SelectDropdownOverlay
              items={options}
              selectedValues={selectedValues}
              multiple={multiple}
              searchable={searchable}
              searchPlaceholder={searchPlaceholder}
              noOptionsText={noOptionsText}
              onSelect={handleSelect}
            />
          </div>
        )}
      </div>
    );
  },
);

SelectDropdown.displayName = 'SelectDropdown';
