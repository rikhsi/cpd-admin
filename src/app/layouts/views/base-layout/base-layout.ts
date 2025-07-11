import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { BaseNavigation, DefaultHeader } from '@layouts/components';
import { BaseLayoutService } from '@layouts/services';
import { buildBreadcrumbsFromSnapshot, getRootSnapshot } from '@shared/utils';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import {
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiLink,
  TuiLoader,
} from '@taiga-ui/core';
import { TuiBreadcrumbs, TuiChevron } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';
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
    TuiLoader,
  ],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BaseLayoutService],
})
export class BaseLayout implements OnInit {
  readonly isContentLoading = computed(() => this.blService.isContentLoading());
  readonly breadcrumbs = computed(() => this.blService.breadcrumbs());

  constructor(private router: Router, private blService: BaseLayoutService) {}

  ngOnInit(): void {
    this.initBreadcrumbs();
  }

  private initBreadcrumbs(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const snapshot = getRootSnapshot(this.router);
        const breadcrumbs = buildBreadcrumbsFromSnapshot(snapshot);

        this.blService.breadcrumbs.set(breadcrumbs);
      });

    this.router.navigate([], { onSameUrlNavigation: 'reload' });
  }
}
