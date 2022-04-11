import { IConfig, IInfo } from 'src/app/shared/interfaces/info.interface';

export interface IInfoState {
  users: IInfo[];
  selectedUser: IInfo;
}
export const initialInfoState: IInfoState = {
  users: [],
  selectedUser: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    specialization: '',
  },
};

export interface IConfigState {
  config: IConfig;
}
export const initialConfigState: IConfigState = {
  config: {
    adminName: '',
    premissions: [],
  },
};
