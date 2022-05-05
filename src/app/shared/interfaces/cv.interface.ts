import { IProject } from './project.interface';

export interface ICv {
  id: string;
  projects: IProject[];
  user: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
