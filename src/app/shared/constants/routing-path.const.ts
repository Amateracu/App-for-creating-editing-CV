import { IRouting } from '../interfaces/routing.interface';

export const AUTH_ROUTE: IRouting = { path: `auth` };

export const CORE_ROUTE: IRouting = { path: '', breadcrumb: 'breadcrumbs.home' };

export const DASHBOARD_ROUTE: IRouting = { path: `dashboard`, breadcrumb: 'breadcrumbs.dashboard' };

export const EMPLOYEES_ROUTE: IRouting = { path: `employees`, breadcrumb: 'breadcrumbs.employees' };

export const PROJECTS_ROUTE: IRouting = { path: `projects`, breadcrumb: 'breadcrumbs.projects' };

export const PROJECT_PARAM: string = 'projectId';
export const PROJECTS_INFO_ROUTE: IRouting = {
  path: `:${PROJECT_PARAM}`,
  breadcrumb: 'breadcrumbs.info',
};
