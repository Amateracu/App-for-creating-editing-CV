import { createAction, props } from '@ngrx/store';
import {
  IEmployees,
  ILanguages,
  IRoles,
  ISkills,
} from 'src/app/shared/interfaces/employees.interface';

export const GetEmployeesList = createAction('[EMPLOYEES] GetEmployeesList');
export const GetEmployeesListSuccess = createAction(
  '[EMPLOYEES] GetEmployeesList Success',
  props<{ employees: IEmployees[] }>(),
);
export const GetEmployeesListError = createAction('[EMPLOYEES] GetEmployeesList Error');

export const AddEmployee = createAction(
  '[EMPLOYEE] AddEmployee',
  props<{ employee: IEmployees }>(),
);
export const AddEmployeeSuccess = createAction(
  '[EMPLOYEE] AddEmployee Success',
  props<{ employee: IEmployees }>(),
);
export const AddEmployeeError = createAction('[EMPLOYEE] AddEmployee Error');

export const GetSkillsList = createAction('[SKILLS] GetSkillsList');
export const GetSkillsListSuccess = createAction(
  '[SKILLS] GetSkillsList Success',
  props<{ skills: ISkills[] }>(),
);
export const GetSkillsListError = createAction('[SKILLS] GetSkillsList Error');

export const GetLanguagesList = createAction('[LANGUAGES] GetLanguagesList');
export const GetLanguagesListSuccess = createAction(
  '[LANGUAGES] GetLanguagesList Success',
  props<{ languages: ILanguages[] }>(),
);
export const GetLanguagesListError = createAction('[LANGUAGES] GetLanguagesList Error');

export const GetRolesList = createAction('[ROLES] GetRolesList');
export const GetRolesListSuccess = createAction(
  '[ROLES] GetRolesList Success',
  props<{ roles: IRoles[] }>(),
);
export const GetRolesListError = createAction('[ROLES] GetRolesList Error');
