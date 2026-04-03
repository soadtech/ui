import { useState } from 'react';
import { Pagination, PaginationDots } from 'soadtech-ui';
import type { PaginationSize, PaginationVariant } from 'soadtech-ui';

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

const sizes: PaginationSize[] = ['sm', 'md'];
const variants: PaginationVariant[] = ['text', 'spaced', 'congested'];

export function PaginationSection() {
  const [pages, setPages] = useState<Record<string, number>>({});

  const getPage = (key: string) => pages[key] ?? 3;
  const setPage = (key: string, value: number) =>
    setPages((prev) => ({ ...prev, [key]: value }));

  const [dotIndex, setDotIndex] = useState(1);
  const [tabIndex, setTabIndex] = useState(2);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Pagination
      </h2>

      {/* Size x Variant matrix */}
      {sizes.map((size) => (
        <div key={size} style={{ marginBottom: 'var(--st-space-8)' }}>
          {heading(`Size: ${size}`)}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--st-space-4)',
            }}
          >
            {variants.map((variant) => {
              const key = `${size}-${variant}`;
              return (
                <div key={variant}>
                  <div
                    style={{
                      fontSize: 'var(--st-font-size-sm)',
                      color: 'var(--st-color-muted)',
                      marginBottom: 'var(--st-space-2)',
                    }}
                  >
                    {variant}
                  </div>
                  <Pagination
                    page={getPage(key)}
                    count={10}
                    onPageChange={(p) => setPage(key, p)}
                    size={size}
                    variant={variant}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Disabled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Disabled')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-4)',
          }}
        >
          {variants.map((variant) => (
            <Pagination
              key={variant}
              page={3}
              count={10}
              onPageChange={() => {}}
              variant={variant}
              disabled
            />
          ))}
        </div>
      </div>

      {/* PaginationDots */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('PaginationDots — dot')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-3)',
          }}
        >
          {[2, 3, 4, 5, 6].map((count) => (
            <PaginationDots
              key={count}
              count={count}
              activeIndex={dotIndex % count}
              onIndexChange={setDotIndex}
            />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('PaginationDots — tab')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-3)',
          }}
        >
          {[2, 3, 4, 5, 6].map((count) => (
            <PaginationDots
              key={count}
              count={count}
              activeIndex={tabIndex % count}
              onIndexChange={setTabIndex}
              variant="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
