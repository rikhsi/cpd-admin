import {
  DestroyRef,
  Directive,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ControlType, FunctionType } from '@typings';
import { Subject } from 'rxjs';

@Directive()
export abstract class ControlBaseDirective<T> implements ControlValueAccessor {
  value = model<T>();
  disabled = model<boolean>(false, { alias: 'blocked' });

  validate$ = new Subject<ControlType>();

  message = signal<string>(null);
  isRequired = input<boolean>(false);

  protected destroyRef = inject(DestroyRef);

  public onChange: FunctionType<T> = () => {};
  public onTouched: FunctionType<T> = () => {};

  writeValue(value: T): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  modelChange(value: T): void {
    this.value.set(value);
    this.onChange?.(value);
  }

  markAsTouched(): void {
    this.onTouched?.();
  }
}
