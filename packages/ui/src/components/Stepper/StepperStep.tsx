import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useStepper } from './StepperContext';
import type { StepperStepInternalProps } from './Stepper.types';
import styles from './StepperStep.module.css';

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 3.5L5.5 10L2.5 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StepperStep = forwardRef<HTMLDivElement, StepperStepInternalProps>(
  (
    {
      status = 'default',
      title,
      description,
      icon,
      children,
      className,
      _step = 1,
      _isFirst = true,
      _isLast = false,
      _prevCompleted = false,
      ...rest
    },
    ref
  ) => {
    const { orientation, size } = useStepper();
    const isVertical = orientation === 'vertical';

    const indicatorStatusClass =
      status === 'active'
        ? styles.indicatorActive
        : status === 'completed'
          ? styles.indicatorCompleted
          : status === 'disabled'
            ? styles.indicatorDisabled
            : status === 'error'
              ? styles.indicatorError
              : styles.indicatorDefault;

    const indicatorContent =
      status === 'completed' ? (
        <CheckIcon />
      ) : status === 'error' ? (
        <XIcon />
      ) : icon ? (
        icon
      ) : (
        _step
      );

    const indicator = (
      <div className={cn(styles.indicator, styles[size], indicatorStatusClass)}>
        {indicatorContent}
      </div>
    );

    const titleEl = (
      <div
        className={cn(
          styles.title,
          styles[size],
          status === 'error' && styles.titleError,
          status === 'disabled' && styles.titleDisabled
        )}
      >
        {title}
      </div>
    );

    const descriptionEl = description ? (
      <div
        className={cn(
          styles.description,
          status === 'disabled' && styles.descriptionDisabled
        )}
      >
        {description}
      </div>
    ) : null;

    const contentEl = children ? (
      <div className={styles.content}>{children}</div>
    ) : null;

    if (isVertical) {
      const connectorVertical = (
        <div
          className={cn(
            styles.connector,
            styles.connectorVertical,
            status === 'completed' && styles.connectorCompleted,
            _isLast && styles.connectorHidden
          )}
        />
      );

      return (
        <div
          ref={ref}
          className={cn(
            styles.step,
            styles.vertical,
            status === 'disabled' && styles.disabled,
            className
          )}
          {...rest}
        >
          <div className={styles.indicatorCol}>
            {indicator}
            {connectorVertical}
          </div>
          <div className={cn(styles.body, styles.bodyVertical, styles[size])}>
            {titleEl}
            {descriptionEl}
            {contentEl}
          </div>
        </div>
      );
    }

    // Horizontal
    const connectorBefore = (
      <div
        className={cn(
          styles.connector,
          styles.connectorHorizontal,
          _prevCompleted && styles.connectorCompleted,
          _isFirst && styles.connectorHidden
        )}
      />
    );

    const connectorAfter = (
      <div
        className={cn(
          styles.connector,
          styles.connectorHorizontal,
          status === 'completed' && styles.connectorCompleted,
          _isLast && styles.connectorHidden
        )}
      />
    );

    return (
      <div
        ref={ref}
        className={cn(
          styles.step,
          styles.horizontal,
          status === 'disabled' && styles.disabled,
          className
        )}
        {...rest}
      >
        <div className={styles.indicatorRow}>
          {connectorBefore}
          {indicator}
          {connectorAfter}
        </div>
        <div className={cn(styles.body, styles.bodyHorizontal)}>
          {titleEl}
          {descriptionEl}
          {contentEl}
        </div>
      </div>
    );
  }
);

StepperStep.displayName = 'StepperStep';
