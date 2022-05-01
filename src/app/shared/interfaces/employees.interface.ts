export interface IEmployees {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  skills: ISkills[];
  skillsNames: string[];
  role: string;
  languages: ILanguages[];
}
export interface ISkills {
  id?: string;
  name: string;
  category: string;
  experience: number;
  lastUsed: number;
  level: string;
}
export interface ILanguages {
  id?: string;
  name: string;
  everydayReadingLevel?: string;
  everydayWritingLevel?: string;
  everydaySpeakingLevel?: string;
  professionalReadingLevel?: string;
  professionalWritingLevel?: string;
  professionalSpeakingLevel?: string;
}
export interface ISelect {
  id?: string;
  name: string;
}
export interface IRoles {
  id?: string;
  name: string;
}
export interface ICvTabs {
  label: string;
  content: string;
}
