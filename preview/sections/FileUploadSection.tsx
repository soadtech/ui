import { useState } from 'react';
import {
  FileUpload,
  FileUploadInput,
  FileUploadIcon,
  FileUploadItem,
} from 'soadtech-ui';

export function FileUploadSection() {
  const [dropzoneStatus, setDropzoneStatus] = useState<
    'idle' | 'uploading' | 'complete'
  >('idle');
  const [dropzoneProgress, setDropzoneProgress] = useState(0);

  const [inputStatus, setInputStatus] = useState<
    'idle' | 'uploading' | 'complete'
  >('idle');
  const [inputProgress, setInputProgress] = useState(0);
  const [inputFileName, setInputFileName] = useState('');

  const simulateUpload = (
    setStatus: (s: 'idle' | 'uploading' | 'complete') => void,
    setProgress: (p: number) => void
  ) => {
    setStatus('uploading');
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setStatus('complete');
      }
    }, 300);
  };

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        FileUpload
      </h2>

      {/* ─── Dropzone ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-medium)',
          marginBottom: 'var(--st-space-4)',
        }}
      >
        Dropzone
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--st-space-4)',
          marginBottom: 'var(--st-space-8)',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginBottom: 'var(--st-space-2)',
            }}
          >
            Default (interactive)
          </p>
          <FileUpload
            status={dropzoneStatus}
            progress={dropzoneProgress}
            helperText="Maximum file size: 20MB"
            onChange={(files) => {
              console.log('Files:', files);
              simulateUpload(setDropzoneStatus, setDropzoneProgress);
            }}
            onCancel={() => setDropzoneStatus('idle')}
          />
          <button
            type="button"
            onClick={() => setDropzoneStatus('idle')}
            style={{
              marginTop: 'var(--st-space-2)',
              fontSize: 'var(--st-font-size-xs)',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>

        <div>
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginBottom: 'var(--st-space-2)',
            }}
          >
            Landscape
          </p>
          <FileUpload
            variant="landscape"
            helperText="SVG, PNG, JPG (max. 800x400px)"
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 'var(--st-space-4)',
          marginBottom: 'var(--st-space-8)',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginBottom: 'var(--st-space-2)',
            }}
          >
            Uploading (65%)
          </p>
          <FileUpload
            status="uploading"
            progress={65}
            onCancel={() => {}}
          />
        </div>
        <div>
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginBottom: 'var(--st-space-2)',
            }}
          >
            Complete
          </p>
          <FileUpload status="complete" />
        </div>
        <div>
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              marginBottom: 'var(--st-space-2)',
            }}
          >
            Disabled
          </p>
          <FileUpload disabled />
        </div>
      </div>

      {/* ─── Compact Input ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-medium)',
          marginBottom: 'var(--st-space-4)',
        }}
      >
        Compact Input
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--st-space-4)',
          marginBottom: 'var(--st-space-8)',
          maxWidth: 600,
        }}
      >
        <FileUploadInput
          label="Upload Document"
          helperText="PDF or DOCX, max 10MB"
          status={inputStatus}
          progress={inputProgress}
          fileName={inputFileName}
          onChange={(files) => {
            setInputFileName(files[0]?.name ?? '');
            simulateUpload(setInputStatus, setInputProgress);
          }}
        />
        <FileUploadInput
          label="Completed Upload"
          fileName="report-2024.pdf"
          status="complete"
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--st-space-4)',
          marginBottom: 'var(--st-space-8)',
          maxWidth: 600,
        }}
      >
        <FileUploadInput
          label="Uploading..."
          fileName="data-export.csv"
          status="uploading"
          progress={45}
        />
        <FileUploadInput label="Disabled" disabled />
      </div>

      {/* ─── Icon Upload ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-medium)',
          marginBottom: 'var(--st-space-4)',
        }}
      >
        Icon Upload
      </h3>

      <div
        style={{
          display: 'flex',
          gap: 'var(--st-space-4)',
          marginBottom: 'var(--st-space-8)',
        }}
      >
        <FileUploadIcon />
        <FileUploadIcon
          thumbnail="https://picsum.photos/seed/upload1/120/120"
        />
        <FileUploadIcon
          thumbnail="https://picsum.photos/seed/upload2/120/120"
        />
      </div>

      {/* ─── File Items ─── */}
      <h3
        style={{
          fontSize: 'var(--st-font-size-lg)',
          fontWeight: 'var(--st-font-weight-medium)',
          marginBottom: 'var(--st-space-4)',
        }}
      >
        File Items
      </h3>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--st-space-2)',
          maxWidth: 400,
        }}
      >
        <FileUploadItem name="Project-Brief.pdf" />
        <FileUploadItem name="Design-Mockup.fig" />
        <FileUploadItem
          name="Photo-2024-03.jpg"
          thumbnail="https://picsum.photos/seed/file1/40/40"
        />
        <FileUploadItem
          name="Screenshot-Dashboard.png"
          thumbnail="https://picsum.photos/seed/file2/40/40"
        />
      </div>
    </section>
  );
}
