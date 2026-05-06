import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoCheckboxIndeterminate } from './checkbox-indeterminate.js';

@Component({
  standalone: true,
  imports: [CoCheckboxIndeterminate],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-checkbox-indeterminate
      [value]="value"
      [checked]="checked"
      [indeterminate]="indeterminate"
      [mixedState]="mixedState"
      [disabled]="disabled"
    >
      Select all
    </co-checkbox-indeterminate>
  `,
})
class TestHostComponent {
  value = 'all';
  checked = false;
  indeterminate = false;
  mixedState = false;
  disabled = false;
}

describe('Angular CoCheckboxIndeterminate', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-checkbox-indeterminate');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs checkbox state properties', async () => {
    host.value = 'everything';
    host.checked = true;
    host.indeterminate = true;
    host.mixedState = true;
    host.disabled = true;
    fixture.detectChanges();
    await el.updateComplete;

    expect(el.choiceValue).toBe('everything');
    expect(el.checked).toBe(true);
    expect(el.indeterminate).toBe(true);
    expect(el.mixedState).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
