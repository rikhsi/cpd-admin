import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export type ControlValue<T> = T extends FormControl<infer V> ? V : never;

export type FormValues<T> = {
  [K in keyof T]: ControlValue<T[K]>;
};

export type ControlType = AbstractControl | FormGroup | FormArray;
