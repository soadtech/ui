import { useState } from 'react';
import {
  Table,
  TableToolbar,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableFooter,
  Checkbox,
  InputSearch,
  Button,
  ButtonLink,
  Pagination,
  Badge,
  Avatar,
} from 'soadtech-ui';
import type { TableSortDirection, TableSize } from 'soadtech-ui';

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

const basicData = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: '3', name: 'Carol Williams', email: 'carol@example.com', role: 'Viewer' },
  { id: '4', name: 'David Brown', email: 'david@example.com', role: 'Editor' },
  { id: '5', name: 'Eve Davis', email: 'eve@example.com', role: 'Admin' },
];

export function TableSection() {
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<TableSortDirection>('asc');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  function handleSort(key: string, dir: TableSortDirection) {
    setSortKey(key);
    setSortDirection(dir);
  }

  const allIds = basicData.map((d) => d.id);
  const allSelected = selected.length === basicData.length;
  const someSelected = selected.length > 0 && !allSelected;

  function toggleAll() {
    setSelected(allSelected ? [] : allIds);
  }

  function toggleRow(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  }

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Table
      </h2>

      {/* Basic */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Basic')}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Sortable */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Sortable')}
        <Table
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSortChange={handleSort}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderCell sortKey="name">Name</TableHeaderCell>
              <TableHeaderCell sortKey="email">Email</TableHeaderCell>
              <TableHeaderCell sortKey="role">Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...basicData]
              .sort((a, b) => {
                if (!sortKey) return 0;
                const aVal = a[sortKey as keyof typeof a];
                const bVal = b[sortKey as keyof typeof b];
                const cmp = aVal.localeCompare(bVal);
                return sortDirection === 'asc' ? cmp : -cmp;
              })
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Selection */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Selection')}
        <Table selectedRows={selected} onSelectionChange={setSelected}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell width="48px">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={toggleAll}
                />
              </TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.map((row) => (
              <TableRow key={row.id} rowId={row.id}>
                <TableCell>
                  <Checkbox
                    checked={selected.includes(row.id)}
                    onCheckedChange={() => toggleRow(row.id)}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Rich Content */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Rich Content')}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell align="right">Amount</TableHeaderCell>
              <TableHeaderCell align="right">Action</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--st-space-3)' }}>
                  <Avatar name="Alice Johnson" size="sm" />
                  <div>
                    <div style={{ fontWeight: 'var(--st-font-weight-medium)' }}>Alice Johnson</div>
                    <div style={{ fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>alice@example.com</div>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge variant="subtle">Active</Badge></TableCell>
              <TableCell align="right">$1,200.00</TableCell>
              <TableCell align="right"><ButtonLink size="sm">View</ButtonLink></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--st-space-3)' }}>
                  <Avatar name="Bob Smith" size="sm" />
                  <div>
                    <div style={{ fontWeight: 'var(--st-font-weight-medium)' }}>Bob Smith</div>
                    <div style={{ fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>bob@example.com</div>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge variant="subtle">Pending</Badge></TableCell>
              <TableCell align="right">$850.00</TableCell>
              <TableCell align="right"><ButtonLink size="sm">View</ButtonLink></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--st-space-3)' }}>
                  <Avatar name="Carol Williams" size="sm" />
                  <div>
                    <div style={{ fontWeight: 'var(--st-font-weight-medium)' }}>Carol Williams</div>
                    <div style={{ fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>carol@example.com</div>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge variant="subtle">Active</Badge></TableCell>
              <TableCell align="right">$2,400.00</TableCell>
              <TableCell align="right"><ButtonLink size="sm">View</ButtonLink></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Toolbar */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Toolbar')}
        <Table>
          <TableToolbar>
            <InputSearch placeholder="Search users..." style={{ flex: 1, maxWidth: 280 }} />
            <Button size="sm">+ Add User</Button>
          </TableToolbar>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.slice(0, 3).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer Variants */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Footer — Pagination')}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.slice(0, 3).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <span>1–10 of 100 items</span>
            <Pagination page={page} count={10} onPageChange={setPage} size="sm" />
          </TableFooter>
        </Table>
      </div>

      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Footer — Show More')}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.slice(0, 3).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter align="center">
            <ButtonLink size="sm">Show more</ButtonLink>
          </TableFooter>
        </Table>
      </div>

      {/* Sizes */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Sizes')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-6)' }}>
          {(['sm', 'md', 'lg'] as TableSize[]).map((size) => (
            <div key={size}>
              <div
                style={{
                  fontSize: 'var(--st-font-size-sm)',
                  color: 'var(--st-color-muted)',
                  marginBottom: 'var(--st-space-2)',
                }}
              >
                {size}
              </div>
              <Table size={size}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {basicData.slice(0, 3).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>

      {/* Striped */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Striped')}
        <Table striped>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basicData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
