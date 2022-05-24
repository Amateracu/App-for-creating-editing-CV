import { IProject, IProjectRoles, ISpecialization } from './project.interface';

export interface IVirtualCv {
  id?: string;
  user: string;
  data: IData;
}
export interface IData {
  education: IEducation;
  foreignLanguage: IForeignLanguage[];
  general: IGeneral;
  projects: IProject[];
  resume: IResume;
  skills: ISkillsCv[];
}

export interface IEducation {
  establishment: string;
  profession: string;
}

export interface IForeignLanguage {
  name: string;
  everydayReadingLevel: string;
  everydayWritingLevel: string;
  everydaySpeakingLevel: string;
  professionalReadingLevel: string;
  professionalWritingLevel: string;
  professionalSpeakingLevel: string;
}

export interface IGeneral {
  firstName: string;
  lastName: string;
  name: string;
}

export interface IResume {
  content: string;
}

export interface ISkillsCv {
  skillType: string;
  skillsOfType: ISkillsOfType[];
}

export interface ISkillsOfType {
  skillName: string;
  experienceYears: string;
  level: string;
  lastUsedYear: string;
}
export interface IProjectCv {
  _id?: string;
  name: string;
  fromDate: string;
  toDate: string;
  projectRoles: IProjectRoles[];
  specializations: ISpecialization[];
  projectDescription: string;
}
