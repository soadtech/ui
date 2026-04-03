import { Progress } from 'soadtech-ui';

export function ProgressSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Progress
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--st-space-6)',
          maxWidth: 400,
        }}
      >
        <Progress label="Label" value={100} />
        <Progress label="Label" value={75} />
        <Progress label="Label" value={50} />
        <Progress label="Label" value={25} />
        <Progress label="Label" value={0} />
      </div>
    </section>
  );
}
