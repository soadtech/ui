import { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';
import type { RatingIconType, RatingProps } from './Rating.types';
import styles from './Rating.module.css';

const STAR_PATH =
  'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
const HEART_PATH =
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

interface IconProps {
  type: RatingIconType;
  fill: number;
  gradientId: string;
  size: number;
}

function RatingIcon({ type, fill, gradientId, size }: IconProps) {
  const d = type === 'star' ? STAR_PATH : HEART_PATH;
  const clamped = Math.min(1, Math.max(0, fill));

  if (clamped <= 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d={d} className={styles.iconInactive} />
      </svg>
    );
  }

  if (clamped >= 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d={d} className={styles.iconActive} />
      </svg>
    );
  }

  const offset = `${Math.round(clamped * 100)}%`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId}>
          <stop
            offset={offset}
            style={{ stopColor: 'var(--rating-color-active)' }}
          />
          <stop
            offset={offset}
            style={{ stopColor: 'var(--rating-color-inactive)' }}
          />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${gradientId})`} />
    </svg>
  );
}

const ICON_SIZE = { md: 16, sm: 12 } as const;

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value,
      count,
      maxStars = 5,
      size = 'md',
      variant = 'type1',
      icon = 'star',
      className,
      ...rest
    },
    ref,
  ) => {
    const baseId = useId().replace(/:/g, '');
    const iconSize = ICON_SIZE[size];

    const starsEl = (
      <span className={styles.stars}>
        {variant === 'simple' ? (
          <RatingIcon
            type={icon}
            fill={1}
            gradientId={`${baseId}-0`}
            size={iconSize}
          />
        ) : (
          Array.from({ length: maxStars }, (_, i) => (
            <RatingIcon
              key={i}
              type={icon}
              fill={Math.min(1, Math.max(0, value - i))}
              gradientId={`${baseId}-${i}`}
              size={iconSize}
            />
          ))
        )}
      </span>
    );

    const valueEl = <span className={styles.value}>{value}</span>;
    const countEl =
      count !== undefined ? (
        <span className={styles.count}>({count})</span>
      ) : null;

    /* Element order depends on variant + size:
       md type1 / sm type2 / simple → stars first
       md type2 / sm type1          → value first */
    const starsFirst =
      variant === 'simple' ||
      (variant === 'type1' && size === 'md') ||
      (variant === 'type2' && size === 'sm');

    const label = `Rating: ${value} out of ${maxStars}${count !== undefined ? ` (${count} reviews)` : ''}`;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={label}
        className={cn(styles.root, styles[size], className)}
        {...rest}
      >
        {starsFirst ? (
          <>
            {starsEl}
            {valueEl}
            {countEl}
          </>
        ) : (
          <>
            {valueEl}
            {starsEl}
            {countEl}
          </>
        )}
      </div>
    );
  },
);

Rating.displayName = 'Rating';
