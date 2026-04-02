import { createContext, useContext } from 'react';
import type { AccordionVariant } from './Accordion.types';

export interface AccordionContextValue {
  variant: AccordionVariant;
  openItems: string[];
  toggle: (value: string) => void;
}

export const AccordionContext = createContext<AccordionContextValue | null>(null);

export function useAccordion(): AccordionContextValue {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('AccordionItem must be used within an Accordion');
  }
  return ctx;
}
