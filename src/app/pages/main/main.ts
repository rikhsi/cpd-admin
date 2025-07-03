import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'cpd-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {}
