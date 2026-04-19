import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoRadioGroup } from './radio-group.js';

@Component({
  standalone: true,
  imports: [CoRadioGroup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-radio-group [name]="name" [disabled]="disabled"></co-radio-group>`,
})
class TestHostComponent {
  name = 'fruit';
  disabled = false;
}

describe('Angular CoRadioGroup', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-radio-group');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs properties', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });
});
