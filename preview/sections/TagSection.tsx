import { Tag, TagStatus, TagBrand } from 'soadtech-ui';
import type { TagColor, TagSize, TagStatusType, TagBrandColor } from 'soadtech-ui';

const tagColors: TagColor[] = ['brand', 'neutral', 'inverse', 'info', 'success', 'warning', 'error'];
const tagSizes: TagSize[] = ['lg', 'md', 'sm'];
const statuses: TagStatusType[] = ['active', 'archived', 'scheduled', 'draft', 'new'];
const brandColors: TagBrandColor[] = ['primary', 'secondary', 'tertiary'];

function DiamondIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6 1l4 5-4 5-4-5 4-5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export function TagSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Tag
      </h2>

      {/* ─── Tag — Filled ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Tag — Filled')}
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          {tagColors.map((color) => (
            <Tag key={color} variant="filled" color={color} size="lg" icon={<DiamondIcon />}>
              {color}
            </Tag>
          ))}
        </div>
      </div>

      {/* ─── Tag — Stroke ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Tag — Stroke')}
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          {tagColors.map((color) => (
            <Tag key={color} variant="stroke" color={color} size="lg" icon={<DiamondIcon />}>
              {color}
            </Tag>
          ))}
        </div>
      </div>

      {/* ─── Tag — Sizes ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Tag — Sizes')}
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          {tagSizes.map((size) => (
            <Tag key={size} color="brand" size={size} icon={<DiamondIcon />}>
              {size}
            </Tag>
          ))}
        </div>
      </div>

      {/* ─── TagStatus — Stroke ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('TagStatus — Stroke')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {(['lg', 'md'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ width: 24, fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>{size}</span>
              {statuses.map((status) => (
                <TagStatus key={status} status={status} variant="stroke" size={size} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── TagStatus — Filled ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('TagStatus — Filled')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {(['lg', 'md'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ width: 24, fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>{size}</span>
              {statuses.map((status) => (
                <TagStatus key={status} status={status} variant="filled" size={size} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── TagBrand — Default ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('TagBrand — Default')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {tagSizes.map((size) => (
            <div key={size} style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ width: 24, fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>{size}</span>
              {brandColors.map((color) => (
                <TagBrand key={color} variant="default" color={color} size={size} icon={<DiamondIcon />}>
                  {color}
                </TagBrand>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── TagBrand — Inverse ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('TagBrand — Inverse')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {tagSizes.map((size) => (
            <div key={size} style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ width: 24, fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>{size}</span>
              {brandColors.map((color) => (
                <TagBrand key={color} variant="inverse" color={color} size={size} icon={<DiamondIcon />}>
                  {color}
                </TagBrand>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
