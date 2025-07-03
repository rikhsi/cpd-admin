import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { LogoSize } from '@typings';

@Component({
  selector: 'cpd-logo',
  imports: [NgClass],
  templateUrl: './logo.html',
  styleUrl: './logo.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  size = input<LogoSize>('xl');
  withoutText = input<boolean>();

  readonly sizeClass = computed(() => ({
    xl: this.size() === 'xl',
    l: this.size() === 'l',
    m: this.size() === 'm',
    s: this.size() === 's',
  }));
}
