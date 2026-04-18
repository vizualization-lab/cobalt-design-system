import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoButtonIcon } from './button-icon.js';

@Component({
  standalone: true,
  imports: [CoButtonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-button-icon
      [name]="name"
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [label]="label"
      [labelPosition]="labelPosition"
      [attr.aria-label]="ariaLabel"
      (coFocus)="onFocus($event)"
      (coBlur)="onBlur($event)"
    >
    </co-button-icon>
  `,
})
class TestHostComponent {
  name = 'star';
  variant: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' = 'primary';
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  disabled = false;
  label: string | undefined = undefined;
  labelPosition: 'top' | 'bottom' = 'bottom';
  ariaLabel = 'Star';

  focusEvent: CustomEvent | null = null;
  blurEvent: CustomEvent | null = null;

  onFocus(e: CustomEvent) {
    this.focusEvent = e;
  }
  onBlur(e: CustomEvent) {
    this.blurEvent = e;
  }
}

describe('Angular CoButtonIcon', () => {
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
    el = fixture.nativeElement.querySelector('co-button-icon');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs properties after change detection', () => {
    host.name = 'delete';
    host.variant = 'danger';
    host.size = 'lg';
    fixture.detectChanges();
    expect(el.name).toBe('delete');
    expect(el.variant).toBe('danger');
    expect(el.size).toBe('lg');
  });

  it('syncs label property', () => {
    host.label = 'Favorite';
    fixture.detectChanges();
    expect(el.label).toBe('Favorite');
  });

  it('syncs disabled state', () => {
    host.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });
});
