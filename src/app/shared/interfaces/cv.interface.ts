import { IEmployees } from './employees.interface';
import { IProject } from './project.interface';

export interface ICv {
  id: string;
  projects: IProject[];
  user: IEmployees;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IcvEdit {
  id: string;
  projects: string[];
  user: string;
  name: string;
  description: string;
}
export interface IaddCv {
  cvId?: string;
  userId?: string;
}
export interface IDeleteCv {
  deleteCount: number;
}
