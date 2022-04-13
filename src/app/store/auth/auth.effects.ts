import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, exhaustMap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs';
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { Auth, AuthSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Auth),
      exhaustMap((action) =>
        this.AuthService.login(action.auth).pipe(
          map((authResponse) => AuthSuccess({ authResponse })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private AuthService: AuthService, private actions$: Actions) {}
}
