import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { VerificationCodeProps } from './VerificationCode.types';
import styles from './VerificationCode.module.css';

function toDigits(value: string, length: number): string[] {
  const chars = value.replace(/[^0-9]/g, '').split('');
  return Array.from({ length }, (_, i) => chars[i] ?? '');
}

export const VerificationCode = forwardRef<HTMLDivElement, VerificationCodeProps>(
  (
    {
      length = 4,
      value,
      defaultValue,
      onChange,
      onComplete,
      error,
      disabled,
      autoFocus,
      className,
      ...rest
    },
    ref,
  ) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [internalDigits, setInternalDigits] = useState<string[]>(() =>
      toDigits(defaultValue ?? '', length),
    );

    const isControlled = value !== undefined;
    const digits = isControlled ? toDigits(value, length) : internalDigits;

    // Ensure internal array stays in sync with length changes
    useEffect(() => {
      if (!isControlled && internalDigits.length !== length) {
        setInternalDigits(toDigits(internalDigits.join(''), length));
      }
    }, [length, isControlled, internalDigits]);

    useEffect(() => {
      if (autoFocus) {
        inputRefs.current[0]?.focus();
      }
    }, [autoFocus]);

    const updateDigits = useCallback(
      (next: string[]) => {
        if (!isControlled) setInternalDigits(next);
        const joined = next.join('');
        onChange?.(joined);
        if (next.every((d) => d !== '')) {
          onComplete?.(joined);
        }
      },
      [isControlled, onChange, onComplete],
    );

    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const char = e.target.value.replace(/[^0-9]/g, '').slice(-1);
      if (!char) return;

      const next = [...digits];
      next[index] = char;
      updateDigits(next);

      // Auto-advance
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        e.preventDefault();
        const next = [...digits];
        if (digits[index]) {
          next[index] = '';
          updateDigits(next);
        } else if (index > 0) {
          next[index - 1] = '';
          updateDigits(next);
          inputRefs.current[index - 1]?.focus();
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
      if (!pasted) return;

      const target = inputRefs.current.indexOf(e.currentTarget as HTMLInputElement);
      const start = target >= 0 ? target : 0;
      const next = [...digits];

      for (let i = 0; i < pasted.length && start + i < length; i++) {
        next[start + i] = pasted[i];
      }

      updateDigits(next);

      // Focus last filled or next empty
      const focusIndex = Math.min(start + pasted.length, length) - 1;
      inputRefs.current[focusIndex]?.focus();
    };

    const handleFocus = () => (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    };

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            disabled={disabled}
            className={cn(
              styles.digit,
              digit && styles.filled,
              error && styles.digitError,
            )}
            onChange={handleChange(i)}
            onKeyDown={handleKeyDown(i)}
            onPaste={handlePaste}
            onFocus={handleFocus()}
            aria-label={`Digit ${i + 1}`}
          />
        ))}
      </div>
    );
  },
);

VerificationCode.displayName = 'VerificationCode';
