import { Action, createReducer, on, State } from '@ngrx/store';
import { IAuth, IAuthResponse } from 'src/app/shared/interfaces/auth.interface';
import { AuthSuccess } from './auth.actions';

export interface AuthState {
  authResponse: IAuthResponse;
}

export const authInitialState: AuthState = {
  authResponse: null,
};

const authReducer = createReducer(
  authInitialState,
  on(
    AuthSuccess,
    (state, { authResponse }): AuthState => ({
      ...state,
      authResponse,
    }),
  ),
);

export function AuthReducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
