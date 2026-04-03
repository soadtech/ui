import { NavbarUser, Badge } from 'soadtech-ui';

/* ─── Sample action icons (inline SVGs) ─── */

function SearchActionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.04164 9.16664C1.04164 4.67933 4.67933 1.04164 9.16664 1.04164C13.654 1.04164 17.2916 4.67933 17.2916 9.16664C17.2916 11.1853 16.5555 13.0321 15.3369 14.4531L18.775 17.8912C19.0193 18.1355 19.0193 18.5312 18.775 18.7755C18.5307 19.0198 18.135 19.0198 17.8907 18.7755L14.4526 15.3374C13.0317 16.5559 11.1849 17.2916 9.16664 17.2916C4.67933 17.2916 1.04164 13.654 1.04164 9.16664ZM9.16664 2.29164C5.36969 2.29164 2.29164 5.36969 2.29164 9.16664C2.29164 12.9636 5.36969 15.7916 9.16664 15.7916C12.9636 15.7916 15.7916 12.9636 15.7916 9.16664C15.7916 5.36969 12.9636 2.29164 9.16664 2.29164Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BellActionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.02 20.53C9.69 20.53 7.36 20.16 5.15 19.42C4.31 19.13 3.67 18.54 3.39 17.77C3.1 17 3.2 16.15 3.66 15.39L4.81 13.48C5.05 13.08 5.27 12.28 5.27 11.81V8.92C5.27 5.2 8.3 2.17 12.02 2.17C15.74 2.17 18.77 5.2 18.77 8.92V11.81C18.77 12.27 18.99 13.08 19.23 13.49L20.37 15.39C20.8 16.11 20.88 16.98 20.59 17.77C20.3 18.56 19.67 19.16 18.88 19.42C16.68 20.16 14.35 20.53 12.02 20.53ZM12.02 3.67C9.13 3.67 6.77 6.02 6.77 8.92V11.81C6.77 12.54 6.47 13.62 6.1 14.25L4.95 16.16C4.73 16.53 4.67 16.92 4.8 17.25C4.92 17.59 5.22 17.85 5.63 17.99C9.81 19.39 14.24 19.39 18.42 17.99C18.78 17.87 19.06 17.6 19.19 17.24C19.32 16.88 19.29 16.49 19.09 16.16L17.94 14.25C17.56 13.6 17.27 12.53 17.27 11.8V8.92C17.27 6.02 14.92 3.67 12.02 3.67Z"
        fill="currentColor"
      />
      <path
        d="M13.88 3.94C13.81 3.94 13.74 3.93 13.67 3.91C13.38 3.83 13.1 3.77 12.83 3.73C11.98 3.62 11.16 3.68 10.39 3.91C10.11 4 9.81 3.91 9.62 3.7C9.43 3.49 9.37 3.19 9.48 2.92C9.89 1.87 10.89 1.18 12.03 1.18C13.17 1.18 14.17 1.86 14.58 2.92C14.68 3.19 14.63 3.49 14.44 3.7C14.29 3.86 14.08 3.94 13.88 3.94Z"
        fill="currentColor"
      />
      <path
        d="M12.02 22.81C11.03 22.81 10.07 22.41 9.37 21.71C8.67 21.01 8.27 20.05 8.27 19.06H9.77C9.77 19.65 10.01 20.23 10.43 20.65C10.85 21.07 11.43 21.31 12.02 21.31C13.26 21.31 14.27 20.3 14.27 19.06H15.77C15.77 21.13 14.09 22.81 12.02 22.81Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EnvelopeActionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
        fill="currentColor"
      />
      <path
        d="M12 12.87C11.16 12.87 10.31 12.61 9.66 12.08L6.53 9.58C6.21 9.32 6.15 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.46 9.58L14.33 12.08C13.69 12.61 12.84 12.87 12 12.87Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ActionIconButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        padding: 0,
        border: 'none',
        borderRadius: 'var(--st-radius-md)',
        background: 'transparent',
        color: 'var(--st-color-muted)',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

function SampleLogo() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 'var(--st-radius-full)',
        background: 'var(--st-color-info)',
        flexShrink: 0,
      }}
    />
  );
}

const sampleUser = {
  name: 'William Donat',
  username: 'willydonat',
  verified: true,
};

const sampleActions = (
  <>
    <ActionIconButton label="Search">
      <SearchActionIcon />
    </ActionIconButton>
    <Badge dot size="sm" variant="primary">
      <ActionIconButton label="Notifications">
        <BellActionIcon />
      </ActionIconButton>
    </Badge>
    <ActionIconButton label="Messages">
      <EnvelopeActionIcon />
    </ActionIconButton>
  </>
);

export function NavbarUserSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        NavbarUser
      </h2>

      {/* ─── Level 1 Desktop ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Level 1 — Desktop
        </h3>
        <div
          style={{
            border: '1px solid var(--st-color-neutral-200)',
            borderRadius: 'var(--st-radius-lg)',
            overflow: 'hidden',
          }}
        >
          <NavbarUser
            title="Dashboard"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            actions={sampleActions}
            user={sampleUser}
            onUserClick={() => {}}
            logo={<SampleLogo />}
            onMenuClick={() => {}}
          />
        </div>
      </div>

      {/* ─── Level 2 Desktop ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Level 2 — Desktop (with back)
        </h3>
        <div
          style={{
            border: '1px solid var(--st-color-neutral-200)',
            borderRadius: 'var(--st-radius-lg)',
            overflow: 'hidden',
          }}
        >
          <NavbarUser
            title="Project Settings"
            subtitle="Configure your project preferences"
            onBack={() => {}}
            actions={sampleActions}
            user={sampleUser}
            onUserClick={() => {}}
            logo={<SampleLogo />}
            onMenuClick={() => {}}
          />
        </div>
      </div>

      {/* ─── Level 1 Mobile (narrow container) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Level 1 — Mobile (resize browser below 768px)
        </h3>
        <p
          style={{
            fontSize: 'var(--st-font-size-sm)',
            color: 'var(--st-color-muted)',
            marginBottom: 'var(--st-space-2)',
          }}
        >
          Narrow your browser window to see the mobile layout with logo +
          hamburger, avatar-only user, and title on second row.
        </p>
        <div
          style={{
            border: '1px solid var(--st-color-neutral-200)',
            borderRadius: 'var(--st-radius-lg)',
            overflow: 'hidden',
          }}
        >
          <NavbarUser
            title="Dashboard"
            subtitle="Lorem ipsum dolor sit amet"
            actions={sampleActions}
            user={sampleUser}
            onUserClick={() => {}}
            logo={<SampleLogo />}
            onMenuClick={() => {}}
          />
        </div>
      </div>

      {/* ─── Level 2 Mobile ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Level 2 — Mobile (resize below 768px)
        </h3>
        <p
          style={{
            fontSize: 'var(--st-font-size-sm)',
            color: 'var(--st-color-muted)',
            marginBottom: 'var(--st-space-2)',
          }}
        >
          On mobile, Level 2 shows only back + title + close.
        </p>
        <div
          style={{
            border: '1px solid var(--st-color-neutral-200)',
            borderRadius: 'var(--st-radius-lg)',
            overflow: 'hidden',
          }}
        >
          <NavbarUser
            title="Project Settings"
            onBack={() => {}}
            onClose={() => {}}
            actions={sampleActions}
            user={sampleUser}
            onUserClick={() => {}}
            logo={<SampleLogo />}
            onMenuClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
