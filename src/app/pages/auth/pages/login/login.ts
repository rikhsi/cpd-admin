import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { TuiIcon } from '@taiga-ui/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiLink } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cpd-login',
  imports: [
    TuiInputModule,
    TuiIcon,
    TuiTextfieldControllerModule,
    TuiButton,
    TuiLink,
    RouterLink,
  ],
  templateUrl: './login.html',
  styleUrl: './login.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {}
