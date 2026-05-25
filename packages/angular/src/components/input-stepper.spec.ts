import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoInputStepper } from './input-stepper.js';

@Component({
  standalone: true,
  imports: [CoInputStepper],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-input-stepper
      [size]="size"
      [danger]="danger"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [required]="required"
      [requiredMessage]="requiredMessage"
      [label]="label"
      [helpText]="helpText"
      [name]="name"
      [placeholder]="placeholder"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      (coInput)="onInput($event)"
      (coChange)="onChange($event)"
    ></co-input-stepper>
  `,
})
class TestHostComponent {
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  danger = false;
  disabled = false;
  readOnly = false;
  required = false;
  requiredMessage = '';
  label = 'Quantity';
  helpText = '';
  name = '';
  placeholder = '';
  value = '';
  min?: number;
  max?: number;
  step?: number;
  inputEvent?: CustomEvent;
  changeEvent?: CustomEvent;

  onInput(e: CustomEvent) {
    this.inputEvent = e;
  }

  onChange(e: CustomEvent) {
    this.changeEvent = e;
  }
}

describe('Angular CoInputStepper', () => {
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
    el = fixture.nativeElement.querySelector('co-input-stepper');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs default properties on init', () => {
    expect(el.size).toBe('md');
    expect(el.danger).toBe(false);
    expect(el.disabled).toBe(false);
    expect(el.readOnly).toBe(false);
    expect(el.required).toBe(false);
    expect(el.label).toBe('Quantity');
  });

  it('syncs numeric properties to the element', () => {
    host.min = 0;
    host.max = 10;
    host.step = 2;
    fixture.detectChanges();
    expect(el.min).toBe(0);
    expect(el.max).toBe(10);
    expect(el.step).toBe(2);
  });

  it('syncs state properties to the element', () => {
    host.size = 'lg';
    host.danger = true;
    host.disabled = true;
    fixture.detectChanges();
    expect(el.size).toBe('lg');
    expect(el.danger).toBe(true);
    expect(el.disabled).toBe(true);
  });

  it('emits coInput when co-input event fires', () => {
    const directive = fixture.debugElement
      .query(By.directive(CoInputStepper))
      .injector.get(CoInputStepper);
    let emitted: CustomEvent | undefined;
    directive.coInput.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-input', { detail: { value: '2' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });

  it('emits coChange when co-change event fires', () => {
    const directive = fixture.debugElement
      .query(By.directive(CoInputStepper))
      .injector.get(CoInputStepper);
    let emitted: CustomEvent | undefined;
    directive.coChange.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-change', { detail: { value: '2' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });
});
