import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoCombobox, CoOption } from './combobox.js';

@Component({
  standalone: true,
  imports: [CoCombobox, CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-combobox
      [size]="size"
      [danger]="danger"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [required]="required"
      [label]="label"
      [helpText]="helpText"
      [name]="name"
      [value]="value"
      [autocomplete]="autocomplete"
      [matchMode]="matchMode"
      [showAllOnEmpty]="showAllOnEmpty"
      [multiple]="multiple"
      [multipleChoice]="multipleChoice"
      [allowCustomChoice]="allowCustomChoice"
      (coInput)="onInput($event)"
      (coChange)="onChange($event)"
    >
      <co-option [value]="optionValue" [checked]="optionChecked" [disabled]="optionDisabled">
        Apple
      </co-option>
    </co-combobox>
  `,
})
class TestHostComponent {
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  danger = false;
  disabled = false;
  readOnly = false;
  required = false;
  label = 'Fruit';
  helpText = '';
  name = '';
  value = '';
  autocomplete: 'none' | 'list' | 'inline' | 'both' = 'both';
  matchMode: 'begin' | 'all' = 'all';
  showAllOnEmpty = false;
  multiple = false;
  multipleChoice = false;
  allowCustomChoice = false;
  optionValue = 'apple';
  optionChecked = false;
  optionDisabled = false;
  inputEvent?: CustomEvent;
  changeEvent?: CustomEvent;

  onInput(e: CustomEvent) {
    this.inputEvent = e;
  }
  onChange(e: CustomEvent) {
    this.changeEvent = e;
  }
}

describe('Angular CoCombobox', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let combobox: any;
  let option: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    combobox = fixture.nativeElement.querySelector('co-combobox');
    option = fixture.nativeElement.querySelector('co-option');
    await combobox.updateComplete;
  });

  afterEach(async () => {
    await combobox?.updateComplete;
    fixture?.destroy();
    TestBed.resetTestingModule();
  });

  it('syncs default combobox properties on init', () => {
    expect(combobox.size).toBe('md');
    expect(combobox.label).toBe('Fruit');
    expect(combobox.autocomplete).toBe('both');
    expect(combobox.matchMode).toBe('all');
    expect(combobox.multiple).toBe(false);
    expect(combobox.allowCustomChoice).toBe(false);
  });

  it('syncs combobox behavior properties', async () => {
    host.autocomplete = 'list';
    host.matchMode = 'begin';
    host.multiple = true;
    host.allowCustomChoice = true;
    host.danger = true;
    fixture.detectChanges();
    await combobox.updateComplete;

    expect(combobox.autocomplete).toBe('list');
    expect(combobox.matchMode).toBe('begin');
    expect(combobox.multiple).toBe(true);
    expect(combobox.allowCustomChoice).toBe(true);
    expect(combobox.danger).toBe(true);
  });

  it('syncs option properties', async () => {
    host.optionChecked = true;
    host.optionDisabled = true;
    fixture.detectChanges();
    await option.updateComplete;

    expect(option.value).toBe('apple');
    expect(option.checked).toBe(true);
    expect(option.disabled).toBe(true);
  });

  it('emits coInput when co-input event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoCombobox)).injector.get(CoCombobox);
    let emitted: CustomEvent | undefined;
    directive.coInput.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    combobox.dispatchEvent(new CustomEvent('co-input', { detail: { value: 'ap' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });
});
