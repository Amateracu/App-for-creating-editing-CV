import { Action, createReducer, on } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import {
  IEmployees,
  ILanguages,
  IRoles,
  ISkills,
} from 'src/app/shared/interfaces/employees.interface';
import {
  AddEmployeeSuccess,
  EditEmployeeSuccess,
  GetCvListSuccess,
  GetEmployeeByIdSuccess,
  GetEmployeesListSuccess,
  GetLanguagesListSuccess,
  GetRolesListSuccess,
  GetSkillsListSuccess,
} from './employees.actions';

export interface EmployeesState {
  employees: IEmployees[];
  employee: IEmployees;
  skills: ISkills[];
  languages: ILanguages[];
  roles: IRoles[];
  cvList: ICv[];
}
export const employeesInitialState: EmployeesState = {
  employees: [],
  employee: null,
  skills: [],
  languages: [],
  roles: [],
  cvList: [],
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
  on(
    AddEmployeeSuccess,
    (state, { employee }): EmployeesState => ({
      ...state,
      employees: [...state.employees, employee],
    }),
  ),
  on(
    GetEmployeeByIdSuccess,
    (state, { employee }): EmployeesState => ({
      ...state,
      employee,
    }),
  ),
  on(
    EditEmployeeSuccess,
    (state, { employee }): EmployeesState => ({
      ...state,
      employees: [...state.employees, employee],
    }),
  ),
  on(
    GetSkillsListSuccess,
    (state, { skills }): EmployeesState => ({
      ...state,
      skills,
    }),
  ),
  on(
    GetLanguagesListSuccess,
    (state, { languages }): EmployeesState => ({
      ...state,
      languages,
    }),
  ),
  on(
    GetRolesListSuccess,
    (state, { roles }): EmployeesState => ({
      ...state,
      roles,
    }),
  ),

  on(
    GetCvListSuccess,
    (state, { cvList }): EmployeesState => ({
      ...state,
      cvList,
    }),
  ),
);

export function EmployeesReducer(state: EmployeesState, action: Action) {
  return employeesReducer(state, action);
}
