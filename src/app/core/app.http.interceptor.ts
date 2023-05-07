import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `jwt ${this.authService.getToken()}`
      },
      url: `${environment.api.rooturl}${request.url}`
    });
    console.log(authRequest.url)
    return next.handle(authRequest)
    .pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // console.log(' all looks good');
          // http response status code
          // console.log(event.status);
          return event;
        }
        return event;
      }, error => {
       // http response status code
        if (error instanceof HttpErrorResponse) {
          // use userService to handel user login and logout
          // const userService = this.injector.get(UserService);
          if (error.status > 400 && error.status < 500) {
            console.error('Error status code:', error);
            // userService.logout();
          }
        }
      })
    );
  }
}
