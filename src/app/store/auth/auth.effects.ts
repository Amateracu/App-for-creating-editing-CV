import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { Auth, AuthSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Auth),
      mergeMap((action) => {
        console.log('kek');
        return this.AuthService.login(action.auth).pipe(
          map((authResponse) => AuthSuccess({ authResponse })),
          catchError(() => EMPTY),
        );
      }),
    );
  });

  constructor(private AuthService: AuthService, private actions$: Actions) {}
}
