import { Action, createReducer, on } from '@ngrx/store';
import { IEmployees } from 'src/app/shared/interfaces/employees.interface';
import { GetEmployeesListSuccess } from './employees.actions';

export interface EmployeesState {
  employees: IEmployees[];
}
export const employeesInitialState: EmployeesState = {
  employees: [],
};

const employeesReducer = createReducer(
  employeesInitialState,
  on(
    GetEmployeesListSuccess,
    (state, { employees }): EmployeesState => ({
      ...state,
      employees,
    }),
  ),
);

export function EmployeesReducer(state: EmployeesState, action: Action) {
  return employeesReducer(state, action);
}
