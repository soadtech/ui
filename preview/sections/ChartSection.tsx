import { useState } from 'react';
import {
  BarChart,
  LineChart,
  DonutChart,
  ProgressChart,
  GridChart,
  TrendLineChart,
  KPIIndicator,
  LegendLabel,
  LegendGroup,
  ChartAction,
  ChartTooltip,
  TrendBadge,
} from 'soadtech-ui';

const barData = [
  { label: 'Mon', value: 400 },
  { label: 'Tue', value: 600 },
  { label: 'Wed', value: 350 },
  { label: 'Thu', value: 800 },
  { label: 'Fri', value: 650 },
  { label: 'Sat', value: 500 },
  { label: 'Sun', value: 700 },
];

const barCompareData = [
  { label: 'Mon', value: 400, compareValue: 300 },
  { label: 'Tue', value: 600, compareValue: 450 },
  { label: 'Wed', value: 350, compareValue: 500 },
  { label: 'Thu', value: 800, compareValue: 600 },
  { label: 'Fri', value: 650, compareValue: 700 },
  { label: 'Sat', value: 500, compareValue: 400 },
  { label: 'Sun', value: 700, compareValue: 550 },
];

const lineData = [
  { label: 'Jan', value: 200 },
  { label: 'Feb', value: 450 },
  { label: 'Mar', value: 380 },
  { label: 'Apr', value: 600 },
  { label: 'May', value: 520 },
  { label: 'Jun', value: 750 },
];

const lineCompareData = [
  { label: 'Jan', value: 200, compareValue: 300 },
  { label: 'Feb', value: 450, compareValue: 350 },
  { label: 'Mar', value: 380, compareValue: 420 },
  { label: 'Apr', value: 600, compareValue: 480 },
  { label: 'May', value: 520, compareValue: 550 },
  { label: 'Jun', value: 750, compareValue: 600 },
];

const donutSegments = [
  { value: 45, label: 'Direct' },
  { value: 30, label: 'Organic' },
  { value: 15, label: 'Referral' },
  { value: 10, label: 'Social' },
];

const sparkData = [3, 5, 4, 7, 6, 8, 7, 9, 8, 10, 9, 12];

