import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoCard } from './card.js';

@Component({
  standalone: true,
  imports: [CoCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-card [label]="label">Content</co-card>`,
})
class TestHostComponent {
  label = 'Info';
}

describe('Angular CoCard', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-card');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs label property on init', () => {
    expect(el.label).toBe('Info');
  });
});
