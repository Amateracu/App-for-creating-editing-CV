export interface IProject {
  id?: number;
  name: string;
  secondName: string;
  startDate?: string;
  endDate?: string;
  description: string;
  teamSize: number;
  tasksPerformed: string;
  projectRoles: IProjectRoles[];
  responsibilities: IResponsibility[];
  specializations: ISpecialization[];
  specializationsNames?: string[];
  responsibilitiesNames?: string[];
}
export interface ISpecialization {
  name: string;
  id: string;
}
export interface IResponsibility {
  name: string;
  id: string;
}
export interface IProjectRoles {
  name: string;
  id: string;
}
