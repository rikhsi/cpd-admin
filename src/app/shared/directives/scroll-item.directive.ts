import {
  computed,
  Directive,
  ElementRef,
  Host,
  HostListener,
  input,
  linkedSignal,
} from '@angular/core';
import { ScrollbarDirective } from './scrollbar.directive';
import { ScrollAlignment } from '@typings';

@Directive({
  selector: '[cpdScrollItem]',
  standalone: true,
})
export class ScrollItemDirective {
  scrollBehavior = input<ScrollBehavior>('smooth');
  scrollAlignment = input<ScrollAlignment>('start');

  scrollOptions = linkedSignal<ScrollToOptions>(() => ({
    behavior: this.scrollBehavior(),
  }));

  scrollDirection = computed(() => this.scrollContainer.direction());

  get nativeElement(): HTMLElement {
    return this.el.nativeElement;
  }

  get containerElement(): HTMLElement {
    return this.scrollContainer.nativeElement;
  }

  constructor(
    @Host() private scrollContainer: ScrollbarDirective,
    private el: ElementRef<HTMLElement>
  ) {}

  @HostListener('click')
  onClick(): void {
    this.scrollIntoView();
  }

  private scrollIntoView(): void {
    const direction = this.scrollDirection();

    switch (direction) {
      case 'y':
        this.yDirectionInit(this.nativeElement, this.containerElement);
        break;

      case 'x':
        this.xDirectionInit(this.nativeElement, this.containerElement);
        break;

      case 'xy':
        this.yDirectionInit(this.nativeElement, this.containerElement);
        this.xDirectionInit(this.nativeElement, this.containerElement);
        break;

      default:
        return;
    }

    this.containerElement.scrollTo(this.scrollOptions());
  }

  private yDirectionInit(element: HTMLElement, container: HTMLElement): void {
    const offsetY = element.offsetTop - container.offsetTop;
    const elementHeight = element.offsetHeight;
    const containerHeight = container.clientHeight;

    this.scrollOptions.update((current) => {
      current.top = this.alignOffset(
        offsetY,
        elementHeight,
        containerHeight,
        this.scrollAlignment()
      );

      return current;
    });
  }

  private xDirectionInit(element: HTMLElement, container: HTMLElement): void {
    const offsetX = element.offsetLeft - container.offsetLeft;
    const elementWidth = element.offsetWidth;
    const containerWidth = container.clientWidth;

    this.scrollOptions.update((current) => {
      current.left = this.alignOffset(
        offsetX,
        elementWidth,
        containerWidth,
        this.scrollAlignment()
      );

      return current;
    });
  }

  private alignOffset(
    offset: number,
    elSize: number,
    containerSize: number,
    align: ScrollAlignment
  ): number {
    switch (align) {
      case 'start':
        return offset;
      case 'center':
        return offset - containerSize / 2 + elSize / 2;
      case 'end':
        return offset - containerSize + elSize;
      default:
        return offset;
    }
  }
}
