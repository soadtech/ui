import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import type { InputTextAreaProps } from './InputTextArea.types';
import styles from './InputTextArea.module.css';

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

export const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  InputTextAreaProps
>(
  (
    {
      label,
      feedback,
      toolbar,
      disabled,
      required,
      maxLength,
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
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(
      () => (defaultValue as string) ?? '',
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value) : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    const feedbackStatus = feedback?.status;

    const textareaBoxCls = cn(
      styles.textareaBox,
      focused && styles.focused,
      feedbackStatus && styles[feedbackStatus],
      disabled && styles.disabled,
    );

    const textareaCls = cn(
      styles.textarea,
      feedbackStatus === 'error' && styles.textarea_error,
      feedbackStatus === 'ai' && styles.textarea_ai,
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

        <div className={textareaBoxCls}>
          {toolbar && <div className={styles.toolbar}>{toolbar}</div>}

          <textarea
            ref={ref}
            className={textareaCls}
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
        </div>

        {maxLength != null && (
          <div className={styles.footerRow}>
            <span className={styles.counter}>
              {currentValue.length}/{maxLength}
            </span>
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

InputTextArea.displayName = 'InputTextArea';
