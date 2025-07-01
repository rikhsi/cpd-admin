import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from '@shared/components';

@Component({
  selector: 'cpd-auth-layout',
  imports: [Logo, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayout {}
