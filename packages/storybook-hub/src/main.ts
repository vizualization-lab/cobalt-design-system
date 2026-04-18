import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
import '@cobalt/tokens/css/dark';
import { componentLinks, frameworkTargets } from '@cobalt/storybook-fixtures';
import './styles.css';

const isDev = import.meta.env.DEV;

function frameworkHref(target: (typeof frameworkTargets)[number]) {
  return isDev ? target.devUrl : target.staticPath;
}

function componentHref(target: (typeof frameworkTargets)[number], componentPath: string) {
  const base = frameworkHref(target).replace(/\/$/, '');
  return `${base}/?path=/story/components-${componentPath}--overview`;
}

const app = document.querySelector('#app');

if (!app) {
  throw new Error('Missing #app root');
}

app.innerHTML = `
  <section class="hub-shell">
    <header class="hub-header">
      <div>
        <p class="hub-eyebrow">Cobalt validation</p>
        <h1>Kitchen sink demos</h1>
        <p class="hub-intro">
          Review each Cobalt component in the framework environment that ships it.
        </p>
      </div>
      <button class="hub-theme" type="button" aria-pressed="false">Dark mode</button>
    </header>

    <section class="hub-section" aria-labelledby="frameworks-heading">
      <h2 id="frameworks-heading">Frameworks</h2>
      <div class="hub-frameworks">
        ${frameworkTargets
          .map(
            (target) => `
              <a class="hub-framework" href="${frameworkHref(target)}">
                <span class="hub-framework-mark">${target.label.charAt(0)}</span>
                <span>
                  <strong>${target.label}</strong>
                  <span>${target.description}</span>
                </span>
              </a>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="hub-section" aria-labelledby="components-heading">
      <h2 id="components-heading">Components</h2>
      <div class="hub-components">
        ${componentLinks
          .map(
            (component) => `
              <article class="hub-component">
                <div>
                  <h3>${component.label}</h3>
                  <p>${component.tag}</p>
                </div>
                <div class="hub-component-links">
                  ${frameworkTargets
                    .map(
                      (target) => `
                        <a href="${componentHref(target, component.path)}">${target.label}</a>
                      `,
                    )
                    .join('')}
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  </section>
`;

const themeButton = document.querySelector<HTMLButtonElement>('.hub-theme');

themeButton?.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  themeButton.setAttribute('aria-pressed', String(next === 'dark'));
  themeButton.textContent = next === 'dark' ? 'Light mode' : 'Dark mode';
});
