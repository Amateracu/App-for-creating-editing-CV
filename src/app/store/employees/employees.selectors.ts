import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState } from './employees.reducers';

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');

export const getEmployeesFromState = (state: EmployeesState) => state.employees;
export const getEmployeeFromState = (state: EmployeesState) => state.employee;
export const getSkillsFromState = (state: EmployeesState) => state.skills;
export const getLanguagesFromState = (state: EmployeesState) => state.languages;
export const getRolesFromState = (state: EmployeesState) => state.roles;

export const selectEmployees = createSelector(selectEmployeesState, getEmployeesFromState);
export const selectEmployee = createSelector(selectEmployeesState, getEmployeeFromState);
export const selectSkills = createSelector(selectEmployeesState, getSkillsFromState);
export const selectLanguages = createSelector(selectEmployeesState, getLanguagesFromState);
export const selectRoles = createSelector(selectEmployeesState, getRolesFromState);
