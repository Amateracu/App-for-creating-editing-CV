import { Injectable } from '@angular/core';
import { EXP_TOKEN, TOKEN } from '../constants/token.const';

@Injectable({ providedIn: 'root' })
export class TokenService {
  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public tokenIsExpired(): boolean {
    const expDate = new Date(localStorage.getItem(EXP_TOKEN) as string);
    const currentDate = new Date();
    return currentDate > expDate;
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public setToken(token: string, expiresIn: number): void {
    if (token) {
      const expDate = new Date(new Date().getTime() + +expiresIn * 1);
      localStorage.setItem(TOKEN, token);
      localStorage.setItem(EXP_TOKEN, expDate.toString());
    } else {
      localStorage.clear;
    }
  }
}
