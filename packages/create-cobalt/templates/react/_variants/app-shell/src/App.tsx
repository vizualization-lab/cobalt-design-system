import { CoAppShell } from '@cobalt/react/app-shell';
import { CoBanner } from '@cobalt/react/banner';
import { CoButton } from '@cobalt/react/button';
import { CoCard } from '@cobalt/react/card';
import { CoIcon } from '@cobalt/react/icon';
import { CoModeToggle } from '@cobalt/react/mode-toggle';
import { CoNavDrawer } from '@cobalt/react/nav-drawer';
import { CoNavDrawerItem } from '@cobalt/react/nav-drawer-item';
import { CoNavHeaderBar } from '@cobalt/react/nav-header-bar';
import { CoNavRailBar } from '@cobalt/react/nav-rail-bar';
import { CoNavRailItem } from '@cobalt/react/nav-rail-item';

export function App() {
  return (
    <CoAppShell railWidth="96px" drawerWidth="260px">
      <CoBanner slot="banner" label="Cobalt starter banner">
        <span slot="title">Cobalt starter</span>
      </CoBanner>
      <CoNavHeaderBar slot="topnav" label="Workspace header">
        <div slot="logo" className="shell-header-brand">
          <CoIcon name="co-logo" size="lg" aria-hidden="true" />
          <span>Cobalt starter</span>
        </div>
        <CoModeToggle slot="avatar" storageNamespace="cobalt-starter" />
      </CoNavHeaderBar>
      <CoNavRailBar slot="rail" label="Primary sections">
        <CoNavRailItem value="home" icon="home" selected>
          Home
        </CoNavRailItem>
        <CoNavRailItem value="reports" icon="dashboard">
          Reports
        </CoNavRailItem>
        <CoNavRailItem value="settings" icon="settings">
          Settings
        </CoNavRailItem>
      </CoNavRailBar>
      <CoNavDrawer slot="drawer" label="Workspace navigation">
        <CoNavDrawerItem value="overview" icon="dashboard" selected>
          Overview
        </CoNavDrawerItem>
        <CoNavDrawerItem value="activity" icon="task-alt">
          Activity
        </CoNavDrawerItem>
        <CoNavDrawerItem value="settings" icon="settings">
          Settings
        </CoNavDrawerItem>
      </CoNavDrawer>
      <main slot="body" className="shell-body">
        <CoCard label="Starter content">
          <div className="starter-card">
            <p className="starter-eyebrow">React</p>
            <h1 className="starter-title">Build inside the app shell</h1>
            <p className="starter-copy">
              The banner, header, rail, drawer, and body regions are ready for routing.
            </p>
            <div>
              <CoButton variant="success" onCoFocus={() => console.log('Success')}>
                Success
              </CoButton>
            </div>
          </div>
        </CoCard>
      </main>
    </CoAppShell>
  );
}