const gridData = [
  [1, 3, 5, 2, 4],
  [2, 5, 1, 4, 3],
  [4, 2, 3, 5, 1],
  [3, 4, 2, 1, 5],
  [5, 1, 4, 3, 2],
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

export function ChartSection() {
  const [activeTab, setActiveTab] = useState('weekly');

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Charts
      </h2>

      {/* ─── Bar Chart ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Bar Chart')}
        <div style={{ maxWidth: 500 }}>
          <BarChart data={barData} height={200} />
        </div>
      </div>

      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Bar Chart — Comparison')}
        <div style={{ maxWidth: 500 }}>
          <BarChart
            data={barCompareData}
            comparison
            height={200}
            legend={
              <LegendGroup>
                <LegendLabel label="This week" colorIndex={1} />
                <LegendLabel label="Last week" colorIndex={2} />
              </LegendGroup>
            }
          />
        </div>
      </div>

      {/* ─── Line Chart ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Line Chart')}
        <div style={{ maxWidth: 500 }}>
          <LineChart data={lineData} height={200} />
        </div>
      </div>

      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Line Chart — Comparison')}
        <div style={{ maxWidth: 500 }}>
          <LineChart
            data={lineCompareData}
            comparison
            height={200}
            legend={
              <LegendGroup>
                <LegendLabel label="Revenue" colorIndex={1} variant="line" />
                <LegendLabel label="Expenses" colorIndex={2} variant="line" />
              </LegendGroup>
            }
          />
        </div>
      </div>

      {/* ─── Donut Chart ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Donut Chart')}
        <div style={{ display: 'flex', gap: 'var(--st-space-8)', alignItems: 'center' }}>
          <DonutChart
            segments={donutSegments}
            centerLabel={
              <div>
                <div style={{ fontSize: 'var(--st-font-size-2xl)', fontWeight: 700 }}>
                  89%
                </div>
                <div style={{ fontSize: 'var(--st-font-size-xs)', opacity: 0.6 }}>
                  Total
                </div>
              </div>
            }
          />
          <DonutChart
            segments={donutSegments}
            dark
            centerLabel={
              <div>
                <div style={{ fontSize: 'var(--st-font-size-2xl)', fontWeight: 700 }}>
                  89%
                </div>
                <div style={{ fontSize: 'var(--st-font-size-xs)', opacity: 0.6 }}>
                  Total
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* ─── Progress Chart ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Progress Chart')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)', maxWidth: 400 }}>
          <ProgressChart
            segments={[{ value: 50 }, { value: 30 }, { value: 15 }, { value: 5 }]}
            color="primary"
          />
          <ProgressChart
            segments={[{ value: 60 }, { value: 25 }, { value: 10 }, { value: 5 }]}
            color="secondary"
          />
          <ProgressChart
            segments={[{ value: 70 }, { value: 30 }]}
            color="primary"
            barHeight={12}
            radius={6}
          />
        </div>
      </div>

      {/* ─── Grid Chart ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Grid Chart')}
        <div style={{ display: 'flex', gap: 'var(--st-space-8)' }}>
          <GridChart data={gridData} color="primary" />
          <GridChart data={gridData} color="secondary" />
          <GridChart data={gridData} color="neutral" />
        </div>
      </div>

      {/* ─── Trend Line Chart ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Trend Line Chart')}
        <div style={{ display: 'flex', gap: 'var(--st-space-6)', alignItems: 'center' }}>
          <TrendLineChart data={sparkData} color="primary" />
          <TrendLineChart data={sparkData} color="secondary" />
          <TrendLineChart data={sparkData} color="primary" showDots />
          <TrendLineChart data={sparkData} color="primary" areaFill={false} />
        </div>
      </div>

      {/* ─── KPI Indicator ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('KPI Indicator')}
        <div style={{ display: 'flex', gap: 'var(--st-space-8)', alignItems: 'flex-start' }}>
          <KPIIndicator
            value="2,450"
            label="Total Users"
            trend={<TrendBadge value="12%" direction="up" />}
            description="vs last month"
            size="lg"
          />
          <KPIIndicator
            value="$12.5k"
            label="Revenue"
            trend={<TrendBadge value="8%" direction="up" />}
            description="vs last month"
          />
          <KPIIndicator
            value="348"
            label="Orders"
            trend={<TrendBadge value="3%" direction="down" />}
            size="sm"
          />
        </div>
      </div>

      {/* ─── Legend ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Legend Label / Group')}
        <LegendGroup>
          <LegendLabel label="Direct" colorIndex={1} />
          <LegendLabel label="Organic" colorIndex={2} />
          <LegendLabel label="Referral" colorIndex={3} />
          <LegendLabel label="Social" colorIndex={4} />
        </LegendGroup>
        <div style={{ marginTop: 'var(--st-space-3)' }}>
          <LegendGroup>
            <LegendLabel label="Revenue" colorIndex={1} variant="line" />
            <LegendLabel label="Expenses" colorIndex={2} variant="line" />
          </LegendGroup>
        </div>
      </div>

      {/* ─── Chart Action ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Chart Action')}
        <div style={{ maxWidth: 500 }}>
          <ChartAction
            tabs={[
              { label: 'Weekly', value: 'weekly' },
              { label: 'Monthly', value: 'monthly' },
              { label: 'Yearly', value: 'yearly' },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            actions={
              <button
                type="button"
                style={{
                  border: '1px solid var(--st-color-border)',
                  borderRadius: 'var(--st-radius-md)',
                  padding: '4px 8px',
                  background: 'var(--st-color-surface)',
                  cursor: 'pointer',
                  fontSize: 'var(--st-font-size-sm)',
                }}
              >
                Export
              </button>
            }
          />
        </div>
      </div>

      {/* ─── Chart Tooltip ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Chart Tooltip')}
        <div style={{ display: 'flex', gap: 'var(--st-space-6)', alignItems: 'flex-start' }}>
          <ChartTooltip
            variant="simple"
            items={[{ label: 'Revenue', value: '$1,234' }]}
          />
          <ChartTooltip
            variant="detailed"
            items={[
              { label: 'Revenue', value: '$1,234', colorIndex: 1 },
              { label: 'Expenses', value: '$890', colorIndex: 2 },
            ]}
          />
          <ChartTooltip
            variant="multi"
            items={[
              { label: 'Direct', value: '45%', colorIndex: 1 },
              { label: 'Organic', value: '30%', colorIndex: 2 },
              { label: 'Referral', value: '15%', colorIndex: 3 },
              { label: 'Social', value: '10%', colorIndex: 4 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
