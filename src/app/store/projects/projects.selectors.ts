import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.reducers';

export const selectProjectsState = createFeatureSelector<ProjectsState>('projects');

export const getProjectsFromState = (state: ProjectsState) => state.projects;

export const getProjectFromState = (state: ProjectsState) => state.project;

export const getSpecializationsFromState = (state: ProjectsState) => state.specializations;

export const getProjectRolesFromState = (state: ProjectsState) => state.projectRoles;

export const getResponsibilitiesFromState = (state: ProjectsState) => state.responsibilities;

export const selectProjects = createSelector(selectProjectsState, getProjectsFromState);
export const selectProject = createSelector(selectProjectsState, getProjectFromState);
export const selectSpecializations = createSelector(
  selectProjectsState,
  getSpecializationsFromState,
);
export const selectProjectRoles = createSelector(selectProjectsState, getProjectRolesFromState);
export const selectResponsibilities = createSelector(
  selectProjectsState,
  getResponsibilitiesFromState,
);
