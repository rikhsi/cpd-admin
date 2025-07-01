import { Pipe, PipeTransform } from '@angular/core';
import { AGE_PREFIXES, MONTH_PREFIXES, YEAR_PREFIXES } from '@constants';
import { pluralize } from '@shared/utils';
import { PluralizeType } from '@typings';

@Pipe({
  name: 'pluralize',
})
export class PluralizePipe implements PipeTransform {
  transform(
    value: number,
    type: PluralizeType = 'age',
    withValue: boolean = true
  ): string {
    const prefixMap = {
      month: MONTH_PREFIXES,
      year: YEAR_PREFIXES,
      age: AGE_PREFIXES,
    };

    const suffix = pluralize(value, prefixMap[type] ?? AGE_PREFIXES);

    return withValue ? `${value} ${suffix}` : suffix;
  }
}
