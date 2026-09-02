#!/usr/bin/env node

import { spawn, type ChildProcess } from 'node:child_process';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, type Browser, type Page } from 'playwright';
import { PDFDocument, StandardFonts, rgb, type PDFPage } from 'pdf-lib';
import { flatNavItems } from '../.vitepress/theme/navigation';
import {
  calculateBookLayout,
  groupEntries,
  parseOutputArgument,
  type BookLayout,
  type PrintEntry,
  type RenderedEntry,
} from './pdf/layout';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(docsRoot, '../..');
const printCssPath = path.resolve(__dirname, 'pdf/print.css');
const defaultOutput = path.resolve(repoRoot, 'output/pdf/cobalt-design-system.pdf');
const outputPath = path.resolve(
  process.cwd(),
  parseOutputArgument(process.argv.slice(2), defaultOutput),
);
const docsBase = normalizeBase(process.env.COBALT_DOCS_BASE || '/cobalt-design-system/');
const componentPackage = JSON.parse(
  await readFile(path.resolve(repoRoot, 'packages/components/package.json'), 'utf8'),
) as { version: string };
const generatedAt = new Date();

const entries: PrintEntry[] = flatNavItems.map((item) => ({
  group: item.group,
  title: item.text,
  link: item.link,
}));

assertCanonicalEntries(entries);

const tempRoot = await import('node:fs/promises').then(({ mkdtemp }) =>
  mkdtemp(path.join(tmpdir(), 'cobalt-docs-pdf-')),
);
let previewServer: ChildProcess | undefined;
let browser: Browser | undefined;

try {
  const port = await findOpenPort();
  const origin = `http://127.0.0.1:${port}`;
  const baseRoot = `${origin}${docsBase.slice(0, -1)}`;

  previewServer = startPreviewServer(port);
  await waitForServer(`${baseRoot}/`);

  browser = await launchBrowser();
  const renderedEntries: Array<RenderedEntry | undefined> = new Array(entries.length);
  const routeBuffers = new Map<string, Uint8Array>();
  let nextEntryIndex = 0;

  async function renderWorker() {
    while (nextEntryIndex < entries.length) {
      const index = nextEntryIndex;
      nextEntryIndex += 1;
      const entry = entries[index];
      process.stdout.write(
        `[${String(index + 1).padStart(String(entries.length).length, '0')}/${entries.length}] ${entry.link}\n`,
      );
      const routePage = await browser!.newPage({ viewport: { width: 1440, height: 1200 } });
      try {
        await configureRoutePage(routePage);
        const rendered = await renderRoute(routePage, baseRoot, entry);
        renderedEntries[index] = {
          ...entry,
          heading: rendered.heading,
          pageCount: rendered.pageCount,
        };
        routeBuffers.set(entry.link, rendered.bytes);
        await writeFile(
          path.join(tempRoot, `${String(index + 1).padStart(3, '0')}.pdf`),
          rendered.bytes,
        );
      } finally {
        await routePage.close();
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(3, entries.length) }, () => renderWorker()));
  const completedEntries = renderedEntries.map((entry, index) => {
    if (!entry) throw new Error(`Route ${entries[index].link} did not produce a PDF segment`);
    return entry;
  });

  const templatePage = await browser.newPage({ viewport: { width: 816, height: 1056 } });
  const coverBuffer = await renderHtmlPdf(
    templatePage,
    coverHtml(componentPackage.version, generatedAt),
  );

  let layout = calculateBookLayout(completedEntries, 1);
  let tocBuffer = await renderHtmlPdf(templatePage, tocHtml(layout));
  let tocPageCount = await countPdfPages(tocBuffer);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    layout = calculateBookLayout(completedEntries, tocPageCount);
    tocBuffer = await renderHtmlPdf(templatePage, tocHtml(layout));
    const nextCount = await countPdfPages(tocBuffer);
    if (nextCount === tocPageCount) break;
    tocPageCount = nextCount;
  }

  layout = calculateBookLayout(completedEntries, await countPdfPages(tocBuffer));
  const dividerBuffers = new Map<string, Uint8Array>();
  for (const group of layout.groups) {
    dividerBuffers.set(group.label, await renderHtmlPdf(templatePage, dividerHtml(group.label)));
  }

  const finalBytes = await composeBook({
    coverBuffer,
    tocBuffer,
    dividerBuffers,
    routeBuffers,
    layout,
    version: componentPackage.version,
    generatedAt,
  });

  await verifyPdf(finalBytes, layout, completedEntries);
  await mkdir(path.dirname(outputPath), { recursive: true });
  const stagedPath = `${outputPath}.${process.pid}.tmp`;
  await writeFile(stagedPath, finalBytes);
  await rename(stagedPath, outputPath);

  console.log(`Generated ${layout.totalPages} pages at ${outputPath}`);
} finally {
  await browser?.close();
  previewServer?.kill('SIGTERM');
  await rm(tempRoot, { recursive: true, force: true });
}

