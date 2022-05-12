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
  EditCvProjectSuccess,
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
  cv: ICv;
}
export const employeesInitialState: EmployeesState = {
  employees: [],
  employee: null,
  skills: [],
  languages: [],
  roles: [],
  cvList: [],
  cv: null,
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
  on(
    EditCvProjectSuccess,
    (state, { cv }): EmployeesState => ({
      ...state,
      cvList: [...state.cvList, cv],
    }),
  ),
);

export function EmployeesReducer(state: EmployeesState, action: Action) {
  return employeesReducer(state, action);
}
