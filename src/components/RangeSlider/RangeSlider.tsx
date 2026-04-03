import { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { RangeSliderProps } from './RangeSlider.types';
import styles from './RangeSlider.module.css';

function clamp(val: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, val));
}

function snap(val: number, min: number, step: number) {
  return Math.round((val - min) / step) * step + min;
}

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      label,
      min = 0,
      max = 100,
      step = 1,
      value = 0,
      onValueChange,
      rangeValue,
      onRangeChange,
      showInput = false,
      suffix = '',
      className,
      ...rest
    },
    ref
  ) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<number | null>(null);
    const [inputText, setInputText] = useState(String(value));
    const [inputFocused, setInputFocused] = useState(false);

    const isRange = rangeValue !== undefined;

    useEffect(() => {
      if (!inputFocused) {
        setInputText(String(value));
      }
    }, [value, inputFocused]);

    const toPercent = useCallback(
      (val: number) => ((val - min) / (max - min)) * 100,
      [min, max]
    );

    const fromClientX = useCallback(
      (clientX: number) => {
        const el = trackRef.current;
        if (!el) return min;
        const rect = el.getBoundingClientRect();
        const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
        const raw = min + ratio * (max - min);
        return clamp(snap(raw, min, step), min, max);
      },
      [min, max, step]
    );

    /* ─── Pointer handlers ─── */

    const handlePointerDown =
      (index: number) => (e: React.PointerEvent) => {
        e.preventDefault();
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        setDragging(index);
      };

    const handlePointerMove =
      (index: number) => (e: React.PointerEvent) => {
        if (dragging !== index) return;
        const val = fromClientX(e.clientX);

        if (isRange && rangeValue && onRangeChange) {
          const next: [number, number] = [rangeValue[0], rangeValue[1]];
          next[index] = val;
          if (next[0] > next[1]) {
            if (index === 0) next[0] = next[1];
            else next[1] = next[0];
          }
          onRangeChange(next);
        } else if (!isRange) {
          onValueChange?.(val);
        }
      };

    const handlePointerUp = () => setDragging(null);

    const handleTrackClick = (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('[role="slider"]')) return;
      const val = fromClientX(e.clientX);

      if (isRange && rangeValue && onRangeChange) {
        const d0 = Math.abs(val - rangeValue[0]);
        const d1 = Math.abs(val - rangeValue[1]);
        const next: [number, number] = [rangeValue[0], rangeValue[1]];
        if (d0 <= d1) next[0] = val;
        else next[1] = val;
        if (next[0] > next[1])
          [next[0], next[1]] = [next[1], next[0]];
        onRangeChange(next);
      } else if (!isRange) {
        onValueChange?.(val);
      }
    };

    /* ─── Keyboard handler ─── */

    const handleKeyDown =
      (index: number) => (e: React.KeyboardEvent) => {
        let delta = 0;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') delta = step;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown')
          delta = -step;
        else return;
        e.preventDefault();

        if (isRange && rangeValue && onRangeChange) {
          const next: [number, number] = [rangeValue[0], rangeValue[1]];
          next[index] = clamp(next[index] + delta, min, max);
          if (next[0] > next[1]) return;
          onRangeChange(next);
        } else if (!isRange) {
          onValueChange?.(clamp(value + delta, min, max));
        }
      };

    /* ─── Input handlers ─── */

    const handleInputFocus = () => {
      setInputFocused(true);
      setInputText(String(value));
    };

    const handleInputBlur = () => {
      setInputFocused(false);
      const parsed = parseFloat(inputText);
      if (!isNaN(parsed)) {
        onValueChange?.(clamp(snap(parsed, min, step), min, max));
      } else {
        setInputText(String(value));
      }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
    };

    /* ─── Computed positions ─── */

    const singlePct = isRange ? 0 : toPercent(value);
    const rangePcts = isRange
      ? [toPercent(rangeValue![0]), toPercent(rangeValue![1])]
      : [0, 0];

    /* ─── Render ─── */

    const renderThumb = (pct: number, index: number, ariaVal: number, ariaLabel?: string) => (
      <div
        key={index}
        className={cn(styles.thumb, dragging === index && styles.thumbActive)}
        style={{ left: `${pct}%` }}
        role="slider"
        tabIndex={0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={ariaVal}
        aria-label={ariaLabel}
        onPointerDown={handlePointerDown(index)}
        onPointerMove={handlePointerMove(index)}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown(index)}
      />
    );

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {label && <span className={styles.label}>{label}</span>}

        <div className={styles.sliderRow}>
          <div className={styles.sliderWrap}>
            <div
              className={styles.sliderContainer}
              ref={trackRef}
              onClick={handleTrackClick}
            >
              <div className={styles.track} />

              {isRange ? (
                <div
                  className={styles.fill}
                  style={{
                    left: `${rangePcts[0]}%`,
                    width: `${rangePcts[1] - rangePcts[0]}%`,
                  }}
                />
              ) : (
                <div
                  className={styles.fill}
                  style={{ left: 0, width: `${singlePct}%` }}
                />
              )}

              {isRange
                ? [
                    renderThumb(rangePcts[0], 0, rangeValue![0], `${label} minimum`),
                    renderThumb(rangePcts[1], 1, rangeValue![1], `${label} maximum`),
                  ]
                : renderThumb(singlePct, 0, value, label)}
            </div>

            {isRange && rangeValue && (
              <div className={styles.valueLabels}>
                <span
                  className={styles.valueLabel}
                  style={{ left: `${rangePcts[0]}%` }}
                >
                  {rangeValue[0]}
                </span>
                <span
                  className={styles.valueLabel}
                  style={{ left: `${rangePcts[1]}%` }}
                >
                  {rangeValue[1]}
                </span>
              </div>
            )}
          </div>

          {!isRange && showInput && (
            <input
              type="text"
              className={styles.valueInput}
              value={inputFocused ? inputText : `${value}${suffix}`}
              onChange={(e) =>
                setInputText(e.target.value.replace(suffix, ''))
              }
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
            />
          )}
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
