import { Route } from '@angular/router';
import { AuthRoute } from '@constants';

export const routes: Route[] = [
  {
    path: AuthRoute.LOGIN,
    loadComponent: () => import('./pages/login/login').then((c) => c.Login),
  },
  {
    path: AuthRoute.RECOVERY,
    loadComponent: () =>
      import('./pages/recovery/recovery').then((c) => c.Recovery),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AuthRoute.LOGIN,
  },
];
