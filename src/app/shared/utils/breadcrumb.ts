import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { BreadcrumbItem } from '@typings';

export function getRootSnapshot(router: Router): ActivatedRouteSnapshot {
  return router.routerState.snapshot.root;
}

export function buildBreadcrumbsFromSnapshot(
  snapshot: ActivatedRouteSnapshot
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [];
  const pathSegments: string[] = [];
  let previousName: string | null = null;

  let route: ActivatedRouteSnapshot | null = snapshot;

  while (route) {
    if (route.url.length) {
      const segment = route.url.map((u) => u.path).join('/');
      pathSegments.push(segment);
    }

    const breadcrumb = route.data?.['breadcrumb'];

    if (breadcrumb?.name && breadcrumb.name !== previousName) {
      items.push({
        name: breadcrumb.name,
        url: ['/', ...pathSegments],
        icon: breadcrumb.icon ?? '',
      });

      previousName = breadcrumb.name;
    }

    route = route.firstChild!;
  }

  return items;
}
