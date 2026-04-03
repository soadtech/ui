import { Avatar, AvatarGroup } from 'soadtech-ui';
import type { AvatarSize, AvatarGroupSpacing } from 'soadtech-ui';

const sizes: AvatarSize[] = ['xl', 'lg', 'md', 'sm'];
const photoUrl = 'https://i.pravatar.cc/128?img=33';

const photos = [3, 5, 11, 15, 22, 33, 40, 42, 47, 51, 53, 57];

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

export function AvatarSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Avatar
      </h2>

      {/* ─── Image ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        {heading('Image')}
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Avatar key={size} src={photoUrl} alt="User" size={size} status />
          ))}
        </div>
      </div>

      {/* ─── Initials ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        {heading('Initials')}
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Avatar key={size} initials="BD" size={size} status />
          ))}
        </div>
      </div>

      {/* ─── Icon (default) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Icon')}
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Avatar key={size} size={size} status />
          ))}
        </div>
      </div>

      {/* ═══ Avatar Group ═══ */}
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Avatar Group
      </h2>

      {(['overlap', 'spaced'] as AvatarGroupSpacing[]).map((spacing) => (
        <div key={spacing} style={{ marginBottom: 'var(--st-space-8)' }}>
          {heading(spacing === 'overlap' ? 'Overlap' : 'Spaced')}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--st-space-4)',
            }}
          >
            {sizes.map((size) => (
              <AvatarGroup key={size} size={size} spacing={spacing} limit={5}>
                {photos.map((id) => (
                  <Avatar
                    key={id}
                    src={`https://i.pravatar.cc/128?img=${id}`}
                    alt="User"
                  />
                ))}
              </AvatarGroup>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
