import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAuth, IAuthResponse } from '../../interfaces/auth.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('cvGen-token');
  }

  tokenIsExpired(): boolean {
    const expDate = new Date(localStorage.getItem('cvGen-token-exp') as string);
    const currentDate = new Date();
    return currentDate > expDate;
  }

  public login(user: IAuth): Observable<IAuthResponse> {
    console.log('service');
    return this.http
      .post<IAuthResponse>('https://innowise-cv-generator.herokuapp.com/auth/login', user)
      .pipe(
        tap((data: IAuthResponse) => {
          this.setToken(data.accessToken, +data.expiresIn);
        }),
      );
  }

  public logout() {
    localStorage.removeItem('cvGen-token');
    localStorage.removeItem('cvGen-token-exp');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string, expiresIn: number) {
    if (token) {
      const expDate = new Date(new Date().getTime() + +expiresIn * 1000);
      localStorage.setItem('cvGen-token', token);
      localStorage.setItem('cvGen-token-exp', expDate.toString());
    } else {
      localStorage.clear;
    }
  }
}