function normalizeBase(base: string): string {
  const trimmed = base.trim();
  if (!trimmed || trimmed === '/') return '/';
  const leading = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return leading.endsWith('/') ? leading : `${leading}/`;
}

function assertCanonicalEntries(items: PrintEntry[]) {
  if (items.length === 0) throw new Error('The canonical documentation navigation is empty');
  const links = new Set<string>();
  for (const item of items) {
    if (!item.group || !item.title || !item.link.startsWith('/')) {
      throw new Error(`Invalid navigation entry: ${JSON.stringify(item)}`);
    }
    if (links.has(item.link)) throw new Error(`Duplicate canonical route: ${item.link}`);
    links.add(item.link);
  }
}

async function findOpenPort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        server.close();
        reject(new Error('Unable to allocate a preview port'));
        return;
      }
      const port = address.port;
      server.close((error) => (error ? reject(error) : resolve(port)));
    });
  });
}

function startPreviewServer(port: number): ChildProcess {
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
  const child = spawn(
    command,
    ['exec', 'vitepress', 'preview', '--host', '127.0.0.1', '--port', String(port)],
    { cwd: docsRoot, stdio: ['ignore', 'pipe', 'pipe'] },
  );
  child.stdout?.on('data', (chunk) => process.stdout.write(chunk));
  child.stderr?.on('data', (chunk) => process.stderr.write(chunk));
  return child;
}

async function waitForServer(url: string, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError: unknown;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
      lastError = new Error(`Preview returned ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for ${url}`, { cause: lastError });
}

async function launchBrowser(): Promise<Browser> {
  try {
    return await chromium.launch({ headless: true });
  } catch (error) {
    throw new Error(
      'Chromium is not installed for Playwright. Run `pnpm --filter @cobalt/docs exec playwright install chromium` and retry.',
      { cause: error },
    );
  }
}

async function configureRoutePage(page: Page) {
  await page.emulateMedia({ media: 'print', colorScheme: 'light', reducedMotion: 'reduce' });
  await page.addInitScript(() => {
    localStorage.setItem('cobalt-theme', 'default');
    localStorage.setItem('cobalt-mode', 'light');
  });
}

