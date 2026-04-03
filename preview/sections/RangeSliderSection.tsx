import { useState } from 'react';
import { RangeSlider } from 'soadtech-ui';

export function RangeSliderSection() {
  const [val1, setVal1] = useState(215);
  const [val2, setVal2] = useState(100);
  const [range1, setRange1] = useState<[number, number]>([0, 120]);
  const [range2, setRange2] = useState<[number, number]>([50, 130]);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Range Slider
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--st-space-8)',
          maxWidth: 400,
        }}
      >
        <RangeSlider
          label="Label"
          min={0}
          max={500}
          value={val1}
          onValueChange={setVal1}
          showInput
        />

        <RangeSlider
          label="Label"
          min={0}
          max={100}
          value={val2}
          onValueChange={setVal2}
          showInput
          suffix="%"
        />

        <RangeSlider
          label="Label input"
          min={0}
          max={300}
          rangeValue={range1}
          onRangeChange={setRange1}
        />

        <RangeSlider
          label="Label input"
          min={0}
          max={300}
          rangeValue={range2}
          onRangeChange={setRange2}
        />
      </div>
    </section>
  );
}
