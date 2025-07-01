import {
  Directive,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  output,
} from '@angular/core';

@Directive({
  selector: '[cpdInViewport]',
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  visibleChange = output<boolean>();

  private observer: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.visibleChange.emit(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
