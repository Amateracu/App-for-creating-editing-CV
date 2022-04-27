import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState } from './employees.reducers';

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');

export const getEmployeesFromState = (state: EmployeesState) => state.employees;

export const selectEmployees = createSelector(selectEmployeesState, getEmployeesFromState);
