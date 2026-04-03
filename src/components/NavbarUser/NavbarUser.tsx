import { cn } from '../../utils/cn';
import { Avatar } from '../Avatar';
import type { NavbarUserProps } from './NavbarUser.types';
import styles from './NavbarUser.module.css';

function BackIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5H17M3 10H17M3 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10.5028 9.61889L15.5636 4.55806C15.8077 4.31398 16.2034 4.31398 16.4475 4.55806C16.6916 4.80214 16.6916 5.19786 16.4475 5.44194L11.3867 10.5028L16.4475 15.5636C16.6916 15.8077 16.6916 16.2034 16.4475 16.4475C16.2034 16.6916 15.8077 16.6916 15.5636 16.4475L10.5028 11.3867L5.44194 16.4475C5.19786 16.6916 4.80214 16.6916 4.55806 16.4475C4.31398 16.2034 4.31398 15.8077 4.55806 15.5636L9.61889 10.5028L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z"
        fill="currentColor"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={styles.verifiedBadge}
    >
      <circle cx="8" cy="8" r="8" fill="var(--st-color-info)" />
      <path
        d="M5 8L7 10L11 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={styles.userChevron}
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

export function NavbarUser({
  title,
  subtitle,
  onBack,
  onClose,
  actions,
  user,
  onUserClick,
  logo,
  onMenuClick,
  className,
}: NavbarUserProps) {
  const isLevel2 = !!onBack;

  return (
    <nav className={cn(styles.root, isLevel2 && styles.level2, className)}>
      {/* Mobile-only: logo + hamburger */}
      <span className={styles.mobileLead}>
        {logo}
        {onMenuClick && (
          <button
            type="button"
            className={styles.menuBtn}
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        )}
      </span>

      {/* Back button (Level 2) */}
      {onBack && (
        <button
          type="button"
          className={styles.backBtn}
          onClick={onBack}
          aria-label="Go back"
        >
          <BackIcon />
        </button>
      )}

      {/* Title + subtitle */}
      <div className={styles.titleGroup}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>

      {/* Action icons slot */}
      {actions && <div className={styles.actions}>{actions}</div>}

      {/* User section */}
      {user && (
        <button
          type="button"
          className={styles.userSection}
          onClick={onUserClick}
        >
          <Avatar
            src={user.avatar}
            initials={user.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
            size="sm"
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>
              {user.name}
              {user.verified && <VerifiedBadge />}
            </span>
            <span className={styles.userHandle}>@{user.username}</span>
          </div>
          <ChevronDownIcon />
        </button>
      )}

      {/* Close button (mobile Level 2) */}
      {onClose && (
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      )}
    </nav>
  );
}

NavbarUser.displayName = 'NavbarUser';
