import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BASE_LAYOUT_COLOR } from '@layouts/data';
import { TuiThemeColorService } from '@taiga-ui/cdk/services';

export const baseThemeResolver: ResolveFn<boolean> = () => {
  const theme = inject(TuiThemeColorService);

  theme.color = BASE_LAYOUT_COLOR;

  return true;
};
