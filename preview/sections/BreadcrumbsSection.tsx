import { Breadcrumbs, BreadcrumbItem } from 'soadtech-ui';

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1.75 7L7 2.33L12.25 7M3.5 5.83V11.08C3.5 11.4 3.77 11.67 4.08 11.67H5.83V9.33H8.17V11.67H9.92C10.24 11.67 10.5 11.4 10.5 11.08V5.83"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const pages = ['Home', 'Projects', 'Analytics', 'Settings', 'Privacy', 'Edit'];

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

export function BreadcrumbsSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Breadcrumbs
      </h2>

      {/* ─── Icon with text ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Icon with text')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {[6, 5, 4, 3, 2, 1].map((count) => (
            <Breadcrumbs key={count} maxItems={5}>
              {pages.slice(0, count).map((page, i) => (
                <BreadcrumbItem
                  key={page + i}
                  href={i < count - 1 ? '#' : undefined}
                  icon={<HomeIcon />}
                >
                  {page}
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
          ))}
        </div>
      </div>

      {/* ─── Text only ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Text only')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {[6, 5, 4, 3, 2].map((count) => (
            <Breadcrumbs key={count} maxItems={5}>
              {pages.slice(0, count).map((page, i) => (
                <BreadcrumbItem
                  key={page + i}
                  href={i < count - 1 ? '#' : undefined}
                >
                  {page}
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
          ))}
        </div>
      </div>

      {/* ─── Icon only ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Icon only')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
          {[6, 5, 4, 3, 2].map((count) => (
            <Breadcrumbs key={count} maxItems={5}>
              {pages.slice(0, count).map((_, i) => (
                <BreadcrumbItem
                  key={i}
                  href={i < count - 1 ? '#' : undefined}
                  icon={<HomeIcon />}
                />
              ))}
            </Breadcrumbs>
          ))}
        </div>
      </div>

      {/* ─── Separator: Slash ─── */}
      <div>
        {heading('Slash separator')}
        <Breadcrumbs separator="slash">
          <BreadcrumbItem href="#" icon={<HomeIcon />}>Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>Analytics</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </section>
  );
}
