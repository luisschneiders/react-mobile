export interface IState {
  isAuth: boolean;
  user: null;
}

interface ILogout {
  type: 'LOGOUT'
}

interface ILogin {
  type: 'LOGIN'
}

export type Actions = ILogout | ILogin;

export const initialState: IState = {
  isAuth: false,
  user: null
}

export function reducer (state: IState, action: any) {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, isAuth: false, user: null };
    case 'LOGIN':
      return { ...state, isAuth: true, user: state.user };
  }
  return state;
}
