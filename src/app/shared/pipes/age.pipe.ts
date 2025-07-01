import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(birthDate: Date | string): number {
    if (!birthDate) return 0;

    try {
      const birth = dayjs(birthDate);
      const now = dayjs();

      return now.diff(birth, 'year');
    } catch {
      return 0;
    }
  }
}
