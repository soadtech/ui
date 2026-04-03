import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarNavItem,
  SidebarDivider,
} from 'soadtech-ui';

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 10L10 3L17 10M5 8.5V16H8V12H12V16H15V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7 9C8.657 9 10 7.657 10 6S8.657 3 7 3 4 4.343 4 6 5.343 9 7 9ZM3 16V15C3 12.791 4.791 11 7 11S11 12.791 11 15V16M13 3.13C14.196 3.572 15 4.694 15 6S14.196 8.428 13 8.87M17 16V15C17 12.95 15.82 11.185 14.1 10.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InboxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 12H7L8.5 14H11.5L13 12H17M3 12V15C3 16.105 3.895 17 5 17H15C16.105 17 17 16.105 17 15V12M3 12L5.468 4.532C5.646 3.93 6.204 3.5 6.832 3.5H13.168C13.796 3.5 14.354 3.93 14.532 4.532L17 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 12.5C11.381 12.5 12.5 11.381 12.5 10S11.381 7.5 10 7.5 7.5 8.619 7.5 10 8.619 12.5 10 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.167 12.5C16.055 12.753 16.03 13.036 16.097 13.304C16.164 13.572 16.318 13.81 16.533 13.983L16.575 14.017C16.749 14.162 16.889 14.343 16.985 14.547C17.08 14.751 17.13 14.974 17.13 15.2C17.13 15.426 17.08 15.649 16.985 15.853C16.889 16.057 16.749 16.238 16.575 16.383C16.43 16.557 16.249 16.697 16.045 16.793C15.841 16.888 15.618 16.938 15.392 16.938C15.166 16.938 14.943 16.888 14.739 16.793C14.535 16.697 14.354 16.557 14.209 16.383L14.175 16.342C14.002 16.127 13.764 15.972 13.496 15.905C13.228 15.838 12.945 15.864 12.692 15.975C12.444 16.082 12.234 16.258 12.085 16.483C11.937 16.709 11.857 16.973 11.856 17.244V17.358C11.856 17.814 11.675 18.251 11.352 18.573C11.03 18.896 10.593 19.077 10.137 19.077C9.681 19.077 9.244 18.896 8.922 18.573C8.599 18.251 8.418 17.814 8.418 17.358V17.298C8.413 17.02 8.326 16.75 8.168 16.522C8.011 16.294 7.79 16.12 7.533 16.022C7.28 15.911 7 15.886 6.733 15.953C6.465 16.02 6.226 16.174 6.053 16.39L6.019 16.431C5.874 16.605 5.693 16.746 5.489 16.841C5.285 16.937 5.062 16.987 4.836 16.987C4.61 16.987 4.387 16.937 4.183 16.841C3.979 16.746 3.798 16.605 3.653 16.431C3.479 16.286 3.339 16.105 3.243 15.901C3.148 15.697 3.098 15.474 3.098 15.248C3.098 15.022 3.148 14.799 3.243 14.595C3.339 14.391 3.479 14.21 3.653 14.065L3.694 14.031C3.91 13.858 4.064 13.62 4.131 13.352C4.198 13.084 4.173 12.801 4.061 12.548C3.955 12.3 3.778 12.091 3.553 11.942C3.328 11.793 3.063 11.714 2.792 11.712H2.678C2.222 11.712 1.785 11.531 1.463 11.209C1.14 10.886 0.959 10.449 0.959 9.993C0.959 9.537 1.14 9.1 1.463 8.778C1.785 8.455 2.222 8.274 2.678 8.274H2.738C3.016 8.27 3.286 8.182 3.514 8.025C3.742 7.867 3.916 7.647 4.014 7.39C4.126 7.137 4.151 6.854 4.084 6.586C4.017 6.318 3.862 6.08 3.647 5.907L3.606 5.873C3.432 5.728 3.291 5.547 3.196 5.343C3.1 5.139 3.05 4.916 3.05 4.69C3.05 4.464 3.1 4.241 3.196 4.037C3.291 3.833 3.432 3.652 3.606 3.507C3.751 3.333 3.932 3.193 4.136 3.097C4.34 3.002 4.563 2.952 4.789 2.952C5.015 2.952 5.238 3.002 5.442 3.097C5.646 3.193 5.827 3.333 5.972 3.507L6.006 3.548C6.179 3.764 6.417 3.918 6.685 3.985C6.953 4.052 7.236 4.027 7.489 3.916H7.533C7.781 3.809 7.991 3.633 8.14 3.408C8.289 3.182 8.369 2.918 8.37 2.647V2.533C8.37 2.077 8.551 1.64 8.874 1.318C9.196 0.995 9.633 0.814 10.089 0.814C10.545 0.814 10.982 0.995 11.304 1.318C11.627 1.64 11.808 2.077 11.808 2.533V2.593C11.81 2.864 11.889 3.128 12.038 3.354C12.187 3.579 12.397 3.756 12.645 3.862C12.898 3.974 13.181 3.999 13.449 3.932C13.717 3.865 13.955 3.71 14.128 3.495L14.162 3.454C14.307 3.28 14.488 3.14 14.692 3.044C14.896 2.949 15.119 2.899 15.345 2.899C15.571 2.899 15.794 2.949 15.998 3.044C16.202 3.14 16.383 3.28 16.528 3.454C16.702 3.599 16.842 3.78 16.938 3.984C17.033 4.188 17.083 4.411 17.083 4.637C17.083 4.863 17.033 5.086 16.938 5.29C16.842 5.494 16.702 5.675 16.528 5.82L16.487 5.854C16.271 6.027 16.117 6.265 16.05 6.533C15.983 6.801 16.008 7.084 16.12 7.337V7.381C16.226 7.629 16.403 7.838 16.628 7.987C16.853 8.136 17.118 8.216 17.389 8.217H17.503C17.959 8.217 18.396 8.398 18.718 8.72C19.041 9.043 19.222 9.48 19.222 9.936C19.222 10.392 19.041 10.829 18.718 11.151C18.396 11.474 17.959 11.655 17.503 11.655H17.443C17.172 11.656 16.908 11.736 16.682 11.885C16.457 12.034 16.281 12.244 16.174 12.492"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M16 16H4V4M6.5 12.5L9.5 9.5L12 12L16 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="currentColor" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="700"
      >
        S
      </text>
    </svg>
  );
}

