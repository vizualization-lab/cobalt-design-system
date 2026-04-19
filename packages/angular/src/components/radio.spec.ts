import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoRadio } from './radio.js';

@Component({
  standalone: true,
  imports: [CoRadio],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-radio [value]="value" [disabled]="disabled"></co-radio>`,
})
class TestHostComponent {
  value = 'apple';
  disabled = false;
}

describe('Angular CoRadio', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-radio');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs disabled state', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });
});
