import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { table } from 'console';
import { catchError, throwError , tap } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse)=>{

      console.log(err)
      
      return throwError(()=>err);
    })
  );
};
