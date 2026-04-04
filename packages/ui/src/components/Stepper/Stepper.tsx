import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '../../utils/cn';
import { StepperContext } from './StepperContext';
import type { StepperProps, StepperStepProps } from './Stepper.types';
import styles from './Stepper.module.css';

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      orientation = 'vertical',
      size = 'md',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const childArray = Children.toArray(children).filter(isValidElement);

    const enhanced = childArray.map((child, index) => {
      const prevChild = childArray[index - 1] as
        | React.ReactElement<StepperStepProps>
        | undefined;

      return cloneElement(child as React.ReactElement, {
        _step: index + 1,
        _isFirst: index === 0,
        _isLast: index === childArray.length - 1,
        _prevCompleted: prevChild?.props?.status === 'completed',
      });
    });

    return (
      <StepperContext.Provider value={{ orientation, size }}>
        <div
          ref={ref}
          className={cn(styles.root, styles[orientation], className)}
          {...rest}
        >
          {enhanced}
        </div>
      </StepperContext.Provider>
    );
  }
);

Stepper.displayName = 'Stepper';
