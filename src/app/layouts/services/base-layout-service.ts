import { Injectable, signal } from '@angular/core';
import { BreadcrumbItem } from '@typings';

@Injectable()
export class BaseLayoutService {
  readonly isContentLoading = signal<boolean>(false);
  readonly breadcrumbs = signal<BreadcrumbItem[]>([]);
}
