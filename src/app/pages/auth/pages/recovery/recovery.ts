import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PASSWORD_RESET_SUCCESS } from '@pages/auth/data';
import { RecoveryService } from '@pages/auth/services/recovery-service';
import {
  TuiButton,
  TuiLink,
  TuiError,
  TuiLoader,
  TuiAlertService,
} from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'cpd-recovery',
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
  templateUrl: './recovery.html',
  styleUrl: './recovery.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RecoveryService],
})
export class Recovery {
  get recoveryForm() {
    return this.rs.recoveryForm;
  }

  constructor(
    private rs: RecoveryService,
    private alertService: TuiAlertService
  ) {}

  submit(): void {
    if (this.recoveryForm.valid) {
      this.recoveryForm.reset();

      this.alertService
        .open(PASSWORD_RESET_SUCCESS.message, PASSWORD_RESET_SUCCESS.options)
        .subscribe();
    }
  }
}
