import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormGroup } from '../models';

@Injectable()
export class LoginService {
  readonly loginForm = new FormGroup<LoginFormGroup>({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });
}
