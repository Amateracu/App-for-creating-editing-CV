import { DASHBOARD_ROUTE, EMPLOYEES_ROUTE, PROJECTS_ROUTE } from '../constants/routing-path.const';
import { INavItem } from './nav-item.interface';

export let IMenu: INavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: DASHBOARD_ROUTE.path,
  },
  {
    displayName: 'Employees',
    iconName: 'edit',
    route: EMPLOYEES_ROUTE.path,
    children: [
      {
        displayName: 'View Employee',
        iconName: 'list',
        route: 'contacts/view-contacts',
      },
    ],
  },
  {
    displayName: 'Projects',
    iconName: 'dns',
    route: PROJECTS_ROUTE.path,
    children: [
      {
        displayName: 'Project Info',
        iconName: 'add_task',
        route: 'activities/add-activity',
      },
    ],
  },
];
