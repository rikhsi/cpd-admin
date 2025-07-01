import { SelectItem } from '@typings';
import dayjs from 'dayjs';

export function pluralize(
  count: number,
  forms: [string, string, string]
): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 19) {
    return forms[2];
  }
  if (mod10 === 1) {
    return forms[0];
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return forms[1];
  }
  return forms[2];
}

export function generateDays(amount: number): SelectItem<number>[] {
  return Array.from({ length: amount }, (_, i) => {
    const day = i + 1;

    return {
      label: day.toString(),
      value: day,
    };
  });
}

export function getDaysAmount(year: number, month: number): number {
  return dayjs(`${year}-${month}-01`, 'YYYY-M-D').daysInMonth();
}
