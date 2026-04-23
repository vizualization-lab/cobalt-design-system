import { chromium } from 'playwright';

const baseUrl =
  process.env.COBALT_DOCS_AUDIT_BASE_URL || 'http://localhost:5173/cobalt-design-system';
const pages = [
  '/',
  '/foundations/colors',
  '/tokens/',
  '/components/button',
  '/getting-started/developers',
  '/foundations/accessibility',
];

function buildAuditScript() {
  return () => {
    function parse(color) {
      if (!color) return null;
      const match = color.match(/rgba?\(([^)]+)\)/);
      if (!match) return null;
      const channels = match[1].split(',').map((value) => Number(value.trim()));
      return {
        r: channels[0],
        g: channels[1],
        b: channels[2],
        a: channels[3] == null ? 1 : channels[3],
      };
    }

    function luminance(rgb) {
      const channels = [rgb.r, rgb.g, rgb.b].map((value) => {
        const normalized = value / 255;
        return normalized <= 0.03928
          ? normalized / 12.92
          : Math.pow((normalized + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
    }

    function contrastRatio(foreground, background) {
      const foregroundLuminance = luminance(foreground);
      const backgroundLuminance = luminance(background);
      const lighter = Math.max(foregroundLuminance, backgroundLuminance);
      const darker = Math.min(foregroundLuminance, backgroundLuminance);
      return (lighter + 0.05) / (darker + 0.05);
    }

    function resolvedBackground(element) {
      let current = element;
      while (current) {
        const background = parse(getComputedStyle(current).backgroundColor);
        if (background && background.a > 0) return background;
        current = current.parentElement;
      }

      return (
        parse(getComputedStyle(document.body).backgroundColor) || {
          r: 255,
          g: 255,
          b: 255,
          a: 1,
        }
      );
    }

    function isVisible(element) {
      const styles = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return (
        styles.display !== 'none' &&
        styles.visibility !== 'hidden' &&
        Number(styles.opacity) !== 0 &&
        rect.width > 0 &&
        rect.height > 0
      );
    }

    function selector(element) {
      if (element.id) return `#${element.id}`;

      const parts = [];
      let current = element;
      while (current && current.nodeType === 1 && parts.length < 5) {
        let part = current.tagName.toLowerCase();
        const classes = Array.from(current.classList).slice(0, 2);
        if (classes.length > 0) {
          part += `.${classes.join('.')}`;
        }
        parts.unshift(part);
        current = current.parentElement;
      }

      return parts.join(' > ');
    }

    const failures = [];
    const seen = new Set();

    for (const element of Array.from(document.querySelectorAll('body *'))) {
      if (!isVisible(element)) continue;

      const text = (element.textContent || '').replace(/\s+/g, ' ').trim();
      if (text.length < 2 || text.length > 200) continue;

      const hasOwnText = Array.from(element.childNodes).some(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
      );
      if (!hasOwnText && element.children.length > 0) continue;

      const styles = getComputedStyle(element);
      const foreground = parse(styles.color);
      const background = resolvedBackground(element);
      if (!foreground || !background) continue;

      const size = Number.parseFloat(styles.fontSize);
      const weight = Number.parseFloat(styles.fontWeight) || 400;
      const minimum = size >= 24 || (size >= 18.66 && weight >= 700) ? 3 : 4.5;
      const ratio = contrastRatio(foreground, background);
      const key = `${text}|${selector(element)}`;

      if (ratio < minimum && !seen.has(key)) {
        seen.add(key);
        failures.push({
          text,
          selector: selector(element),
          ratio: Number(ratio.toFixed(2)),
          minimum,
          color: styles.color,
          background: `rgb(${background.r}, ${background.g}, ${background.b})`,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
        });
      }
    }

    failures.sort((a, b) => a.ratio - b.ratio);
    return failures.slice(0, 20);
  };
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
const audit = buildAuditScript();
const results = [];

try {
  const baseRoot = baseUrl.replace(/\/$/, '');
  for (const currentPath of pages) {
    const url = `${baseRoot}${currentPath}`;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => {
      localStorage.setItem('cobalt-theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await page.reload({ waitUntil: 'networkidle' });
    const failures = await page.evaluate(audit);
    results.push({ path: currentPath, failures });
  }
} finally {
  await browser.close();
}

const failingPages = results.filter((result) => result.failures.length > 0);

if (failingPages.length > 0) {
  console.error(JSON.stringify(failingPages, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify(
    results.map((result) => ({ path: result.path, failures: result.failures.length })),
    null,
    2,
  ),
);
