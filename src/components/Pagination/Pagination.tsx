import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';
import type { PaginationProps } from './Pagination.types';
import styles from './Pagination.module.css';

/* ─── Inline SVGs ─── */

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Page range algorithm ─── */

type RangeItem = number | 'ellipsis';

function range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
}

export function buildRange(
  page: number,
  count: number,
  siblingCount: number,
  boundaryCount: number
): RangeItem[] {
  // Total slots: boundaries on each side + siblings on each side + current + 2 possible ellipses
  const totalSlots = boundaryCount * 2 + siblingCount * 2 + 3;

  if (count <= totalSlots) {
    return range(1, count);
  }

  const leftBoundary = range(1, boundaryCount);
  const rightBoundary = range(count - boundaryCount + 1, count);

  const siblingLeft = Math.max(page - siblingCount, boundaryCount + 1);
  const siblingRight = Math.min(page + siblingCount, count - boundaryCount);

  const showLeftEllipsis = siblingLeft > boundaryCount + 2;
  const showRightEllipsis = siblingRight < count - boundaryCount - 1;

  const result: RangeItem[] = [];

  // Left boundary
  result.push(...leftBoundary);

  // Left ellipsis or fill
  if (showLeftEllipsis) {
    result.push('ellipsis');
  } else {
    // Fill from boundaryCount+1 to siblingLeft-1
    for (let i = boundaryCount + 1; i < siblingLeft; i++) {
      result.push(i);
    }
  }

  // Sibling range including current page
  result.push(...range(siblingLeft, siblingRight));

  // Right ellipsis or fill
  if (showRightEllipsis) {
    result.push('ellipsis');
  } else {
    // Fill from siblingRight+1 to count-boundaryCount
    for (let i = siblingRight + 1; i <= count - boundaryCount; i++) {
      result.push(i);
    }
  }

  // Right boundary
  result.push(...rightBoundary);

  return result;
}

/* ─── Component ─── */

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      count,
      onPageChange,
      size = 'md',
      variant = 'spaced',
      siblingCount = 1,
      boundaryCount = 1,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const isFirst = page <= 1;
    const isLast = page >= count;

    const pages = buildRange(page, count, siblingCount, boundaryCount);

    const buttonSize = size === 'sm' ? 'sm' : 'md';

    const prevButton = (
      <Button
        variant="outline"
        size={buttonSize}
        disabled={disabled || isFirst}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
        iconLeft={<ChevronLeft />}
      >
        {size === 'md' ? 'Previous' : undefined}
      </Button>
    );

    const nextButton = (
      <Button
        variant="outline"
        size={buttonSize}
        disabled={disabled || isLast}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
        iconRight={<ChevronRight />}
      >
        {size === 'md' ? 'Next' : undefined}
      </Button>
    );

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={cn(styles.root, styles[size], styles[variant], className)}
        {...rest}
      >
        {prevButton}

        {variant === 'text' ? (
          <span className={styles.pageText}>
            Page {page} of {count}
          </span>
        ) : (
          <ol
            className={cn(
              styles.list,
              variant === 'congested' && styles.listCongested
            )}
          >
            {pages.map((item, index) =>
              item === 'ellipsis' ? (
                <li key={`ellipsis-${index}`}>
                  <span
                    className={cn(styles.ellipsis, styles[size])}
                    aria-hidden
                  >
                    &hellip;
                  </span>
                </li>
              ) : (
                <li key={item}>
                  <button
                    type="button"
                    className={cn(
                      styles.pageItem,
                      styles[size],
                      item === page && styles.pageItemActive,
                      variant === 'congested' && styles.pageItemBordered
                    )}
                    disabled={disabled}
                    aria-current={item === page ? 'page' : undefined}
                    onClick={() => onPageChange(item)}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ol>
        )}

        {nextButton}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
