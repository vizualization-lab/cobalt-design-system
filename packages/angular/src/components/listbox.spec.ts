import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoListbox, CoOption } from './listbox.js';

@Component({
  standalone: true,
  imports: [CoListbox, CoOption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-listbox
      [label]="label"
      [helpText]="helpText"
      [name]="name"
      [disabled]="disabled"
      [required]="required"
      [multipleChoice]="multipleChoice"
      [orientation]="orientation"
      [selectionFollowsFocus]="selectionFollowsFocus"
      [rotateKeyboardNavigation]="rotateKeyboardNavigation"
      [hasNoDefaultSelected]="hasNoDefaultSelected"
      (coChange)="onChange($event)"
    >
      <co-option [value]="optionValue" [checked]="optionChecked" [disabled]="optionDisabled">
        Apple
      </co-option>
    </co-listbox>
  `,
})
class TestHostComponent {
  label = 'Fruit';
  helpText = '';
  name = '';
  disabled = false;
  required = false;
  multipleChoice = false;
  orientation: 'vertical' | 'horizontal' = 'vertical';
  selectionFollowsFocus = false;
  rotateKeyboardNavigation = false;
  hasNoDefaultSelected = false;
  optionValue = 'apple';
  optionChecked = false;
  optionDisabled = false;
  changeEvent?: CustomEvent;

  onChange(e: CustomEvent) {
    this.changeEvent = e;
  }
}

describe('Angular CoListbox', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let listbox: any;
  let option: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    listbox = fixture.nativeElement.querySelector('co-listbox');
    option = fixture.nativeElement.querySelector('co-option');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs default listbox properties on init', () => {
    expect(listbox.label).toBe('Fruit');
    expect(listbox.multipleChoice).toBe(false);
    expect(listbox.orientation).toBe('vertical');
    expect(listbox.disabled).toBe(false);
  });

  it('syncs listbox behavior properties', () => {
    host.multipleChoice = true;
    host.orientation = 'horizontal';
    host.selectionFollowsFocus = true;
    host.rotateKeyboardNavigation = true;
    fixture.detectChanges();
    expect(listbox.multipleChoice).toBe(true);
    expect(listbox.orientation).toBe('horizontal');
    expect(listbox.selectionFollowsFocus).toBe(true);
    expect(listbox.rotateKeyboardNavigation).toBe(true);
  });

  it('syncs option properties', () => {
    host.optionChecked = true;
    host.optionDisabled = true;
    fixture.detectChanges();
    expect(option.value).toBe('apple');
    expect(option.checked).toBe(true);
    expect(option.disabled).toBe(true);
  });

  it('emits coChange when co-change event fires', () => {
    const directive = fixture.debugElement.query(By.directive(CoListbox)).injector.get(CoListbox);
    let emitted: CustomEvent | undefined;
    directive.coChange.subscribe((e: CustomEvent) => {
      emitted = e;
    });
    listbox.dispatchEvent(new CustomEvent('co-change', { detail: { value: 'apple' } }));
    expect(emitted).toBeInstanceOf(CustomEvent);
  });
});
