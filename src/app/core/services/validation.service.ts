import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationError } from '@constants';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  #validationMessages: Record<string, (control: AbstractControl) => string> = {
    [ValidationError.REQUIRED]: () => 'Обязательное поле',
    [ValidationError.EMAIL]: () => 'Введите корректный email',
    [ValidationError.MIN_LENGTH]: (control) =>
      `Минимальная длина — ${
        control.getError(ValidationError.MIN_LENGTH).requiredLength
      }`,
    [ValidationError.MAX_LENGTH]: (control) =>
      `Максимальная длина — ${
        control.getError(ValidationError.MAX_LENGTH).requiredLength
      }`,
    [ValidationError.REQUIRED_LENGTH]: (control) =>
      `Требуемая длина — ${
        control.getError(ValidationError.REQUIRED_LENGTH).requiredLength
      }`,
  };

  validateField(control: AbstractControl): string {
    if (!control?.invalid || !control?.dirty) return '';

    const errorKeys = Object.keys(control.errors || {});
    for (const key of Object.values(ValidationError)) {
      if (errorKeys.includes(key)) {
        return this.#validationMessages[key]?.(control) || '';
      }
    }

    return '';
  }
}
