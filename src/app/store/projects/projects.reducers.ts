import { Action, createReducer, on } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { AddProject, GetProjectsListSuccess } from './projects.actions';

export interface ProjectsState {
  projects: IProject[];
}

export const projectsInitialState: ProjectsState = {
  projects: [],
};

export interface ProjectState {
  project: IProject;
}

export const projectInitialState: ProjectState = {
  project: null,
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

const projectReducer = createReducer(
  projectInitialState,
  on(
    AddProject,
    (state, { project }): ProjectState => ({
      ...state,
      project,
    }),
  ),
);

export function ProjectsReducer(state: ProjectsState, action: Action) {
  return projectsReducer(state, action);
}

export function ProjectReducer(state: ProjectState, action: Action) {
  return projectReducer(state, action);
}
