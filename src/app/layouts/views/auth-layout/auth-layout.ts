import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '@shared/components';

@Component({
  selector: 'cpd-auth-layout',
  imports: [Logo],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayout {}
