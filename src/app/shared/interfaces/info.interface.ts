export interface IInfo {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
}
export interface IConfig {
  adminName: string;
  premissions?: string[];
}
