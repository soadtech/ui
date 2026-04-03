import { Divider } from 'soadtech-ui';

export function DividerSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Divider
      </h2>

      {/* ─── Horizontal ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Horizontal
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-6)',
            maxWidth: 480,
          }}
        >
          <Divider />
          <Divider />
          <Divider />
          <Divider />
        </div>
      </div>

      {/* ─── Vertical ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Vertical
        </h3>
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            height: 120,
          }}
        >
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
        </div>
      </div>
    </section>
  );
}
