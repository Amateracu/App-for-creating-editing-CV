import { createAction, props } from '@ngrx/store';
import { IAuth, IAuthResponse } from 'src/app/shared/interfaces/auth.interface';

export const Auth = createAction('[AUTH] Auth', props<{ auth: IAuth }>());

export const AuthSuccess = createAction(
  '[AUTH] Auth Success',
  props<{ authResponse: IAuthResponse }>(),
);

export const AuthError = createAction('[AUTH] Auth Error');