async function renderRoute(
  page: Page,
  baseRoot: string,
  entry: PrintEntry,
): Promise<{ bytes: Uint8Array; pageCount: number; heading: string }> {
  const errors: string[] = [];
  const onPageError = (error: Error) => errors.push(`page error: ${error.stack || error.message}`);
  const onConsole = (message: { type(): string; text(): string }) => {
    if (message.type() === 'error') errors.push(`console error: ${message.text()}`);
  };
  const onRequestFailed = (request: { url(): string; failure(): { errorText: string } | null }) => {
    if (request.url().startsWith(baseRoot)) {
      errors.push(
        `request failed: ${request.url()} (${request.failure()?.errorText ?? 'unknown'})`,
      );
    }
  };
  const onResponse = (response: { url(): string; status(): number }) => {
    if (response.url().startsWith(baseRoot) && response.status() >= 400) {
      errors.push(`response ${response.status()}: ${response.url()}`);
    }
  };

  page.on('pageerror', onPageError);
  page.on('console', onConsole);
  page.on('requestfailed', onRequestFailed);
  page.on('response', onResponse);

  try {
    const separator = entry.link.includes('?') ? '&' : '?';
    const response = await page.goto(`${baseRoot}${entry.link}${separator}print=1`, {
      waitUntil: 'networkidle',
      timeout: 60_000,
    });
    if (!response?.ok())
      throw new Error(`Unable to render ${entry.link}: HTTP ${response?.status()}`);

    await page.addStyleTag({ path: printCssPath });
    await page.waitForTimeout(100);
    await waitForPrintReferences(page);

    const prepared = await page.evaluate(async () => {
      document.documentElement.setAttribute('data-theme', 'default');
      document.documentElement.setAttribute('data-mode', 'light');
      document.documentElement.setAttribute('data-pdf', 'true');

      document.querySelectorAll('details').forEach((details) => {
        details.open = true;
      });

      document.querySelectorAll('.code-tabs').forEach((tabs) => {
        const labels = [...tabs.querySelectorAll<HTMLElement>('.code-tab')].map((tab) =>
          (tab.textContent ?? '').trim(),
        );
        tabs.querySelectorAll<HTMLElement>('.code-tab-panel').forEach((panel, index) => {
          panel.dataset.pdfLabel = labels[index] || `Example ${index + 1}`;
        });
      });

      document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
        const url = new URL(anchor.href, window.location.href);
        if (url.origin === window.location.origin) anchor.removeAttribute('href');
      });

      await document.fonts.ready;
      const images = [...document.images];
      await Promise.all(
        images.map(
          (image) =>
            new Promise<void>((resolve, reject) => {
              if (image.complete) {
                if (image.naturalWidth > 0) resolve();
                else reject(new Error(`Broken image: ${image.currentSrc || image.src}`));
                return;
              }
              image.addEventListener('load', () => resolve(), { once: true });
              image.addEventListener(
                'error',
                () => reject(new Error(`Broken image: ${image.currentSrc || image.src}`)),
                { once: true },
              );
            }),
        ),
      );

      const undefinedElements = [...document.querySelectorAll<HTMLElement>('*')]
        .map((element) => element.localName)
        .filter((name, index, all) => name.includes('-') && all.indexOf(name) === index)
        .filter((name) => !customElements.get(name));

      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      );

      return {
        heading: (document.querySelector('article h1')?.textContent ?? '').trim(),
        undefinedElements,
        imageCount: images.length,
        codeTabs: document.querySelectorAll('.code-tab-panel').length,
      };
    });

    if (!prepared.heading) throw new Error(`No document H1 found for ${entry.link}`);
    if (prepared.undefinedElements.length > 0) {
      throw new Error(
        `Undefined custom elements on ${entry.link}: ${prepared.undefinedElements.join(', ')}`,
      );
    }
    if (errors.length > 0)
      throw new Error(`${entry.link} did not render cleanly:\n${errors.join('\n')}`);

    const bytes = await page.pdf({
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
    });
    return { bytes, pageCount: await countPdfPages(bytes), heading: prepared.heading };
  } finally {
    page.off('pageerror', onPageError);
    page.off('console', onConsole);
    page.off('requestfailed', onRequestFailed);
    page.off('response', onResponse);
  }
}

async function waitForPrintReferences(page: Page) {
  if (await page.locator('.token-browser-wrapper, [data-pdf-full-token-reference]').count()) {
    await page.waitForSelector('[data-pdf-token-row]', { timeout: 15_000 });
  }
  if (await page.locator('.icon-gallery').count()) {
    await page.waitForFunction(
      () => document.querySelectorAll('.icon-gallery .icon-cell').length > 0,
      undefined,
      { timeout: 15_000 },
    );
  }
}

