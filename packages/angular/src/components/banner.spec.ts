import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoBanner } from './banner.js';

@Component({
  standalone: true,
  imports: [CoBanner],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-banner [label]="label"><span slot="title">Test</span></co-banner>`,
})
class TestHostComponent {
  label = 'Alert';
}

describe('Angular CoBanner', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-banner');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('renders co-banner element', () => {
    expect(el).toBeTruthy();
    expect(el.tagName.toLowerCase()).toBe('co-banner');
  });
});
