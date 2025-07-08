import { NavItem } from '@typings';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    name: 'Пользователи',
    icon: '@tui.users',
    url: 'users',
    children: [],
  },
  {
    name: 'Справочники',
    icon: '@tui.globe',
    url: '/handbook',
    children: [
      {
        name: 'Роли',
        icon: '@tui.lock',
        url: 'handbook/roles',
      },
      {
        name: 'Категории',
        icon: '@tui.list',
        url: 'handbook/categories',
      },
      {
        name: 'Страны',
        icon: '@tui.globe',
        url: 'handbook/countries',
      },
      {
        name: 'Регионы',
        icon: '@tui.map-pin',
        url: 'handbook/regions',
      },
      {
        name: 'Города',
        icon: '@tui.map',
        url: 'handbook/cities',
      },
      {
        name: 'Магазины',
        icon: '@tui.store',
        url: 'handbook/shops',
      },
      {
        name: 'Каналы',
        icon: '@tui.share',
        url: 'handbook/channels',
      },
      {
        name: 'Позиции',
        icon: '@tui.user',
        url: 'handbook/positions',
      },
      {
        name: 'Бренды',
        icon: '@tui.tag',
        url: 'handbook/brands',
      },
    ],
  },
];
