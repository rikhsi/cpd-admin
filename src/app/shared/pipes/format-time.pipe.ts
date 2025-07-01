import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || value < 0) {
      return '00:00';
    }

    const d = dayjs.duration(value, 'seconds');
    return `${this.pad(d.minutes())}:${this.pad(d.seconds())}`;
  }

  private pad(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }
}
