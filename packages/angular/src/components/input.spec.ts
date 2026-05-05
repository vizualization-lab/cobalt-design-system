import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Validator } from '@cobalt/components/validation';
import { CoInput } from './input.js';

class AlwaysValid extends Validator {
  override execute() {
    return false;
  }
}

@Component({
  standalone: true,
  imports: [CoInput],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-input
      [size]="size"
      [danger]="danger"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [required]="required"
      [requiredMessage]="requiredMessage"
      [emailMessage]="emailMessage"
      [pattern]="pattern"
      [patternMessage]="patternMessage"
      [minLength]="minLength"
      [minLengthMessage]="minLengthMessage"
      [maxLength]="maxLength"
      [maxLengthMessage]="maxLengthMessage"
      [label]="label"
      [helpText]="helpText"
      [name]="name"
      [type]="type"
      [placeholder]="placeholder"
      [value]="value"
      [validators]="validators"
      (coFocus)="onFocus($event)"
      (coBlur)="onBlur($event)"
      (coInput)="onInput($event)"
      (coChange)="onChange($event)"
    ></co-input>
  `,
})
class TestHostComponent {
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  danger = false;
  disabled = false;
  readOnly = false;
  required = false;
  requiredMessage = '';
  emailMessage = '';
  pattern = '';
  patternMessage = '';
  minLength?: number;
  minLengthMessage = '';
  maxLength?: number;
  maxLengthMessage = '';
  label = 'Email';
  helpText = '';
  name = '';
  type = 'text';
  placeholder = '';
  value = '';
  validators?: Validator[];
  focusEvent?: CustomEvent;
  blurEvent?: CustomEvent;
  inputEvent?: CustomEvent;
  changeEvent?: CustomEvent;

  onFocus(e: CustomEvent) {
    this.focusEvent = e;
  }
  onBlur(e: CustomEvent) {
    this.blurEvent = e;
  }
  onInput(e: CustomEvent) {
    this.inputEvent = e;
  }
  onChange(e: CustomEvent) {
    this.changeEvent = e;
  }
}

describe('Angular CoInput', () => {
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
    el = fixture.nativeElement.querySelector('co-input');
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
    expect(el.label).toBe('Email');
  });

  it('syncs size property to the element', () => {
    host.size = 'lg';
    fixture.detectChanges();
    expect(el.size).toBe('lg');
  });

  it('syncs danger property to the element', () => {
    host.danger = true;
    fixture.detectChanges();
    expect(el.danger).toBe(true);
  });

  it('syncs readonly property to the element', () => {
    host.readOnly = true;
    fixture.detectChanges();
    expect(el.readOnly).toBe(true);
  });

  it('syncs text properties to the element', () => {
    host.placeholder = 'name@example.com';
    host.name = 'email';
    fixture.detectChanges();
    expect(el.placeholder).toBe('name@example.com');
    expect(el.name).toBe('email');
  });

  it('syncs validation properties to the element', () => {
    const validators = [new AlwaysValid()];
    host.requiredMessage = 'Enter a value.';
    host.emailMessage = 'Enter an email.';
    host.pattern = '[a-z]+';
    host.patternMessage = 'Use lowercase letters.';
    host.minLength = 2;
    host.minLengthMessage = 'Too short.';
    host.maxLength = 8;
    host.maxLengthMessage = 'Too long.';
    host.validators = validators;
    fixture.detectChanges();

    expect(el.requiredMessage).toBe('Enter a value.');
    expect(el.emailMessage).toBe('Enter an email.');
    expect(el.pattern).toBe('[a-z]+');
    expect(el.patternMessage).toBe('Use lowercase letters.');
    expect(el.minLength).toBe(2);
    expect(el.minLengthMessage).toBe('Too short.');
    expect(el.maxLength).toBe(8);
    expect(el.maxLengthMessage).toBe('Too long.');
    expect(el.validators).toContain(validators[0]);
  });

  it('emits coInput when co-input event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoInput)).injector.get(CoInput);
    let emitted: CustomEvent | undefined;
    directive.coInput.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-input', { detail: { value: 'Ada' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });

  it('emits coChange when co-change event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoInput)).injector.get(CoInput);
    let emitted: CustomEvent | undefined;
    directive.coChange.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-change', { detail: { value: 'Ada' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });
});
