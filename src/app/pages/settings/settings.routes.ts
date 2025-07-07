import { Route } from '@angular/router';
import { SettingsRoute } from '@constants';

export const routes: Route[] = [
  {
    path: SettingsRoute.BRAND,
    data: { breadcrumb: { name: 'Настройки - Бренды' } },
    loadComponent: () =>
      import('./pages/settings-brand/settings-brand').then(
        (c) => c.SettingsBrand
      ),
  },
  {
    path: SettingsRoute.CATEGORY,
    data: { breadcrumb: { name: 'Настройки - Категория' } },
    loadComponent: () =>
      import('./pages/settings-category/settings-category').then(
        (c) => c.SettingsCategory
      ),
  },
  {
    path: SettingsRoute.CHANNEL,
    data: { breadcrumb: { name: 'Настройки - Каналы' } },
    loadComponent: () =>
      import('./pages/settings-channel/settings-channel').then(
        (c) => c.SettingsChannel
      ),
  },
  {
    path: SettingsRoute.CITY,
    data: { breadcrumb: { name: 'Настройки - Города' } },
    loadComponent: () =>
      import('./pages/settings-city/settings-city').then((c) => c.SettingsCity),
  },
  {
    path: SettingsRoute.COUNTRY,
    data: { breadcrumb: { name: 'Настройки - Страны' } },
    loadComponent: () =>
      import('./pages/settings-country/settings-country').then(
        (c) => c.SettingsCountry
      ),
  },
  {
    path: SettingsRoute.POSITION,
    data: { breadcrumb: { name: 'Настройки - Позиции' } },
    loadComponent: () =>
      import('./pages//settings-position/settings-position').then(
        (c) => c.SettingsPosition
      ),
  },
  {
    path: SettingsRoute.REGION,
    data: { breadcrumb: { name: 'Настройки - Регионы' } },
    loadComponent: () =>
      import('./pages/settings-region/settings-region').then(
        (c) => c.SettingsRegion
      ),
  },
  {
    path: SettingsRoute.ROLE,
    data: { breadcrumb: { name: 'Настройки - Роли' } },
    loadComponent: () =>
      import('./pages/settings-role/settings-role').then((c) => c.SettingsRole),
  },
  {
    path: SettingsRoute.SHOP,
    data: { breadcrumb: { name: 'Настройки - Магазины' } },
    loadComponent: () =>
      import('./pages/settings-shop/settings-shop').then((c) => c.SettingsShop),
  },
];