export function SidebarSection() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Sidebar
      </h2>

      <div style={{ marginBottom: 'var(--st-space-4)' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--st-space-2)', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={collapsed}
            onChange={(e) => setCollapsed(e.target.checked)}
          />
          <span style={{ fontSize: 'var(--st-font-size-sm)' }}>Collapsed</span>
        </label>
      </div>

      <div
        style={{
          height: '540px',
          border: '1px solid var(--st-color-border)',
          borderRadius: 'var(--st-radius-lg)',
          overflow: 'hidden',
        }}
      >
        <Sidebar collapsed={collapsed}>
          <SidebarHeader>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--st-space-3)',
                overflow: 'hidden',
              }}
            >
              <LogoIcon />
              {!collapsed && (
                <span
                  style={{
                    fontWeight: 'var(--st-font-weight-semibold)',
                    fontSize: 'var(--st-font-size-base)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  soadtech
                </span>
              )}
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup label="Main">
              <SidebarNavItem icon={<HomeIcon />} label="Dashboard" active />
              <SidebarNavItem icon={<InboxIcon />} label="Inbox" badge="12" />
              <SidebarNavItem icon={<ChartIcon />} label="Analytics">
                <SidebarNavItem icon={<ChartIcon />} label="Overview" />
                <SidebarNavItem icon={<ChartIcon />} label="Reports" />
              </SidebarNavItem>
            </SidebarGroup>

            <SidebarDivider />

            <SidebarGroup label="Management">
              <SidebarNavItem icon={<UsersIcon />} label="Team" badge="3" />
              <SidebarNavItem icon={<SettingsIcon />} label="Settings" />
              <SidebarNavItem icon={<HomeIcon />} label="Archived" disabled />
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--st-space-3)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 'var(--st-radius-full)',
                  backgroundColor: 'var(--st-color-neutral-200)',
                  flexShrink: 0,
                }}
              />
              {!collapsed && (
                <div style={{ overflow: 'hidden' }}>
                  <div
                    style={{
                      fontSize: 'var(--st-font-size-sm)',
                      fontWeight: 'var(--st-font-weight-medium)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    John Doe
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--st-font-size-xs)',
                      color: 'var(--st-color-muted)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    john@soadtech.com
                  </div>
                </div>
              )}
            </div>
          </SidebarFooter>
        </Sidebar>
      </div>
    </section>
  );
}
