import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        // this.authService.logout();
        console.log("401 error , you are not authorized to access this page");
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    })
  );
};
