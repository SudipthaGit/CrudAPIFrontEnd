import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorFn: HttpInterceptorFn = (req, next) => {
  // If the request URL contains 'login', do not attach the token
  debugger;
  if (req.url.includes('login')) {
    return next(req);
  }
  const token = localStorage.getItem('token');
  let cloned = req;
  if (token) {
    cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }
  return next(cloned);
};
