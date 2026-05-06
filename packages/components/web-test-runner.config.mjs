import { playwrightLauncher } from '@web/test-runner-playwright';
import { a11yReporterPlugin } from './wtr-a11y-reporter.mjs';

export default {
  files: 'dist/**/*.test.js',
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })],
  testRunnerHtml: (testRunnerImport) => `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/node_modules/@cobalt/tokens/dist/css/tokens.css" />
      </head>
      <body>
        <script type="module" src="${testRunnerImport}"></script>
      </body>
    </html>
  `,
  testFramework: {
    config: {
      timeout: 10000,
    },
  },
  plugins: [a11yReporterPlugin()],
  coverageConfig: {
    include: ['dist/components/**/*.js'],
    exclude: ['dist/**/*.test.js', 'dist/test-utils/**'],
    threshold: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },
  },
};
