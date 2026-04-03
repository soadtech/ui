import { TreeviewList, TreeviewItem } from 'soadtech-ui';

export function TreeviewListSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        TreeviewList
      </h2>

      {/* ─── Default ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Default
        </h3>
        <div style={{ maxWidth: 320 }}>
          <TreeviewList>
            <TreeviewItem label="src" defaultExpanded>
              <TreeviewItem label="components" defaultExpanded>
                <TreeviewItem label="Button.tsx" />
                <TreeviewItem label="Input.tsx" />
                <TreeviewItem label="Dialog.tsx" />
              </TreeviewItem>
              <TreeviewItem label="utils">
                <TreeviewItem label="cn.ts" />
                <TreeviewItem label="format.ts" />
              </TreeviewItem>
              <TreeviewItem label="index.ts" />
            </TreeviewItem>
            <TreeviewItem label="public">
              <TreeviewItem label="favicon.ico" />
              <TreeviewItem label="index.html" />
            </TreeviewItem>
            <TreeviewItem label="package.json" />
            <TreeviewItem label="tsconfig.json" />
          </TreeviewList>
        </div>
      </div>

      {/* ─── Selected ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Selected
        </h3>
        <div style={{ maxWidth: 320 }}>
          <TreeviewList>
            <TreeviewItem label="src" defaultExpanded>
              <TreeviewItem label="components" defaultExpanded>
                <TreeviewItem label="Button.tsx" selected />
                <TreeviewItem label="Input.tsx" />
              </TreeviewItem>
              <TreeviewItem label="index.ts" />
            </TreeviewItem>
            <TreeviewItem label="README.md" />
          </TreeviewList>
        </div>
      </div>

      {/* ─── Disabled ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Disabled
        </h3>
        <div style={{ maxWidth: 320 }}>
          <TreeviewList>
            <TreeviewItem label="src" defaultExpanded>
              <TreeviewItem label="components" disabled>
                <TreeviewItem label="Button.tsx" />
                <TreeviewItem label="Input.tsx" />
              </TreeviewItem>
              <TreeviewItem label="secret.ts" disabled />
              <TreeviewItem label="index.ts" />
            </TreeviewItem>
          </TreeviewList>
        </div>
      </div>
    </section>
  );
}
