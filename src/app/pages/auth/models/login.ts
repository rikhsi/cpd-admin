import { FormControl } from '@angular/forms';

export type LoginFormGroup = {
  email: FormControl<string>;
  password: FormControl<string>;
};
