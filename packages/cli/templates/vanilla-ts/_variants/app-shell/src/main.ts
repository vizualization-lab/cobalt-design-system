import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
import '@cobalt/tokens/themes/default';

// Register each icon this app renders. Cobalt's icon registry is tree-shakeable —
// only the icons you import are bundled.
//
// Some components (e.g. co-nav-rail-item) swap to the filled variant on the
// `selected` state, so any icon that flows into one of those needs both the
// outline and the `-fill` modules registered.
import '@cobalt/icons/co-logo';
import '@cobalt/icons/home';
import '@cobalt/icons/home-fill';
import '@cobalt/icons/dashboard';
import '@cobalt/icons/dashboard-fill';
import '@cobalt/icons/settings';
import '@cobalt/icons/settings-fill';
import '@cobalt/icons/task-alt';

import '@cobalt/components/app-shell';
import '@cobalt/components/banner';
import '@cobalt/components/button';
import '@cobalt/components/card';
import '@cobalt/components/icon';
import '@cobalt/components/mode-toggle';
import '@cobalt/components/nav-drawer';
import '@cobalt/components/nav-drawer-item';
import '@cobalt/components/nav-header-bar';
import '@cobalt/components/nav-rail-bar';
import '@cobalt/components/nav-rail-item';
import './styles.css';

document.querySelector('#success-button')?.addEventListener('co-focus', () => {
  console.log('Success');
});
