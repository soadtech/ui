import { createContext, useContext } from 'react';
import type { StepperOrientation, StepperSize } from './Stepper.types';

export interface StepperContextValue {
  orientation: StepperOrientation;
  size: StepperSize;
}

export const StepperContext = createContext<StepperContextValue | null>(null);

export function useStepper(): StepperContextValue {
  const ctx = useContext(StepperContext);
  if (!ctx) {
    throw new Error('StepperStep must be used within a Stepper');
  }
  return ctx;
}
