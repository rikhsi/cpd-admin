import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { TuiButton, TuiLoader } from '@taiga-ui/core';
import { TuiLink } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { TuiError } from '@taiga-ui/core';
import { LoginService } from '@pages/auth/services/login-service';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { InputType } from '@typings';
import { toggleEye, togglePassword } from '@pages/auth/utils';

@Component({
  selector: 'cpd-login',
  imports: [
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButton,
    TuiLink,
    RouterLink,
    TuiError,
    ReactiveFormsModule,
    AsyncPipe,
    TuiFieldErrorPipe,
    TuiLoader,
  ],
  templateUrl: './login.html',
  styleUrl: './login.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService],
})
export class Login {
  readonly passwordType = signal<InputType>('password');

  readonly passwordIcon = computed<string>(() =>
    toggleEye(this.passwordType())
  );

  get loginForm() {
    return this.ls.loginForm;
  }

  constructor(private ls: LoginService) {}

  submit(): void {
    if (this.loginForm.valid) {
    }
  }

  toggle(): void {
    this.passwordType.update(togglePassword);
  }
}
