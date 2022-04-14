import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getAuthFromState = (state: AuthState) => state.authResponse;

export const selectAuthData = createSelector(selectAuthState, getAuthFromState);
