import {
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
  type ReactElement,
} from 'react';
import { cn } from '../../utils/cn';
import type { BreadcrumbsProps, BreadcrumbItemProps } from './Breadcrumbs.types';
import styles from './Breadcrumbs.module.css';

function ChevronSeparator() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.separatorIcon}>
      <path
        d="M4.5 2.5L8 6L4.5 9.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SlashSeparator() {
  return <span className={styles.separatorIcon}>/</span>;
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ separator = 'chevron', maxItems, className, children, ...rest }, ref) => {
    const allItems = Children.toArray(children).filter(isValidElement) as ReactElement<BreadcrumbItemProps>[];
    let visibleItems: (ReactElement<BreadcrumbItemProps> | 'ellipsis')[];

    if (maxItems && allItems.length > maxItems) {
      const tail = allItems.slice(-(maxItems - 1));
      visibleItems = [allItems[0], 'ellipsis', ...tail];
    } else {
      visibleItems = allItems;
    }

    const Separator = separator === 'chevron' ? ChevronSeparator : SlashSeparator;

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn(styles.root, className)} {...rest}>
        <ol className={styles.list}>
          {visibleItems.map((item, i) => {
            const isLast = i === visibleItems.length - 1;

            return (
              <li key={i} className={styles.listItem}>
                {i > 0 && (
                  <span className={styles.separator} aria-hidden="true">
                    <Separator />
                  </span>
                )}
                {item === 'ellipsis' ? (
                  <span className={styles.ellipsis}>...</span>
                ) : (
                  cloneElement(item, { _active: isLast })
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
