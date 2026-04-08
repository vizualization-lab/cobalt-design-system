import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoButton } from './button.js';

@Component({
  standalone: true,
  imports: [CoButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [type]="type"
      [href]="href"
      [target]="target"
      (coFocus)="onFocus($event)"
      (coBlur)="onBlur($event)"
    >
      Test
    </co-button>
  `,
})
class TestHostComponent {
  variant: 'primary' | 'secondary' | 'error' | 'success' = 'primary';
  size: 'sm' | 'md' | 'lg' = 'md';
  disabled = false;
  loading = false;
  type: 'submit' | 'reset' | 'button' = 'button';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  focusEvent?: CustomEvent;
  blurEvent?: CustomEvent;

  onFocus(e: CustomEvent) {
    this.focusEvent = e;
  }
  onBlur(e: CustomEvent) {
    this.blurEvent = e;
  }
}

describe('Angular CoButton', () => {
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
    el = fixture.nativeElement.querySelector('co-button');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs default properties on init', () => {
    expect(el.variant).toBe('primary');
    expect(el.size).toBe('md');
    expect(el.disabled).toBe(false);
    expect(el.loading).toBe(false);
  });

  it('syncs variant property to the element', () => {
    host.variant = 'error';
    fixture.detectChanges();
    expect(el.variant).toBe('error');
  });

  it('syncs size property to the element', () => {
    host.size = 'lg';
    fixture.detectChanges();
    expect(el.size).toBe('lg');
  });

  it('syncs disabled property to the element', () => {
    host.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });

  it('syncs loading property to the element', () => {
    host.loading = true;
    fixture.detectChanges();
    expect(el.loading).toBe(true);
  });

  it('syncs href property to the element', () => {
    host.href = 'https://example.com';
    fixture.detectChanges();
    expect(el.href).toBe('https://example.com');
  });

  it('syncs properties on changes', () => {
    host.variant = 'success';
    fixture.detectChanges();
    expect(el.variant).toBe('success');
  });

  it('emits coFocus when co-focus event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoButton)).injector.get(CoButton);
    let emitted: CustomEvent | undefined;
    directive.coFocus.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-focus'));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });

  it('emits coBlur when co-blur event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoButton)).injector.get(CoButton);
    let emitted: CustomEvent | undefined;
    directive.coBlur.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-blur'));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });

  it('preserves aria-label set on the element', () => {
    el.setAttribute('aria-label', 'Close');
    fixture.detectChanges();
    expect(el.getAttribute('aria-label')).toBe('Close');
  });
});
