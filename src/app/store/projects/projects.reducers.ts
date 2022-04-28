import { Action, createReducer, on } from '@ngrx/store';
import {
  IProject,
  IProjectRoles,
  IResponsibility,
  ISpecialization,
} from 'src/app/shared/interfaces/project.interface';
import {
  AddProjectSuccess,
  EditProjectSuccess,
  GetProjectById,
  GetProjectByIdSuccess,
  GetProjectRolesListSuccess,
  GetProjectsListSuccess,
  GetResponsibilitiesListSuccess,
  GetSpecializationsListSuccess,
} from './projects.actions';

export interface ProjectsState {
  projects: IProject[];
  project: IProject;
  specializations: ISpecialization[];
  projectRoles: IProjectRoles[];
  responsibilities: IResponsibility[];
}

export const projectsInitialState: ProjectsState = {
  projects: [],
  project: null,
  specializations: [],
  projectRoles: [],
  responsibilities: [],
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
  on(
    AddProjectSuccess,
    (state, { project }): ProjectsState => ({
      ...state,
      projects: [...state.projects, project],
    }),
  ),
  on(
    GetProjectByIdSuccess,
    (state, { project }): ProjectsState => ({
      ...state,
      project,
    }),
  ),
  on(
    EditProjectSuccess,
    (state, { project }): ProjectsState => ({
      ...state,
      projects: [...state.projects, project],
    }),
  ),
  on(
    GetSpecializationsListSuccess,
    (state, { specializations }): ProjectsState => ({
      ...state,
      specializations,
    }),
  ),
  on(
    GetProjectRolesListSuccess,
    (state, { projectRoles }): ProjectsState => ({
      ...state,
      projectRoles,
    }),
  ),
  on(
    GetResponsibilitiesListSuccess,
    (state, { responsibilities }): ProjectsState => ({
      ...state,
      responsibilities,
    }),
  ),
);

export function ProjectsReducer(state: ProjectsState, action: Action) {
  return projectsReducer(state, action);
}
