import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseNavigation, DefaultHeader } from '@layouts/components';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'cpd-base-layout',
  imports: [TuiNavigation, RouterOutlet, DefaultHeader, BaseNavigation],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayout {}
