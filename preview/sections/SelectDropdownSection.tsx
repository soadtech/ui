import { useState } from 'react';
import { SelectDropdown } from 'soadtech-ui';
import type { SelectOption, SelectOptionGroup } from 'soadtech-ui';

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

const fruits: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'dragonfruit', label: 'Dragonfruit' },
  { value: 'elderberry', label: 'Elderberry', disabled: true },
];

const withDescriptions: SelectOption[] = [
  { value: 'js', label: 'JavaScript', description: 'Dynamic scripting language' },
  { value: 'ts', label: 'TypeScript', description: 'Typed superset of JavaScript' },
  { value: 'py', label: 'Python', description: 'General purpose language' },
  { value: 'rs', label: 'Rust', description: 'Systems programming language' },
];

const grouped: (SelectOption | SelectOptionGroup)[] = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'spinach', label: 'Spinach', disabled: true },
    ],
  },
];

export function SelectDropdownSection() {
  const [single, setSingle] = useState<string | null>(null);
  const [singleFilled, setSingleFilled] = useState<string | null>('banana');
  const [multi, setMulti] = useState<string[]>([]);
  const [multiFilled, setMultiFilled] = useState<string[]>([
    'apple',
    'cherry',
    'dragonfruit',
  ]);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        SelectDropdown
      </h2>

      {/* Single Select — Large */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Single Select — Large')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            label="Fruit"
            helperText="Choose your favourite fruit"
            options={fruits}
            value={single}
            onChange={setSingle}
            style={{ width: 260 }}
          />
          <SelectDropdown
            label="Fruit (Filled)"
            helperText="Choose your favourite fruit"
            options={fruits}
            value={singleFilled}
            onChange={setSingleFilled}
            style={{ width: 260 }}
          />
          <SelectDropdown
            label="Fruit (Disabled)"
            helperText="Choose your favourite fruit"
            options={fruits}
            disabled
            style={{ width: 260 }}
          />
          <SelectDropdown
            label="Fruit (Error)"
            options={fruits}
            feedback={{ status: 'error', message: 'This field is required' }}
            style={{ width: 260 }}
          />
        </div>
      </div>

      {/* Single Select — Medium */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Single Select — Medium')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            size="md"
            label="Fruit"
            options={fruits}
            value={single}
            onChange={setSingle}
            style={{ width: 260 }}
          />
          <SelectDropdown
            size="md"
            label="Fruit (Filled)"
            options={fruits}
            value={singleFilled}
            onChange={setSingleFilled}
            style={{ width: 260 }}
          />
        </div>
      </div>

      {/* With Descriptions */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('With Descriptions')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            label="Language"
            helperText="Select a programming language"
            options={withDescriptions}
            value={single}
            onChange={setSingle}
            style={{ width: 300 }}
          />
        </div>
      </div>

      {/* Grouped Options */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Grouped Options')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            label="Food"
            helperText="Pick from grouped options"
            options={grouped}
            value={single}
            onChange={setSingle}
            style={{ width: 260 }}
          />
        </div>
      </div>

      {/* Multiselect — Large */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Multiselect — Large')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            multiple
            label="Fruits"
            helperText="Choose multiple fruits"
            options={fruits}
            value={multi}
            onChange={setMulti}
            style={{ width: 300 }}
          />
          <SelectDropdown
            multiple
            label="Fruits (Filled)"
            helperText="Choose multiple fruits"
            options={fruits}
            value={multiFilled}
            onChange={setMultiFilled}
            maxVisibleChips={2}
            style={{ width: 300 }}
          />
          <SelectDropdown
            multiple
            label="Fruits (Disabled)"
            options={fruits}
            value={['apple']}
            disabled
            style={{ width: 300 }}
          />
          <SelectDropdown
            multiple
            label="Fruits (Error)"
            options={fruits}
            value={[]}
            feedback={{ status: 'error', message: 'Select at least one' }}
            style={{ width: 300 }}
          />
        </div>
      </div>

      {/* Feedback Variants */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Feedback Variants')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            label="Success"
            options={fruits}
            value="apple"
            feedback={{ status: 'success', message: 'Great choice!' }}
            style={{ width: 260 }}
          />
          <SelectDropdown
            label="Warning"
            options={fruits}
            feedback={{ status: 'warning', message: 'Limited stock' }}
            style={{ width: 260 }}
          />
          <SelectDropdown
            label="AI"
            options={fruits}
            feedback={{ status: 'ai', message: 'AI suggestion' }}
            style={{ width: 260 }}
          />
        </div>
      </div>

      {/* Required */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Required')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <SelectDropdown
            label="Required Field"
            required
            options={fruits}
            value={single}
            onChange={setSingle}
            style={{ width: 260 }}
          />
        </div>
      </div>
    </section>
  );
}
