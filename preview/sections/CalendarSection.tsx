import { useState } from 'react';
import { Calendar, CalendarDialog } from 'soadtech-ui';
import type { DateRange } from 'soadtech-ui';

const eventDates = [
  new Date(2026, 3, 5),
  new Date(2026, 3, 12),
  new Date(2026, 3, 18),
  new Date(2026, 3, 25),
];

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

export function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [basicResult, setBasicResult] = useState('');
  const [rangeResult, setRangeResult] = useState('');

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Calendar
      </h2>

      {/* Standalone */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Standalone')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            alignItems: 'start',
          }}
        >
          <Calendar
            value={selectedDate}
            onDateSelect={setSelectedDate}
            events={eventDates}
          />
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
            }}
          >
            Selected:{' '}
            {selectedDate ? selectedDate.toLocaleDateString() : 'None'}
          </p>
        </div>
      </div>

      {/* Header Alignments */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Header Alignment')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-8)',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-2)',
              }}
            >
              Left
            </p>
            <Calendar headerAlign="left" />
          </div>
          <div>
            <p
              style={{
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-2)',
              }}
            >
              Center (default)
            </p>
            <Calendar headerAlign="center" />
          </div>
          <div>
            <p
              style={{
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-2)',
              }}
            >
              Right
            </p>
            <Calendar headerAlign="right" />
          </div>
        </div>
      </div>

      {/* Dialog — Basic */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Dialog — Basic')}
        <CalendarDialog
          mode="basic"
          onCancel={() => setBasicResult('Cancelled')}
          onDone={(val) =>
            setBasicResult(
              val ? (val as Date).toLocaleDateString() : ''
            )
          }
        />
        {basicResult && (
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginTop: 'var(--st-space-2)',
            }}
          >
            Result: {basicResult}
          </p>
        )}
      </div>

      {/* Dialog — Date Range */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Dialog — Date Range')}
        <CalendarDialog
          mode="range"
          onCancel={() => setRangeResult('Cancelled')}
          onDone={(val) => {
            if (val && !(val instanceof Date)) {
              const r = val as DateRange;
              setRangeResult(
                `${r.start.toLocaleDateString()} – ${r.end.toLocaleDateString()}`
              );
            }
          }}
        />
        {rangeResult && (
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginTop: 'var(--st-space-2)',
            }}
          >
            Result: {rangeResult}
          </p>
        )}
      </div>
    </section>
  );
}
