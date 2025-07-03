import { UrlTree } from '@angular/router';

export type SelectItem<T = number> = {
  label: string;
  value: T;
};

export type NavItem = {
  name: string;
  url: string | any[] | UrlTree;
  icon: string;
  children: Omit<NavItem, 'children'>[];
};
