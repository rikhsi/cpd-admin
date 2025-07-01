import { Routes } from '@angular/router';
import { BaseRoute } from '@constants';
import { authGuard, loginGuard } from '@core/guards';
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
    canActivate: [loginGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pages/main/main').then((c) => c.Main),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: BaseRoute.AUTH,
  },
];
