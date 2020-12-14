import {Gym} from '../domain/Gym';
import {Course} from '../domain/Course';

export interface IFavoriteState {
  gyms: Gym[];
  courses: Course[];
  loading: boolean;
}

export const initialFavoriteState: IFavoriteState = {
  gyms: [],
  courses: [],
  loading: false,
};
