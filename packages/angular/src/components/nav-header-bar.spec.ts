import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoNavHeaderBar } from './nav-header-bar.js';

@Component({
  standalone: true,
  imports: [CoNavHeaderBar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-nav-header-bar [label]="label">Content</co-nav-header-bar>`,
})
class TestHostComponent {
  label = 'App Header';
}

describe('Angular CoNavHeaderBar', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-header-bar');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs label property on init', () => {
    expect(el.label).toBe('App Header');
  });
});
