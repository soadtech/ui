import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ActionBarLinkProps } from './ActionBarLink.types';
import styles from './ActionBarLink.module.css';

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M10.5 7.58V11.08C10.5 11.39 10.38 11.69 10.16 11.91C9.94 12.13 9.64 12.25 9.33 12.25H2.92C2.61 12.25 2.31 12.13 2.09 11.91C1.87 11.69 1.75 11.39 1.75 11.08V4.67C1.75 4.36 1.87 4.06 2.09 3.84C2.31 3.62 2.61 3.5 2.92 3.5H6.42"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 1.75H12.25V5.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83 8.17L12.25 1.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ActionBarLink = forwardRef<
  HTMLAnchorElement,
  ActionBarLinkProps
>(({ external = false, className, children, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(styles.root, className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {external && (
        <span className={styles.externalIcon}>
          <ExternalIcon />
        </span>
      )}
    </a>
  );
});

ActionBarLink.displayName = 'ActionBarLink';
