import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
import '@cobalt/tokens/themes/default';
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
