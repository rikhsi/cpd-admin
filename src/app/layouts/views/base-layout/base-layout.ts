import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { BaseNavigation, DefaultHeader } from '@layouts/components';
import { buildBreadcrumbsFromSnapshot, getRootSnapshot } from '@shared/utils';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiButton, TuiDataList, TuiDropdown, TuiLink } from '@taiga-ui/core';
import { TuiBreadcrumbs, TuiChevron } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';
import { BreadcrumbItem } from '@typings';
import { filter } from 'rxjs';

@Component({
  selector: 'cpd-base-layout',
  imports: [
    TuiNavigation,
    RouterOutlet,
    DefaultHeader,
    BaseNavigation,
    TuiBreadcrumbs,
    TuiItem,
    TuiLink,
    RouterLink,
    TuiButton,
    TuiDropdown,
    TuiChevron,
    TuiDataList,
  ],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayout implements OnInit {
  breadcrumbs = signal<BreadcrumbItem[]>([]);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initBreadcrumbs();
  }

  private initBreadcrumbs(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const snapshot = getRootSnapshot(this.router);
        const breadcrumbs = buildBreadcrumbsFromSnapshot(snapshot);

        this.breadcrumbs.set(breadcrumbs);
      });

    this.router.navigate([], { onSameUrlNavigation: 'reload' });
  }
}
