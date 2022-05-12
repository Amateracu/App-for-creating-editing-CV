import { IEmployees } from './employees.interface';
import { IProject } from './project.interface';

export interface ICv {
  id: string;
  projects: IProject[];
  user: IEmployees;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
