import { createAction, props } from '@ngrx/store';
import { IEmployees } from 'src/app/shared/interfaces/employees.interface';

export const GetEmployeesList = createAction('[EMPLOYEES] GetEmployeesList');
export const GetEmployeesListSuccess = createAction(
  '[EMPLOYEES] GetEmployeesList Success',
  props<{ employees: IEmployees[] }>(),
);
export const GetEmployeesListError = createAction('[EMPLOYEES] GetEmployeesList Error');
