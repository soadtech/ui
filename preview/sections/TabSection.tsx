import { useState } from 'react';
import { Tab, TabItem, TabAdd } from 'soadtech-ui';

function CircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function TabSection() {
  const [basic1, setBasic1] = useState('overview');
  const [basic2, setBasic2] = useState('overview');
  const [dynamic1, setDynamic1] = useState('tab1');
  const [dynamicTabs, setDynamicTabs] = useState([
    { id: 'tab1', label: 'Dashboard' },
    { id: 'tab2', label: 'Analytics' },
    { id: 'tab3', label: 'Reports' },
  ]);
  let counter = dynamicTabs.length;

  const handleClose = (id: string) => {
    setDynamicTabs((prev) => prev.filter((t) => t.id !== id));
    if (dynamic1 === id) {
      const remaining = dynamicTabs.filter((t) => t.id !== id);
      if (remaining.length > 0) setDynamic1(remaining[0].id);
    }
  };

  const handleAdd = () => {
    counter += 1;
    const id = `tab${Date.now()}`;
    setDynamicTabs((prev) => [...prev, { id, label: `Tab ${prev.length + 1}` }]);
    setDynamic1(id);
  };

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-bold)',
          marginBottom: 'var(--st-space-1)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Tab
      </h2>
      <p
        style={{
          fontSize: 'var(--st-font-size-sm)',
          color: 'var(--st-color-muted)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Basic underline tabs and dynamic closeable pill tabs.
      </p>

      {/* ─── Basic variant ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Basic
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)', marginBottom: 'var(--st-space-8)' }}>
        {/* Text only */}
        <Tab value={basic1} onValueChange={setBasic1}>
          <TabItem value="overview">Overview</TabItem>
          <TabItem value="activity">Activity</TabItem>
          <TabItem value="settings">Settings</TabItem>
        </Tab>

        {/* Icon + text + badge */}
        <Tab value={basic2} onValueChange={setBasic2}>
          <TabItem value="overview" icon={<CircleIcon />}>Overview</TabItem>
          <TabItem value="activity" icon={<CircleIcon />} badge={12}>Activity</TabItem>
          <TabItem value="settings" icon={<CircleIcon />}>Settings</TabItem>
          <TabItem value="disabled" disabled>Disabled</TabItem>
        </Tab>
      </div>

      {/* ─── Dynamic variant ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Dynamic
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)', marginBottom: 'var(--st-space-8)' }}>
        <Tab variant="dynamic" value={dynamic1} onValueChange={setDynamic1}>
          {dynamicTabs.map((t) => (
            <TabItem key={t.id} value={t.id} onClose={() => handleClose(t.id)}>
              {t.label}
            </TabItem>
          ))}
          <TabAdd onClick={handleAdd} />
        </Tab>
      </div>

      {/* ─── Dynamic with icons ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Dynamic with Icons
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)', marginBottom: 'var(--st-space-8)' }}>
        <Tab variant="dynamic" value="home" onValueChange={() => {}}>
          <TabItem value="home" icon={<CircleIcon />} onClose={() => {}}>Home</TabItem>
          <TabItem value="profile" icon={<CircleIcon />} onClose={() => {}}>Profile</TabItem>
          <TabItem value="disabled" icon={<CircleIcon />} disabled>Disabled</TabItem>
          <TabAdd />
        </Tab>
      </div>

      {/* ─── Disabled ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-4)',
          color: 'var(--st-color-foreground)',
        }}
      >
        Disabled
      </h3>
      <div style={{ display: 'flex', gap: 'var(--st-space-4)', flexWrap: 'wrap' }}>
        <Tab value="first" disabled>
          <TabItem value="first">First</TabItem>
          <TabItem value="second">Second</TabItem>
        </Tab>
        <Tab variant="dynamic" value="a" disabled>
          <TabItem value="a" onClose={() => {}}>Tab A</TabItem>
          <TabItem value="b" onClose={() => {}}>Tab B</TabItem>
          <TabAdd />
        </Tab>
      </div>
    </section>
  );
}
