import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cpd-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  withoutText = input<boolean>();
}
