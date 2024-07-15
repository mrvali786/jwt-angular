import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { JwtUtilService } from './service/jwt.util.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(  private jwtService: JwtUtilService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=localStorage.getItem('jwt');
   // alert(token);
    if (token != undefined && !this.jwtService.isTokenExpired(token)) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer `+token
        },
      });
      return next.handle(authRequest).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err) {
            switch (err.status) {
              case 400:
                alert('Page not found', );
                break;
              case 401:
                alert( err.error,);
                break;
              case 500:
                alert( err.error, );
                break;
            }
          }
          throw err;
        })
      );
    } else {
      //this.authService.removeToken();
      const paths = ['/register'];
      if (paths.includes(this.router.url)) {
        this.router.navigate([this.router.url]);
      } else {
        this.router.navigate(['']);
      }
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err) {
            switch (err.status) {
              case 400:
                alert('Page not found', );
                break;
              case 401:
                alert( err.error,);
                break;
              case 500:
                alert( err.error, );
                break;
            }
          }
          throw err;
        })
      );
    }
  }
}
export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
