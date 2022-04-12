import { ActionReducerMap } from '@ngrx/store';
import { ProjectsEffects } from './projects/projects.effects';
import { ProjectsReducer, ProjectsState } from './projects/projects.reducers';

export interface CoreState {
  projects: ProjectsState;
}
export const reducers: ActionReducerMap<any> = {
  projects: ProjectsReducer,
};
export const effects: any[] = [ProjectsEffects];
