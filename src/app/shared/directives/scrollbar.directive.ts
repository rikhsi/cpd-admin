import { Directive, ElementRef, Renderer2, effect, input } from '@angular/core';
import { ScrollDirection } from '@typings';

@Directive({
  selector: '[cpdScrollbar]',
  standalone: true,
})
export class ScrollbarDirective {
  direction = input.required<ScrollDirection>();
  hideScrollLine = input<boolean>();

  scrollbarColor = input<string>('#757D8E');
  scrollbarWidth = input<string>('6px');
  className = input<string>('tm-scrollbar-local');

  get nativeElement(): HTMLElement {
    return this.el.nativeElement;
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    effect(() => {
      const el = this.nativeElement;

      this.initDirection(el, this.direction());
      this.onHideScrollLine(this.hideScrollLine(), el);
      this.applyLocalScrollbarStyle(
        el,
        this.scrollbarColor(),
        this.scrollbarWidth()
      );
    });
  }

  private initDirection(el: HTMLElement, dir: ScrollDirection): void {
    switch (dir) {
      case 'x':
        this.renderer.setStyle(el, 'overflow-x', 'auto');
        this.renderer.setStyle(el, 'overflow-y', 'hidden');
        break;
      case 'y':
        this.renderer.setStyle(el, 'overflow-x', 'hidden');
        this.renderer.setStyle(el, 'overflow-y', 'auto');
        break;
      case 'xy':
        this.renderer.setStyle(el, 'overflow-x', 'auto');
        this.renderer.setStyle(el, 'overflow-y', 'auto');
        break;
      default:
        this.renderer.setStyle(el, 'overflow-x', 'hidden');
        this.renderer.setStyle(el, 'overflow-y', 'hidden');
        break;
    }

    this.renderer.setStyle(el, '-webkit-overflow-scrolling', 'touch');
  }

  private onHideScrollLine(state: boolean, el: HTMLElement): void {
    if (state) {
      this.renderer.setStyle(el, 'scrollbar-width', 'none'); // Firefox
      this.renderer.setStyle(el, '-ms-overflow-style', 'none'); // IE
      this.renderer.setStyle(el, 'overflow', 'auto');
      this.renderer.setStyle(el, 'position', 'relative');

      const style = document.createElement('style');

      style.innerHTML = `
        .${this.className}::-webkit-scrollbar {
          display: none;
        }
      `;
      this.renderer.addClass(el, this.className());
      this.renderer.appendChild(el, style);
    } else {
      this.renderer.removeStyle(el, 'scrollbar-width');
      this.renderer.removeStyle(el, '-ms-overflow-style');
    }
  }

  private applyLocalScrollbarStyle(
    el: HTMLElement,
    color: string,
    width: string
  ): void {
    this.renderer.addClass(el, this.className());

    const style = this.renderer.createElement('style');
    style.innerHTML = `
      .${this.className}::-webkit-scrollbar {
        width: ${width};
        height: ${width};
      }

      .${this.className}::-webkit-scrollbar-thumb {
        background: ${color};
        border-radius: 10px;
      }

      .${this.className}::-webkit-scrollbar-track {
        background: transparent;
      }
    `;

    this.renderer.appendChild(el, style);
  }
}
