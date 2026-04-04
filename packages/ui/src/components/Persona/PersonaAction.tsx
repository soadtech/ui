import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Avatar } from '../Avatar';
import type { PersonaActionProps, PersonaSize } from './Persona.types';
import styles from './PersonaAction.module.css';

const avatarSizeMap: Record<PersonaSize, 'lg' | 'md' | 'sm'> = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
};

export const PersonaAction = forwardRef<HTMLDivElement, PersonaActionProps>(
  (
    {
      avatarSrc,
      avatarAlt = '',
      name,
      actionText,
      actionTarget,
      timestamp,
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
          <span className={styles.actionLine}>
            <strong className={styles.name}>{name}</strong>
            {actionText && <> {actionText}</>}
            {actionTarget && <> <strong className={styles.target}>{actionTarget}</strong></>}
          </span>
          {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
        </div>
      </div>
    );
  }
);

PersonaAction.displayName = 'PersonaAction';
