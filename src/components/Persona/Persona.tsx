import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Avatar } from '../Avatar';
import type { PersonaProps, PersonaSize } from './Persona.types';
import styles from './Persona.module.css';

const avatarSizeMap: Record<PersonaSize, 'lg' | 'md' | 'sm'> = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
};

export function VerifiedBadge() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={styles.verifiedBadge}
      aria-label="Verified"
    >
      <circle cx="7" cy="7" r="7" fill="var(--st-color-primary)" />
      <path
        d="M4.5 7L6.2 8.7L9.5 5.3"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={styles.chevron}
    >
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

export const Persona = forwardRef<HTMLDivElement, PersonaProps>(
  (
    {
      avatarSrc,
      avatarAlt = '',
      name,
      username,
      verified = false,
      size = 'md',
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[size], className)}
        tabIndex={0}
        {...rest}
      >
        <Avatar src={avatarSrc} alt={avatarAlt} size={avatarSizeMap[size]} />
        <div className={styles.body}>
          <span className={styles.nameRow}>
            <span className={styles.name}>{name}</span>
            {verified && <VerifiedBadge />}
          </span>
          {username && <span className={styles.username}>{username}</span>}
        </div>
        <ChevronDown />
      </div>
    );
  }
);

Persona.displayName = 'Persona';
