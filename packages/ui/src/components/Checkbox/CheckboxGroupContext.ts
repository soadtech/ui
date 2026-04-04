import { createContext, useContext } from 'react';

export interface CheckboxGroupContextValue {
  disabled: boolean;
  readOnly: boolean;
}

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextValue | null>(null);

export function useCheckboxGroup(): CheckboxGroupContextValue | null {
  return useContext(CheckboxGroupContext);
}
