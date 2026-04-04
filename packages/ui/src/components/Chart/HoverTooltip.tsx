import type { HoverState } from './useChartHover';
import styles from './HoverTooltip.module.css';

interface HoverTooltipProps {
  hover: HoverState;
}

export function HoverTooltip({ hover }: HoverTooltipProps) {
  if (!hover.visible) return null;

  return (
    <div
      className={styles.root}
      style={{
        left: hover.x,
        top: hover.y,
      }}
    >
      {hover.content}
    </div>
  );
}
