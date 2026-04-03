import { forwardRef, useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { InputTextProps } from './InputText.types';
import styles from './InputText.module.css';

function ClearIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 4.5l7 7M11.5 4.5l-7 7"
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

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      size = 'lg',
      label,
      description,
      helperText,
      feedback,
      clearable = false,
      onClear,
      leftElement,
      rightElement,
      disabled,
      required,
      maxLength,
      type,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      className,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(
      () => (defaultValue as string) ?? '',
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value) : internalValue;
    const hasValue = currentValue.length > 0;

    // Merge forwarded ref with internal ref
    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current =
          node;
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLInputElement | null>).current =
            node;
      },
      [ref],
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    const handleClear = () => {
      if (!isControlled) setInternalValue('');
      onClear?.();
      inputRef.current?.focus();
    };

    const feedbackStatus = feedback?.status;
    const showClear = clearable && hasValue && !disabled;
    const showFooter = helperText || maxLength != null;

    const inputBoxCls = cn(
      styles.inputBox,
      styles[size],
      focused && styles.focused,
      feedbackStatus && styles[feedbackStatus],
      disabled && styles.disabled,
    );

    const inputCls = cn(
      styles.input,
      feedbackStatus === 'error' && styles.input_error,
      feedbackStatus === 'ai' && styles.input_ai,
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

        {description && (
          <span className={styles.description}>{description}</span>
        )}

        <div className={inputBoxCls}>
          {leftElement && (
            <span className={styles.leftElement}>{leftElement}</span>
          )}

          <input
            ref={setRefs}
            className={inputCls}
            type={type}
            value={isControlled ? currentValue : undefined}
            defaultValue={isControlled ? undefined : defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            {...rest}
          />

          {rightElement && (
            <span className={styles.rightElement}>{rightElement}</span>
          )}

          {showClear && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={handleClear}
              aria-label="Clear input"
            >
              <ClearIcon />
            </button>
          )}
        </div>

        {showFooter && (
          <div className={styles.footerRow}>
            {helperText && (
              <span className={styles.helperText}>{helperText}</span>
            )}
            {maxLength != null && (
              <span className={styles.counter}>
                {currentValue.length}/{maxLength}
              </span>
            )}
          </div>
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
      </div>
    );
  },
);

InputText.displayName = 'InputText';
