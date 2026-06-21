import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
import '@cobalt/tokens/themes/default';
import '@cobalt/components/pre-upgrade.css';
import '@cobalt/components/banner';
import '@cobalt/components/button';
import '@cobalt/components/card';
import './styles.css';

document.querySelector('#success-button')?.addEventListener('co-focus', () => {
  console.log('Success');
});
