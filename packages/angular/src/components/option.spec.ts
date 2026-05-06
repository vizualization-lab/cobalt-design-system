import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoOption } from './option.js';

@Component({
  standalone: true,
  imports: [CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-option
      [value]="value"
      [choiceValue]="choiceValue"
      [checked]="checked"
      [disabled]="disabled"
      [active]="active"
    >
      Apple
    </co-option>
  `,
})
class TestHostComponent {
  value = 'apple';
  choiceValue?: unknown;
  checked = false;
  disabled = false;
  active = false;
}

describe('Angular CoOption', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-option');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs option properties from the option alias export', async () => {
    host.value = 'pear';
    host.checked = true;
    host.disabled = true;
    host.active = true;
    fixture.detectChanges();
    await el.updateComplete;

    expect(el.value).toBe('pear');
    expect(el.checked).toBe(true);
    expect(el.disabled).toBe(true);
    expect(el.active).toBe(true);

    host.choiceValue = { id: 'pear' };
    fixture.detectChanges();
    await el.updateComplete;
    expect(el.choiceValue).toEqual({ id: 'pear' });
  });
});
