import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVIGATION_ITEMS } from '@constants';
import { baseExpandedIcon } from '@layouts/utils';
import { TuiChevron } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';
import { NavItem } from '@typings';

@Component({
  selector: 'cpd-base-navigation',
  imports: [TuiNavigation, RouterLink, TuiChevron],
  templateUrl: './base-navigation.html',
  styleUrl: './base-navigation.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseNavigation {
  protected readonly navigationItems: NavItem[] = NAVIGATION_ITEMS;

  protected expanded = signal<boolean>(true);

  protected expandedIcon = computed<string>(() =>
    baseExpandedIcon(this.expanded())
  );

  protected handleToggle(): void {
    this.expanded.update((e) => !e);
  }
}
