import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.css';

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={styles.iconSvg}>
      <path
        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      initials,
      icon,
      size = 'md',
      status = false,
      className,
      ...rest
    },
    ref
  ) => {
    const renderContent = () => {
      if (src) {
        return <img src={src} alt={alt} className={styles.image} />;
      }
      if (initials) {
        return <span className={styles.initials}>{initials}</span>;
      }
      return <span className={styles.icon}>{icon ?? <PersonIcon />}</span>;
    };

    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[size], className)}
        {...rest}
      >
        {renderContent()}
        {status && <span className={styles.status} />}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
