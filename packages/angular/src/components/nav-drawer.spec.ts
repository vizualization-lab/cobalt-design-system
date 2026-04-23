import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoNavDrawer } from './nav-drawer.js';

@Component({
  standalone: true,
  imports: [CoNavDrawer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-nav-drawer [label]="label"></co-nav-drawer>`,
})
class TestHost {
  label = 'Menu';
}

describe('Angular CoNavDrawer', () => {
  let fixture: ComponentFixture<TestHost>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHost] }).compileComponents();
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-drawer');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs label', () => {
    fixture.componentInstance.label = 'Main';
    fixture.detectChanges();
    expect(el.label).toBe('Main');
  });
});
