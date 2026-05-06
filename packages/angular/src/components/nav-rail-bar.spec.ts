import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoNavRailBar } from './nav-rail-bar.js';

@Component({
  standalone: true,
  imports: [CoNavRailBar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-nav-rail-bar [value]="value" [label]="label" (coChange)="onChange($event)">
      <co-nav-rail-item value="home">Home</co-nav-rail-item>
    </co-nav-rail-bar>
  `,
})
class TestHostComponent {
  value = 'home';
  label = 'Primary';
  changeEvent: CustomEvent | null = null;

  onChange(event: CustomEvent) {
    this.changeEvent = event;
  }
}

describe('Angular CoNavRailBar', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-rail-bar');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs nav rail bar properties', () => {
    host.value = 'reports';
    host.label = 'Sections';
    fixture.detectChanges();

    expect(el.value).toBe('reports');
    expect(el.label).toBe('Sections');
  });

  it('emits co-change', () => {
    const directive = fixture.debugElement
      .query(By.directive(CoNavRailBar))
      .injector.get(CoNavRailBar);
    let emitted: CustomEvent | undefined;
    directive.coChange.subscribe((event: CustomEvent) => {
      emitted = event;
    });

    el.dispatchEvent(new CustomEvent('co-change', { detail: { value: 'reports' } }));

    expect(emitted?.detail).toEqual({ value: 'reports' });
  });
});
