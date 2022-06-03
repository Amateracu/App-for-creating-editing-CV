import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EXP_TOKEN, TOKEN } from '../../constants/token.const';
import { IAuth, IAuthResponse } from '../../interfaces/auth.interface';
import { TokenService } from '../token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public endPoints = {
    authHttp: 'auth/login',
  };
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  public login(user: IAuth): Observable<IAuthResponse> {
    const url = environment.apiUrl + this.endPoints.authHttp;
    return this.http.post<IAuthResponse>(url, user).pipe(
      tap((data: IAuthResponse) => {
        this.tokenService.setToken(data.accessToken, +data.expiresIn);
      }),
    );
  }

  public logout(): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(EXP_TOKEN);
  }
}
