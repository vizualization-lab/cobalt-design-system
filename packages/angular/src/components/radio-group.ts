import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import '@cobalt/components/radio-group';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-radio-group',
  standalone: true,
})
export class CoRadioGroup implements OnInit {
  readonly name = input('');
  readonly disabled = input(false);
  readonly required = input(false);

  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.name = this.name();
      el.disabled = this.disabled();
      el.required = this.required();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
  }
}
