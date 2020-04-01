import { UserActions } from "./user.actions";
import { UserState } from "./user.state";

export function userReducer(state: UserState, action: UserActions): UserState {
  switch(action.type) {
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.darkMode };
    case 'SET_IS_LOGGEDIN':
      return { ...state, isLoggedin: action.loggedIn };
  }
}