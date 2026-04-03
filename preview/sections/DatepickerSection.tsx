import { useState } from 'react';
import { Datepicker } from 'soadtech-ui';
import type { DateRange } from 'soadtech-ui';

function heading(text: string) {
  return (
    <h3
      style={{
        fontSize: 'var(--st-font-size-lg)',
        fontWeight: 'var(--st-font-weight-medium)',
        marginBottom: 'var(--st-space-3)',
        color: 'var(--st-color-muted)',
      }}
    >
      {text}
    </h3>
  );
}

export function DatepickerSection() {
  const [singleDate, setSingleDate] = useState<Date | null>(null);
  const [rangeVal, setRangeVal] = useState<DateRange | null>(null);

  const filledDate = new Date(2026, 3, 15);
  const filledRange: DateRange = {
    start: new Date(2026, 3, 10),
    end: new Date(2026, 3, 20),
  };

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Datepicker
      </h2>

      {/* Single — Large */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Single — Large')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <Datepicker
            label="Date"
            helperText="Helper text to complete the field"
            value={singleDate}
            onChange={setSingleDate}
          />
          <Datepicker
            label="Date (Filled)"
            helperText="Helper text to complete the field"
            value={filledDate}
            onChange={() => {}}
          />
          <Datepicker
            label="Date (Disabled)"
            helperText="Helper text to complete the field"
            disabled
          />
          <Datepicker
            label="Date (Error)"
            error="This field is required"
          />
        </div>
      </div>

      {/* Single — Medium */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Single — Medium')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <Datepicker
            size="md"
            label="Date"
            helperText="Helper text to complete the field"
          />
          <Datepicker
            size="md"
            label="Date (Filled)"
            helperText="Helper text to complete the field"
            value={filledDate}
            onChange={() => {}}
          />
          <Datepicker
            size="md"
            label="Date (Disabled)"
            helperText="Helper text to complete the field"
            disabled
          />
          <Datepicker
            size="md"
            label="Date (Error)"
            error="This field is required"
          />
        </div>
      </div>

      {/* Range — Large */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Range — Large')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <Datepicker
            range
            helperText="Helper text to complete the field"
            rangeValue={rangeVal}
            onRangeChange={setRangeVal}
          />
          <Datepicker
            range
            helperText="Helper text to complete the field"
            rangeValue={filledRange}
            onRangeChange={() => {}}
          />
          <Datepicker
            range
            helperText="Helper text to complete the field"
            disabled
          />
          <Datepicker
            range
            error="Please select a valid range"
          />
        </div>
      </div>

      {/* Range — Medium */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Range — Medium')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <Datepicker
            range
            size="md"
            helperText="Helper text to complete the field"
          />
          <Datepicker
            range
            size="md"
            helperText="Helper text to complete the field"
            rangeValue={filledRange}
            onRangeChange={() => {}}
          />
          <Datepicker
            range
            size="md"
            helperText="Helper text to complete the field"
            disabled
          />
          <Datepicker
            range
            size="md"
            error="Please select a valid range"
          />
        </div>
      </div>
    </section>
  );
}
