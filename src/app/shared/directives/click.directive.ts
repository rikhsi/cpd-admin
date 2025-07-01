import { Directive, model } from '@angular/core';

@Directive({
  selector: '[cpdClick]',
  standalone: true,
  exportAs: "clickRef"
})
export class ClickDirective {
  isActive = model<boolean>(true);

  toggleActive(): void {
    this.isActive.set(!this.isActive());
  }
}
