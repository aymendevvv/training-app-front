import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log("Passed through interceptor");

  const jwtToken: string = cookieService.get('jwt_token');

  if (jwtToken) {
    if (authService.isTokenExpired(jwtToken)) {
      authService.logout();
      router.navigate(['/login']);
      return throwError('Token has expired');
    }

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
    });

    return next(authRequest);
  }

  return next(req);
};
