import { forwardRef, useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { InputMessageProps } from './InputMessage.types';
import styles from './InputMessage.module.css';

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmileyIcon() {
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
        d="M9.99999 2.91669C6.08797 2.91669 2.91666 6.088 2.91666 10C2.91666 13.912 6.08797 17.0834 9.99999 17.0834C13.912 17.0834 17.0833 13.912 17.0833 10C17.0833 6.088 13.912 2.91669 9.99999 2.91669ZM1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9155 12.0721C14.1886 12.2832 14.2389 12.6757 14.0279 12.9488C13.8604 13.1656 12.4472 14.9179 9.99756 14.9084L9.99493 14.9084C7.64058 14.8893 6.27262 13.25 6.08496 13.013C5.87071 12.7423 5.91641 12.3492 6.18705 12.135C6.45768 11.9207 6.85076 11.9664 7.06502 12.2371C7.19399 12.4 8.24222 13.6435 10.0037 13.6584C11.8367 13.6649 12.9229 12.3344 13.0388 12.1845C13.2498 11.9114 13.6423 11.8611 13.9155 12.0721Z"
        fill="currentColor"
      />
      <path
        d="M6.99998 7.28335C6.41665 7.28335 5.94999 7.75835 5.94999 8.33335C5.94999 8.90835 6.42498 9.38336 6.99998 9.38336C7.58332 9.38336 8.04999 8.90835 8.04999 8.33335C8.04999 7.75835 7.58332 7.28335 6.99998 7.28335Z"
        fill="currentColor"
      />
      <path
        d="M13 7.28335C12.4167 7.28335 11.95 7.75835 11.95 8.33335C11.95 8.90835 12.425 9.38336 13 9.38336C13.5833 9.38336 14.05 8.90835 14.05 8.33335C14.05 7.75835 13.575 7.28335 13 7.28335Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12.5 18.9584H7.49999C2.97499 18.9584 1.04166 17.025 1.04166 12.5V7.50002C1.04166 2.97502 2.97499 1.04169 7.49999 1.04169H12.5C17.025 1.04169 18.9583 2.97502 18.9583 7.50002V12.5C18.9583 17.025 17.025 18.9584 12.5 18.9584ZM7.49999 2.29169C3.65832 2.29169 2.29166 3.65835 2.29166 7.50002V12.5C2.29166 16.3417 3.65832 17.7084 7.49999 17.7084H12.5C16.3417 17.7084 17.7083 16.3417 17.7083 12.5V7.50002C17.7083 3.65835 16.3417 2.29169 12.5 2.29169H7.49999Z"
        fill="currentColor"
      />
      <path
        d="M7.49999 8.95835C6.23332 8.95835 5.20832 7.93335 5.20832 6.66669C5.20832 5.40002 6.23332 4.37502 7.49999 4.37502C8.76666 4.37502 9.79166 5.40002 9.79166 6.66669C9.79166 7.93335 8.76666 8.95835 7.49999 8.95835ZM7.49999 5.62502C6.92499 5.62502 6.45832 6.09169 6.45832 6.66669C6.45832 7.24169 6.92499 7.70835 7.49999 7.70835C8.07499 7.70835 8.54166 7.24169 8.54166 6.66669C8.54166 6.09169 8.07499 5.62502 7.49999 5.62502Z"
        fill="currentColor"
      />
      <path
        d="M2.225 16.4167C2.025 16.4167 1.825 16.3167 1.70834 16.1417C1.51667 15.8584 1.59167 15.4667 1.88334 15.2751L5.99167 12.5167C6.89167 11.9084 8.13334 11.9834 8.95 12.6751L9.225 12.9167C9.64167 13.2751 10.35 13.2751 10.7583 12.9167L14.225 9.94174C15.1083 9.1834 16.5 9.1834 17.3917 9.94174L18.75 11.1084C19.0083 11.3334 19.0417 11.7251 18.8167 11.9917C18.5917 12.2501 18.2 12.2834 17.9333 12.0584L16.575 10.8917C16.1583 10.5334 15.45 10.5334 15.0333 10.8917L11.5667 13.8667C10.6833 14.6251 9.29167 14.6251 8.4 13.8667L8.125 13.6251C7.74167 13.3001 7.10834 13.2667 6.68334 13.5584L2.575 16.3167C2.46667 16.3834 2.34167 16.4167 2.225 16.4167Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.99999 13.5417C7.81666 13.5417 6.04166 11.7667 6.04166 9.58335V5.00002C6.04166 2.81669 7.81666 1.04169 9.99999 1.04169C12.1833 1.04169 13.9583 2.81669 13.9583 5.00002V9.58335C13.9583 11.7667 12.1833 13.5417 9.99999 13.5417ZM9.99999 2.29169C8.50832 2.29169 7.29166 3.50835 7.29166 5.00002V9.58335C7.29166 11.075 8.50832 12.2917 9.99999 12.2917C11.4917 12.2917 12.7083 11.075 12.7083 9.58335V5.00002C12.7083 3.50835 11.4917 2.29169 9.99999 2.29169Z"
        fill="currentColor"
      />
      <path
        d="M9.99997 16.4584C6.14164 16.4584 2.99997 13.3167 2.99997 9.45837V8.04171C2.99997 7.70004 3.2833 7.41671 3.62497 7.41671C3.96664 7.41671 4.24997 7.70004 4.24997 8.04171V9.45837C4.24997 12.625 6.8333 15.2084 9.99997 15.2084C13.1666 15.2084 15.75 12.625 15.75 9.45837V8.04171C15.75 7.70004 16.0333 7.41671 16.375 7.41671C16.7166 7.41671 17 7.70004 17 8.04171V9.45837C17 13.3167 13.8583 16.4584 9.99997 16.4584Z"
        fill="currentColor"
      />
      <path
        d="M11.1583 5.98331C11.0917 5.98331 11.0167 5.97498 10.9417 5.94998C10.3333 5.72498 9.66666 5.72498 9.05832 5.94998C8.73332 6.06664 8.37499 5.89998 8.25832 5.57498C8.14166 5.24998 8.30832 4.89164 8.63332 4.77498C9.51666 4.45831 10.4917 4.45831 11.375 4.77498C11.7 4.89164 11.8667 5.24998 11.75 5.57498C11.65 5.82498 11.4083 5.98331 11.1583 5.98331Z"
        fill="currentColor"
      />
      <path
        d="M10.6666 7.74998C10.6083 7.74998 10.5583 7.74164 10.5 7.72498C10.1666 7.63331 9.82495 7.63331 9.49162 7.72498C9.15829 7.81664 8.81662 7.61664 8.72495 7.28331C8.63329 6.95831 8.83329 6.61664 9.16662 6.52498C9.70829 6.37498 10.2916 6.37498 10.8333 6.52498C11.1666 6.61664 11.3666 6.95831 11.275 7.29164C11.2 7.56664 10.9416 7.74998 10.6666 7.74998Z"
        fill="currentColor"
      />
      <path
        d="M9.99999 18.9584C9.65832 18.9584 9.37499 18.675 9.37499 18.3334V15.8334C9.37499 15.4917 9.6583 15.2084 9.99997 15.2084C10.3416 15.2084 10.625 15.4917 10.625 15.8334V18.3334C10.625 18.675 10.3417 18.9584 9.99999 18.9584Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.50834 18.1249C3.57501 18.1249 2.98334 17.8083 2.60834 17.4333C1.87501 16.6999 1.35834 15.1416 3.00834 11.8333L3.73334 10.3916C3.82501 10.1999 3.82501 9.79993 3.73334 9.60826L3.00834 8.16659C1.35001 4.85826 1.87501 3.29159 2.60834 2.56659C3.33334 1.83326 4.90001 1.30826 8.20001 2.96659L15.3333 6.53326C17.1083 7.41659 18.0833 8.64993 18.0833 9.99993C18.0833 11.3499 17.1083 12.5833 15.3417 13.4666L8.20834 17.0333C6.59167 17.8416 5.39167 18.1249 4.50834 18.1249ZM4.50834 3.12493C4.05834 3.12493 3.70834 3.23326 3.49167 3.44993C2.88334 4.04993 3.12501 5.60826 4.12501 7.59993L4.85001 9.04993C5.11667 9.59159 5.11667 10.4083 4.85001 10.9499L4.12501 12.3916C3.12501 14.3916 2.88334 15.9416 3.49167 16.5416C4.09167 17.1499 5.65001 16.9083 7.65001 15.9083L14.7833 12.3416C16.0917 11.6916 16.8333 10.8333 16.8333 9.99159C16.8333 9.14993 16.0833 8.29159 14.775 7.64159L7.64167 4.08326C6.37501 3.44993 5.28334 3.12493 4.50834 3.12493Z"
        fill="currentColor"
      />
      <path
        d="M9.03334 10.625H4.53334C4.19167 10.625 3.90834 10.3417 3.90834 10C3.90834 9.65834 4.19167 9.37501 4.53334 9.37501H9.03334C9.375 9.37501 9.65834 9.65834 9.65834 10C9.65834 10.3417 9.375 10.625 9.03334 10.625Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const InputMessage = forwardRef<HTMLInputElement, InputMessageProps>(
  (
    {
      label,
      placeholder,
      value,
      defaultValue = '',
      onChange,
      onSend,
      onPlusClick,
      onEmojiClick,
      onGalleryClick,
      onMicrophoneClick,
      disabled,
      required,
      className,
      name,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
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

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const handleSend = () => {
      if (!hasValue) return;
      onSend?.(currentValue);
      if (!isControlled) setInternalValue('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    const hasActions = !!(onEmojiClick || onGalleryClick || onMicrophoneClick);

    return (
      <div className={cn(styles.root, className)}>
        {label && (
          <span className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
        )}

        <div
          className={cn(
            styles.inputBox,
            focused && styles.focused,
            disabled && styles.disabled,
          )}
        >
          {onPlusClick && (
            <button
              type="button"
              className={styles.plusBtn}
              onClick={onPlusClick}
              aria-label="Add attachment"
            >
              <PlusIcon />
            </button>
          )}

          <input
            ref={setRefs}
            className={styles.input}
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

          {hasActions && (
            <div className={styles.actions}>
              {onEmojiClick && (
                <button
                  type="button"
                  className={styles.actionBtn}
                  onClick={onEmojiClick}
                  aria-label="Emoji"
                >
                  <SmileyIcon />
                </button>
              )}
              {onGalleryClick && (
                <button
                  type="button"
                  className={styles.actionBtn}
                  onClick={onGalleryClick}
                  aria-label="Gallery"
                >
                  <GalleryIcon />
                </button>
              )}
              {onMicrophoneClick && (
                <button
                  type="button"
                  className={styles.actionBtn}
                  onClick={onMicrophoneClick}
                  aria-label="Microphone"
                >
                  <MicrophoneIcon />
                </button>
              )}
            </div>
          )}

          {hasActions && <span className={styles.separator} />}

          <button
            type="button"
            className={cn(styles.sendBtn, hasValue && styles.sendBtnActive)}
            onClick={handleSend}
            disabled={disabled}
            aria-label="Send"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    );
  },
);

InputMessage.displayName = 'InputMessage';
