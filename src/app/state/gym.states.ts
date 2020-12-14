import {Gym} from '../domain/Gym';

export interface IGymState {
  gyms: Gym[];
  loading: boolean;
}

export const initialGymState: IGymState = {
  gyms: null,
  loading: false,
};
