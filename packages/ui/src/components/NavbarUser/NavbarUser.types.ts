import type { ReactNode } from 'react';

export interface NavbarUserInfo {
  name: string;
  username: string;
  avatar?: string;
  verified?: boolean;
}

export interface NavbarUserProps {
  /** Page title */
  title: string;
  /** Description below title */
  subtitle?: string;
  /** Shows back arrow; presence indicates Level 2 */
  onBack?: () => void;
  /** Close button (mobile Level 2 only) */
  onClose?: () => void;
  /** Slot for action icon buttons */
  actions?: ReactNode;
  /** User info (avatar, name, handle) */
  user?: NavbarUserInfo;
  /** Dropdown trigger on user section */
  onUserClick?: () => void;
  /** Brand mark (mobile only) */
  logo?: ReactNode;
  /** Hamburger button (mobile only) */
  onMenuClick?: () => void;
  /** Root element class */
  className?: string;
}
