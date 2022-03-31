import { IRouting } from '../interfaces/routing.interface';

export const AUTH_ROUTE: IRouting = { path: `auth` };

export const CORE_ROUTE: IRouting = { path: '', breadcrumb: 'breadcrumbs.home' };

export const DASHBOARD_ROUTE: IRouting = { path: `dashboard`, breadcrumb: 'breadcrumbs.dashboard' };

export const EMPLOYEES_ROUTE: IRouting = { path: `employees`, breadcrumb: 'breadcrumbs.employees' };
export const EMPLOYEES_PARAM: string = 'employeeId';
export const EMPLOYEES_PROFILE_ROUTE: IRouting = {
  path: `:${EMPLOYEES_PARAM}`,
  breadcrumb: 'breadcrumbs.profile',
};

export const PROJECTS_ROUTE: IRouting = {
  path: `projects`,
  breadcrumb: 'breadcrumbs.projects',
  label: 'breadcrumbs.label',
  description: 'breadcrumbs.description-list',
};

export const PROJECT_PARAM: string = 'projectId';
export const PROJECTS_INFO_ROUTE: IRouting = {
  path: `:${PROJECT_PARAM}`,
  breadcrumb: 'breadcrumbs.info',
  label: 'breadcrumbs.label',
  description: 'breadcrumbs.description-info',
};
