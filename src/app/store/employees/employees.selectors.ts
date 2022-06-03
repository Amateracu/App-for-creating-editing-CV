import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState } from './employees.reducers';

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');

export const getEmployeesFromState = (state: EmployeesState) => state.employees;
export const getEmployeeByIdFromState = (state: EmployeesState) => state.employee;
export const editEmployeeFromState = (state: EmployeesState) => state.employee;
export const getSkillsFromState = (state: EmployeesState) => state.skills;
export const getLanguagesFromState = (state: EmployeesState) => state.languages;
export const getRolesFromState = (state: EmployeesState) => state.roles;
export const getCvListFromState = (state: EmployeesState) => state.cvList;
export const addCvFromState = (state: EmployeesState) => state.cv;
export const getCvUserListFromState = (state: EmployeesState) => state.cvUser;

export const selectEmployees = createSelector(selectEmployeesState, getEmployeesFromState);
export const selectEmployeeById = createSelector(selectEmployeesState, getEmployeeByIdFromState);
export const selectEditEmployee = createSelector(selectEmployeesState, editEmployeeFromState);
export const selectSkills = createSelector(selectEmployeesState, getSkillsFromState);
export const selectLanguages = createSelector(selectEmployeesState, getLanguagesFromState);
export const selectRoles = createSelector(selectEmployeesState, getRolesFromState);
export const selectCvList = createSelector(selectEmployeesState, getCvListFromState);
export const selectCv = createSelector(selectEmployeesState, addCvFromState);
export const selectCvUserList = createSelector(selectEmployeesState, getCvUserListFromState);
