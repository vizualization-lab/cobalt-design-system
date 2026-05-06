import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoIcon } from './icon.js';

@Component({
  standalone: true,
  imports: [CoIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-icon [name]="name" [size]="size" [fill]="fill" [label]="label"></co-icon>`,
})
class TestHostComponent {
  name = 'home';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  fill = false;
  label = 'Home';
}

describe('Angular CoIcon', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-icon');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs icon properties', () => {
    host.name = 'settings';
    host.size = 'lg';
    host.fill = true;
    host.label = 'Settings';
    fixture.detectChanges();

    expect(el.name).toBe('settings');
    expect(el.size).toBe('lg');
    expect(el.fill).toBe(true);
    expect(el.label).toBe('Settings');
  });
});
