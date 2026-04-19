import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoCheckbox } from './checkbox.js';

@Component({
  standalone: true,
  imports: [CoCheckbox],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-checkbox [value]="value" [disabled]="disabled"></co-checkbox>`,
})
class TestHostComponent {
  value = 'accept';
  disabled = false;
}

describe('Angular CoCheckbox', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-checkbox');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs disabled state', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });
});
