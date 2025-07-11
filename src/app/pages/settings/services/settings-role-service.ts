import { Injectable, signal } from '@angular/core';
import { RoleItem } from '../models';

@Injectable()
export class SettingsRoleService {
  readonly allRoles: RoleItem[] = Array.from({ length: 40 }).map((_, i) => ({
    id: i + 1,
    name: `Role ${i + 1}`,
    reference: `REF-${i + 1}`,
    createdAt: new Date().toISOString(),
    usersAmount: Math.floor(Math.random() * 50),
  }));

  readonly roles = signal<RoleItem[]>(this.allRoles);
}
