import { Rating } from 'soadtech-ui';

const h3Style = {
  fontSize: 'var(--st-font-size-lg)',
  fontWeight: 'var(--st-font-weight-medium)',
  marginBottom: 'var(--st-space-3)',
  color: 'var(--st-color-muted)',
} as const;

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--st-space-8)',
  marginBottom: 'var(--st-space-3)',
} as const;

const labelStyle = {
  width: 80,
  fontSize: 'var(--st-font-size-sm)',
  color: 'var(--st-color-muted)',
  flexShrink: 0,
} as const;

export function RatingSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Rating
      </h2>

      {/* ─── Medium ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3 style={h3Style}>Medium</h3>

        {/* Header */}
        <div style={{ ...rowStyle, marginBottom: 'var(--st-space-2)' }}>
          <span style={labelStyle} />
          <span style={{ ...labelStyle, width: 200, fontWeight: 'var(--st-font-weight-semibold)', color: 'var(--st-color-foreground)' }}>Type 1</span>
          <span style={{ ...labelStyle, width: 200, fontWeight: 'var(--st-font-weight-semibold)', color: 'var(--st-color-foreground)' }}>Type 2</span>
        </div>

        {[
          { label: 'Rating 5', value: 4.9 },
          { label: 'Rating 4', value: 4.5 },
          { label: 'Rating 3', value: 3.5 },
          { label: 'Rating 2', value: 2.5 },
          { label: 'Rating 1', value: 1.5 },
        ].map(({ label, value }) => (
          <div key={label} style={rowStyle}>
            <span style={labelStyle}>{label}</span>
            <div style={{ width: 200 }}>
              <Rating value={value} count={24} variant="type1" />
            </div>
            <div style={{ width: 200 }}>
              <Rating value={value} count={24} variant="type2" />
            </div>
          </div>
        ))}

        <div style={rowStyle}>
          <span style={labelStyle}>Simple</span>
          <div style={{ width: 200 }}>
            <Rating value={4.9} count={24} variant="simple" />
          </div>
        </div>
      </div>

      {/* ─── Small ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3 style={h3Style}>Small</h3>

        {/* Header */}
        <div style={{ ...rowStyle, marginBottom: 'var(--st-space-2)' }}>
          <span style={labelStyle} />
          <span style={{ ...labelStyle, width: 200, fontWeight: 'var(--st-font-weight-semibold)', color: 'var(--st-color-foreground)' }}>Type 1</span>
          <span style={{ ...labelStyle, width: 200, fontWeight: 'var(--st-font-weight-semibold)', color: 'var(--st-color-foreground)' }}>Type 2</span>
        </div>

        {[
          { label: 'Rating 5', value: 4.9 },
          { label: 'Rating 4', value: 4.5 },
          { label: 'Rating 3', value: 3.5 },
          { label: 'Rating 2', value: 2.5 },
          { label: 'Rating 1', value: 1.5 },
        ].map(({ label, value }) => (
          <div key={label} style={rowStyle}>
            <span style={labelStyle}>{label}</span>
            <div style={{ width: 200 }}>
              <Rating value={value} count={24} size="sm" variant="type1" />
            </div>
            <div style={{ width: 200 }}>
              <Rating value={value} count={24} size="sm" variant="type2" />
            </div>
          </div>
        ))}

        <div style={rowStyle}>
          <span style={labelStyle}>Simple</span>
          <div style={{ width: 200 }}>
            <Rating value={4.9} count={24} size="sm" variant="simple" />
          </div>
        </div>
      </div>

      {/* ─── Icon variants ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3 style={h3Style}>Icon variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)' }}>
          <Rating value={4.5} count={24} icon="star" />
          <Rating value={4.5} count={24} icon="heart" />
        </div>
      </div>
    </section>
  );
}
