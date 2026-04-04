import type { HTMLAttributes } from 'react';

export type AccordionType = 'single' | 'multiple';
export type AccordionVariant = 'collapsible' | 'accordion' | 'showmore';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** `single` allows only one open item; `multiple` allows many */
  type?: AccordionType;
  /** Visual variant: trigger icon and layout */
  variant?: AccordionVariant;
  /** Initial open items (uncontrolled) */
  defaultValue?: string | string[];
  /** Currently open items (controlled) */
  value?: string | string[];
  /** Callback when open items change */
  onValueChange?: (value: string[]) => void;
}
