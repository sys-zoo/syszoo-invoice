import { HTTP_INTERCEPTORS, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.endsWith("onboard")) {
      let token = localStorage.getItem('access_token');
       req = req.clone({
         setHeaders: { "Authorization": "bearer " + token},
         withCredentials: false
       });
     }
     return next.handle(req).pipe(catchError(x=> this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("loggedUsername");
      localStorage.setItem("menuRole","OFF");
      localStorage.setItem("appContainer","OFF");
       this.router.navigate(["/login"]).then(() => {
        window.location.reload();
      });
    }
    return throwError(err);
  }
}