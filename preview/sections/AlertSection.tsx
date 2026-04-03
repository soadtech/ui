import { Alert, Button, ActionBarLink } from 'soadtech-ui';
import type { AlertStatus, AlertVariant, AlertLayout } from 'soadtech-ui';

const statuses: AlertStatus[] = ['info', 'success', 'warning', 'error'];

const statusTitles: Record<AlertStatus, string> = {
  info: 'New Features Available!',
  success: 'Operation Successful',
  warning: 'Action Required!',
  error: 'Something Went Wrong',
};

const statusDescriptions: Record<AlertStatus, string> = {
  info: 'Explore the latest updates to enhance your experience. We\'ve added new tools and performance improvements to help you work more efficiently.',
  success: 'Your actions were completed successfully. Updates are implemented, and everything works perfectly. Enjoy improved functionality and achieve goals effortlessly.',
  warning: 'Some configurations need attention to ensure performance. Ignoring this could impact functionality. Take a moment to review and resolve issues for a seamless experience.',
  error: 'We\'ve run into an error while processing your request. This might be temporary, but if it persists, retry or contact support for assistance. We\'re here to help!',
};

const statusButtons: Record<AlertStatus, string> = {
  info: 'Try Now',
  success: 'Continue',
  warning: 'Fix Now',
  error: 'Retry',
};

function AlertGrid({
  variant,
  layout,
}: {
  variant: AlertVariant;
  layout: AlertLayout;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)' }}>
      {statuses.map((status) => (
        <Alert
          key={status}
          status={status}
          variant={variant}
          layout={layout}
          title={statusTitles[status]}
          description={statusDescriptions[status]}
          onClose={() => {}}
          actions={
            <>
              <Button
                size="sm"
                variant={variant === 'solid' ? 'outline' : 'fill'}
              >
                {statusButtons[status]}
              </Button>
              <ActionBarLink href="#">Button Link</ActionBarLink>
            </>
          }
        />
      ))}
    </div>
  );
}

export function AlertSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Alert
      </h2>

      {/* ─── Solid Inline ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Solid — Inline
        </h3>
        <AlertGrid variant="solid" layout="inline" />
      </div>

      {/* ─── Solid Stacked ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Solid — Stacked
        </h3>
        <AlertGrid variant="solid" layout="stacked" />
      </div>

      {/* ─── Alpha Inline ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Alpha — Inline
        </h3>
        <AlertGrid variant="alpha" layout="inline" />
      </div>

      {/* ─── Alpha Stacked ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Alpha — Stacked
        </h3>
        <AlertGrid variant="alpha" layout="stacked" />
      </div>
    </section>
  );
}
