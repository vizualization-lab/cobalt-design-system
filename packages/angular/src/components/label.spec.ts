import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoLabel } from './label.js';

@Component({
  standalone: true,
  imports: [CoLabel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-label
      [htmlFor]="htmlFor"
      [required]="required"
      [optional]="optional"
      [optionalLabel]="optionalLabel"
    >
      Email address
    </co-label>
  `,
})
class TestHostComponent {
  htmlFor = 'email';
  required = false;
  optional = false;
  optionalLabel = '(optional)';
}

describe('Angular CoLabel', () => {
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
    el = fixture.nativeElement.querySelector('co-label');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs default properties on init', () => {
    expect(el.htmlFor).toBe('email');
    expect(el.required).toBe(false);
    expect(el.optional).toBe(false);
    expect(el.optionalLabel).toBe('(optional)');
  });

  it('syncs boolean properties to the element', () => {
    host.required = true;
    host.optional = true;
    fixture.detectChanges();

    expect(el.required).toBe(true);
    expect(el.optional).toBe(true);
  });

  it('syncs text properties to the element', () => {
    host.htmlFor = 'billing-email';
    host.optionalLabel = 'Not required';
    fixture.detectChanges();

    expect(el.htmlFor).toBe('billing-email');
    expect(el.optionalLabel).toBe('Not required');
  });
});
