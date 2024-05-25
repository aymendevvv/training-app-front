import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  

  console.log("passed throught interceptor");

  //const authService = inject(AuthService) ;

  // const cookieService = inject(CookieService);
  // const token = cookieService.get('your-token');
  // if (token) {
  //   const cloned = req.clone({
  //     setHeaders: {
  //       authorization: token,
  //     },
  //   });
  //   return next(cloned);
  // } else {
  //   return next(req);
  // }
  return next(req);
};
