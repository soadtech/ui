import { forwardRef, useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { InputCounterProps } from './InputCounter.types';
import styles from './InputCounter.module.css';

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10"
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

export const InputCounter = forwardRef<HTMLInputElement, InputCounterProps>(
  (
    {
      label,
      size = 'lg',
      feedback,
      value,
      defaultValue = 0,
      onChange,
      min,
      max,
      step = 1,
      disabled,
      required,
      className,
      name,
    },
    ref,
  ) => {
    const hiddenRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // Merge forwarded ref with internal ref
    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        (
          hiddenRef as React.MutableRefObject<HTMLInputElement | null>
        ).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLInputElement | null>).current =
            node;
      },
      [ref],
    );

    const clamp = (val: number) => {
      let clamped = val;
      if (min !== undefined) clamped = Math.max(min, clamped);
      if (max !== undefined) clamped = Math.min(max, clamped);
      return clamped;
    };

    const update = (next: number) => {
      const clamped = clamp(next);
      if (!isControlled) setInternalValue(clamped);
      onChange?.(clamped);
    };

    const increment = () => update(currentValue + step);
    const decrement = () => update(currentValue - step);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const feedbackStatus = feedback?.status;

    const counterBoxCls = cn(
      styles.counterBox,
      styles[size],
      focused && styles.focused,
      feedbackStatus && styles[feedbackStatus],
      disabled && styles.disabled,
    );

    const valueCls = cn(
      styles.value,
      feedbackStatus === 'error' && styles.value_error,
      feedbackStatus === 'ai' && styles.value_ai,
    );

    const FeedbackIcon = feedbackStatus
      ? feedbackIcons[feedbackStatus]
      : null;

    return (
      <div className={cn(styles.root, className)}>
        {label && (
          <span className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
        )}

        <div
          className={counterBoxCls}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <button
            type="button"
            className={cn(styles.button, styles[size])}
            onClick={increment}
            disabled={disabled || (max !== undefined && currentValue >= max)}
            aria-label="Increment"
          >
            <PlusIcon />
          </button>

          <span className={valueCls}>{currentValue}</span>

          <button
            type="button"
            className={cn(styles.button, styles[size])}
            onClick={decrement}
            disabled={disabled || (min !== undefined && currentValue <= min)}
            aria-label="Decrement"
          >
            <MinusIcon />
          </button>

          <input
            ref={setRefs}
            type="hidden"
            name={name}
            value={currentValue}
          />
        </div>

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
      </div>
    );
  },
);

InputCounter.displayName = 'InputCounter';
