/** Linear interpolation */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Compute nice axis scale — returns array of tick values */
export function niceScale(min: number, max: number, maxTicks = 5): number[] {
  if (min === max) return [min];
  const range = max - min;
  const roughStep = range / (maxTicks - 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const residual = roughStep / magnitude;
  let niceStep: number;
  if (residual <= 1.5) niceStep = magnitude;
  else if (residual <= 3) niceStep = 2 * magnitude;
  else if (residual <= 7) niceStep = 5 * magnitude;
  else niceStep = 10 * magnitude;

  const niceMin = Math.floor(min / niceStep) * niceStep;
  const niceMax = Math.ceil(max / niceStep) * niceStep;
  const ticks: number[] = [];
  for (let v = niceMin; v <= niceMax + niceStep * 0.5; v += niceStep) {
    ticks.push(Math.round(v * 1e10) / 1e10);
  }
  return ticks;
}

/** Convert data points to a smooth SVG path using Catmull-Rom → cubic bezier */
export function smoothPath(
  points: { x: number; y: number }[],
  tension = 0.3
): string {
  if (points.length < 2) return '';
  if (points.length === 2) {
    return `M${points[0].x},${points[0].y}L${points[1].x},${points[1].y}`;
  }

  let d = `M${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const cp1x = p1.x + ((p2.x - p0.x) * tension) / 3;
    const cp1y = p1.y + ((p2.y - p0.y) * tension) / 3;
    const cp2x = p2.x - ((p3.x - p1.x) * tension) / 3;
    const cp2y = p2.y - ((p3.y - p1.y) * tension) / 3;

    d += `C${cp1x},${cp1y},${cp2x},${cp2y},${p2.x},${p2.y}`;
  }

  return d;
}

/** Create area path by closing a line path to the bottom */
export function areaPath(
  linePath: string,
  bottomY: number,
  startX: number,
  endX: number
): string {
  return `${linePath}L${endX},${bottomY}L${startX},${bottomY}Z`;
}

/** Create a donut arc path segment */
export function donutArc(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
): string {
  const gap = 0.02; // small gap between segments
  const sa = startAngle + gap;
  const ea = endAngle - gap;
  if (ea <= sa) return '';

  const cos = Math.cos;
  const sin = Math.sin;

  const ox1 = cx + outerR * cos(sa);
  const oy1 = cy + outerR * sin(sa);
  const ox2 = cx + outerR * cos(ea);
  const oy2 = cy + outerR * sin(ea);
  const ix1 = cx + innerR * cos(ea);
  const iy1 = cy + innerR * sin(ea);
  const ix2 = cx + innerR * cos(sa);
  const iy2 = cy + innerR * sin(sa);

  const largeArc = ea - sa > Math.PI ? 1 : 0;

  return [
    `M${ox1},${oy1}`,
    `A${outerR},${outerR},0,${largeArc},1,${ox2},${oy2}`,
    `L${ix1},${iy1}`,
    `A${innerR},${innerR},0,${largeArc},0,${ix2},${iy2}`,
    'Z',
  ].join('');
}

/** Normalize segment values to fractions summing to 1 */
export function normalizeSegments(values: number[]): number[] {
  const total = values.reduce((s, v) => s + v, 0);
  if (total === 0) return values.map(() => 0);
  return values.map((v) => v / total);
}

/** Create a bar path with only top corners rounded */
export function roundedBarPath(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): string {
  if (height <= 0) return '';
  const r = Math.min(radius, width / 2, height);
  const bottom = y + height;
  return [
    `M${x},${bottom}`,
    `L${x},${y + r}`,
    `A${r},${r},0,0,1,${x + r},${y}`,
    `L${x + width - r},${y}`,
    `A${r},${r},0,0,1,${x + width},${y + r}`,
    `L${x + width},${bottom}`,
    'Z',
  ].join('');
}
