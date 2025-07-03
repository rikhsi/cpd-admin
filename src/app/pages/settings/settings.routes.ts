import { Route } from '@angular/router';
import { SettingsRoute } from '@constants';

export const routes: Route[] = [
  {
    path: SettingsRoute.BRAND,
    loadComponent: () =>
      import('./pages/settings-brand/settings-brand').then(
        (c) => c.SettingsBrand
      ),
  },
  {
    path: SettingsRoute.CATEGORY,
    loadComponent: () =>
      import('./pages/settings-category/settings-category').then(
        (c) => c.SettingsCategory
      ),
  },
  {
    path: SettingsRoute.CHANNEL,
    loadComponent: () =>
      import('./pages/settings-channel/settings-channel').then(
        (c) => c.SettingsChannel
      ),
  },
  {
    path: SettingsRoute.CITY,
    loadComponent: () =>
      import('./pages/settings-city/settings-city').then((c) => c.SettingsCity),
  },
  {
    path: SettingsRoute.COUNTRY,
    loadComponent: () =>
      import('./pages/settings-country/settings-country').then(
        (c) => c.SettingsCountry
      ),
  },
  {
    path: SettingsRoute.POSITION,
    loadComponent: () =>
      import('./pages//settings-position/settings-position').then(
        (c) => c.SettingsPosition
      ),
  },
  {
    path: SettingsRoute.REGION,
    loadComponent: () =>
      import('./pages/settings-region/settings-region').then(
        (c) => c.SettingsRegion
      ),
  },
  {
    path: SettingsRoute.ROLE,
    loadComponent: () =>
      import('./pages/settings-role/settings-role').then((c) => c.SettingsRole),
  },
  {
    path: SettingsRoute.SHOP,
    loadComponent: () =>
      import('./pages/settings-shop/settings-shop').then((c) => c.SettingsShop),
  },
];
