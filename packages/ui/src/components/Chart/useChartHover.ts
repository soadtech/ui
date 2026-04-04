import { useState, useCallback, type ReactNode } from 'react';

export interface HoverState {
  visible: boolean;
  x: number;
  y: number;
  content: ReactNode;
}

const INITIAL: HoverState = { visible: false, x: 0, y: 0, content: null };

export function useChartHover() {
  const [hover, setHover] = useState<HoverState>(INITIAL);

  const show = useCallback(
    (x: number, y: number, content: ReactNode) =>
      setHover({ visible: true, x, y, content }),
    []
  );

  const hide = useCallback(() => setHover(INITIAL), []);

  return { hover, show, hide } as const;
}
