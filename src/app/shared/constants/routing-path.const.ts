import { IRouting } from '../interfaces/routing.interface';

export const AUTH_ROUTE: IRouting = { path: `auth`, breadCrumb: 'Auth' };

export const DASHBOARD_ROUTE: IRouting = { path: `dashboard`, breadCrumb: 'Dashboard' };

export const EMPLOYEES_ROUTE: IRouting = { path: `employees`, breadCrumb: 'Employees' };

export const PROJECTS_ROUTE: IRouting = { path: `projects`, breadCrumb: 'Projects' };
export const PROJECTS_INFO_ROUTE: IRouting = { path: `info`, breadCrumb: 'Info' };
export const CORE_ROUTE: IRouting = { path: '', breadCrumb: 'Home' };
