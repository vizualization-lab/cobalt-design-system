import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoForm } from './form.js';

@Component({
  standalone: true,
  imports: [CoForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-form
      [disabled]="disabled"
      [label]="label"
      [helpText]="helpText"
      [name]="name"
      (coSubmit)="onSubmit($event)"
      (coInvalidSubmit)="onInvalidSubmit($event)"
      (coReset)="onReset($event)"
    >
      <button type="submit">Submit</button>
    </co-form>
  `,
})
class TestHostComponent {
  disabled = false;
  label = 'Contact';
  helpText = 'All fields are required';
  name = 'contact';
  submitEvent: CustomEvent | null = null;
  invalidSubmitEvent: CustomEvent | null = null;
  resetEvent: CustomEvent | null = null;

  onSubmit(event: CustomEvent) {
    this.submitEvent = event;
  }

  onInvalidSubmit(event: CustomEvent) {
    this.invalidSubmitEvent = event;
  }

  onReset(event: CustomEvent) {
    this.resetEvent = event;
  }
}

describe('Angular CoForm', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-form');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs form properties', () => {
    host.disabled = true;
    host.label = 'Support';
    host.helpText = 'Include account details';
    host.name = 'support';
    fixture.detectChanges();

    expect(el.disabled).toBe(true);
    expect(el.label).toBe('Support');
    expect(el.helpText).toBe('Include account details');
    expect(el.name).toBe('support');
  });

  it('emits form events', () => {
    const directive = fixture.debugElement.query(By.directive(CoForm)).injector.get(CoForm);
    let submitEvent: CustomEvent | undefined;
    let invalidSubmitEvent: CustomEvent | undefined;
    let resetEvent: CustomEvent | undefined;
    directive.coSubmit.subscribe((event: CustomEvent) => {
      submitEvent = event;
    });
    directive.coInvalidSubmit.subscribe((event: CustomEvent) => {
      invalidSubmitEvent = event;
    });
    directive.coReset.subscribe((event: CustomEvent) => {
      resetEvent = event;
    });

    el.dispatchEvent(new CustomEvent('co-submit', { detail: { valid: true } }));
    el.dispatchEvent(new CustomEvent('co-invalid-submit', { detail: { valid: false } }));
    el.dispatchEvent(new CustomEvent('co-reset'));

    expect(submitEvent?.detail).toEqual({ valid: true });
    expect(invalidSubmitEvent?.detail).toEqual({ valid: false });
    expect(resetEvent).toBeInstanceOf(CustomEvent);
  });
});
