import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoModeToggle } from './mode-toggle.js';

@Component({
  standalone: true,
  imports: [CoModeToggle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-mode-toggle
      [mode]="mode"
      [size]="size"
      [persist]="persist"
      [storageNamespace]="storageNamespace"
      [disabled]="disabled"
      (coChange)="onChange($event)"
    ></co-mode-toggle>
  `,
})
class TestHostComponent {
  mode: 'light' | 'dark' | 'auto' | undefined;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  persist = true;
  storageNamespace = 'docs';
  disabled = false;
  changeEvent: CustomEvent | null = null;

  onChange(event: CustomEvent) {
    this.changeEvent = event;
  }
}

describe('Angular CoModeToggle', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-mode-toggle');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    localStorage.clear();
    document.documentElement.removeAttribute('data-mode');
    document.documentElement.removeAttribute('data-theme');
  });

  it('syncs properties after change detection', () => {
    host.mode = 'dark';
    host.persist = false;
    fixture.detectChanges();

    expect(el.mode).toBe('dark');
    expect(el.persist).toBe(false);
    expect(el.storageNamespace).toBe('docs');
  });

  it('does not mark mode as explicit when the input is omitted', async () => {
    await el.updateComplete;

    expect(el._hasExplicitMode).toBe(false);
  });

  it('hydrates persisted mode when mode is omitted', async () => {
    fixture.destroy();
    localStorage.setItem('docs-mode', 'dark');

    const persistedFixture = TestBed.createComponent(TestHostComponent);
    persistedFixture.detectChanges();
    const persistedEl = persistedFixture.nativeElement.querySelector('co-mode-toggle');
    await persistedEl.updateComplete;

    expect(persistedEl.mode).toBe('dark');
    expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
  });

  it('emits coChange when co-change event fires', () => {
    const directive = fixture.debugElement
      .query(By.directive(CoModeToggle))
      .injector.get(CoModeToggle);
    let emitted: CustomEvent | undefined;
    directive.coChange.subscribe((event: CustomEvent) => {
      emitted = event;
    });

    el.dispatchEvent(new CustomEvent('co-change', { detail: { mode: 'dark' } }));

    expect(emitted?.detail).toEqual({ mode: 'dark' });
  });
});
