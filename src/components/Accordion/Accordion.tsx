import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { AccordionContext } from './AccordionContext';
import type { AccordionProps } from './Accordion.types';
import styles from './Accordion.module.css';

function normalizeValue(val?: string | string[]): string[] {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = 'multiple',
      variant = 'collapsible',
      defaultValue,
      value,
      onValueChange,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(() =>
      normalizeValue(defaultValue)
    );
    const openItems =
      value !== undefined ? normalizeValue(value) : internalOpen;

    const toggle = (itemValue: string) => {
      let next: string[];
      if (openItems.includes(itemValue)) {
        next = openItems.filter((v) => v !== itemValue);
      } else {
        next =
          type === 'single' ? [itemValue] : [...openItems, itemValue];
      }
      if (value === undefined) setInternalOpen(next);
      onValueChange?.(next);
    };

    return (
      <AccordionContext.Provider value={{ variant, openItems, toggle }}>
        <div ref={ref} className={cn(styles.root, className)} {...rest}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';
