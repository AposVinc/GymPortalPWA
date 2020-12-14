
export interface ICommonState {
  logged: boolean;
  loading: boolean;
}

export const initialCommonState: ICommonState = {
  logged: false,
  loading: false,
};
