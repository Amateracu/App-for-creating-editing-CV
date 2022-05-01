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

export const GetEmployeeById = createAction(
  '[EMPLOYEE] GetEmployee',
  props<{ employeeId: string }>(),
);
export const GetEmployeeByIdSuccess = createAction(
  '[EMPLOYEE] GetEmployee Success',
  props<{ employee: IEmployees }>(),
);
export const GetEmployeeByIdError = createAction('[EMPLOYEE] GetEmployee Error');

export const EditEmployee = createAction(
  '[EMPLOYEE] EditEmployee',
  props<{ employee: IEmployees }>(),
);
export const EditEmployeeSuccess = createAction(
  '[EMPLOYEE] EditEmployee Success',
  props<{ employee: IEmployees }>(),
);
export const EditEmployeeError = createAction('[EMPLOYEE] EditEmployee Error');

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
