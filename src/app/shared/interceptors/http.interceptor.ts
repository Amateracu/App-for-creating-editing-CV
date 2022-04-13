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
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(req));
  }

  addAuthToken(req: HttpRequest<any>) {
    const token = this.auth.getToken();

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
