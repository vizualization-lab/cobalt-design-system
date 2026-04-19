import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { CoSelect } from './select.js';

@Component({
  standalone: true,
  imports: [CoSelect],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-select [size]="size" [danger]="danger" [disabled]="disabled" (coChange)="onChange($event)">
    </co-select>
  `,
})
class TestHostComponent {
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  danger = false;
  disabled = false;
  changeEvent: CustomEvent | null = null;

  onChange(e: CustomEvent) {
    this.changeEvent = e;
  }
}

describe('Angular CoSelect', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-select');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('syncs properties after change detection', () => {
    host.size = 'lg';
    host.danger = true;
    fixture.detectChanges();
    expect(el.size).toBe('lg');
    expect(el.danger).toBe(true);
  });

  it('syncs disabled state', () => {
    host.disabled = true;
    fixture.detectChanges();
    expect(el.disabled).toBe(true);
  });
});
