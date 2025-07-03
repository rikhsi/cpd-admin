import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecoverFormGroup } from '../models';

@Injectable()
export class RecoveryService {
  readonly recoveryForm = new FormGroup<RecoverFormGroup>({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
}
