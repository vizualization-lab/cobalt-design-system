import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoNavDrawerItem } from './nav-drawer-item.js';

@Component({
  standalone: true,
  imports: [CoNavDrawerItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-nav-drawer-item
      [value]="value"
      [icon]="icon"
      [href]="href"
      [selected]="selected"
      [disabled]="disabled"
    >
      Home
    </co-nav-drawer-item>
  `,
})
class TestHostComponent {
  value = 'home';
  icon = 'home';
  href = '/home';
  selected = false;
  disabled = false;
}

describe('Angular CoNavDrawerItem', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-drawer-item');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs nav drawer item properties', async () => {
    host.value = 'reports';
    host.icon = 'analytics';
    host.href = '/reports';
    host.selected = true;
    host.disabled = true;
    fixture.detectChanges();
    await el.updateComplete;

    expect(el.value).toBe('reports');
    expect(el.icon).toBe('analytics');
    expect(el.href).toBe('/reports');
    expect(el.selected).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
