import { Accordion, AccordionItem } from 'soadtech-ui';

function DiamondIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L17 10L10 18L3 10L10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const demoText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero.';

export function AccordionSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Accordion
      </h2>

      {/* ─── Collapsible ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Collapsible (multiple open)
        </h3>
        <Accordion type="multiple" variant="collapsible" defaultValue="col-1">
          <AccordionItem
            value="col-1"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="col-2"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="col-3"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="col-4"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="col-5"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
            disabled
          >
            <p>{demoText}</p>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ─── Accordion ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Accordion (single open)
        </h3>
        <Accordion type="single" variant="accordion">
          <AccordionItem
            value="acc-1"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="acc-2"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="acc-3"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="acc-4"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
          >
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem
            value="acc-5"
            title="Explore More Details"
            description="Description"
            icon={<DiamondIcon />}
            disabled
          >
            <p>{demoText}</p>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ─── Showmore ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Collapsible Showmore
        </h3>
        <Accordion type="multiple" variant="showmore">
          <AccordionItem value="sm-1" title="Explore More Details">
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem value="sm-2" title="Explore More Details">
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem value="sm-3" title="Explore More Details">
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem value="sm-4" title="Explore More Details">
            <p>{demoText}</p>
          </AccordionItem>
          <AccordionItem value="sm-5" title="Explore More Details" disabled>
            <p>{demoText}</p>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