async function renderHtmlPdf(page: Page, html: string): Promise<Uint8Array> {
  await page.setContent(html, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print', colorScheme: 'light', reducedMotion: 'reduce' });
  await page.evaluate(() => document.fonts.ready);
  return page.pdf({
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
}

function baseTemplate(title: string, content: string, extraCss = ''): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(title)}</title>
  <style>
    @page { size: Letter portrait; margin: 0.65in 0.62in 0.7in; }
    :root { --ink: #17243a; --muted: #5a6f8f; --blue: #154bcc; --pale: #edf3ff; }
    * { box-sizing: border-box; }
    html, body { margin: 0; background: #fff; color: var(--ink); font-family: Inter, Arial, sans-serif; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    body { font-size: 11px; line-height: 1.45; }
    ${extraCss}
  </style>
</head>
<body>${content}</body>
</html>`;
}

function coverHtml(version: string, date: Date): string {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
  return baseTemplate(
    'Cobalt Design System',
    `<main class="cover">
      <div class="mark" aria-hidden="true">C</div>
      <p class="eyebrow">Printable documentation</p>
      <h1>Cobalt<br />Design System</h1>
      <p class="subtitle">A complete reference for foundations, components, patterns, guidance, and contribution.</p>
      <div class="meta"><span>Version ${escapeHtml(version)}</span><span>${escapeHtml(formattedDate)}</span></div>
    </main>`,
    `.cover { min-height: 9.25in; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
     .cover::after { content: ''; position: absolute; width: 5.4in; height: 5.4in; border: 1px solid #b9cdf7; transform: rotate(30deg); right: -2.3in; top: 0.4in; background: linear-gradient(135deg, #f4f7ff, #dbe7ff); }
     .mark { width: 54px; height: 54px; display: grid; place-items: center; border-radius: 14px; background: var(--blue); color: white; font-size: 28px; font-weight: 800; position: relative; z-index: 1; }
     .eyebrow { margin: 42px 0 14px; color: var(--blue); font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
     h1 { margin: 0; max-width: 5.5in; font-size: 52px; line-height: 1.02; letter-spacing: -.04em; position: relative; z-index: 1; }
     .subtitle { max-width: 4.7in; margin: 24px 0 80px; color: var(--muted); font-size: 17px; line-height: 1.5; }
     .meta { display: flex; gap: 26px; color: var(--muted); font-size: 10px; border-top: 1px solid #d4dfee; padding-top: 14px; }`,
  );
}

function tocHtml(layout: BookLayout): string {
  const groups = layout.groups
    .map(
      (group) => `<section class="toc-group">
        <div class="toc-group-title"><span>${escapeHtml(group.label)}</span><span>${group.dividerPage}</span></div>
        ${group.entries
          .map(
            (entry) =>
              `<div class="toc-entry"><span>${escapeHtml(entry.heading)}</span><span class="leader"></span><span>${entry.startPage}</span></div>`,
          )
          .join('')}
      </section>`,
    )
    .join('');
  return baseTemplate(
    'Contents',
    `<main><p class="eyebrow">Cobalt Design System</p><h1>Contents</h1>${groups}</main>`,
    `.eyebrow { margin: 0 0 4px; color: var(--blue); font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
     h1 { margin: 0 0 30px; font-size: 30px; }
     .toc-group { margin: 0 0 19px; break-inside: avoid; }
     .toc-group-title { display: flex; justify-content: space-between; padding: 6px 8px; background: var(--pale); color: #17366e; font-weight: 750; font-size: 11px; }
     .toc-entry { display: flex; align-items: baseline; gap: 6px; padding: 4px 8px 2px 18px; color: #344b6e; font-size: 9px; }
     .leader { flex: 1; border-bottom: 1px dotted #a9b8cf; transform: translateY(-2px); }`,
  );
}

function dividerHtml(group: string): string {
  return baseTemplate(
    group,
    `<main class="divider"><p>Cobalt Design System</p><h1>${escapeHtml(group)}</h1><div class="rule"></div></main>`,
    `.divider { min-height: 9.25in; display: flex; flex-direction: column; justify-content: center; }
     p { margin: 0 0 12px; color: var(--blue); font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
     h1 { margin: 0; color: #17366e; font-size: 44px; line-height: 1.08; }
     .rule { width: 1.1in; height: 5px; margin-top: 28px; border-radius: 3px; background: var(--blue); }`,
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function countPdfPages(bytes: Uint8Array): Promise<number> {
  return (await PDFDocument.load(bytes)).getPageCount();
}

async function composeBook(options: {
  coverBuffer: Uint8Array;
  tocBuffer: Uint8Array;
  dividerBuffers: Map<string, Uint8Array>;
  routeBuffers: Map<string, Uint8Array>;
  layout: BookLayout;
  version: string;
  generatedAt: Date;
}): Promise<Uint8Array> {
  const document = await PDFDocument.create();
  const pageGroups = new Map<number, string>();

  await appendPdf(document, options.coverBuffer);
  await appendPdf(document, options.tocBuffer);

  for (const group of options.layout.groups) {
    await appendPdf(document, requiredBuffer(options.dividerBuffers, group.label));
    for (const entry of group.entries) {
      const start = document.getPageCount();
      await appendPdf(document, requiredBuffer(options.routeBuffers, entry.link));
      for (let index = start; index < document.getPageCount(); index += 1) {
        pageGroups.set(index, group.label);
      }
    }
  }

  if (document.getPageCount() !== options.layout.totalPages) {
    throw new Error(
      `Page accounting mismatch: expected ${options.layout.totalPages}, composed ${document.getPageCount()}`,
    );
  }

  const font = await document.embedFont(StandardFonts.Helvetica);
  addPageFurniture(document.getPages(), font, pageGroups);
  document.setTitle('Cobalt Design System - Printable Documentation');
  document.setSubject('Complete printable reference for the Cobalt Design System');
  document.setAuthor('Cobalt Design System');
  document.setCreator('Cobalt documentation PDF generator');
  document.setProducer('Playwright and pdf-lib');
  document.setKeywords(['Cobalt', 'design system', 'documentation', `version ${options.version}`]);
  document.setCreationDate(options.generatedAt);
  document.setModificationDate(options.generatedAt);
  return document.save({ useObjectStreams: true, addDefaultPage: false });
}

async function appendPdf(destination: PDFDocument, bytes: Uint8Array) {
  const source = await PDFDocument.load(bytes);
  const pages = await destination.copyPages(source, source.getPageIndices());
  pages.forEach((page) => destination.addPage(page));
}

function requiredBuffer(map: Map<string, Uint8Array>, key: string): Uint8Array {
  const value = map.get(key);
  if (!value) throw new Error(`Missing rendered PDF segment: ${key}`);
  return value;
}

function addPageFurniture(
  pages: PDFPage[],
  font: Awaited<ReturnType<PDFDocument['embedFont']>>,
  pageGroups: Map<number, string>,
) {
  const color = rgb(0.35, 0.43, 0.56);
  pages.forEach((page, index) => {
    if (index === 0) return;
    const { width, height } = page.getSize();
    const pageNumber = String(index);
    const numberWidth = font.widthOfTextAtSize(pageNumber, 8);
    page.drawText(pageNumber, { x: (width - numberWidth) / 2, y: 18, size: 8, font, color });

    const group = pageGroups.get(index);
    if (group) {
      page.drawText(`Cobalt Design System  /  ${group}`, {
        x: 42,
        y: height - 25,
        size: 7.5,
        font,
        color,
      });
      page.drawLine({
        start: { x: 42, y: height - 30 },
        end: { x: width - 42, y: height - 30 },
        thickness: 0.5,
        color: rgb(0.82, 0.86, 0.92),
      });
    }
  });
}

async function verifyPdf(bytes: Uint8Array, layout: BookLayout, renderedEntries: RenderedEntry[]) {
  const document = await PDFDocument.load(bytes);
  if (document.getPageCount() !== layout.totalPages) {
    throw new Error(`Final PDF page count changed during save: ${document.getPageCount()}`);
  }
  if (!document.getTitle()?.includes('Cobalt Design System')) {
    throw new Error('Final PDF title metadata is missing');
  }

  const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdf = await getDocument({ data: bytes.slice(), useSystemFonts: true }).promise;
  const text: string[] = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    text.push(content.items.map((item) => ('str' in item ? item.str : '')).join(' '));
  }
  if ('destroy' in pdf && typeof pdf.destroy === 'function') await pdf.destroy();
  else if ('cleanup' in pdf && typeof pdf.cleanup === 'function') await pdf.cleanup();

  const normalizedText = normalizeText(text.join(' '));
  const missingHeadings = renderedEntries
    .map((entry) => entry.heading)
    .filter((heading) => !normalizedText.includes(normalizeText(heading)));
  if (missingHeadings.length > 0) {
    throw new Error(`Final PDF is missing route headings: ${missingHeadings.join(', ')}`);
  }
}

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
