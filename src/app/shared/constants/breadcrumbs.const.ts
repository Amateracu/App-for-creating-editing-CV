import { IBreadCrumb } from '../interfaces/breadcrumbs.interface';
import {
  CORE_ROUTE,
  EMPLOYEES_ADD_ROUTE,
  EMPLOYEES_PROFILE_ROUTE,
  EMPLOYEES_ROUTE,
  PROJECTS_CREATE_ROUTE,
  PROJECTS_INFO_ROUTE,
  PROJECTS_ROUTE,
} from './routing-path.const';

export const HOME_BREADCRUMB: IBreadCrumb = {
  label: 'breadcrumbs-label.home',
  url: CORE_ROUTE.path,
};

export const PROJECT_BREADCRUMB: IBreadCrumb = {
  label: 'breadcrumbs-label.project',
  url: PROJECTS_ROUTE.path,
  title: 'breadcrumbs-title.project-title',
  description: 'breadcrumbs-description.project-description',
};
export const PROJECT_CREATE_BREADCRUMB: IBreadCrumb = {
  label: 'breadcrumbs-label.create',
  url: PROJECTS_CREATE_ROUTE.path,
  title: 'breadcrumbs-title.project-title',
  description: 'breadcrumbs-description.create-description',
};
export const PROJECT_INFO_BREADCRUMB: IBreadCrumb = {
  label: 'Info',
  url: PROJECTS_INFO_ROUTE.path,
  title: 'breadcrumbs-title.project-title',
  description: 'Project info',
};
export const EMPLOYEES_BREADCRUMB: IBreadCrumb = {
  label: 'breadcrumbs-label.employees',
  url: EMPLOYEES_ROUTE.path,
  title: 'breadcrumbs-title.employees-title',
  description: 'breadcrumbs-description.employees-description',
};
export const EMPLOYEES_ADD_BREADCRUMB: IBreadCrumb = {
  label: 'breadcrums-label.employee-add ',
  url: EMPLOYEES_ADD_ROUTE.path,
  title: 'breadcrumbs-title.employees-title',
  description: 'breadcrumbs-description.create-employee',
};
export const EMPLOYEES_PROFILE_BREADCRUMB: IBreadCrumb = {
  label: 'Info',
  url: EMPLOYEES_PROFILE_ROUTE.path,
  title: 'breadcrumbs-title.employees-title',
  description: 'Employee info',
};
