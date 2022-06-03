import { IRouting } from '../interfaces/routing.interface';

export const AUTH_ROUTE: IRouting = { path: `auth`, fullPath: '/auth' };

export const CORE_ROUTE: IRouting = { path: '' };

export const DASHBOARD_ROUTE: IRouting = { path: `dashboard`, fullPath: '/auth' };

export const EMPLOYEES_ROUTE: IRouting = { path: `employees`, fullPath: '/employees' };

export const EMPLOYEES_ADD_ROUTE: IRouting = { path: `add-employee`, fullPath: '/add-employee' };

export const EMPLOYEES_PARAM: string = 'employeeId';

export const USER_PARAM: string = 'userName';

export const EMPLOYEES_PROFILE_CV_ROUTE: IRouting = {
  path: `:${USER_PARAM}`,
};

export const EMPLOYEES_PROFILE_ROUTE: IRouting = {
  path: `:${EMPLOYEES_PARAM}`,
};

export const PROJECTS_ROUTE: IRouting = {
  path: `projects`,
  fullPath: '/projects',
};

export const PROJECTS_CREATE_ROUTE: IRouting = {
  path: `create`,
  fullPath: '/create',
};

export const PROJECT_PARAM: string = 'projectId';

export const PROJECTS_INFO_ROUTE: IRouting = {
  path: `:${PROJECT_PARAM}`,
};
