import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const isRelativeApiUrl = req.url.startsWith('api');

  const updatedReq = isRelativeApiUrl
    ? req.clone({ url: `${environment.baseUrl}${req.url}` })
    : req;

  return next(updatedReq);
};
