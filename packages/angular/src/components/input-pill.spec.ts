import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoInputPill } from './input-pill.js';

@Component({
  standalone: true,
  imports: [CoInputPill],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<co-input-pill [variant]="variant" [disabled]="disabled"></co-input-pill>`,
})
class TestHostComponent {
  variant: 'default' | 'search' | 'chat' = 'search';
  disabled = false;
}

describe('Angular CoInputPill', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-input-pill');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs variant property', () => {
    fixture.componentInstance.variant = 'chat';
    fixture.detectChanges();
    expect(el.variant).toBe('chat');
  });
});
