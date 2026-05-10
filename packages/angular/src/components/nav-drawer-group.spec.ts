import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoNavDrawerGroup } from './nav-drawer-group.js';

@Component({
  standalone: true,
  imports: [CoNavDrawerGroup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-nav-drawer-group
      [label]="label"
      [value]="value"
      [open]="open"
      (coToggle)="onToggle($event)"
    >
      <co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>
    </co-nav-drawer-group>
  `,
})
class TestHostComponent {
  label = 'Navigation';
  value = 'navigation';
  open = false;
  onToggle = vi.fn();
}

describe('Angular CoNavDrawerGroup', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-drawer-group');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs nav drawer group properties', async () => {
    host.label = 'Layout';
    host.value = 'layout';
    host.open = true;
    fixture.detectChanges();
    await el.updateComplete;

    expect(el.label).toBe('Layout');
    expect(el.value).toBe('layout');
    expect(el.open).toBe(true);
  });

  it('emits coToggle', () => {
    el.dispatchEvent(new CustomEvent('co-toggle', { detail: { value: 'layout', open: true } }));
    fixture.detectChanges();

    expect(host.onToggle).toHaveBeenCalledTimes(1);
  });
});
