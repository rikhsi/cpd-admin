import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TuiCard } from '@taiga-ui/layout';
import { BaseLayoutService } from '@layouts/services';
import { RoleCard } from '@pages/settings/components';
import { SettingsRoleService } from '@pages/settings/services';
import { RoleItem } from '@pages/settings/models';

@Component({
  selector: 'cpd-settings-role',
  standalone: true,
  imports: [TuiCard, ScrollingModule, RoleCard],
  templateUrl: './settings-role.html',
  styleUrl: './settings-role.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SettingsRoleService],
})
export class SettingsRole {
  readonly isLoading = computed(() => this.blService.isContentLoading());
  readonly roles = computed(() => this.srService.roles());

  constructor(
    private blService: BaseLayoutService,
    private srService: SettingsRoleService
  ) {}

  loadMore(offset: number) {}

  onEdit(role: RoleItem) {}

  onDelete(role: RoleItem) {}
}
