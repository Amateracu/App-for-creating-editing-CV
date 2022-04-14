import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.reducers';

export const selectProjectsState = createFeatureSelector<ProjectsState>('projects');

export const getProjectsFromState = (state: ProjectsState) => state.projects;

export const selectProjects = createSelector(selectProjectsState, getProjectsFromState);
