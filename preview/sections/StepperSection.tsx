import { Stepper, StepperStep } from 'soadtech-ui';

export function StepperSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Stepper
      </h2>

      {/* Vertical — Medium */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-3)',
        }}
      >
        Vertical (md)
      </h3>
      <div style={{ maxWidth: 400, marginBottom: 'var(--st-space-8)' }}>
        <Stepper orientation="vertical" size="md">
          <StepperStep
            status="completed"
            title="Account created"
            description="Your account has been set up"
          />
          <StepperStep
            status="completed"
            title="Profile details"
            description="Fill in your personal info"
          />
          <StepperStep
            status="active"
            title="Business info"
            description="Tell us about your company"
          >
            <div
              style={{
                padding: 'var(--st-space-3)',
                background: 'var(--st-color-surface-raised)',
                borderRadius: 'var(--st-radius-md)',
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
              }}
            >
              Content slot
            </div>
          </StepperStep>
          <StepperStep
            status="error"
            title="Verification"
            description="Something went wrong"
          />
          <StepperStep
            status="disabled"
            title="Payment"
            description="Enter payment details"
          />
          <StepperStep
            status="default"
            title="Confirmation"
            description="Review and confirm"
          />
        </Stepper>
      </div>

      {/* Vertical — Small */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-3)',
        }}
      >
        Vertical (sm)
      </h3>
      <div style={{ maxWidth: 400, marginBottom: 'var(--st-space-8)' }}>
        <Stepper orientation="vertical" size="sm">
          <StepperStep
            status="completed"
            title="Account created"
            description="Your account has been set up"
          />
          <StepperStep
            status="active"
            title="Profile details"
            description="Fill in your personal info"
          />
          <StepperStep
            status="default"
            title="Business info"
            description="Tell us about your company"
          />
        </Stepper>
      </div>

      {/* Horizontal — Medium */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-3)',
        }}
      >
        Horizontal (md)
      </h3>
      <div style={{ maxWidth: 700, marginBottom: 'var(--st-space-8)' }}>
        <Stepper orientation="horizontal" size="md">
          <StepperStep
            status="completed"
            title="Account"
            description="Created"
          />
          <StepperStep
            status="completed"
            title="Profile"
            description="Completed"
          />
          <StepperStep
            status="active"
            title="Business"
            description="In progress"
          />
          <StepperStep
            status="error"
            title="Verify"
            description="Failed"
          />
          <StepperStep
            status="disabled"
            title="Payment"
            description="Pending"
          />
          <StepperStep
            status="default"
            title="Confirm"
            description="Not started"
          />
        </Stepper>
      </div>

      {/* Horizontal — Small */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-3)',
        }}
      >
        Horizontal (sm)
      </h3>
      <div style={{ maxWidth: 600, marginBottom: 'var(--st-space-8)' }}>
        <Stepper orientation="horizontal" size="sm">
          <StepperStep
            status="completed"
            title="Step 1"
          />
          <StepperStep
            status="completed"
            title="Step 2"
          />
          <StepperStep
            status="active"
            title="Step 3"
          />
          <StepperStep
            status="default"
            title="Step 4"
          />
        </Stepper>
      </div>

      {/* Icon variant */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-3)',
        }}
      >
        Icon Variant
      </h3>
      <div style={{ maxWidth: 400 }}>
        <Stepper orientation="vertical" size="md">
          <StepperStep
            status="completed"
            title="Upload"
            description="Files uploaded"
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M3.5 4.5L7 1l3.5 3.5M2 10v2h10v-2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <StepperStep
            status="active"
            title="Review"
            description="Review your files"
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="7" cy="7" r="2" fill="currentColor" />
              </svg>
            }
          />
          <StepperStep
            status="default"
            title="Publish"
            description="Make it live"
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7l4 4 6-8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </Stepper>
      </div>
    </section>
  );
}
