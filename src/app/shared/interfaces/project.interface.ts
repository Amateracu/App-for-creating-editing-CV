export interface IProject {
  id?: number;
  name: string;
  secondName: string;
  teamSize: number;
  responsibilities: IResponsibility[];
  specializations: ISpecialization[];
  specializationsNames: string[];
  responsibilitiesNames: string[];
}
export interface ISpecialization {
  name: string;
  id: string;
}
export interface IResponsibility {
  name: string;
  id: string;
}
