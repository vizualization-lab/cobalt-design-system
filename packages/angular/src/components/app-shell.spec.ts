import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoAppShell } from './app-shell.js';

function stubMatchMedia(matches = true) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => ({
      matches,
      media: '',
      onchange: null,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      dispatchEvent() {
        return false;
      },
    }),
  });
}

@Component({
  standalone: true,
  imports: [CoAppShell],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <co-app-shell
      [drawerOpen]="drawerOpen"
      [railWidth]="railWidth"
      [drawerWidth]="drawerWidth"
      (coDrawerOpen)="onOpen($event)"
      (coDrawerClose)="onClose($event)"
      (coDrawerToggle)="onToggle($event)"
    >
      <div slot="body">Body</div>
    </co-app-shell>
  `,
})
class TestHostComponent {
  drawerOpen = false;
  railWidth = '120px';
  drawerWidth = '280px';
  openEvent: CustomEvent | null = null;
  closeEvent: CustomEvent | null = null;
  toggleEvent: CustomEvent | null = null;

  onOpen(event: CustomEvent) {
    this.openEvent = event;
  }

  onClose(event: CustomEvent) {
    this.closeEvent = event;
  }

  onToggle(event: CustomEvent) {
    this.toggleEvent = event;
  }
}

describe('Angular CoAppShell', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let el: any;

  beforeEach(async () => {
    stubMatchMedia();
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('co-app-shell');
  });

  afterEach(() => TestBed.resetTestingModule());

  it('syncs shell properties', () => {
    host.drawerOpen = true;
    host.railWidth = '144px';
    host.drawerWidth = '320px';
    fixture.detectChanges();

    expect(el.drawerOpen).toBe(true);
    expect(el.railWidth).toBe('144px');
    expect(el.drawerWidth).toBe('320px');
  });

  it('emits drawer events', () => {
    const directive = fixture.debugElement.query(By.directive(CoAppShell)).injector.get(CoAppShell);
    let openEvent: CustomEvent | undefined;
    let closeEvent: CustomEvent | undefined;
    let toggleEvent: CustomEvent | undefined;
    directive.coDrawerOpen.subscribe((event: CustomEvent) => {
      openEvent = event;
    });
    directive.coDrawerClose.subscribe((event: CustomEvent) => {
      closeEvent = event;
    });
    directive.coDrawerToggle.subscribe((event: CustomEvent) => {
      toggleEvent = event;
    });

    el.dispatchEvent(new CustomEvent('co-drawer-open', { detail: { open: true } }));
    el.dispatchEvent(new CustomEvent('co-drawer-close', { detail: { open: false } }));
    el.dispatchEvent(new CustomEvent('co-drawer-toggle', { detail: { open: true } }));

    expect(openEvent?.detail).toEqual({ open: true });
    expect(closeEvent?.detail).toEqual({ open: false });
    expect(toggleEvent?.detail).toEqual({ open: true });
  });
});
