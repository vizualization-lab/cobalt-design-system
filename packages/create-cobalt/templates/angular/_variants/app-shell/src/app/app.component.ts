import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoAppShell } from '@cobalt/angular/app-shell';
import { CoBanner } from '@cobalt/angular/banner';
import { CoButton } from '@cobalt/angular/button';
import { CoCard } from '@cobalt/angular/card';
import { CoIcon } from '@cobalt/angular/icon';
import { CoModeToggle } from '@cobalt/angular/mode-toggle';
import { CoNavDrawer } from '@cobalt/angular/nav-drawer';
import { CoNavDrawerItem } from '@cobalt/angular/nav-drawer-item';
import { CoNavHeaderBar } from '@cobalt/angular/nav-header-bar';
import { CoNavRailBar } from '@cobalt/angular/nav-rail-bar';
import { CoNavRailItem } from '@cobalt/angular/nav-rail-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CoAppShell,
    CoBanner,
    CoButton,
    CoCard,
    CoIcon,
    CoModeToggle,
    CoNavDrawer,
    CoNavDrawerItem,
    CoNavHeaderBar,
    CoNavRailBar,
    CoNavRailItem,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  handleSuccess() {
    console.log('Success');
  }
}
