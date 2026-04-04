import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useAccordion } from './AccordionContext';
import type { AccordionItemProps } from './AccordionItem.types';
import styles from './AccordionItem.module.css';

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TriangleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M1.5 3L5 7L8.5 3H1.5Z" />
    </svg>
  );
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      value,
      title,
      description,
      icon,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const { variant, openItems, toggle } = useAccordion();
    const isOpen = openItems.includes(value);
    const triggerId = `st-accordion-trigger-${value}`;
    const panelId = `st-accordion-panel-${value}`;

    return (
      <div
        ref={ref}
        className={cn(styles.item, className)}
        {...rest}
      >
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          disabled={disabled}
          className={cn(
            styles.trigger,
            styles[variant],
            isOpen && styles.open
          )}
          onClick={() => toggle(value)}
        >
          {variant === 'showmore' && (
            <span
              className={cn(
                styles.indicator,
                isOpen && styles.indicatorOpen
              )}
            >
              <TriangleIcon />
            </span>
          )}

          {icon && variant !== 'showmore' && (
            <span className={styles.icon}>{icon}</span>
          )}

          <span className={styles.content}>
            <span className={styles.title}>{title}</span>
            {description && variant !== 'showmore' && (
              <span className={styles.description}>{description}</span>
            )}
          </span>

          {variant === 'collapsible' && (
            <span
              className={cn(
                styles.indicator,
                isOpen && styles.indicatorOpen
              )}
            >
              <ChevronIcon />
            </span>
          )}

          {variant === 'accordion' && (
            <span className={styles.indicator}>
              {isOpen ? <MinusIcon /> : <PlusIcon />}
            </span>
          )}
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className={cn(styles.panel, isOpen && styles.panelOpen)}
        >
          <div className={styles.panelContent}>
            <div className={styles.panelInner}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
