import { createAction, props } from '@ngrx/store';
import {
  IProject,
  IProjectRoles,
  IResponsibility,
  ISpecialization,
} from 'src/app/shared/interfaces/project.interface';

export const GetProjectsList = createAction('[PROJECTS] GetProjectsList');
export const GetProjectsListSuccess = createAction(
  '[PROJECTS] GetProjectsList Success',
  props<{ projects: IProject[] }>(),
);
export const GetProjectsListError = createAction('[PROJECTS] GetProjectsList Error');

export const AddProject = createAction('[PROJECT] AddProject', props<{ project: IProject }>());
export const AddProjectSuccess = createAction(
  '[PROJECT] AddProject Success',
  props<{ project: IProject }>(),
);
export const AddProjectError = createAction('[PROJECT] AddProject Error');

export const GetProjectById = createAction('[PROJECT] GetProject', props<{ projectId: string }>());
export const GetProjectByIdSuccess = createAction(
  '[PROJECT] GetProject Success',
  props<{ project: IProject }>(),
);
export const GetProjectByIdError = createAction('[PROJECT] GetProject Error');

export const EditProject = createAction('[PROJECT] EditProject', props<{ project: IProject }>());
export const EditProjectSuccess = createAction(
  '[PROJECT] EditProject Success',
  props<{ project: IProject }>(),
);
export const EditProjectError = createAction('[PROJECT] EditProject Error');

export const GetSpecializationsList = createAction('[SPECIALIZATIONS] GetSpecializationsList');
export const GetSpecializationsListSuccess = createAction(
  '[SPECIALIZATIONS] GetSpecializationsList Success',
  props<{ specializations: ISpecialization[] }>(),
);
export const GetSpecializationsListError = createAction(
  '[SPECIALIZATIONS] GetSpecializationsList Error',
);

export const GetProjectRolesList = createAction('[ROLES] GetProjectRolesList');
export const GetProjectRolesListSuccess = createAction(
  '[ROLES] GetProjectRolesList Success',
  props<{ projectRoles: IProjectRoles[] }>(),
);
export const GetProjectRolesListError = createAction('[ROLES] GetResponsibilitiesList Error');

export const GetResponsibilitiesList = createAction('[RESPONSIBILITIES] GetResponsibilitiesList');
export const GetResponsibilitiesListSuccess = createAction(
  '[RESPONSIBILITIES] GetProjectRolesList Success',
  props<{ responsibilities: IResponsibility[] }>(),
);
export const GetResponsibilitiesListError = createAction(
  '[RESPONSIBILITIES] GetResponsibilitiesList Error',
);
