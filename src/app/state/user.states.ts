import {User} from '../domain/User';

export interface IUserState {
  user: User | null;
  token: string;
  loading: boolean;
}

export const initialUserState: IUserState = {
  user: null,
  token: '',
  loading: false,
};
