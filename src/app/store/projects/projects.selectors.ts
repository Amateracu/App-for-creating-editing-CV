import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState, ProjectState } from './projects.reducers';

export const selectProjectsState = createFeatureSelector<ProjectsState>('projects');

export const getProjectsFromState = (state: ProjectsState) => state.projects;

export const selectProjects = createSelector(selectProjectsState, getProjectsFromState);

export const selectProjectState = createFeatureSelector<ProjectState>('project');

export const getProjectFromState = (state: ProjectState) => state.project;

export const selectProject = createSelector(selectProjectState, getProjectFromState);
