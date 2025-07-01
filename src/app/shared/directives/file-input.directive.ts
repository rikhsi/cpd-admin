import {
  Directive,
  forwardRef,
  HostListener,
  Renderer2,
  input,
  output,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ControlBaseDirective } from './control-base.directive';

@Directive({
  selector: '[cpdFileInput]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputDirective),
      multi: true,
    },
  ],
})
export class FileInputDirective
  extends ControlBaseDirective<File>
  implements ControlValueAccessor, OnDestroy, AfterViewInit
{
  accept = input<string>('*');
  fileChange = output<File>();

  fileInput: HTMLInputElement;

  constructor(private renderer: Renderer2) {
    super();
  }

  @HostListener('click')
  onClick(): void {
    if (this.disabled()) return;

    this.fileInput.value = '';
    this.fileInput.click();
  }

  ngAfterViewInit(): void {
    this.initFileInput();
  }

  ngOnDestroy(): void {
    this.renderer.removeChild(document.body, this.fileInput);
  }

  private initFileInput(): void {
    this.fileInput = this.renderer.createElement('input');

    this.renderer.setAttribute(this.fileInput, 'type', 'file');
    this.renderer.setStyle(this.fileInput, 'display', 'none');
    this.renderer.setAttribute(this.fileInput, 'accept', this.accept());
    this.renderer.appendChild(document.body, this.fileInput);

    this.renderer.listen(this.fileInput, 'change', (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      if (file) {
        this.value.set(file);
        this.onChange(file);
        this.markAsTouched();
      } else {
        this.fileInput.value = '';
      }

      this.fileChange.emit(file);
    });
  }
}
