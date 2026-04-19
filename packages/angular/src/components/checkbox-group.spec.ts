import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoCheckboxGroup } from './checkbox-group.js';

@Component({
  standalone: true,
  imports: [CoCheckboxGroup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-checkbox-group [name]="name" [disabled]="disabled"></co-checkbox-group>`,
})
class TestHostComponent {
  name = 'toppings';
  disabled = false;
}

describe('Angular CoCheckboxGroup', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-checkbox-group');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs disabled state', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });
});
