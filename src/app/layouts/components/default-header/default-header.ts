import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '@shared/components';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'cpd-default-header',
  imports: [Logo, TuiNavigation, TuiAvatar, TuiButton],
  templateUrl: './default-header.html',
  styleUrl: './default-header.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultHeader {}
