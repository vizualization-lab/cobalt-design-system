import '@cobalt/components/app-shell';
import '@cobalt/components/banner';
import '@cobalt/components/nav-drawer';
import '@cobalt/components/nav-drawer-item';
import '@cobalt/components/nav-header-bar';
import '@cobalt/components/nav-rail-bar';
import '@cobalt/components/nav-rail-item';
import '@cobalt/components/input-pill';

export const title = '<co-app-shell>';

export const html = `
  <style>
    body {
      min-block-size: 100svh;
      display: flex;
      flex-direction: column;
    }

    .wb-header {
      flex: 0 0 auto;
    }

    #content.wb-main {
      flex: 1 1 auto;
      display: flex;
      min-block-size: 0;
      max-inline-size: none;
      padding: 0;
      background: var(--co-color-surface-page);
    }

    .wb-app-shell-stage {
      flex: 1 1 auto;
      min-block-size: 0;
    }

    .wb-app-shell-preview {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      min-block-size: 0;
      background: var(--co-color-surface-page);
    }

    .wb-app-shell-preview::part(base) {
      block-size: 100%;
      min-block-size: 100%;
    }

    .wb-app-shell-header::part(base) {
      min-block-size: 0;
      padding: 0;
      background: transparent;
      border-block-end: 0;
    }

    .wb-app-shell-banner {
      --co-component-banner-background: var(--co-color-primary-subtle);
      --co-component-banner-foreground: var(--co-color-primary-base);
      --co-component-banner-padding: 12px 16px;
    }

    .wb-app-shell-brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      min-inline-size: 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--co-color-text-default);
      white-space: nowrap;
    }

    .wb-app-shell-logo-mark {
      inline-size: 28px;
      block-size: 28px;
      border-radius: 8px;
      background: linear-gradient(135deg, #3d63dd 0%, #5c7cfa 100%);
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.24);
    }

    .wb-app-shell-search {
      flex: 1 1 320px;
      max-inline-size: 320px;
    }

    .wb-app-shell-avatar {
      display: grid;
      place-items: center;
      inline-size: 36px;
      block-size: 36px;
      border-radius: 999px;
      background: var(--co-color-primary-subtle);
      color: var(--co-color-primary-base);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .wb-app-shell-body {
      display: grid;
      gap: 20px;
      grid-template-columns: minmax(0, 1fr);
    }

    .wb-app-shell-log {
      display: grid;
      gap: 0;
      padding-block-end: 40px;
    }

    .wb-app-shell-log-heading {
      margin: 0 0 4px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--co-color-text-secondary);
    }

    .wb-app-shell-log-intro {
      margin: 0 0 8px;
      color: var(--co-color-text-secondary);
    }

    .wb-app-shell-log-entry {
      padding: 18px 0;
      border-block-start: 1px solid var(--co-color-border-subtle);
    }

    .wb-app-shell-log-entry p {
      margin: 0;
    }

    .wb-app-shell-log-meta {
      margin-top: 6px;
      font-size: 13px;
      color: var(--co-color-text-secondary);
    }
  </style>

  <div class="wb-app-shell-stage">
    <co-app-shell class="wb-app-shell-preview" rail-width="115px" drawer-width="260px">
      <co-banner slot="banner" class="wb-app-shell-banner" label="Navigation update">
        <span slot="title">Banner</span>
      </co-banner>
      <co-nav-header-bar
        slot="topnav"
        class="wb-app-shell-header"
        label="Operations workspace header"
      >
        <div slot="logo" class="wb-app-shell-brand">
          <div class="wb-app-shell-logo-mark" aria-hidden="true"></div>
          <span>Operations workspace</span>
        </div>
        <co-input-pill
          class="wb-app-shell-search"
          variant="search"
          placeholder="Search services, incidents, teams"
        ></co-input-pill>
        <div slot="avatar" class="wb-app-shell-avatar" aria-label="Jordan Lee">JL</div>
      </co-nav-header-bar>
      <co-nav-rail-bar slot="rail" label="Primary sections">
        <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
        <co-nav-rail-item value="settings" icon="settings">Settings</co-nav-rail-item>
      </co-nav-rail-bar>
      <co-nav-drawer slot="drawer" label="Workspace navigation">
        <co-nav-drawer-item value="overview" icon="dashboard" selected>Overview</co-nav-drawer-item>
        <co-nav-drawer-item value="incidents" icon="warning">Incidents</co-nav-drawer-item>
        <co-nav-drawer-item value="approvals" icon="task-alt">Approvals</co-nav-drawer-item>
      </co-nav-drawer>
      <div slot="body" class="wb-app-shell-body">
        <section style="padding: 20px; background: var(--co-color-surface-default); border: 1px solid var(--co-color-border-default); border-radius: 16px;">
          <p style="margin: 0 0 8px; color: var(--co-color-text-secondary);">Dashboard</p>
          <h1 style="margin: 0 0 12px;">Track live operational health</h1>
          <p style="margin: 0 0 16px;">Compose page-level structure inside the body slot.</p>
          <div style="display: grid; gap: 10px;">
            <div style="padding: 14px 16px; background: var(--co-color-surface-page); border-radius: 12px;">Summary cards</div>
            <div style="padding: 14px 16px; background: var(--co-color-surface-page); border-radius: 12px;">Activity feed</div>
          </div>
        </section>
        <aside style="padding: 14px 16px; background: var(--co-color-surface-raised); border: 1px solid var(--co-color-border-default); border-radius: 16px; color: var(--co-color-text-secondary);">
          Optional TOC or reference content inside body
        </aside>
        <section class="wb-app-shell-log" aria-label="Operational timeline">
          <p class="wb-app-shell-log-heading">Operational timeline</p>
          <p class="wb-app-shell-log-intro">
            Extra body content for overflow testing. This section is intentionally not wrapped in a card.
          </p>
          <div class="wb-app-shell-log-entry">
            <p>08:42 UTC · Edge routing policy promoted to production.</p>
            <p class="wb-app-shell-log-meta">Traffic shifted gradually across three regions.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>08:55 UTC · Incident review notes published for payments cluster.</p>
            <p class="wb-app-shell-log-meta">Follow-up tasks assigned to reliability engineering.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>09:10 UTC · Search indexing backlog reduced below alert threshold.</p>
            <p class="wb-app-shell-log-meta">Worker pool autoscaling returned to baseline.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>09:24 UTC · Warehouse sync resumed after credential rotation.</p>
            <p class="wb-app-shell-log-meta">No customer-facing impact was reported.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>09:41 UTC · Release candidates queued for approvals.</p>
            <p class="wb-app-shell-log-meta">Mobile, web, and API release trains are aligned.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>10:03 UTC · Latency canary detected elevated tail response times.</p>
            <p class="wb-app-shell-log-meta">Investigation narrowed to cache miss amplification.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>10:18 UTC · Experiment cohort expanded to 20% of active users.</p>
            <p class="wb-app-shell-log-meta">Support guidance updated for rollout questions.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>10:32 UTC · Analytics export completed for the last 24 hours.</p>
            <p class="wb-app-shell-log-meta">Downstream dashboards refreshed without delay.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>10:47 UTC · Background job retries cleared the remaining queue.</p>
            <p class="wb-app-shell-log-meta">Monitoring returned to steady-state ranges.</p>
          </div>
          <div class="wb-app-shell-log-entry">
            <p>11:05 UTC · Design system adoption audit attached to weekly review.</p>
            <p class="wb-app-shell-log-meta">Body overflow is now available for scroll testing.</p>
          </div>
        </section>
      </div>
      <div slot="footer">Last updated 3 minutes ago</div>
    </co-app-shell>
  </div>
`;
