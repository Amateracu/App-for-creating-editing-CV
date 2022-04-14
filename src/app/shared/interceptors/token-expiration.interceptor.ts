import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { AUTH_ROUTE } from '../constants/routing-path.const';
import { AuthService } from '../services/api/auth.service';

@Injectable()
export class TokenExpirationInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated() && this.auth.tokenIsExpired()) {
      this.auth.logout();
      this.router.navigate([AUTH_ROUTE.path]);
      return EMPTY;
    }
    return next.handle(req);
  }
}
