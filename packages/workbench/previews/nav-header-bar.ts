import '@cobalt/components/nav-header-bar';
import '@cobalt/components/icon';
import '@cobalt/components/button';
import '@cobalt/components/button-icon';
import '@cobalt/components/input-pill';

export const title = '<co-nav-header-bar>';

export const html = `
  <section class="wb-section">
    <h2 class="wb-heading">Default</h2>
    <co-nav-header-bar label="App Header">
      <co-icon slot="logo" name="co-logo" size="lg" aria-hidden="true"></co-icon>
      <co-button variant="primary" size="sm">
        <co-icon slot="prefix" name="add" size="sm"></co-icon>
        Create
      </co-button>
      <co-input-pill variant="search" placeholder="Search" style="flex: 1; max-width: 400px;"></co-input-pill>
      <co-icon slot="avatar" name="account-circle" size="lg" fill></co-icon>
    </co-nav-header-bar>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">Minimal (no logo or avatar)</h2>
    <co-nav-header-bar label="Simple Header">
      <span style="font-weight: 600;">My Application</span>
      <co-button variant="ghost" size="sm">Help</co-button>
    </co-nav-header-bar>
  </section>

  <section class="wb-section">
    <h2 class="wb-heading">With Navigation Links</h2>
    <co-nav-header-bar label="Site Header">
      <co-icon slot="logo" name="co-logo" size="lg" aria-hidden="true"></co-icon>
      <nav style="display: flex; gap: 16px; align-items: center;">
        <a href="#" style="text-decoration: none; color: inherit; font-weight: 500;">Dashboard</a>
        <a href="#" style="text-decoration: none; color: inherit;">Projects</a>
        <a href="#" style="text-decoration: none; color: inherit;">Settings</a>
      </nav>
      <co-button-icon slot="avatar" icon="account-circle" label="User menu"></co-button-icon>
    </co-nav-header-bar>
  </section>
`;
