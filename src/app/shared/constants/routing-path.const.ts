import { IRouting } from '../interfaces/routing.interface';

export const AUTH_ROUTE: IRouting = { path: `auth` };

export const CORE_ROUTE: IRouting = { path: '' };

export const DASHBOARD_ROUTE: IRouting = { path: `dashboard` };

export const EMPLOYEES_ROUTE: IRouting = { path: `employees` };
export const EMPLOYEES_PARAM: string = 'employeeId';
export const EMPLOYEES_PROFILE_ROUTE: IRouting = {
  path: `:${EMPLOYEES_PARAM}`,
};

export const PROJECTS_ROUTE: IRouting = {
  path: `projects`,
};
export const PROJECTS_CREATE_ROUTE: IRouting = {
  path: `create`,
};

export const PROJECT_PARAM: string = 'projectId';
export const PROJECTS_INFO_ROUTE: IRouting = {
  path: `:${PROJECT_PARAM}`,
};
