import { createContext, useContext } from 'react';

export interface DialogContextValue {
  onClose: () => void;
}

export const DialogContext = createContext<DialogContextValue | null>(null);

export function useDialog(): DialogContextValue | null {
  return useContext(DialogContext);
}
