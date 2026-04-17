import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoTextarea } from './textarea.js';

@Component({
  standalone: true,
  imports: [CoTextarea],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-textarea
      [size]="size"
      [resize]="resize"
      [danger]="danger"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [required]="required"
      [label]="label"
      [helpText]="helpText"
      [name]="name"
      [placeholder]="placeholder"
      [value]="value"
      [rows]="rows"
      [maxRows]="maxRows"
      [maxLength]="maxLength"
      (coFocus)="onFocus($event)"
      (coBlur)="onBlur($event)"
      (coInput)="onInput($event)"
      (coChange)="onChange($event)"
    ></co-textarea>
  `,
})
class TestHostComponent {
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  resize: 'auto' | 'none' | 'vertical' = 'auto';
  danger = false;
  disabled = false;
  readOnly = false;
  required = false;
  label = 'Comment';
  helpText = '';
  name = '';
  placeholder = '';
  value = '';
  rows = 2;
  maxRows = 6;
  maxLength = 120;
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

describe('Angular CoTextarea', () => {
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
    el = fixture.nativeElement.querySelector('co-textarea');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs default properties on init', () => {
    expect(el.size).toBe('md');
    expect(el.resize).toBe('auto');
    expect(el.danger).toBe(false);
    expect(el.disabled).toBe(false);
    expect(el.readOnly).toBe(false);
    expect(el.required).toBe(false);
    expect(el.label).toBe('Comment');
  });

  it('syncs size and resize properties to the element', () => {
    host.size = 'lg';
    host.resize = 'vertical';
    fixture.detectChanges();
    expect(el.size).toBe('lg');
    expect(el.resize).toBe('vertical');
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

  it('syncs textarea properties to the element', () => {
    host.placeholder = 'Write a note';
    host.name = 'comment';
    host.rows = 4;
    host.maxRows = 8;
    host.maxLength = 240;
    fixture.detectChanges();
    expect(el.placeholder).toBe('Write a note');
    expect(el.name).toBe('comment');
    expect(el.rows).toBe(4);
    expect(el.maxRows).toBe(8);
    expect(el.maxLength).toBe(240);
  });

  it('emits coInput when co-input event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoTextarea)).injector.get(CoTextarea);
    let emitted: CustomEvent | undefined;
    directive.coInput.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-input', { detail: { value: 'Ada' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });

  it('emits coChange when co-change event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoTextarea)).injector.get(CoTextarea);
    let emitted: CustomEvent | undefined;
    directive.coChange.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    el.dispatchEvent(new CustomEvent('co-change', { detail: { value: 'Ada' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });
});
