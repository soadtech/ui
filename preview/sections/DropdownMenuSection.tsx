import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuHeader,
  DropdownMenuDivider,
} from 'soadtech-ui';

function DiamondIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2L14 8L8 14L2 8L8 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropdownMenuSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Dropdown Menu
      </h2>

      {/* ─── Menu sizes ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Menu Sizes
        </h3>
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {[3, 5, 7].map((count) => (
            <DropdownMenu key={count}>
              {Array.from({ length: count }, (_, i) => (
                <DropdownMenuItem key={i} icon={<DiamondIcon />}>
                  Option default
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          ))}
        </div>
      </div>

      {/* ─── Item variants ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Item Variants
        </h3>
        <DropdownMenu style={{ maxWidth: 280 }}>
          <DropdownMenuHeader>Header of dropdown</DropdownMenuHeader>
          <DropdownMenuItem icon={<DiamondIcon />}>
            Basic item
          </DropdownMenuItem>
          <DropdownMenuItem icon={<DiamondIcon />} shortcut="⌘F">
            With shortcut
          </DropdownMenuItem>
          <DropdownMenuItem
            icon={<DiamondIcon />}
            suffix={<ChevronRightIcon />}
          >
            With submenu
          </DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuItem icon={<DiamondIcon />}>
            After divider
          </DropdownMenuItem>
          <DropdownMenuItem icon={<DiamondIcon />} disabled>
            Disabled item
          </DropdownMenuItem>
        </DropdownMenu>
      </div>

      {/* ─── States ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          States (hover &amp; focus items to see)
        </h3>
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            alignItems: 'flex-start',
          }}
        >
          <DropdownMenu style={{ maxWidth: 240 }}>
            <DropdownMenuItem icon={<DiamondIcon />}>
              Default
            </DropdownMenuItem>
            <DropdownMenuItem icon={<DiamondIcon />} shortcut="⌘F">
              With shortcut
            </DropdownMenuItem>
            <DropdownMenuItem
              icon={<DiamondIcon />}
              suffix={<ChevronRightIcon />}
            >
              With submenu
            </DropdownMenuItem>
            <DropdownMenuItem icon={<DiamondIcon />} disabled>
              Disabled
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
