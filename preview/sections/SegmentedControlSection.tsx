import { useState } from 'react';
import {
  SegmentedControl,
  SegmentedControlItem,
} from 'soadtech-ui';

function CircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const sizeLabel: Record<string, string> = { lg: 'Large', md: 'Medium', sm: 'Small' };

function SizeBlock({
  size,
  variant = 'button',
}: {
  size: 'lg' | 'md' | 'sm';
  variant?: 'button' | 'tag';
}) {
  const [v2, setV2] = useState('one');
  const [v3, setV3] = useState('one');
  const [v4, setV4] = useState('one');

  return (
    <div style={{ marginBottom: 'var(--st-space-6)' }}>
      <h4
        style={{
          fontSize: 'var(--st-font-size-sm)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-3)',
          color: 'var(--st-color-foreground)',
        }}
      >
        {sizeLabel[size]}
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)' }}>
        {/* Text only */}
        <SegmentedControl size={size} variant={variant} value={v2} onValueChange={setV2}>
          <SegmentedControlItem value="one">First</SegmentedControlItem>
          <SegmentedControlItem value="two">Second</SegmentedControlItem>
        </SegmentedControl>

        {/* Icon + Text */}
        <SegmentedControl size={size} variant={variant} value={v3} onValueChange={setV3}>
          <SegmentedControlItem value="one" icon={<CircleIcon />}>First</SegmentedControlItem>
          <SegmentedControlItem value="two" icon={<CircleIcon />}>Second</SegmentedControlItem>
          <SegmentedControlItem value="three" icon={<CircleIcon />}>Third</SegmentedControlItem>
        </SegmentedControl>

        {/* Icon only */}
        <SegmentedControl size={size} variant={variant} value={v4} onValueChange={setV4}>
          <SegmentedControlItem value="one" icon={<CircleIcon />} />
          <SegmentedControlItem value="two" icon={<CircleIcon />} />
          <SegmentedControlItem value="three" icon={<CircleIcon />} />
          <SegmentedControlItem value="four" icon={<CircleIcon />} />
        </SegmentedControl>
      </div>
    </div>
  );
}

export function SegmentedControlSection() {
  const [controlled, setControlled] = useState('a');

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-bold)',
          marginBottom: 'var(--st-space-1)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Segmented Control
      </h2>
      <p
        style={{
          fontSize: 'var(--st-font-size-sm)',
          color: 'var(--st-color-muted)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Button and tag variants across sizes.
      </p>

      {/* Button variant */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Button Variant
      </h3>
      <SizeBlock size="lg" variant="button" />
      <SizeBlock size="md" variant="button" />
      <SizeBlock size="sm" variant="button" />

      {/* Tag variant */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          marginTop: 'var(--st-space-8)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Tag Variant
      </h3>
      <SizeBlock size="lg" variant="tag" />
      <SizeBlock size="md" variant="tag" />
      <SizeBlock size="sm" variant="tag" />

      {/* Disabled */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          marginTop: 'var(--st-space-8)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Disabled
      </h3>
      <div style={{ display: 'flex', gap: 'var(--st-space-4)', flexWrap: 'wrap' }}>
        <SegmentedControl value="one" disabled>
          <SegmentedControlItem value="one">Active</SegmentedControlItem>
          <SegmentedControlItem value="two">Second</SegmentedControlItem>
          <SegmentedControlItem value="three">Third</SegmentedControlItem>
        </SegmentedControl>

        <SegmentedControl variant="tag" value="one" disabled>
          <SegmentedControlItem value="one">Active</SegmentedControlItem>
          <SegmentedControlItem value="two">Second</SegmentedControlItem>
        </SegmentedControl>
      </div>

      {/* Controlled */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          marginTop: 'var(--st-space-8)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Controlled
      </h3>
      <p
        style={{
          fontSize: 'var(--st-font-size-sm)',
          color: 'var(--st-color-muted)',
          marginBottom: 'var(--st-space-3)',
        }}
      >
        Active: <strong>{controlled}</strong>
      </p>
      <SegmentedControl value={controlled} onValueChange={setControlled}>
        <SegmentedControlItem value="a" icon={<CircleIcon />}>Alpha</SegmentedControlItem>
        <SegmentedControlItem value="b" icon={<CircleIcon />}>Beta</SegmentedControlItem>
        <SegmentedControlItem value="c" icon={<CircleIcon />}>Gamma</SegmentedControlItem>
        <SegmentedControlItem value="d" icon={<CircleIcon />}>Delta</SegmentedControlItem>
        <SegmentedControlItem value="e" icon={<CircleIcon />}>Epsilon</SegmentedControlItem>
      </SegmentedControl>
    </section>
  );
}
