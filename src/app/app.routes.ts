import { Routes } from '@angular/router';
import { BaseRoute } from '@constants';
import { authGuard, loginGuard } from '@core/guards';
import { baseThemeResolver } from '@layouts/resolvers';
import { AuthLayout, BaseLayout } from '@layouts/views';

export const routes: Routes = [
  {
    path: BaseRoute.AUTH,
    component: AuthLayout,
    canActivate: [authGuard],
    loadChildren: () => import('@pages/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: BaseRoute.BASE,
    component: BaseLayout,
    data: { breadcrumb: { name: 'Главная' } },
    resolve: { theme: baseThemeResolver },
    canActivate: [loginGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pages/main/main').then((c) => c.Main),
      },
      {
        path: BaseRoute.SETTINGS,
        loadChildren: () =>
          import('@pages/settings/settings.routes').then((r) => r.routes),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: BaseRoute.AUTH,
  },
];
