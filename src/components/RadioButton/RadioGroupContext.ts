import { createContext, useContext } from 'react';

export interface RadioGroupContextValue {
  disabled: boolean;
  readOnly: boolean;
  name?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroupContext =
  createContext<RadioGroupContextValue | null>(null);

export function useRadioGroup(): RadioGroupContextValue | null {
  return useContext(RadioGroupContext);
}
