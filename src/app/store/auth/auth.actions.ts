import { createAction, props } from '@ngrx/store';
import { IAuth, IAuthResponse } from 'src/app/shared/interfaces/auth.interface';

export const Auth = createAction('[AUTH] GetAuth', props<{ auth: IAuth }>());

export const AuthSuccess = createAction(
  '[AUTH] GetAuth Success',
  props<{ authResponse: IAuthResponse }>(),
);

export const AuthError = createAction('[AUTH] GetAuth Error');
