import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoBanner } from '@cobalt/angular/banner';
import { CoButton } from '@cobalt/angular/button';
import { CoCard } from '@cobalt/angular/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoBanner, CoButton, CoCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
})
export class AppComponent {
  handleSuccess() {
    console.log('Success');
  }
}
