import { NavItem } from '@typings';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    name: 'Пользователи',
    icon: '@tui.users',
    url: 'users',
    children: [],
  },
  {
    name: 'Настройки',
    icon: '@tui.settings',
    url: '/settings',
    children: [
      {
        name: 'Роли',
        icon: '@tui.lock',
        url: '/settings/role',
      },
      {
        name: 'Категории',
        icon: '@tui.list',
        url: '/settings/categories',
      },
      {
        name: 'Страны',
        icon: '@tui.globe',
        url: '/settings/countries',
      },
      {
        name: 'Регионы',
        icon: '@tui.map-pin',
        url: '/settings/regions',
      },
      {
        name: 'Города',
        icon: '@tui.map',
        url: '/settings/cities',
      },
      {
        name: 'Магазины',
        icon: '@tui.store',
        url: '/settings/stores',
      },
      {
        name: 'Каналы',
        icon: '@tui.share',
        url: '/settings/channels',
      },
      {
        name: 'Позиции',
        icon: '@tui.user',
        url: '/settings/positions',
      },
      {
        name: 'Бренды',
        icon: '@tui.tag',
        url: '/settings/brands',
      },
    ],
  },
];
