import { Action, createReducer, on } from '@ngrx/store';
import { IaddCv, ICv } from 'src/app/shared/interfaces/cv.interface';
import {
  IEmployees,
  ILanguages,
  IRoles,
  ISkills,
} from 'src/app/shared/interfaces/employees.interface';
import { IVirtualCv } from 'src/app/shared/interfaces/virtual-cv.interface';
import {
  AddCvSuccess,
  AddEmployeeSuccess,
  DeleteVirtualCvSuccess,
  EditCvProjectSuccess,
  EditEmployeeSuccess,
  GetCvListSuccess,
  GetCvUserListSuccess,
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
  cvList: IVirtualCv[];
  cv: IVirtualCv;
  cvUser: ICv;
  addCv: IaddCv;
  deleteCv: IVirtualCv;
}
export const employeesInitialState: EmployeesState = {
  employees: [],
  employee: null,
  skills: [],
  languages: [],
  roles: [],
  cvList: [],
  cv: null,
  cvUser: null,
  addCv: null,
  deleteCv: null,
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
  on(EditCvProjectSuccess, (state, { cv }): EmployeesState => {
    let index = state.cvList.findIndex((cvItem) => cvItem.id === cv.id);
    let newCvList = [...state.cvList];
    newCvList.splice(index, 1, cv);
    return { ...state, cvList: newCvList };
  }),
  on(
    AddCvSuccess,
    (state, { addCv }): EmployeesState => ({
      ...state,
      cvList: [...state.cvList, addCv],
    }),
  ),
  on(
    GetCvUserListSuccess,
    (state, { cvUser }): EmployeesState => ({
      ...state,
      cvUser,
    }),
  ),
  on(
    DeleteVirtualCvSuccess,
    (state, { id }): EmployeesState => ({
      ...state,
      cvList: state.cvList.splice(
        state.cvList.findIndex((item) => item.id === id),
        1,
      ),
    }),
  ),
);

export function EmployeesReducer(state: EmployeesState, action: Action) {
  return employeesReducer(state, action);
}
