import { Action, createReducer, on, State } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { GetProjectsListSuccess } from './projects.actions';

export interface ProjectsState {
  projects: IProject[];
}

export const projectsInitialState: ProjectsState = {
  projects: [],
};

const projectsReducer = createReducer(
  projectsInitialState,
  on(
    GetProjectsListSuccess,
    (state, { projects }): ProjectsState => ({
      ...state,
      projects,
    }),
  ),
);

export function ProjectsReducer(state: ProjectsState, action: Action) {
  return projectsReducer(state, action);
}
