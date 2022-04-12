import { createAction, props } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/project.interface';

export const GetProjectsList = createAction('[PROJECTS] GetProjectsList');

export const GetProjectsListSuccess = createAction(
  '[PROJECTS] GetProjectsList Success',
  props<{ projects: IProject[] }>(),
);

export const GetProjectsListError = createAction('[PROJECTS] GetProjectsList Error');
