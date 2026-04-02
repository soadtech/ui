import type { AnchorHTMLAttributes } from 'react';

export interface ActionBarLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Show external link icon */
  external?: boolean;
}
