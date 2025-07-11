import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiCard } from '@taiga-ui/layout';

@Component({
  selector: 'cpd-role-card',
  imports: [DatePipe, TuiCard, TuiButton],
  templateUrl: './role-card.html',
  styleUrl: './role-card.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleCard {
  name = input.required<string>();
  reference = input.required<string>();
  date = input.required<string>();
  amount = input.required<number>();

  onEdit = output<void>();
  onDelete = output<void>();
}
