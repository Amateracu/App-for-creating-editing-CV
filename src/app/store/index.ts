import { ActionReducerMap } from '@ngrx/store';
import { AuthEffects } from './auth/auth.effects';
import { AuthReducer, AuthState } from './auth/auth.reducers';
import { EmployeesEffect } from './employees/employees.effects';
import { EmployeesReducer, EmployeesState } from './employees/employees.reducers';
import { ProjectsEffects } from './projects/projects.effects';
import { ProjectsReducer, ProjectsState } from './projects/projects.reducers';

export interface CoreState {
  projects: ProjectsState;
  employees: EmployeesState;
  auth: AuthState;
}
export const reducers: ActionReducerMap<any> = {
  projects: ProjectsReducer,
  employees: EmployeesReducer,
  auth: AuthReducer,
};
export const effects: any[] = [ProjectsEffects, EmployeesEffect, AuthEffects];
