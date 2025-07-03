import { PolymorpheusContent } from '@taiga-ui/polymorpheus';

export const ValidationErrorKey = {
  REQUIRED: 'required',
  MIN_LENGTH: 'minlength',
  MAX_LENGTH: 'maxlength',
  EMAIL: 'email',
};

export const validationMessages: Record<string, PolymorpheusContent> = {
  [ValidationErrorKey.REQUIRED]: 'Обязательное поле',
  [ValidationErrorKey.EMAIL]: 'Введите корректный email',
  [ValidationErrorKey.MAX_LENGTH]: ({
    requiredLength,
  }: {
    requiredLength: string;
  }) => `Максимальная длина - ${requiredLength}`,
  [ValidationErrorKey.MIN_LENGTH]: ({
    requiredLength,
  }: {
    requiredLength: string;
  }) => `Минимальная длина - ${requiredLength}`,
};
