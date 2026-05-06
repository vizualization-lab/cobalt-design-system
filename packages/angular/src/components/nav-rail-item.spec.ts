import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoNavRailItem } from './nav-rail-item.js';

@Component({
  standalone: true,
  imports: [CoNavRailItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-nav-rail-item
      [value]="value"
      [icon]="icon"
      [href]="href"
      [target]="target"
      [label]="label"
      [selected]="selected"
      [disabled]="disabled"
    >
      Home
    </co-nav-rail-item>
  `,
})
class TestHostComponent {
  value = 'home';
  icon = 'home';
  href = '/home';
  target: '_self' | '_blank' = '_self';
  label = 'Home';
  selected = false;
  disabled = false;
}

describe('Angular CoNavRailItem', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-rail-item');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs nav rail item properties', async () => {
    host.value = 'reports';
    host.icon = 'analytics';
    host.href = '/reports';
    host.target = '_blank';
    host.label = 'Dashboard';
    host.selected = true;
    host.disabled = true;
    fixture.detectChanges();
    await el.updateComplete;

    expect(el.value).toBe('reports');
    expect(el.icon).toBe('analytics');
    expect(el.href).toBe('/reports');
    expect(el.target).toBe('_blank');
    expect(el.label).toBe('Dashboard');
    expect(el.selected).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
