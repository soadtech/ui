import { forwardRef, useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { InputSearchProps } from './InputSearch.types';
import styles from './InputSearch.module.css';

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833313 7.33331C0.833313 3.74346 3.74346 0.833313 7.33331 0.833313C10.9232 0.833313 13.8333 3.74347 13.8333 7.33331C13.8333 8.94827 13.2444 10.4257 12.2695 11.5624L15.0202 14.3131C15.2155 14.5084 15.2155 14.8249 15.0202 15.0202C14.8249 15.2155 14.5084 15.2155 14.3131 15.0202L11.5624 12.2695C10.4257 13.2444 8.94827 13.8333 7.33331 13.8333C3.74347 13.8333 0.833313 10.9232 0.833313 7.33331ZM7.33331 1.83331C4.29575 1.83331 1.83331 4.29575 1.83331 7.33331C1.83331 10.3709 4.29575 12.8333 7.33331 12.8333C10.3709 12.8333 12.8333 10.3709 12.8333 7.33331C12.8333 4.29575 10.3709 1.83331 7.33331 1.83331Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10.5028 9.61889L15.5636 4.55806C15.8077 4.31398 16.2034 4.31398 16.4475 4.55806C16.6916 4.80214 16.6916 5.19786 16.4475 5.44194L11.3867 10.5028L16.4475 15.5636C16.6916 15.8077 16.6916 16.2034 16.4475 16.4475C16.2034 16.6916 15.8077 16.6916 15.5636 16.4475L10.5028 11.3867L5.44194 16.4475C5.19786 16.6916 4.80214 16.6916 4.55806 16.4475C4.31398 16.2034 4.31398 15.8077 4.55806 15.5636L9.61889 10.5028L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z"
        fill="currentColor"
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

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (
    {
      label,
      placeholder,
      value,
      defaultValue,
      onChange,
      onSearch,
      onClear,
      helperText,
      feedback,
      disabled,
      required,
      className,
      name,
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
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
    };

    const handleClear = () => {
      if (!isControlled) setInternalValue('');
      onClear?.();
      inputRef.current?.focus();
    };

    const handleSearch = () => {
      onSearch?.(currentValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    };

    const feedbackStatus = feedback?.status;
    const showClear = (focused || hasValue) && !disabled;

    const inputBoxCls = cn(
      styles.inputBox,
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

        <div className={inputBoxCls}>
          <input
            ref={setRefs}
            className={inputCls}
            placeholder={placeholder}
            value={isControlled ? currentValue : undefined}
            defaultValue={isControlled ? undefined : defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            required={required}
            name={name}
          />

          {showClear && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={handleClear}
              aria-label="Clear search"
            >
              <CloseIcon />
            </button>
          )}

          <button
            type="button"
            className={styles.searchBtn}
            onClick={handleSearch}
            disabled={disabled}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
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
      </div>
    );
  },
);

InputSearch.displayName = 'InputSearch';
