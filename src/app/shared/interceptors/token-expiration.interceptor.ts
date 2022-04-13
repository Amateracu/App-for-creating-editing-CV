import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AUTH_ROUTE } from '../constants/routing-path.const';
import { AuthService } from '../services/api/auth.service';

@Injectable()
export class TokenExpirationInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.getToken() || '',
        },
      });
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.auth.logout();
          this.router.navigate([AUTH_ROUTE.path], {
            queryParams: {
              authFailed: true,
            },
          });
        }
        return throwError(error);
      }),
    );
  }
}
