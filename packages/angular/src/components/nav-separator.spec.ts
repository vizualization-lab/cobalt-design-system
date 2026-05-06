import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoNavSeparator } from './nav-separator.js';

@Component({
  standalone: true,
  imports: [CoNavSeparator],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-nav-separator></co-nav-separator>`,
})
class TestHostComponent {}

describe('Angular CoNavSeparator', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: Element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-nav-separator');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('renders co-nav-separator element', () => {
    expect(el).toBeTruthy();
    expect(el.tagName.toLowerCase()).toBe('co-nav-separator');
  });
});
