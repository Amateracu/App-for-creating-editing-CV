import { ActionReducerMap } from '@ngrx/store';
import { AuthEffects } from './auth/auth.effects';
import { AuthReducer, AuthState } from './auth/auth.reducers';
import { ProjectsEffects } from './projects/projects.effects';
import { ProjectsReducer, ProjectsState } from './projects/projects.reducers';

export interface CoreState {
  projects: ProjectsState;
  auth: AuthState;
}
export const reducers: ActionReducerMap<any> = {
  projects: ProjectsReducer,
  auth: AuthReducer,
};
export const effects: any[] = [ProjectsEffects, AuthEffects];
