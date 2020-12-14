import {User} from '../domain/User';

export interface IUserState {
  user: User | null;
  token: string | null;
  loading: boolean;
}

export const initialUserState: IUserState = {
  user: null,
  token: '',
  loading: false,
};
